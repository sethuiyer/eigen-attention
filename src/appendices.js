export const experimentSource = String.raw`## 26. A first controlled experiment

The theorem notes establish feasibility and stability. They do not show that gradient descent finds useful harmonic coefficients. This experiment tests that mechanism directly.

Five single-head attention networks were trained on 16-position cyclic tasks. Each has identity value maps and no residual, feed-forward block, or learned output projection. Only the score rule changes. There were three seeds, two initialization restarts, 800 Adam updates, validation-based checkpoint selection, and 4,096 held-out examples per task. The 90 training fits produced 45 selected runs.

| Attention | Parameters | Smooth signals | Mixed frequencies | Content grouping |
| --- | ---: | ---: | ---: | ---: |
| Single rotational band | 1 | 0.3141 | 0.9712 | 0.06362 |
| Multiple rotational bands | 8 | **0.3056** | **0.4739** | 0.05999 |
| Gram-constrained bands | 8 | 0.3207 | 0.5285 | 0.05981 |
| Dot-product baseline | 288 | 0.3259 | 0.5079 | 3.743e-05 |
| Rotational + content hybrid | 56 | **0.3055** | **0.4713** | **2.898e-06** |

Lower mean squared error is better. Entries are means across three training seeds on a common held-out set. Seed standard deviations are at most \(3.45\times10^{-3}\); per-seed results are in the linked artifact.

**What the experiment supports.** Eight learned harmonic coefficients were enough to improve on a 288-parameter dot-product baseline for the two stationary signal tasks. The Gram constraint cost error on those tasks, which is consistent with the expressivity gap: the constraint is a structural prior, not a free improvement.

**Where position is insufficient.** On content grouping, position-only models retained roughly \(6\times10^{-2}\) error, while content-dependent attention dropped to \(10^{-5}\) or below. The hybrid preserved the useful positional structure and solved the content task, reaching \(2.9\times10^{-6}\) with 56 parameters.

These results support the combined design direction: **rotational structure for stationary signal processing, plus content-dependent scores when the task requires grouping.** They do not establish superiority over a complete Transformer, language-model quality, or a speed/memory advantage. Value maps, residuals, and output projections were deliberately removed. The tasks match the cyclic assumptions, and one optimizer configuration was used without a hyperparameter or parameter-matched sweep. The reported variation is across training seeds on a common test set, not across independently generated test sets.

**Artifacts.** The runnable experiment is [benchmark.py](./experiments/rotational-attention/benchmark.py), with [results.json](./experiments/rotational-attention/results.json), [README.md](./experiments/rotational-attention/README.md), and the [complete archive](./experiments/rotational-attention-experiment.zip). The analytic gradient check agrees with finite differences to \(2.91\times10^{-13}\).`;

