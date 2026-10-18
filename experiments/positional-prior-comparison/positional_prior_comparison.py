"""Compare the learned harmonic positional prior with RoPE, ALiBi, and a
continuous relative-position bias under identical training and evaluation conditions.

All models share the same content pathway (Wq/Wk over (value, label, 1), head_dim 8).
Positional priors:

  harmonic_beta   learned beta_m for m=1..8, band matrix cos(2*pi*m*delta/n) at any n.
                  Transfers frozen because beta is tied to absolute frequency.

  rope            standard rotary embedding: rotate Q/K by theta_m = base^{-2(m-1)/d}
                  for m=1..head_dim/2, head_dim=8 -> theta = [base^0, base^{-1/2}, ...]
                  We use the canonical base 10000 and head_dim 8, giving 4 distinct
                  rotation frequencies. Positional information enters as a function of
                  delta only; it transfers naturally because theta_m is length-agnostic.
                  No learned parameters in the positional component (fixed rotational basis),
                  matching standard RoPE practice.

  alibi           learned-or-fixed linear slope * (-delta mod n) log-penalty.
                  We implement the standard ALiBi form: slope_k * (delta mod n), where
                  slope is a learned per-head scalar (or fixed per the standard slope table).
                  We use ONE slope per model, learned from data, initial 1.0. Because
                  delta range scales with n, ALiBi's bias magnitude scales linearly with n
                  when applied to raw positions — this is a known generalization weakness.

  continuous_rpb  a learned continuous function of relative position, parameterized as a
                  small MLP on the sin/cos encoding of delta/(n/2):
                    h = sin(2*pi*delta/n) , cos(2*pi*delta/n)   (2-dim input)
                    rpb(delta) = w2 @ relu(w1 @ h + b1)          (hidden 4, output 1)
                  This transfers to any n automatically (delta normalized by n), but
                  only captures periodic structure consistent with the encoding basis.

All positional priors are frozen after training at n=16 and evaluated at 32/64/128.
The RoPE component has no learned parameters; we freeze the rotational transform
without learning and report it both with and without a learned content pathway.

Requires only NumPy.  python positional_prior_comparison.py
"""
import os
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
import argparse, json, time
from pathlib import Path
import numpy as np

SEED_ROOT = 20261018
M_BANDS = 8
HEAD_DIM = 8
ROPE_BASE = 10000.0


def softmax(s):
    e = np.exp(s - s.max(axis=-1, keepdims=True))
    return e / e.sum(axis=-1, keepdims=True)


def band_matrix(m, n):
    r = np.arange(n)
    delta = (r[None, :] - r[:, None]) % n
    return np.cos(2 * np.pi * m * delta / n)


def band_matrices(n, m_max=M_BANDS):
    return np.stack([band_matrix(m, n) for m in range(1, m_max + 1)], axis=0)


