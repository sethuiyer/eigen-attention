# Length generalization: frozen harmonic attention across sequence lengths

This experiment answers the central transferability question directly: a harmonic attention model trained at $n=16$ produces 8 learned coefficients $\beta_m$, one per frequency band $m=1,\dots,8$. Each coefficient multiplies a fixed absolute-frequency band matrix $\cos(2\pi m \Delta / n)$ at whatever $n$ you evaluate at. The band matrices are a property of the *frequency*, not the sequence length, so the 8 coefficients can be reused frozen at $n=32, 64, 128$ with no retraining, no interpolation, and no parameter resizing.

This is the architectural transfer that the previous factorial ablation could not test — it retrained at each length because the harmonic parameterization there changed size with $n$. Here, it does not.

## Models

| Model | Positional prior | Content pathway | Frozen vs. retrained |
| --- | --- | --- | --- |
| `harmonic_frozen` | learned $\beta$, 8 absolute-frequency coefficients | same Wq/Wk as factorial ablation | frozen after training at n=16 |
| `rpb_frozen` | learned relative-position bias, 16-entry table | identical | frozen; periodic linear interpolation to larger n |
| `harmonic_retrain` | learned $\beta$, trained from scratch at target n | identical | retrained (upper bound) |
| `rpb_retrain` | learned rpb, trained from scratch at target n | identical | retrained (upper bound) |

The harmonic and RPB parameterizations are compared at equal positional budget (8 vs 16, since rpb is table-sized — the factorial ablation showed this is not what matters for whether harmonic structure helps, but it's the correct baseline for length transfer because rpb has to interpolate while harmonics do not).

## Key architectural choice

The learned harmonic coefficient $\beta_m$ is tied to **absolute frequency** $m$, not to any particular $n$. The band matrix at size $n$ is:

$$\text{band}_m(\Delta; n) = \cos(2\pi m \Delta / n)$$

so the same $\beta$ vector produces a well-defined attention kernel at every $n \geq 2M = 16$. The task distribution also carries the same frequency content at each $n$ (mixed-frequency denoising with power concentrated at $m \in \{0, 1, 6, n/2\}$), so the "right" frequency bands to emphasize do not change. This is the setting where harmonic structure *should* shine: a fixed spectral prior matching a fixed spectral task.

By contrast, the RPB table is indexed by relative position $\Delta \in [0, n)$, which literally changes range when $n$ changes — hence the interpolation hack, which is the best possible transfer an RPB can do here without a different parameterization.

## Statistics and configuration

- 10 seeds per cell, seed root 20261018.
- Same training recipe throughout: Adam lr 0.03, batch 32, head_dim 8, checkpoint selection at 100-step intervals on 512 validation examples, 4096 held-out test examples.
- Paired bootstrap 95% CIs (5,000 resamples) for harmonic-frozen vs harmonic-retrained, rpb-frozen vs rpb-retrained, and harmonic-frozen vs rpb-frozen at each $n \in \{16, 32, 64, 128\}$.
- Sample-efficiency sweep: retrained models at 1/8, 1/4, 1/2, 1.0 of the standard 800 steps, evaluated frozen at $n=128$.
- Noise-scale sweep: evaluated frozen at $n=128$ with noise scale 0.4, 1.0, 2.5.

## Running

```sh
python3 length_generalization.py --seeds 10 --steps 800 --output results.json
```

Requires Python 3 and NumPy. Gradient checks run first (finite-difference vs analytic on every trainable parameter entry, tolerance 1e-7); the recorded run reports max absolute error on the order of $10^{-11}$.

## Known limitations

- The training task and evaluation task share the same frequency support at each $n$; this deliberately tests whether a *learned spectral prior* transfers, not whether arbitrary signals do. A task whose frequency support changes with $n$ (e.g., always the top-$M$ bands) would show different results.
- The frozen model's content pathway uses the same $n$ at evaluation — the content `Wq`/`Wk` is not frozen across lengths here because its role is per-example rather than positional; the frozen-vs-retrained comparison isolates the positional prior.

## Artifacts

- `length_generalization.py` — the script.
- `results.json` — the recorded run with per-seed runs, paired CIs, learning curves, noise sweep, and sample-efficiency sweep.
