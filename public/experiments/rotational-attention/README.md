# Trainable rotational attention: first experiment

This package implements and trains five small, single-head attention networks on controlled cyclic sequence tasks. It is a mechanism check, not a language-model benchmark.

## Architecture

The rotational score is s(i,j) = sum_m beta[m] cos(2*pi*m*(j-i)/n). Row softmax turns the score into nonnegative normalized attention, and the output is A @ values. The harmonic coefficients are learned by gradient descent, using analytic backpropagation and Adam. Values use an identity map in every variant; there is no feed-forward block, residual connection, or learned output projection. This isolates the score construction.

- single_band: one nonnegative fundamental-harmonic coefficient, parameterized by softplus.
- multi_band: all eight independent cosine bands at n=16, with arbitrary real coefficients.
- gram_multi_band: all eight bands, with nonnegative coefficients; the shared-feature Gram restriction.
- dot_product: learned Q and K, head dimension eight, from the value, content label, and a full real Fourier positional basis. This is a standard scaled dot-product head with explicit positional features.
- hybrid: arbitrary multi-band rotational scores plus learned content QK scores. Its content features are the value, content label, and a constant.

Only the last two variants use input content to change their attention weights. All variants receive identical data. A shared content label is zero on the denoising tasks and a balanced random +1/-1 group identifier on the grouping task.

## Tasks

All sequences have 16 positions with cyclic boundaries. Frequencies are discrete Fourier indices; each listed pair includes its negative-frequency partner. Signal generation uses an orthonormal FFT and Gaussian Fourier power.

1. Smooth denoising: DC power 4, power 8 at +/-1, and power 4 at +/-2. Independent unit-variance Gaussian observation noise.
2. Mixed denoising: DC power 4, power 4 at +/-1, power 6 at +/-6, and Nyquist power 8. Independent unit-variance Gaussian observation noise.
3. Content grouping: random balanced groups, random scalar values, target equal to the mean of values in the query's group. Correct attention must use the group label; position alone cannot identify membership.

## Protocol

Each model trains for 800 Adam updates with batch size 32 and learning rate 0.03. Gradients are clipped at global norm 1. There are three training seeds and two initialization restarts per seed: broad attention and near-identity attention. Every model sees the same streamed training examples for a given seed. Checkpoints are selected only with 512 validation examples, every 100 steps, including the initial state. Final evaluation uses 4,096 separate held-out examples per task. The same test set is used across models and training seeds for a task. There are 90 training fits and 45 validation-selected model runs.

Reported standard deviations measure variation across training seeds on that common test set, not uncertainty across independently generated test sets. This is one optimizer configuration without a hyperparameter sweep or parameter-matched architecture sweep.

## Results

Lower mean squared error is better. Parameter counts include all trainable parameters in these attention-only networks.

| Model | Parameters | Smooth MSE | Mixed MSE | Grouping MSE |
|---|---:|---:|---:|---:|
| Single-band rotational | 1 | 0.3141404 +/- 2.8e-05 | 0.9712132 +/- 0.000332 | 0.0636247 +/- 1.55e-05 |
| Multi-band rotational | 8 | 0.3055579 +/- 0.000159 | 0.4739364 +/- 0.000344 | 0.05999016 +/- 9.87e-05 |
| Gram-constrained multi-band | 8 | 0.320652 +/- 0.000329 | 0.5284778 +/- 0.000586 | 0.05980782 +/- 1.28e-05 |
| Dot-product | 288 | 0.325887 +/- 0.000378 | 0.5079133 +/- 0.00345 | 3.743227e-05 +/- 8.74e-06 |
| Rotational + content hybrid | 56 | 0.305527 +/- 0.000609 | 0.4712676 +/- 0.000401 | 2.898417e-06 +/- 9.28e-07 |

The multi-band positional model outperformed this dot-product baseline on the two stationary signal tasks with fewer parameters. Positional models had much larger residual error on content grouping. Adding content-based scores let the hybrid solve that task while keeping the useful positional structure.

These tasks intentionally match the cyclic assumptions. The comparison does not establish superiority over a complete Transformer or over tuned baselines. The observed free-versus-Gram difference can reflect both expressivity and optimization; this finite training run does not isolate their contributions. No speed or memory advantage is claimed: this implementation constructs dense attention matrices.

## Reproduce

Requires Python and NumPy. PyTorch is not required; the neural attention scores are trained by explicit backpropagation.

~~~sh
python -m pip install -r requirements.txt
OPENBLAS_NUM_THREADS=1 python benchmark.py --steps 800 --seeds 3 --output results.json
~~~

The program checks the analytic gradients against finite differences before training and verifies that the attention rows are nonnegative and sum to one. Full per-seed measurements, validation checkpoints, selected initializations, and configuration are in results.json.

## Next experiment

To test the proposal in a larger neural network, implement the same harmonic-score term inside a framework attention layer, keep the value/output projections and surrounding network identical, and change only the score rule. Include positional-only, content-only, and hybrid ablations. Test both stationary signals and content-dependent sequence tasks before making language-model claims. Causal sequences need a compatible mask and a separate boundary/length-generalization test.

Maximum absolute gradient-check error: 2.91e-13. The final run took 19.30 seconds in this environment; this is not a comparative speed benchmark.
