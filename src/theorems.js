export const theoremAnnotations = [
  {
    key: "gram-realizability",
    chapter: 16,
    title: "Exact realizability and minimum feature dimension",
    summary:
      "Shared query/key dot products realize exactly those cyclic kernels whose nonconstant log-Fourier coefficients are nonnegative.",
    body: String.raw`This is an addition to the manuscript, not a claim of publication priority.

Let \(\pi\) be a strictly positive symmetric probability distribution on \(\mathbb Z_n\):

\[
\pi_r>0,\qquad \sum_{r=0}^{n-1}\pi_r=1,\qquad \pi_r=\pi_{-r}.
\]

Set \(A_{ij}=\pi_{j-i}\) and let

\[
\ell_m=\sum_{r=0}^{n-1}\log(\pi_r)e^{-2\pi i mr/n}
\]

be the Fourier coefficients of the log-kernel. They are real because \(\pi\) is real and even.

There exist real feature vectors \(x_0,\ldots,x_{n-1}\) such that

\[
A_{ij}=\frac{\exp(x_i^\top x_j)}{\sum_k\exp(x_i^\top x_k)}
\]

if and only if

\[
\boxed{\ell_m\geq0\quad\text{for every }m\neq0.}
\]

When this condition holds, the minimum Gram rank is

\[
\boxed{d_{\min}=\#\{m\neq0:\ell_m>0\}.}
\]

A conjugate Fourier pair contributes two real dimensions; a nonzero Nyquist mode contributes one. The uniform kernel has rank zero.

**Proof sketch.** Let \(L_{ij}=\log\pi_{j-i}\). If a symmetric score matrix \(S\) has row-softmax equal to \(A\), then \(S_{ij}=L_{ij}+c_i\). Symmetry of both \(S\) and \(L\) forces all \(c_i\) equal, so \(S=L+c\mathbf1\mathbf1^\top\). Adding the rank-one matrix changes only the constant Fourier mode. Since \(S\) must be positive semidefinite, every nonconstant \(\ell_m\) must be nonnegative. Conversely, when those coefficients are nonnegative, choose \(c=-\ell_0/n\). Then \(S\) is PSD; factor it as \(XX^\top\). The constant shift cancels under softmax, and the rank is exactly the number of positive nonconstant modes.

**Four positions expose the gap.** Write a symmetric four-position spectrum as \((1,x,y,x)\). Its kernel is

\[
\pi=\frac14(1+2x+y,\;1-y,\;1-2x+y,\;1-y).
\]

Strict positivity and Gram realizability reduce to

\[
\boxed{x\geq0,\qquad y\geq x^2.}
\]

Now take

\[
\pi=\frac1{17}(8,4,1,4),\qquad
g=\left(1,\frac7{17},\frac1{17},\frac7{17}\right).
\]

Every kernel entry is positive and every spectral gain is positive. But

\[
\frac1{17}<\left(\frac7{17}\right)^2,
\qquad
\ell_2=\log(1/2)<0.
\]

This valid stochastic convolution cannot be represented by shared query/key dot products in any embedding dimension. Increasing the feature dimension cannot remove the wrong-sign log-spectrum obstruction.

The three feasibility questions are therefore distinct:

| Constraint | Exact question |
| --- | --- |
| Probability feasibility | Is the inverse Fourier kernel nonnegative? |
| Gram feasibility | Are its nonconstant log-Fourier coefficients nonnegative? |
| Dimension feasibility | Does the embedding cover the required log-spectrum rank? |

The theorem is a cyclic form of conditional positive definiteness. The log-kernel criterion and the attention-specific rank statement sit on that foundation. For the classical results, see [Bhatia and Jain](https://arxiv.org/html/1409.7479v1); attention as nonparametric kernel regression appears in [Nguyen et al.](https://arxiv.org/abs/2206.00206). Exponential-family covariance and moment-polytope identities are standard material in [Wainwright and Jordan](https://wainwrightwork.github.io/publications.html); recent attention-specific exponential-family geometry appears in [Rubacher](https://proceedings.mlr.press/v306/rubacher26a.html). The realizability formulation and the architecture-induced risk gap are the development presented here.

The probability constraint applies to an individual stochastic head or a nonnegative mixture of heads. A multi-head layer with learned value maps and output projection is generally a signed combination of head outputs, not itself a stochastic averaging operator. State the result per head, then analyze channel mixing separately.

With all independent symmetric gains retained, the feasible set is more specifically a simplex: symmetric orbit masses form a simplex, and the cosine transform is invertible on even functions. Lower-dimensional gain plots are projections of that simplex.

For a concrete statistical consequence, choose nonconstant signal powers \(S_1=S_3=7\sigma^2/10\) and \(S_2=\sigma^2/16\). The Wiener gains are \(7/17,1/17,7/17\). The best shared-feature Gram kernel has excess risk at least \(0.0108523\,\sigma^2\). This is an architecture-induced gap beyond probability feasibility.`,
  },
  {
    key: "sharp-stability",
    chapter: 22,
    title: "A dimension-free stability bound under content modulation",
    summary:
      "Bounded exponential reweighting changes a doubly stochastic reference by at most sinh(delta), with no sequence-length factor.",
    body: String.raw`This is an addition to the manuscript, not a claim of publication priority.

Let \(P\) be a doubly stochastic reference attention matrix:

\[
P\geq0,\qquad P\mathbf1=\mathbf1,\qquad \mathbf1^\top P=\mathbf1^\top.
\]

Define content modulation by

\[
A_{ij}=\frac{P_{ij}e^{E_{ij}}}{\sum_kP_{ik}e^{E_{ik}}},
\]

and assume each row of \(E\) has oscillation at most \(2\delta\):

\[
\max_jE_{ij}-\min_jE_{ij}\leq2\delta.
\]

Then for every vector \(v\),

\[
\boxed{
\|(A-P)v\|_2^2
\leq\sinh^2(\delta)\bigl(\|v\|_2^2-\|Pv\|_2^2\bigr).
}
\]

Therefore,

\[
\boxed{\|A-P\|_{2\to2}\leq\sinh(\delta).}
\]

There is no sequence-length factor. If \(P\) is circulant and \(\psi_m\) is a unit-norm Fourier eigenvector with eigenvalue \(\lambda_m\), then

\[
\boxed{
\|A\psi_m-\lambda_m\psi_m\|_2
\leq\sinh(\delta)\sqrt{1-|\lambda_m|^2}.
}
\]

**Proof sketch.** Fix a row and write \(p_j=P_{ij}\), \(X_j=e^{E_{ij}}\), \(\mu=\mathbb E_pX\), \(r=X/\mu\). The tilted row has likelihood ratio \(r\). Since \(X\in[e^{-\delta},e^\delta]\),

\[
\mathbb E_p(r-1)^2=\frac{\operatorname{Var}_p(X)}{\mu^2}\leq\sinh^2\delta.
\]

Centering within the row and applying Cauchy–Schwarz gives the stated squared-norm bound. Dropping the nonnegative \(\|Pv\|^2\) term gives the operator bound. The constant is sharp: for the uniform reference, a two-level perturbation with \(+\delta\) on a fraction \(1/(1+e^{2\delta})\) of columns approaches equality as \(n\) grows.

**Comparison with Section 22.** The article’s earlier bound is

\[
\|A-P\|_2\leq2\sqrt n\,\tanh(\delta/2).
\]

The new bound behaves as \(\delta\) for small \(\delta\), not \(\sqrt n\,\delta\). For example, at \(n=4096\) and \(\delta=0.05\), the earlier bound is about \(3.1993\), while \(\sinh(0.05)\approx0.05002\). For large \(\delta\), either bound may be smaller, so retain their minimum.

The mode-resolved inequality is the useful part: a frequency that \(P\) nearly preserves is less disturbed by bounded content modulation. The constant mode is unchanged exactly.

**Depth corollary.** Let \(P\) be circulant, \(Q=I-\mathbf1\mathbf1^\top/n\), \(\rho=\max_{m\neq0}|\lambda_m(P)|<1\), and \(\eta=\sinh\delta\). If

\[
\eta<\sqrt{\frac{1-\rho}{1+\rho}},
\]

then

\[
\gamma=\rho+\eta\sqrt{1-\rho^2}<1
\]

and

\[
\|QA_L\cdots A_1v\|_2\leq\gamma^L\|Qv\|_2.
\]

Bounded content modulation can therefore preserve the contraction of repeated averaging, though the limiting consensus value need not equal the original mean. Learned value maps, residuals, and other transformer operations require separate analysis.`,
  },
];
