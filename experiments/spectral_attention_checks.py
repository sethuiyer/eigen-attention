#!/usr/bin/env python3
"""Numerical checks for the cyclic Gram-softmax and stability theorems.

Usage:
    python3 spectral_attention_checks.py

The script is self-contained except for NumPy. It prints JSON and exits
non-zero if any asserted inequality fails.
"""

from __future__ import annotations

import json
import math

import numpy as np

RNG = np.random.default_rng(20261018)
TOL = 1e-10


def softmax_rows(scores: np.ndarray) -> np.ndarray:
    shifted = scores - scores.max(axis=1, keepdims=True)
    weights = np.exp(shifted)
    return weights / weights.sum(axis=1, keepdims=True)


def circulant(first_row: np.ndarray) -> np.ndarray:
    n = first_row.size
    return np.array(
        [[first_row[(j - i) % n] for j in range(n)] for i in range(n)],
        dtype=float,
    )


def symmetric_first_row(n: int) -> np.ndarray:
    half = RNG.normal(size=n)
    first = 0.5 * (half + np.roll(half[::-1], 1))
    first[0] = 0.0
    return first


def feasible_score(n: int) -> np.ndarray:
    # A real circulant Gram matrix: take symmetric first row, FFT, retain
    # nonnegative eigenvalues, invert. The resulting score is PSD.
    first = symmetric_first_row(n)
    eigenvalues = np.fft.fft(first).real
    eigenvalues = np.maximum(eigenvalues, 0.0)
    psd_first = np.fft.ifft(eigenvalues).real
    return circulant(psd_first)


def kernel_from_score(score: np.ndarray) -> np.ndarray:
    return softmax_rows(score)


def log_fourier(first_row: np.ndarray) -> np.ndarray:
    return np.fft.fft(np.log(first_row)).real


