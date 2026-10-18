"""Length generalization: can harmonic attention trained at n=16 run frozen at n=128?

Central design decision: the learned frequency vector is a set of M harmonic
coefficients applied to FIXED absolute frequencies m = 1..M (a Fourier basis in
relative-position angle). The band matrix at size n is cos(2*pi*m*delta/n) for
each m in 1..M, so the same M learned coefficients apply to any n >= 2*M
without resizing the parameter vector. Training happens at n_train=16 with
M=8; evaluation at n in {16, 32, 64, 128} reuses the frozen coefficients.

Models compared:
  harmonic_frozen     harmonic positional prior + content pathway, frozen after
                      training at n=16, evaluated at larger n.
  rpb_frozen          learned relative-position bias table, frozen; evaluated at
                      larger n by linearly interpolating the 16-entry table.
  content_only        content pathway only, same at any n (frozen after n=16).
  rpb_retrain         retrained from scratch at each target n (reference upper bound).
  harmonic_retrain    retrained from scratch at each target n (reference upper bound).

Also reports training-set size sweep (sample efficiency at n_train=16) and
noise-scale sweep. Fixed seed root, 10 seeds per cell.

Requires only NumPy.  python length_generalization.py
"""
import os
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
import argparse, json, time
from pathlib import Path
import numpy as np

SEED_ROOT = 20261018
M_BANDS = 8  # learned harmonic coefficients, fixed; m = 1..8


def softmax(s):
    e = np.exp(s - s.max(axis=-1, keepdims=True))
    return e / e.sum(axis=-1, keepdims=True)


def band_matrix(m, n):
    r = np.arange(n)
    delta = (r[None, :] - r[:, None]) % n
    return np.cos(2 * np.pi * m * delta / n)


def band_matrices(n, m_max=M_BANDS):
    return np.stack([band_matrix(m, n) for m in range(1, m_max + 1)], axis=0)


