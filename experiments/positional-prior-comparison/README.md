# Positional prior comparison: harmonic β vs RoPE vs ALiBi vs continuous RPB

This experiment puts the harmonic positional prior (from §28) head-to-head with the three most widely-used positional priors under identical conditions. The question is: *is harmonic β's frozen length transfer advantage unique to the learned spectral parameterization, or is it just one member of a broader class that also contains RoPE, ALiBi, and continuous relative-position biases?*

## Models compared

All four models share the same content pathway (Wq/Wk over `(value, label, 1)`, head_dim 8, ~48 parameters) and differ only in their positional score term:

| Prior | Positional parameters | What it represents |
| --- | ---: | --- |
| `harmonic_beta` | 8 | Learned β_m for m=1..8; band matrix cos(2πmΔ/n) at any n. Transfers frozen because β is tied to absolute frequency. |
| `rope` | 0 | Fixed rotary embedding, base 10000, head_dim 8 → 4 distinct rotation frequencies. No learned positional parameters — the standard RoPE configuration. |
| `alibi` | 1 | Learned slope on the linear penalty `slope × Δ` (mod n). Transfers the penalty form but scales linearly with Δ range. |
| `continuous_rpb` | 10 | Learned 2-layer MLP on sin/cos of Δ/n, hidden size 4. Normalized by n, so it applies at any length automatically. |

The key structural point: harmonic β and continuous RPB *learn* the positional prior; RoPE is fixed and ALiBi learns only a single slope. They span different points on the learnability / expressivity / transferability tradeoff.

## Configuration

- 10 seeds per cell, seed root 20261018.
- Training at n=16, evaluation at n=16, 32, 64, 128.
- Same optimizer, batch, checkpoint selection, validation/test sizes as prior sections.
- Paired bootstrap 95% CIs (5,000 resamples) comparing harmonic β against each other prior at every length.
- Gradient checks run first for every learnable positional parameter; the recorded run's max finite-difference error is reported in results.json.

## What RoPE means here

RoPE is not normally trainable (the rotation frequencies are fixed at base^(-2(k-1)/d)). We therefore implement it as a fixed positional similarity kernel, aligning with the standard practice: no learned positional parameters, rotation frequencies determined by `base` and `head_dim`. Since the content `Wq`/`Wk` is still learned, the RoPE model is not "nothing learned" — it just has the minimum positional inductive bias of the four designs. It's the baseline the other priors must beat to justify their extra parameters.

## Known limitations

- RoPE was designed for autoregressive Transformers with multiple heads, learned Q/K projections, and a much larger head_dim. This head-to-head at head_dim=8 with identity values is a stress test of the positional-prior shape, not a faithful reproduction of RoPE as used in LLaMA-class models.
- ALiBi's transfer behavior is known to depend heavily on how the penalty is defined (linear in Δ vs. in Δ/n, fixed slope table vs. learned); we use the simplest learned variant here.
- The continuous RPB could be made far more expressive (wider MLP, richer encoding basis). The version here matches the harmonic prior's positional parameter budget roughly (10 vs 8).

## Artifacts

- `positional_prior_comparison.py` — the script.
- `results.json` — the recorded run with per-seed results and paired bootstrap CIs.
