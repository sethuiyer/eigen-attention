# Factorial ablation: harmonic positional prior × content pathway

This experiment extends `../rotational-attention/benchmark.py` with a controlled factorial design and distribution-shift evaluation. The mixed-frequency denoising task is fixed, and the content pathway is architecture-matched across the models that include it. All training uses one optimizer configuration (Adam, lr 0.03, batch 32, head_dim 8, checkpoint every 100 steps on a 512-example validation set, restart selection at the best checkpoint, 4096-example held-out test set).

## Models

| Model | Positional harmonics | Content scores | Content architecture | Positional parameter count |
| --- | --- | --- | --- | --- |
| A `positional_only` | learned β (one per band) | no | — | 8 |
| B `content_only` | none | Wq/Wk over (value, label, 1) | identical across B/C/D | 0 |
| C `hybrid` | learned β + content | same Wq/Wk as B | identical | 8 |
| D `content_plus_rpb` | learned relative-position bias table (n entries) | same Wq/Wk as B | identical | n |

The purpose is to separate three questions:

1. **B vs C** — does content alone explain the hybrid's performance?
2. **C vs D** — does the harmonic *basis* help beyond simply spending the same number of positional parameters?
3. **Learning curves, and test performance under distribution shift** — does the harmonic prior improve sample efficiency or generalization even when in-distribution MSE is similar?

## Distribution-shift and sample-efficiency arms

- **Shift set:** evaluate trained models at `n = 32`, `n = 64` (band-shift 0), noise scale `0.4` and `2.5`, and shifted frequency bands (`band_shift = 2` with `n = 16`). Each shift retrains from the same seed and evaluates on a matched-config test set; nothing about the training recipe changes.
- **Sample efficiency:** training reduced to `1/8, 1/4, 1/2, 1.0` of the standard 800 steps (fixed batch; step count is the data-budget proxy). Learning curves record validation MSE every 100 steps.

## Statistics

- **10 seeds** per cell (seed root 20261018). One optimizer, one restart selection — this is a paired comparison on a fixed test set, not a model-selection sweep.
- **Paired bootstrap CIs** for mean test-MSE difference (5 000 resamples, 95% level), for the pairs B–C, B–D, C–D, and A–B.

## Running

```sh
python3 factorial_ablation.py --seeds 10 --steps 800 --output results.json
```

Requires only Python 3 and NumPy. `check_gradients()` runs first with finite differences on every trainable parameter entry and asserts relative error < 1e-7; a recorded run reports max absolute gradient error on the order of 1e-11.

## Known limitation

The harmonic parameterization uses a fixed orthonormal Fourier basis for each `n`, and the model trained at `n=16` cannot be directly evaluated at `n=32/64` without retraining because the harmonic coefficient count changes with `n` (8 → 16 → 32). The shift arm therefore retrains at each shifted configuration rather than evaluating one frozen model. This means the shift arm measures *architectural transfer* (does the harmonic design still work at other `n`?) rather than *inference-time length generalization*, which would require a fixed-size frequency parameterization. This limitation is documented in the site section that reports these results.

## Artifacts

- `factorial_ablation.py` — the script.
- `results.json` — the recorded run (config, per-seed runs, learning curves, paired bootstrap CIs, distribution-shift results, sample-efficiency sweep).
