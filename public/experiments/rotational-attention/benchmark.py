"""Train small attention networks. Requires only NumPy; python benchmark.py.
These are cyclic, noncausal synthetic tasks, not language-model benchmarks.
"""
import os
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
import argparse, json, time
from pathlib import Path
import numpy as np

MODELS = ["single_band", "multi_band", "gram_multi_band", "dot_product", "hybrid"]
TASKS = ["smooth_denoising", "mixed_denoising", "content_grouping"]

def softmax(s):
    e = np.exp(s - s.max(axis=-1, keepdims=True))
    return e / e.sum(axis=-1, keepdims=True)

def features(n):
    r = np.arange(n)
    pos = [np.ones(n)]
    for m in range(1, (n + 1)//2):
        pos += [np.sqrt(2)*np.cos(2*np.pi*m*r/n),
                np.sqrt(2)*np.sin(2*np.pi*m*r/n)]
    if n % 2 == 0:
        pos += [np.cos(np.pi*r)]
    pos = np.stack(pos, axis=-1)
    delta = (r[None, :] - r[:, None]) % n
    C = np.cos(2*np.pi*np.arange(1, n//2+1)[:, None, None]*delta/n)
    return pos, C

def batch(rng, size, n, task):
    labels = np.zeros((size,n))
    if task == "content_grouping":
        labels = np.argsort(rng.random((size,n)), axis=1) < n//2
        labels = 2*labels.astype(float)-1
        values = rng.normal(size=(size,n))
        target = np.zeros_like(values)
        for label in [-1, 1]:
            mask = labels == label
            mean = (values*mask).sum(1) / mask.sum(1)
            target = np.where(mask, mean[:,None], target)
    else:
        power = np.zeros(n)
        power[0] = 4
        if task == "smooth_denoising":
            power[[1,n-1]] = 8
            power[[2,n-2]] = 4
        else:
            power[[1,n-1]] = 4
            power[[6,n-6]] = 6
            power[n//2] = 8
        white = rng.normal(size=(size,n))
        clean = np.fft.ifft(np.fft.fft(white, norm="ortho")
                             *np.sqrt(power), norm="ortho").real
        values = clean + rng.normal(size=(size,n))
        target = clean
    return values, labels, target

class Attention:
    """A single stochastic attention head with identity values, trained by MSE.
    Only the attention-score rule varies between models. No residual or MLP.
    """
    def __init__(self, kind, n=16, seed=0, head_dim=8, local=False):
        self.kind, self.n, self.head_dim = kind, n, head_dim
        self.pos, all_C = features(n)
        self.C = all_C[:1] if kind == "single_band" else all_C
        self.p = {}
        rng = np.random.default_rng(seed)
        if kind in ["single_band", "gram_multi_band"]:
            self.p["raw_beta"] = np.full(len(self.C), np.log(np.expm1(.1)))
        elif kind in ["multi_band", "hybrid"]:
            self.p["beta"] = np.zeros(len(self.C))
        if kind in ["dot_product", "hybrid"]:
            width = n+2 if kind == "dot_product" else 3
            self.p["Wq"] = rng.normal(0,.08,(width,head_dim))
            self.p["Wk"] = rng.normal(0,.08,(width,head_dim))
        if local:
            # A second, near-identity restart avoids penalizing a bandwidth
            # model simply because gradient descent started in a broad basin.
            if "raw_beta" in self.p:
                self.p["raw_beta"][0] = 100.
            elif "beta" in self.p:
                self.p["beta"][0] = 100.
            if kind == "dot_product":
                amplitude = np.sqrt(100*np.sqrt(head_dim)/2)
                for row,col in [(3,0),(4,1)]:
                    self.p["Wq"][row,col] += amplitude
                    self.p["Wk"][row,col] += amplitude
        self.m = {k:np.zeros_like(v) for k,v in self.p.items()}
        self.v = {k:np.zeros_like(v) for k,v in self.p.items()}
        self.step = 0

    def forward(self, values, labels):
        B = len(values)
        S = np.zeros((B,self.n,self.n))
        if "raw_beta" in self.p:
            beta = np.logaddexp(0,self.p["raw_beta"])
            S += np.einsum("m,mij->ij",beta,self.C)
        elif "beta" in self.p:
            S += np.einsum("m,mij->ij",self.p["beta"],self.C)
        H=Q=K=None
        if "Wq" in self.p:
            if self.kind == "dot_product":
                H = np.concatenate([values[...,None],labels[...,None],
                                    np.broadcast_to(self.pos,(B,*self.pos.shape))],axis=-1)
            else:
                H = np.stack([values,labels,np.ones_like(values)],axis=-1)
            Q=H@self.p["Wq"]; K=H@self.p["Wk"]
            S += (Q @ K.transpose(0,2,1))/np.sqrt(self.head_dim)
        A = softmax(S)
        out = (A@values[...,None])[...,0]
        return out,(A,H,Q,K)

    def loss_grads(self,values,labels,target):
        out,(A,H,Q,K) = self.forward(values,labels)
        dO=2*(out-target)/out.size
        dA=dO[...,None]*values[:,None,:]
        dS=A*(dA-(A*dA).sum(axis=-1,keepdims=True))
        grads={}
        if "beta" in self.p or "raw_beta" in self.p:
            dB=np.einsum("bij,mij->m",dS,self.C)
            if "raw_beta" in self.p:
                grads["raw_beta"]=dB/(1+np.exp(-self.p["raw_beta"]))
            else:
                grads["beta"]=dB
        if "Wq" in self.p:
            dQ=dS@K/np.sqrt(self.head_dim)
            dK=dS.transpose(0,2,1)@Q/np.sqrt(self.head_dim)
            grads["Wq"]=np.einsum("bni,bnj->ij",H,dQ)
            grads["Wk"]=np.einsum("bni,bnj->ij",H,dK)
        return np.mean((out-target)**2),grads

    def update(self,grads,lr=.03):
        self.step+=1
        norm=np.sqrt(sum(np.sum(g*g) for g in grads.values()))
        scale=min(1.,1./(norm+1e-12))
        for k,g in grads.items():
            g=g*scale
            self.m[k]=.9*self.m[k]+.1*g
            self.v[k]=.999*self.v[k]+.001*g*g
            self.p[k]-=lr*(self.m[k]/(1-.9**self.step))/(np.sqrt(self.v[k]/(1-.999**self.step))+1e-8)

    def score(self,data):
        values,labels,target=data
        losses=[]
        for start in range(0,len(values),128):
            out,_=self.forward(values[start:start+128],labels[start:start+128])
            losses.append(np.sum((out-target[start:start+128])**2))
        return float(sum(losses)/target.size)

def check_gradients():
    """Finite differences test actual softmax and Q/K derivative paths."""
    rng=np.random.default_rng(100)
    data=batch(rng,3,16,"content_grouping")
    worst=0.
    for kind in MODELS:
        model=Attention(kind,seed=2)
        _,grads=model.loss_grads(*data)
        for key,arr in model.p.items():
            # Inspect boundary and interior entries of every trainable parameter.
            for index in sorted(set([0,arr.size//2,arr.size-1])):
                original=arr.flat[index]; eps=1e-5
                arr.flat[index]=original+eps; plus=model.score(data)
                arr.flat[index]=original-eps; minus=model.score(data)
                arr.flat[index]=original
                numerical=(plus-minus)/(2*eps)
                error=abs(numerical-grads[key].flat[index])
                worst=max(worst,error)
                assert error<1e-7,(kind,key,index,error)
        A=model.forward(data[0],data[1])[1][0]
        assert np.max(abs(A.sum(-1)-1))<1e-12
        assert np.min(A)>=0
    return worst

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--steps",type=int,default=800)
    parser.add_argument("--seeds",type=int,default=3)
    parser.add_argument("--output",default="results.json")
    args=parser.parse_args()
    n=16; grad_error=check_gradients()
    results={"config":{"n":n,"steps":args.steps,"seeds":args.seeds,"batch":32,
                       "learning_rate":.03,"head_dim":8,"test_examples":4096,
                       "validation_examples":512,"checkpoint_interval":100,
                       "restarts":["broad","near_identity"]},
             "max_gradient_absolute_error":grad_error,"runs":[]}
    started=time.perf_counter()
    for ti,task in enumerate(TASKS):
        val=batch(np.random.default_rng(10000+ti),512,n,task)
        test=batch(np.random.default_rng(20000+ti),4096,n,task)
        identity=float(np.mean((test[0]-test[2])**2))
        mean=float(np.mean((test[0].mean(1,keepdims=True)-test[2])**2))
        for kind in MODELS:
            for seed in range(args.seeds):
                candidates=[]
                for local in [False,True]:
                    model=Attention(kind,n,seed=seed,local=local)
                    rng=np.random.default_rng(1000+100*ti+seed)
                    best=model.score(val); checkpoint={k:v.copy() for k,v in model.p.items()}
                    best_step=0
                    for step in range(1,args.steps+1):
                        data=batch(rng,32,n,task)
                        _,grads=model.loss_grads(*data); model.update(grads)
                        if step%100==0 or step==args.steps:
                            score=model.score(val)
                            if score<best:
                                best=score; checkpoint={k:v.copy() for k,v in model.p.items()}
                                best_step=step
                    model.p=checkpoint
                    candidates.append((best,model,best_step,local))
                best,model,best_step,local=min(candidates,key=lambda x:x[0])
                run={"task":task,"model":kind,"seed":seed,
                     "parameters":sum(p.size for p in model.p.values()),
                     "test_mse":model.score(test),"best_validation_mse":best,
                     "best_step":best_step,"selected_restart":"near_identity" if local else "broad",
                     "identity_mse":identity,"mean_mse":mean}
                results["runs"].append(run)
                print(json.dumps(run),flush=True)
    results["elapsed_seconds"]=time.perf_counter()-started
    results["summary"]=[]
    for task in TASKS:
        for kind in MODELS:
            rows=[r for r in results["runs"] if r["task"]==task and r["model"]==kind]
            scores=[r["test_mse"] for r in rows]
            results["summary"].append({"task":task,"model":kind,"parameters":rows[0]["parameters"],
                     "mean_test_mse":float(np.mean(scores)),
                     "std_test_mse":float(np.std(scores,ddof=1)) if len(scores)>1 else 0.})
    Path(args.output).write_text(json.dumps(results,indent=2))
    print("SUMMARY",json.dumps(results["summary"]),flush=True)
    print("elapsed_seconds",results["elapsed_seconds"],"gradient_error",grad_error,flush=True)

if __name__=="__main__": main()

