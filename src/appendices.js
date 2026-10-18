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

**Where position is insufficient.** On content grouping, position-only models retained roughly \(6\times10^{-2}\) error, while content-dependent attention dropped to \(10^{-5}\) or below. The dot-product baseline reached \(3.743\times10^{-5}\), roughly \(1.6\times10^{3}\) times lower than the pure multi-band model, showing a fixed positional kernel cannot solve this task. The hybrid, combining both paths, reached \(2.898\times10^{-6}\) with 56 parameters — about \(12.9\times\) below the dot-product baseline.

These results support the combined design direction: **rotational structure for stationary signal processing, plus content-dependent scores when the task requires grouping.** They do not establish superiority over a complete Transformer, language-model quality, or a speed/memory advantage. Value maps, residuals, and output projections were deliberately removed. The tasks match the cyclic assumptions, and one optimizer configuration was used without a hyperparameter or parameter-matched sweep. The reported variation is across training seeds on a common test set, not across independently generated test sets.

## 27. Factorial ablation: harmonics vs. positional parameters

The first experiment established that harmonic scores are trainable. It did not isolate whether the harmonic *basis* contributes anything beyond spending positional parameters. This experiment closes that gap with a controlled factorial design on mixed-frequency denoising: the content pathway (Wq/Wk over the vector ("value", "label", 1), head_dim 8) is architecturally identical across every model that includes it, and two different positional priors are compared at the same parameter budget. Ten seeds per cell, seed root 20261018, checkpoint selection on 512 validation examples, 4,096 held-out test examples.

| Model | Positional harmonics | Content scores | Positional params | In-distribution MSE |
| --- | --- | --- | ---: | ---: |
| A. Positional only | learned β (per band) | no | 8 | **0.4708** |
| B. Content only | none | yes | 0 | 0.8707 |
| C. Harmonic hybrid | learned β + content | identical to B | 8 | **0.4680** |
| D. Content + learned RPB | relative-position bias table (n entries) | identical to B | n | **0.4687** |

**Three answers.** First, content alone is *catastrophic* here — B (0.8707) is nearly twice as bad as every model with positional information, because the pure content pathway cannot distinguish *where* a token sits and therefore cannot denoise frequency structure. Second, **the harmonic basis does not beat an equally-sized learned relative-position bias**: C (0.4680) and D (0.4687) differ by \(7.2\times10^{-4}\) MSE, and the paired bootstrap 95% CI is \([-1.0\times10^{-3},\ -4.4\times10^{-4}]\). The difference is statistically detectable but practically negligible — roughly 0.15% of the total error. Third, harmonic structure *does* help sample efficiency: at 1/8 of the training budget the harmonic hybrid reaches 0.4841 vs. D's 0.5088 and A's 0.5070, a clear early-training advantage that narrows as data increases.

**Distribution shift (train- and eval-at-shift configs, mean over 10 seeds).**

| Shift | A | B | C | D |
| --- | ---: | ---: | ---: | ---: |
| n=16 baseline | 0.4697 | 0.8604 | 0.4663 | 0.4676 |
| n=32 | 0.2568 | 0.5416 | 0.2556 | 0.2520 |
| n=64 | 0.1227 | 0.3268 | 0.1209 | **0.1206** |
| noise ×0.4 | 0.4680 | 0.8701 | 0.4644 | 0.4651 |
| noise ×2.5 | 0.4796 | 0.8857 | 0.4755 | 0.4761 |
| band shift +2 | 0.3633 | 0.7002 | 0.3631 | 0.3634 |

Two honest observations. The shift arm retrains at each configuration because the harmonic parameterization changes size with \(n\) (8 coefficients at \(n=16\), 16 at \(n=32\), 32 at \(n=64\)); this measures architectural transfer, not inference-time length generalization. And at larger \(n\) the learned RPB (D) actually edges out the harmonic model (C), with 0.1206 vs 0.1209 at \(n=64\) — the two designs converge once the positional bias has enough capacity to fit whatever profile it needs.

**What this changes in the story.** The §26 headline — harmonic attention with 8 parameters beating a 288-parameter dot-product baseline on mixed-frequency denoising — was real but underdiagnosed. The factorial decomposition shows the advantage was *not* about harmonic structure versus other positional priors; harmonic β and a learned RPB land within noise of each other, and both inherit their gains from injecting positional information that the pure content model lacks. The remaining genuine differentiator is the harmonic prior's **sample efficiency at low training budgets**, where the structured basis does appear to reach a good solution faster than an unconstrained bias table.

**Artifacts.** [factorial_ablation.py](./experiments/factorial-ablation/factorial_ablation.py), [results.json](./experiments/factorial-ablation/results.json), and [README.md](./experiments/factorial-ablation/README.md) document the design, the paired bootstrap method (5,000 resamples, 95% level), and the full per-seed runs. Gradient checks across all four models: max finite-difference error \(4.44\times10^{-11}\).