def content_batch(rng, size, n, noise_scale=1.0):
    """Mixed-frequency denoising targets at length n."""
    power = np.zeros(n)
    power[0] = 4
    power[1 % n] = 4
    power[(n - 1) % n] = 4
    power[(6) % n] = 6
    power[(n - 6) % n] = 6
    power[n // 2] = 8
    white = rng.normal(size=(size, n))
    clean = np.fft.ifft(np.fft.fft(white, norm="ortho") * np.sqrt(power), norm="ortho").real
    values = clean + noise_scale * rng.normal(size=(size, n))
    labels = np.ones((size, n))
    return values, labels, clean


class Attention:
    """Single stochastic attention head, identity values, MSE loss."""

    def __init__(self, kind, n=16, seed=0, head_dim=8, frozen_beta=None, frozen_rpb=None):
        self.kind, self.n, self.head_dim = kind, n, head_dim
        self.C = band_matrices(n)  # fixed shape M_BANDS x n x n, no per-n resize
        self.p = {}
        rng = np.random.default_rng(seed)
        needs_position = kind in ["harmonic_frozen", "harmonic_retrain", "rpb_frozen", "rpb_retrain"]
        needs_content = kind != "positional_only"
        if needs_position and kind.startswith("harmonic"):
            self.p["beta"] = (frozen_beta.copy() if frozen_beta is not None
                              else np.zeros(M_BANDS))
        if kind in ["rpb_frozen", "rpb_retrain"]:
            self.p["rpb"] = (frozen_rpb.copy() if frozen_rpb is not None
                             else np.zeros(n))
        if needs_content:
            self.p["Wq"] = (rng.normal(0, .08, (3, head_dim)) if frozen_beta is None
                            else None)
            self.p["Wk"] = (rng.normal(0, .08, (3, head_dim)) if frozen_beta is None
                            else None)
            if frozen_beta is not None:
                # Frozen content parameters passed in via caller — only used for the frozen-eval path.
                self.p.pop("Wq"); self.p.pop("Wk")
        self.m = {k: np.zeros_like(v) for k, v in self.p.items()}
        self.v = {k: np.zeros_like(v) for k, v in self.p.items()}
        self.step = 0

    def parameter_count(self):
        return sum(p.size for p in self.p.values())

    def forward(self, values, labels):
        B = len(values)
        S = np.zeros((B, self.n, self.n))
        if "beta" in self.p:
            S += np.einsum("m,mij->ij", self.p["beta"], self.C)
        if "rpb" in self.p:
            if self.p["rpb"].shape[0] == self.n:
                delta = (np.arange(self.n)[None, :] - np.arange(self.n)[:, None]) % self.n
                S += self.p["rpb"][delta]
            else:
                # Interpolate a frozen rpb table of a different size via periodic linear interpolation.
                src_n = self.p["rpb"].shape[0]
                src_idx = np.arange(self.n) * (src_n / self.n)
                lo = np.floor(src_idx).astype(int) % src_n
                hi = (lo + 1) % src_n
                frac = src_idx - np.floor(src_idx)
                S += self.p["rpb"][lo][None, None] * (1 - frac)[None, :, None] + \
                     self.p["rpb"][hi][None, None] * frac[None, :, None]
        Q = K = H = None
        if "Wq" in self.p:
            H = np.stack([values, labels, np.ones_like(values)], axis=-1)
            Q = H @ self.p["Wq"]; K = H @ self.p["Wk"]
            S += (Q @ K.transpose(0, 2, 1)) / np.sqrt(self.head_dim)
        A = softmax(S)
        out = (A @ values[..., None])[..., 0]
        return out, (A, H, Q, K)

    def loss_grads(self, values, labels, target):
        out, (A, H, Q, K) = self.forward(values, labels)
        dO = 2 * (out - target) / out.size
        dA = dO[..., None] * values[:, None, :]
        dS = A * (dA - (A * dA).sum(axis=-1, keepdims=True))
        grads = {}
        if "beta" in self.p:
            grads["beta"] = np.einsum("bij,mij->m", dS, self.C)
        if "rpb" in self.p and self.p["rpb"].shape[0] == self.n:
            cols = [(np.arange(self.n) + d) % self.n for d in range(self.n)]
            grads["rpb"] = np.array([dS[:, np.arange(self.n), cols[d]].sum() for d in range(self.n)])
        if "Wq" in self.p:
            dQ = dS @ K / np.sqrt(self.head_dim)
            dK = dS.transpose(0, 2, 1) @ Q / np.sqrt(self.head_dim)
            grads["Wq"] = np.einsum("bni,bnj->ij", H, dQ)
            grads["Wk"] = np.einsum("bni,bnj->ij", H, dK)
        return np.mean((out - target) ** 2), grads

    def update(self, grads, lr=.03):
        self.step += 1
        norm = np.sqrt(sum(np.sum(g * g) for g in grads.values()))
        scale = min(1., 1. / (norm + 1e-12))
        for k, g in grads.items():
            g = g * scale
            self.m[k] = .9 * self.m[k] + .1 * g
            self.v[k] = .999 * self.v[k] + .001 * g * g
            self.p[k] -= lr * (self.m[k] / (1 - .9 ** self.step)) / (np.sqrt(self.v[k] / (1 - .999 ** self.step)) + 1e-8)

    def score(self, data):
        values, labels, target = data
        losses = []
        for start in range(0, len(values), 128):
            out, _ = self.forward(values[start:start + 128], labels[start:start + 128])
            losses.append(np.sum((out - target[start:start + 128]) ** 2))
        return float(sum(losses) / target.size)


def check_gradients():
    rng = np.random.default_rng(100)
    data = content_batch(rng, 3, 16)
    worst = 0.
    for kind in ["harmonic_frozen", "rpb_frozen", "harmonic_retrain", "rpb_retrain"]:
        model = Attention(kind.replace("_frozen", "_retrain"), n=16, seed=2)
        _, grads = model.loss_grads(*data)
        for key, arr in model.p.items():
            for index in sorted(set([0, arr.size // 2, arr.size - 1])):
                original = arr.flat[index]; eps = 1e-5
                arr.flat[index] = original + eps; plus = model.score(data)
                arr.flat[index] = original - eps; minus = model.score(data)
                arr.flat[index] = original
                numerical = (plus - minus) / (2 * eps)
                error = abs(numerical - grads[key].flat[index])
                worst = max(worst, error)
                assert error < 1e-7, (kind, key, index, error)
        A = model.forward(data[0], data[1])[1][0]
        assert np.max(abs(A.sum(-1) - 1)) < 1e-12
        assert np.min(A) >= 0
    return worst


def train(kind, seed, n_train, steps, noise_scale=1.0):
    """Train at n_train; return the trained model and best checkpoint."""
    val = content_batch(np.random.default_rng(SEED_ROOT + 1), 512, n_train, noise_scale)
    model = Attention(kind.replace("_frozen", "_retrain"), n=n_train, seed=seed)
    rng = np.random.default_rng(SEED_ROOT + 100 + seed)
    best = model.score(val); checkpoint = {k: v.copy() for k, v in model.p.items()}
    for step in range(1, steps + 1):
        data = content_batch(rng, 32, n_train, noise_scale)
        _, grads = model.loss_grads(*data)
        model.update(grads)
        if step % 100 == 0 or step == steps:
            s = model.score(val)
            if s < best:
                best = s; checkpoint = {k: v.copy() for k, v in model.p.items()}
    model.p = checkpoint
    return model


def evaluate_frozen(kind, model, n_eval, noise_scale=1.0):
    """Re-instantiate the same learned parameters at a different length."""
    eval_model = Attention(kind, n=n_eval, seed=0,
                           frozen_beta=model.p.get("beta"),
                           frozen_rpb=model.p.get("rpb"))
    eval_model.p.update({k: v.copy() for k, v in model.p.items() if k in eval_model.p})
    test = content_batch(np.random.default_rng(SEED_ROOT + 2), 4096, n_eval, noise_scale)
    return eval_model.score(test)


def evaluate_retrain(kind, seed, n_eval, steps, noise_scale=1.0):
    """Reference: retrain at the target length and evaluate there."""
    model = train(kind.replace("_frozen", "_retrain"), seed, n_eval, steps, noise_scale)
    test = content_batch(np.random.default_rng(SEED_ROOT + 2), 4096, n_eval, noise_scale)
    return model.score(test)


def paired_bootstrap_ci(x, y, num_resamples=5000, alpha=0.05, rng=None):
    rng = rng or np.random.default_rng(SEED_ROOT + 999)
    diff = np.asarray(x) - np.asarray(y)
    n = len(diff)
    boot = np.array([diff[rng.integers(0, n, n)].mean() for _ in range(num_resamples)])
    lo, hi = np.quantile(boot, [alpha / 2, 1 - alpha / 2])
    return {"mean_diff": float(diff.mean()), "ci_low": float(lo), "ci_high": float(hi)}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--steps", type=int, default=800)
    parser.add_argument("--seeds", type=int, default=10)
    parser.add_argument("--output", default="results.json")
    args = parser.parse_args()

    grad_error = check_gradients()
    results = {"config": {"steps": args.steps, "seeds": args.seeds, "seed_root": SEED_ROOT,
                          "batch": 32, "learning_rate": .03, "head_dim": 8, "m_bands": M_BANDS,
                          "test_examples": 4096, "validation_examples": 512,
                          "checkpoint_interval": 100, "bootstrap_resamples": 5000,
                          "n_train": 16, "n_evaluations": [16, 32, 64, 128],
                          "description": "Frozen-length harmonic attention: train at n=16, evaluate at 32/64/128 without retraining."},
               "max_gradient_absolute_error": grad_error,
               "frozen_results": [], "retrain_results": [],
               "paired_comparisons": [], "sample_efficiency": [],
               "noise_sweep": [], "started_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ")}
    started = time.perf_counter()

    # Train once per (kind, seed); frozen evaluation across n.
    trained = {}
    for kind in ["harmonic_frozen", "rpb_frozen"]:
        per_seed = {}
        for seed in range(args.seeds):
            model = train(kind, seed, 16, args.steps)
            per_seed[seed] = model
        trained[kind] = per_seed

    for n_eval in [16, 32, 64, 128]:
        for kind in ["harmonic_frozen", "rpb_frozen"]:
            mses = []
            for seed in range(args.seeds):
                s = evaluate_frozen(kind, trained[kind][seed], n_eval)
                mses.append(s)
                results["frozen_results"].append({"model": kind, "seed": seed,
                                                  "n_eval": n_eval, "test_mse": s})
                print(f"FROZEN {kind} n={n_eval} seed={seed} mse={s:.6g}", flush=True)

        # Retrained references at this length.
        for kind in ["harmonic_retrain", "rpb_retrain"]:
            mses = []
            for seed in range(args.seeds):
                s = evaluate_retrain(kind, seed, n_eval, args.steps)
                mses.append(s)
                results["retrain_results"].append({"model": kind, "seed": seed,
                                                   "n_eval": n_eval, "test_mse": s})
                print(f"RETRAIN {kind} n={n_eval} seed={seed} mse={s:.6g}", flush=True)

        # Paired comparisons at this length.
        for frozen_kind, retrain_kind in [("harmonic_frozen", "harmonic_retrain"),
                                          ("rpb_frozen", "rpb_retrain")]:
            frozen_mses = [r["test_mse"] for r in results["frozen_results"]
                           if r["model"] == frozen_kind and r["n_eval"] == n_eval]
            retrain_mses = [r["test_mse"] for r in results["retrain_results"]
                            if r["model"] == retrain_kind and r["n_eval"] == n_eval]
            results["paired_comparisons"].append({"frozen": frozen_kind, "retrain": retrain_kind,
                                                  "n_eval": n_eval,
                                                  "bootstrap_ci": paired_bootstrap_ci(frozen_mses, retrain_mses)})
        # Also harmonic-frozen vs rpb-frozen at this length.
        harmonic_frozen = [r["test_mse"] for r in results["frozen_results"]
                           if r["model"] == "harmonic_frozen" and r["n_eval"] == n_eval]
        rpb_frozen = [r["test_mse"] for r in results["frozen_results"]
                      if r["model"] == "rpb_frozen" and r["n_eval"] == n_eval]
        results["paired_comparisons"].append({"frozen": "harmonic_frozen", "retrain": "rpb_frozen",
                                              "n_eval": n_eval,
                                              "bootstrap_ci": paired_bootstrap_ci(harmonic_frozen, rpb_frozen)})

    # Sample efficiency: harmonic_frozen trained with fewer steps.
    for frac in [0.125, 0.25, 0.5, 1.0]:
        for kind in ["harmonic_frozen", "rpb_frozen"]:
            for seed in range(args.seeds):
                model = train(kind, seed, 16, max(50, int(args.steps * frac)))
                s = evaluate_frozen(kind, model, 128)
                results["sample_efficiency"].append({"model": kind, "seed": seed,
                                                     "data_fraction": frac,
                                                     "test_mse_at_128": s})
                print(f"SAMPLE_EFF {kind} frac={frac} seed={seed} mse={s:.6g}", flush=True)

    # Noise sweep at n=128.
    for noise_scale in [0.4, 1.0, 2.5]:
        for kind in ["harmonic_frozen", "rpb_frozen"]:
            mses = []
            for seed in range(args.seeds):
                s = evaluate_frozen(kind, trained[kind][seed], 128, noise_scale=noise_scale)
                mses.append(s)
                results["noise_sweep"].append({"model": kind, "seed": seed,
                                               "noise_scale": noise_scale,
                                               "test_mse": s})
            print(f"NOISE {kind} scale={noise_scale} mean={np.mean(mses):.6g}", flush=True)

    results["elapsed_seconds"] = time.perf_counter() - started
    results["finished_utc"] = time.strftime("%Y-%m-%dT%H:%M:%SZ")
    Path(args.output).write_text(json.dumps(results, indent=2))
    print("SUMMARY saved to", args.output, "gradient_error", grad_error, flush=True)


if __name__ == "__main__":
    main()