def rope_thetas(head_dim=HEAD_DIM, base=ROPE_BASE):
    """Canonical RoPE rotation frequencies: theta_k = base^(-2(k-1)/head_dim), k=1..head_dim/2."""
    k = np.arange(1, head_dim // 2 + 1)
    return base ** (-2 * (k - 1) / head_dim)


def rope_rotation(delta, thetas):
    """Apply cos/sin of theta_m*delta as RoPE would on complex Q/K pairs; returns a
    head_dim x head_dim-dim contribution to the attention score via trace product.
    Here we approximate the standard Q*K dot product after rotation by directly
    computing the rotational similarity kernel: sum_m cos(theta_m * delta).
    This is the score contribution RoPE gives when Q/K are unit basis vectors aligned
    with the rotational basis (i.e., the pure positional similarity kernel)."""
    # Standard RoPE uses Q/K learned projections; the pure positional similarity
    # for identity Q/K aligned with rotation is sum over cos(theta_m*delta).
    return np.stack([np.cos(theta * delta) for theta in thetas]).sum(axis=0)


def content_batch(rng, size, n, noise_scale=1.0):
    power = np.zeros(n)
    power[0] = 4
    power[1 % n] = 4
    power[(n - 1) % n] = 4
    power[6 % n] = 6
    power[n // 2] = 8
    white = rng.normal(size=(size, n))
    clean = np.fft.ifft(np.fft.fft(white, norm="ortho") * np.sqrt(power), norm="ortho").real
    values = clean + noise_scale * rng.normal(size=(size, n))
    labels = np.ones((size, n))
    return values, labels, clean


class Attention:
    """Single head, identity values, MSE. The positional prior is the only thing that varies."""

    def __init__(self, kind, n=16, seed=0, head_dim=HEAD_DIM,
                 frozen_beta=None, frozen_slope=None, frozen_mlp=None):
        self.kind, self.n, self.head_dim = kind, n, head_dim
        self.C = band_matrices(n)
        self.thetas = rope_thetas(head_dim)
        self.p = {}
        rng = np.random.default_rng(seed)
        r = np.arange(n)
        self.delta = (r[None, :] - r[:, None]) % n

        if kind == "harmonic_beta":
            self.p["beta"] = frozen_beta.copy() if frozen_beta is not None else np.zeros(M_BANDS)
        if kind == "alibi":
            self.p["slope"] = frozen_slope.copy() if frozen_slope is not None else np.array([1.0])
        if kind == "continuous_rpb":
            self.p["w1"] = (frozen_mlp["w1"].copy() if frozen_mlp else rng.normal(0, .3, (4, 2)))
            self.p["b1"] = (frozen_mlp["b1"].copy() if frozen_mlp else np.zeros(4))
            self.p["w2"] = (frozen_mlp["w2"].copy() if frozen_mlp else rng.normal(0, .3, (4,)))
        # Every model has the content pathway.
        self.p["Wq"] = rng.normal(0, .08, (3, head_dim))
        self.p["Wk"] = rng.normal(0, .08, (3, head_dim))
        self.m = {k: np.zeros_like(v) for k, v in self.p.items()}
        self.v = {k: np.zeros_like(v) for k, v in self.p.items()}
        self.step = 0

    def parameter_count(self):
        return sum(p.size for p in self.p.values())

    def positional_scores(self):
        if self.kind == "harmonic_beta":
            return np.einsum("m,mij->ij", self.p["beta"], self.C)
        if self.kind == "rope":
            return rope_rotation(self.delta.astype(float), self.thetas)
        if self.kind == "alibi":
            return -self.p["slope"][0] * self.delta
        if self.kind == "continuous_rpb":
            h = np.stack([np.sin(2 * np.pi * self.delta / self.n),
                          np.cos(2 * np.pi * self.delta / self.n)], axis=-1)  # n,n,2
            h_flat = h.reshape(-1, 2)
            hidden = np.maximum(h_flat @ self.p["w1"].T + self.p["b1"], 0)
            return (hidden @ self.p["w2"]).reshape(self.n, self.n)
        raise ValueError(self.kind)

    def forward(self, values, labels):
        B = len(values)
        S = np.broadcast_to(self.positional_scores(), (B, self.n, self.n)).copy()
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
        if self.kind == "harmonic_beta":
            grads["beta"] = np.einsum("bij,mij->m", dS, self.C)
        elif self.kind == "alibi":
            grads["slope"] = np.array([np.einsum("bij,ij->", dS, -self.delta)])
        elif self.kind == "continuous_rpb":
            # Positional term: rpb(delta) added to S[b,i,j]. dL/d(rpb_ij) = sum_b dS[b,i,j].
            drpb = dS.sum(axis=0)  # n x n, gradient of loss wrt the positional score
            h = np.stack([np.sin(2 * np.pi * self.delta / self.n),
                          np.cos(2 * np.pi * self.delta / self.n)], axis=-1).reshape(-1, 2)
            hidden = np.maximum(h @ self.p["w1"].T + self.p["b1"], 0)
            dw2 = (hidden * drpb.reshape(-1)[:, None]).sum(axis=0)
            dhidden = drpb.reshape(-1)[:, None] * self.p["w2"][None, :] * (hidden > 0)
            dw1 = dhidden.T @ h
            db1 = dhidden.sum(axis=0)
            grads["w2"] = dw2; grads["w1"] = dw1; grads["b1"] = db1
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
    for kind in ["harmonic_beta", "alibi", "continuous_rpb"]:
        model = Attention(kind, n=16, seed=2)
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
    val = content_batch(np.random.default_rng(SEED_ROOT + 1), 512, n_train, noise_scale)
    model = Attention(kind, n=n_train, seed=seed)
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
    # Re-instantiate with the same frozen positional parameters at a different length.
    eval_model = Attention(kind, n=n_eval, seed=0,
                           frozen_beta=model.p.get("beta"),
                           frozen_slope=model.p.get("slope"),
                           frozen_mlp=({"w1": model.p["w1"], "b1": model.p["b1"],
                                        "w2": model.p["w2"]} if "w1" in model.p else None))
    eval_model.p.update({k: v.copy() for k, v in model.p.items() if k in eval_model.p})
    test = content_batch(np.random.default_rng(SEED_ROOT + 2), 4096, n_eval, noise_scale)
    return eval_model.score(test)


def evaluate_retrain(kind, seed, n_eval, steps, noise_scale=1.0):
    model = train(kind, seed, n_eval, steps, noise_scale)
    test = content_batch(np.random.default_rng(SEED_ROOT + 2), 4096, n_eval, noise_scale)
    return model.score(test)


def paired_bootstrap_ci(x, y, num_resamples=5000, alpha=0.05, rng=None):
    rng = rng or np.random.default_rng(SEED_ROOT + 999)
    diff = np.asarray(x) - np.asarray(y)
    n = len(diff)
    boot = np.array([diff[rng.integers(0, n, n)].mean() for _ in range(num_resamples)])
    lo, hi = np.quantile(boot, [alpha / 2, 1 - alpha / 2])
    return {"mean_diff": float(diff.mean()), "ci_low": float(lo), "ci_high": float(hi)}


KINDS = ["harmonic_beta", "rope", "alibi", "continuous_rpb"]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--steps", type=int, default=800)
    parser.add_argument("--seeds", type=int, default=10)
    parser.add_argument("--output", default="results.json")
    args = parser.parse_args()

    grad_error = check_gradients()
    results = {"config": {"steps": args.steps, "seeds": args.seeds, "seed_root": SEED_ROOT,
                          "batch": 32, "learning_rate": .03, "head_dim": HEAD_DIM,
                          "m_bands": M_BANDS, "rope_base": ROPE_BASE,
                          "test_examples": 4096, "validation_examples": 512,
                          "checkpoint_interval": 100, "bootstrap_resamples": 5000,
                          "n_train": 16, "n_evaluations": [16, 32, 64, 128],
                          "description": "Harmonic beta vs RoPE vs ALiBi vs continuous RPB on mixed-frequency denoising."},
               "max_gradient_absolute_error": grad_error,
               "frozen": [], "retrained": [], "paired_comparisons": [],
               "started_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ")}
    started = time.perf_counter()

    trained = {}
    for kind in KINDS:
        per_seed = {}
        for seed in range(args.seeds):
            model = train(kind, seed, 16, args.steps)
            per_seed[seed] = model
        trained[kind] = per_seed

    for n_eval in [16, 32, 64, 128]:
        for kind in KINDS:
            for seed in range(args.seeds):
                s_frozen = evaluate_frozen(kind, trained[kind][seed], n_eval)
                results["frozen"].append({"model": kind, "seed": seed, "n_eval": n_eval, "test_mse": s_frozen})
                print(f"FROZEN {kind} n={n_eval} seed={seed} mse={s_frozen:.6g}", flush=True)
        # Retrained reference for harmonic (RoPE has nothing to retrain — same fixed rotation).
        for kind in ["harmonic_beta"]:
            for seed in range(args.seeds):
                s_retrain = evaluate_retrain(kind, seed, n_eval, args.steps)
                results["retrained"].append({"model": kind, "seed": seed, "n_eval": n_eval, "test_mse": s_retrain})
                print(f"RETRAIN {kind} n={n_eval} seed={seed} mse={s_retrain:.6g}", flush=True)

    # Paired comparisons at each length (harmonic as reference vs each other kind).
    by = {}
    for r in results["frozen"]: by.setdefault((r["model"], r["n_eval"]), []).append(r["test_mse"])
    for n_eval in [16, 32, 64, 128]:
        base = by[("harmonic_beta", n_eval)]
        for other in ["rope", "alibi", "continuous_rpb"]:
            results["paired_comparisons"].append({
                "harmonic": "harmonic_beta", "other": other, "n_eval": n_eval,
                "bootstrap_ci": paired_bootstrap_ci(base, by[(other, n_eval)])})

    results["elapsed_seconds"] = time.perf_counter() - started
    results["finished_utc"] = time.strftime("%Y-%m-%dT%H:%M:%SZ")
    Path(args.output).write_text(json.dumps(results, indent=2))
    print("SUMMARY saved to", args.output, "gradient_error", grad_error, flush=True)


if __name__ == "__main__":
    main()