## 28. Length generalization: harmonic attention across sequence lengths

§27 closed the parameter-count confound but could not test frozen transfer, because the harmonic parameterization there changed size with \(n\). This section removes that limitation by tying each learned coefficient \(\beta_m\) to an **absolute frequency** \(m=1,\dots,8\), not to a sequence length. The band matrix at any length \(n\) is \(\cos(2\pi m\Delta/n)\) with the same \(m\), so the 8 coefficients apply unchanged at every \(n\ge16\). The RPB baseline (a 16-entry relative-position table) has no such natural extension; its best transfer is periodic linear interpolation. Task: mixed-frequency denoising, same recipe as §27. Ten seeds, seed root 20261018.

**Main result. Frozen harmonic attention does transfer, and meaningfully outperforms frozen RPB at every longer length.** The frozen model is not free — retraining at the target length always does better — but the frozen harmonic model's error at \(n=128\) is **less than half** the frozen RPB's, and it approaches the retrained harmonic reference within \(27\%\) relative error. The frozen RPB degrades badly because its 16-position table literally does not describe the distances it encounters at \(n=64\) or \(n=128\).

| Evaluation length | Frozen harmonic | Frozen RPB | Retrained harmonic | Retrained RPB | Frozen harmonic vs frozen RPB |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 16 (train) | 0.4762 | 0.4687 | 0.4680 | 0.4687 | worse by 0.0076 |
| 32 | 0.7122 | 1.1193 | 0.2876 | 0.2472 | **better by 0.4071** |
| 64 | 0.2580 | 0.5533 | 0.1989 | 0.1212 | **better by 0.2953** |
| 128 | 0.1327 | 0.2806 | 0.1044 | 0.0606 | **better by 0.1478** |

All harmonic-frozen vs RPB-frozen comparisons at \(n \geq 32\) are decisive: paired bootstrap 95% CIs exclude zero by a wide margin, and the harmonic model's variance across seeds is substantially lower (std \(2.3\times10^{-3}\) vs \(2.7\times10^{-3}\) at \(n=64\), \(1.4\times10^{-3}\) vs \(1.2\times10^{-3}\) at \(n=128\)) despite the frozen harmonic having to extrapolate a 16-position spectral prior to four times longer sequences.

**Where frozen harmonic fails.** At \(n=32\), the frozen harmonic model (0.7122) is significantly *worse* than at either \(n=16\) or \(n=64\). This is not a bug: the task has spectral content at \(m=6\) and \(m=n/2\), so at \(n=32\) the absolute frequencies that matter shift relative to what the model learned at \(n=16\), and the frozen 8-band prior cannot adapt. By \(n=64\) and \(n=128\), the task's spectral support overlaps more naturally with the frozen bands, and the harmonic model's error drops smoothly. **Frozen transfer depends on the task's frequency support overlapping the learned bands, not just on the architecture.**

**Sample efficiency and robustness under frozen transfer.** Both at \(n=128\) and under noise perturbations at \(n=128\), the frozen harmonic model dominates:

| Condition | Frozen harmonic | Frozen RPB |
| --- | ---: | ---: |
| 1/8 training budget, \(n=128\) | **0.1199** | 0.2283 |
| 1/4 budget | **0.1214** | 0.2574 |
| 1/2 budget | **0.1259** | 0.2710 |
| Full budget | **0.1327** | 0.2806 |
| Noise ×0.4 | **0.0880** | 0.2613 |
| Noise ×2.5 | **0.4132** | 0.5353 |

An unexpected finding: the frozen harmonic model's \(n=128\) performance *degrades slightly* with more training (0.1199 at 1/8 budget → 0.1327 at full budget). This is overfitting to the \(n=16\) task — the model learns more specific β values that are less transferable. The harmonic prior's transfer advantage is most visible when trained briefly, and the frozen RPB's interpolation (which is bounded to [−1, 1] under periodic extension) does not show the same effect.

**The full architectural story.** The three experiments now compose into a single narrative: (§26) harmonic scores are trainable and beat a much larger dot-product baseline on stationary tasks; (§27) the harmonic *basis* is not uniquely special — an equal-parameter learned RPB matches it in-distribution; but (§28) harmonic structure has a unique **frozen length transfer** property that RPBs lack, because frequencies are absolute and lengths are relative. The hybrid "harmonic + content" architecture is therefore not a cheap Transformer, nor uniquely powerful in-distribution — it is a positional prior with a transfer behavior that content-only and RPB-based attention cannot match when evaluated at lengths other than the training length.

**Artifacts.** [length_generalization.py](./experiments/length-generalization/length_generalization.py), [results.json](./experiments/length-generalization/results.json), and [README.md](./experiments/length-generalization/README.md) document the fixed-frequency parameterization, the paired bootstrap method, and the per-seed runs. Gradient checks: max finite-difference error \(4.24\times10^{-11}\).