export const appendixSource = String.raw`## Appendix A — Reproducible checks

All numerical claims in the two theorem notes have a runnable check:

- [spectral_attention_checks.py](./experiments/spectral_attention_checks.py)
- [results.json](./experiments/results.json)

The script requires Python 3 and NumPy. It fixes the seed to 20261018 and exits non-zero if any asserted inequality fails. The results below were produced with Python 3.12 and NumPy 2.5.2.

| Check | Observed result |
| --- | --- |
| Feasible cyclic Gram reconstructions, \(n=3,\ldots,64\) | 140 cases, maximum reconstruction error \(1.11\times10^{-16}\), zero rank mismatches |
| Random positive symmetric kernels | 78 infeasible cases; every one had a negative nonconstant log-Fourier coefficient |
| Four-point counterexample \(\pi=(8,4,1,4)/17\) | \(\ell_2=\log(1/2)=-0.6931\); fails Gram feasibility |
| Content-modulation operator bound | 120 random cases, maximum ratio to \(\sinh\delta\): 0.5489 |
| Fourier-mode leakage bound | 3,413 mode checks, maximum ratio: 0.3430 |
| Uniform-reference sharpness, \(n=2048,\ \delta=1\) | ratio to \(\sinh\delta\): 0.99999996 |
| Four-point constrained risk | \(x=0.3892215\), \(y=0.1514934\), excess risk \(0.0108523\,\sigma^2\) |

These are numerical sanity checks on the proofs and constructions. They are **not** experiments on trained transformers, and they should not be presented as benchmark evidence. The next empirical step is a controlled comparison between single-band softmax, signed multi-band logits, Gram-constrained multi-band logits, and full stochastic projection on fixed synthetic spectra, followed by fitting a stationary reference to recorded attention matrices.

## Appendix B — Scope, notation, algorithms, and provenance

**Notation.** The earlier sections use several objects that should not share a symbol.

| Symbol | Meaning |
| --- | --- |
| \(s(x,y)\) | real similarity or score |
| \(W(x,y)=e^{s(x,y)}\) | positive weight kernel |
| \(K\) | a Gram similarity where explicitly identified as such |
| \(D=\operatorname{diag}(W\mathbf1)\) | row-normalization matrix |
| \(A=D^{-1}W\) | row-stochastic attention operator |
| \(\beta\) | inverse kernel bandwidth |
| \(\pi_r\) | symmetric cyclic probability mass |
| \(g_m,\lambda_m\) | Fourier gain and spectral multiplier |
| \(\ell_m\) | log-kernel Fourier coefficient |
| \(\mathcal P_n\) | probability-feasible spectral set |
| \(E,\delta\) | content perturbation and row oscillation |

Throughout, a score is real. A complex unitary feature representation must be converted to a real score, for example \(\operatorname{Re}\langle\phi(x),\phi(y)\rangle\), before exponentiation and normalization.

**Scope and assumptions.** The cyclic results assume a finite index set, a symmetric relative-position kernel, and a single stochastic attention head. Theorem 2 assumes a doubly stochastic reference \(P\); content modulation may be asymmetric. A causal mask or a finite boundary breaks exact circulant symmetry and requires a Toeplitz or block-Toeplitz analysis. A multi-head layer with learned value maps and output projection is not itself a stochastic averaging operator; the probability constraint applies per head or to a nonnegative mixture. Residual connections, layer normalization, and changing content are outside the reference model unless stated otherwise.

**Computation.** The spectral gain curve is computed by FFT in \(O(n\log n)\) time and \(O(n)\) memory. Checking the nonconstant log-Fourier coefficients is also \(O(n\log n)\); constructing the minimum-rank factor by eigendecomposition is \(O(n^3)\) in the general dense case. The probability-feasible projection is a convex quadratic program; a generic interior-point solve is polynomial but cubic in the number of gain variables, while structure-aware FISTA or ADMM can exploit the circulant transform. Finite cyclic aliasing is exact and should be evaluated with the finite sum, not replaced by the Bessel ratio. Damped Newton moment matching should stop on \(\|\boldsymbol\lambda_{\mathcal M}(\boldsymbol\beta)-\boldsymbol\mu\|_\infty\leq\varepsilon\), with a backtracking step and a check on the condition number of the Fisher matrix. Those implementation details matter; a formula without a stopping rule is not an algorithm.

**Claims and provenance.** The following are established ingredients rather than new results: attention as nonparametric kernel regression; Fourier diagonalization of circulant operators; the softmax–Gaussian limit; the covariance/Hessian identity for exponential families; and the row-sum argument for orbit-wise normalization. The two additions developed in this manuscript are the exact cyclic Gram-softmax realizability/rank criterion with its four-position barrier and risk gap, and the dimension-free mode-resolved stability bound with the depth corollary. First-in-literature priority is not claimed.

**References**

1. Tan Nguyen, Minh Pham, Tam Nguyen, Khai Nguyen, Stanley J. Osher, and Nhat Ho. [Transformer with Fourier Integral Attentions](https://arxiv.org/abs/2206.00206), 2022.
2. Martin J. Wainwright and Michael I. Jordan. [Graphical Models, Exponential Families, and Variational Inference](https://wainwrightwork.github.io/publications.html), 2008.
3. Rajendra Bhatia and Tanvi Jain. [On some positive definite functions](https://arxiv.org/html/1409.7479v1), 2014.
4. Bodie Rubacher. [Attention Implements the Fisher Geometry of Exponential Families](https://proceedings.mlr.press/v306/rubacher26a.html), ICML 2026.
5. Saul Santos, Nuno Gonçalves, Daniel C. McNamee, Marcos Treviso, and André F. T. Martins. [Sparse Attention as Compact Kernel Regression](https://arxiv.org/abs/2601.22766), 2026.
6. Shafayeth Jamil and Rehan Kapadia. [The Routing and Filtering Structure of Attention](https://arxiv.org/abs/2605.18826), 2026.
7. Zhigao Huang, Pinghui Wu, Musheng Chen, Quanfa Li, and Miao Pan. [Spectral attention for transformers](https://doi.org/10.1007/s44443-026-00599-5), 2026.
8. Xinghao Wang et al. [Prism: Spectral-Aware Block-Sparse Attention](https://arxiv.org/abs/2602.08426), 2026.
9. Kimi Team. [Kimi Linear: An Expressive, Efficient Attention Architecture](https://arxiv.org/abs/2510.26692), 2025.
10. Alexia Jolicoeur-Martineau, Rhea Sanjay Sukthanker, Pashmina Cameron, and Emy Gervais. [Sliding-window beats linear attention](https://arxiv.org/abs/2608.28444), 2026.
11. Yutao Sun et al. [Efficient Attention Mechanisms for Large Language Models: A Survey](https://arxiv.org/abs/2507.19595), 2025.`;