def reconstruct_from_kernel(first_row: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    n = first_row.size
    ell = log_fourier(first_row)
    log_kernel = np.log(first_row)
    L = circulant(log_kernel)
    S = L - (ell[0] / n) * np.ones((n, n))
    return S, ell


def check_theorem_one() -> dict:
    reconstruction_errors: list[float] = []
    rank_mismatches = 0
    cases = 0
    infeasible_checked = 0
    counterexample = None

    for n in (3, 4, 5, 8, 16, 32, 64):
        for _ in range(20):
            score = feasible_score(n)
            pi = kernel_from_score(score)[0]
            S, ell = reconstruct_from_kernel(pi)
            cases += 1
            if np.min(ell[1:]) < -1e-9:
                raise AssertionError("feasible construction produced a negative log mode")
            reconstructed = softmax_rows(S)[0]
            reconstruction_errors.append(float(np.max(np.abs(reconstructed - pi))))
            positive_modes = int(np.sum(ell[1:] > 1e-8))
            rank = int(np.linalg.matrix_rank(S, tol=1e-8))
            if rank != positive_modes:
                rank_mismatches += 1

    # Random positive symmetric kernels test the exact criterion. Infeasible
    # cases must have a negative nonconstant log-Fourier mode.
    for n in (4, 8, 16, 32):
        for _ in range(20):
            raw = RNG.random(n)
            first = 0.5 * (raw + np.roll(raw[::-1], 1))
            first /= first.sum()
            ell = log_fourier(first)
            if np.min(ell[1:]) < -1e-8:
                infeasible_checked += 1
                S, _ = reconstruct_from_kernel(first)
                # A PSD Gram matrix would make every nonconstant eigenvalue
                # nonnegative; check that the shift cannot repair this.
                shifted_min = float(np.min(np.linalg.eigvalsh(S)[1:]))
                if shifted_min > 1e-8:
                    raise AssertionError("negative log mode was unexpectedly feasible")

    pi = np.array([8, 4, 1, 4], dtype=float) / 17.0
    ell = log_fourier(pi)
    counterexample = {
        "pi": pi.tolist(),
        "log_fourier": ell.tolist(),
        "ell_2": float(ell[2]),
        "passes_log_criterion": bool(np.min(ell[1:]) >= -1e-12),
    }
    if counterexample["passes_log_criterion"]:
        raise AssertionError("the four-point barrier unexpectedly passes")

    return {
        "feasible_cases": cases,
        "infeasible_cases_checked": infeasible_checked,
        "max_reconstruction_error": max(reconstruction_errors),
        "rank_mismatches": rank_mismatches,
        "four_point_counterexample": counterexample,
    }


def sinkhorn(matrix: np.ndarray, iterations: int = 80) -> np.ndarray:
    p = np.asarray(matrix, dtype=float).copy()
    for _ in range(iterations):
        p /= p.sum(axis=1, keepdims=True)
        p /= p.sum(axis=0, keepdims=True)
    return p


def check_theorem_two() -> dict:
    ratios: list[float] = []
    mode_ratios: list[float] = []
    sharpness: list[dict] = []
    cases = 0
    mode_cases = 0

    for n in (4, 8, 16, 32, 64):
        for delta in (0.05, 0.2, 0.5, 1.0):
            for _ in range(6):
                P = sinkhorn(RNG.random((n, n)) + 0.2)
                E = RNG.uniform(-delta, delta, size=(n, n))
                E -= E.min(axis=1, keepdims=True)
                weights = P * np.exp(E)
                A = weights / weights.sum(axis=1, keepdims=True)
                bound = math.sinh(delta)
                ratio = float(np.linalg.norm(A - P, 2) / bound)
                ratios.append(ratio)
                cases += 1
                if ratio > 1.0 + 1e-8:
                    raise AssertionError(
                        f"operator bound violated at n={n}, delta={delta}"
                    )

    for n in (8, 16, 32, 64):
        for _ in range(30):
            first = RNG.random(n)
            first = 0.5 * (first + np.roll(first[::-1], 1))
            pi = first / first.sum()
            P = circulant(pi)
            delta = 0.25
            E = RNG.uniform(-delta, delta, size=(n, n))
            E -= E.min(axis=1, keepdims=True)
            A = P * np.exp(E)
            A /= A.sum(axis=1, keepdims=True)
            eigvals, eigvecs = np.linalg.eigh(P)
            for index in range(1, n):
                lam = eigvals[index]
                psi = eigvecs[:, index]
                numerator = float(np.linalg.norm(A @ psi - lam * psi))
                denominator = math.sinh(delta) * math.sqrt(
                    max(1.0 - lam**2, 0.0)
                )
                if denominator > 1e-12:
                    mode_ratios.append(numerator / denominator)
                    mode_cases += 1
    if max(mode_ratios, default=0.0) > 1.0 + 1e-8:
        raise AssertionError("mode-resolved bound violated")

    for n in (128, 512, 2048):
        for delta in (0.1, 0.5, 1.0):
            p = 1.0 / (1.0 + math.exp(2.0 * delta))
            count = int(round(p * n))
            q = np.zeros(n)
            q[:count] = math.exp(delta)
            q[count:] = math.exp(-delta)
            q /= q.sum()
            u = np.full(n, 1.0 / n)
            norm = math.sqrt(n) * np.linalg.norm(q - u)
            bound = math.sinh(delta)
            sharpness.append(
                {
                    "n": n,
                    "delta": delta,
                    "ratio": float(norm / bound),
                }
            )

    return {
        "operator_cases": cases,
        "max_operator_ratio": max(ratios),
        "mode_cases": mode_cases,
        "max_mode_ratio": max(mode_ratios, default=None),
        "uniform_sharpness": sharpness,
    }


def check_four_point_risk() -> dict:
    pi = np.array([8, 4, 1, 4], dtype=float) / 17.0
    g = np.real(np.fft.fft(pi))
    # Solve 85x^3 + 131x - 56 = 0 on (0, 1).
    lo, hi = 0.0, 1.0
    for _ in range(100):
        mid = 0.5 * (lo + hi)
        if 85.0 * mid**3 + 131.0 * mid - 56.0 < 0.0:
            lo = mid
        else:
            hi = mid
    x = 0.5 * (lo + hi)
    y = x * x
    excess = (17.0 / 5.0) * (x - 7.0 / 17.0) ** 2 + (
        17.0 / 16.0
    ) * (y - 1.0 / 17.0) ** 2
    return {
        "gains": g.tolist(),
        "x": float(x),
        "y": float(y),
        "excess_risk_over_sigma2": float(excess),
    }


def main() -> None:
    result = {
        "seed": 20261018,
        "theorem_1": check_theorem_one(),
        "theorem_2": check_theorem_two(),
        "four_point_risk": check_four_point_risk(),
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