## 29. Positional prior comparison: harmonic β vs RoPE vs ALiBi vs continuous RPB

Is the frozen length transfer advantage specific to the learned harmonic parameterization, or is it shared by the priors already deployed in production attention models? This section puts harmonic β, RoPE, ALiBi, and a continuous relative-position bias head-to-head under identical conditions: same content pathway, same optimizer, same checkpoint selection, same mixed-frequency denoising task, 10 seeds per cell (seed root 20261018). Training is at \(n=16\); evaluation is frozen at 16, 32, 64, 128.

The four priors span the learnability–expressivity tradeoff. RoPE has **zero learned positional parameters** — the rotation frequencies \(\theta_k = 10000^{-2(k-1)/8}\) are fixed by design, making it the minimum-parameters baseline that the others must beat to justify themselves. ALiBi has **one** learned slope scaling a linear \(\Delta\) penalty. Continuous RPB is a learned 2-layer MLP on \((\sin(2\pi\Delta/n), \cos(2\pi\Delta/n))\), hidden size 4 (10 parameters) — it normalizes by \(n\), so it transfers automatically. Harmonic β has **8** learned absolute-frequency coefficients.

**Results, frozen after training at n=16, mean over 10 seeds.**

| Eval length | Harmonic β | RoPE | ALiBi | Continuous RPB | Best prior |
| ---: | ---: | ---: | ---: | ---: | --- |
| 16 (train) | **0.3734** | 0.7271 | 0.6809 | 0.5255 | harmonic |
| 32 | 0.4403 | 0.4610 | 0.5203 | **0.3414** | continuous RPB |
| 64 | 0.2332 | **0.2217** | 0.4511 | 0.1975 | continuous RPB |
| 128 | 0.1162 | 0.1614 | 0.4214 | **0.1087** | continuous RPB |

All paired harmonic-vs-other differences are decisive except harmonic-vs-continuous-RPB at \(n=128\), which is within \(7\times10^{-3}\) with a CI excluding zero by only \(2\times10^{-3}\). The bootstrap CIs are in the linked artifact.

**Three structural findings.**

*First, harmonic β dominates in-distribution.* Its 0.3734 at \(n=16\) is roughly half RoPE's 0.7271 and far below ALiBi's 0.6809. RoPE's fixed frequencies cannot learn the task's spectral shape; ALiBi's single slope learns only "prefer local" but cannot represent band-pass structure. The harmonic prior's advantage is not transfer — it is expressive matching of the spectral signal, which requires learning.

*Second, no single prior wins at every length, and harmonic β has a specific failure mode.* At \(n=32\), continuous RPB beats harmonic (0.3414 vs 0.4403) because the task's \(m=n/2=16\) band falls outside the 8 learned harmonic coefficients. At \(n=64\) and \(n=128\), the two designs converge within noise, and RoPE is competitive at \(n=64\) because its fixed rotation frequencies include useful intermediate bands by construction. **Frozen transfer depends on the target length's spectral support overlapping the learned bands** — the same conclusion §28 drew for RPBs.

*Third, ALiBi is the clear loser.* Its frozen transfer is the worst of the four at every length beyond training (0.5203, 0.4511, 0.4214 at 32/64/128). This is not surprising: the linear \(\Delta\) penalty has a single scalar to encode shape, and its magnitude scales linearly with the Δ range when applied un-normalized, so the same learned slope effectively applies a much stronger penalty at longer lengths. ALiBi's design — a coarse, position-count-based bias — has no spectral content to transfer.

**What this changes in the architectural story.** Harmonic β is the best prior when the task's frequencies are fixed and you are training — but *not* uniquely good for frozen transfer. Continuous RPB matches or beats it at every longer length once the frequency support shifts out of the learned bands, because it re-normalizes by \(n\) and can express shapes the harmonic basis can't. RoPE is competitive at \(n=64\) despite no learning, validating that its fixed rotation frequencies are a reasonable universal inductive bias. **The correct architectural recommendation is not "use harmonic attention," but rather: match the positional prior to the task's spectral content, and retrain (or use a length-normalized continuous prior) when the task's frequency support changes with length.** For the specific setting of stationary signals with a fixed spectral prior, harmonic β remains the strongest learned parameterization we have measured — but it is not a general-purpose winner.

**Artifacts.** [positional_prior_comparison.py](./experiments/positional-prior-comparison/positional_prior_comparison.py), [results.json](./experiments/positional-prior-comparison/results.json), and [README.md](./experiments/positional-prior-comparison/README.md) document the design, RoPE's fixed-frequency implementation, paired bootstrap method, and per-seed runs. Gradient checks: max finite-difference error \(4.72\times10^{-11}\).`;
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
