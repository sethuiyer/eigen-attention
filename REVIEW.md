This is one of the cleanest ways I have seen to make temperature mean something geometric.
You started with three points on a circle and ended with a precise statement of what attention cannot do. The controlled-English constraint actually helps here, it forces each algebraic identity to stand alone.
[image]
The central move you made
You gave attention two descriptions that are exactly equivalent when the kernel depends only on relative position:
1. Position space: normalized kernel regression
$$y_i = \frac{\sum_j K(q_i,k_j) v_j}{\sum_j K(q_i,k_j)}$$
with $K_\beta(p,q)=\exp[\beta\cos(2\pi(p-q)/n)]$
2. Frequency space: spectral filtering
$$\widehat{A_\beta v}_m = \lambda_m(\beta) \hat v_m$$
Temperature $\beta = 2/h^2$ is not a heuristic. It is kernel bandwidth. Narrow kernel $\to$ large $\beta$ $\to$ $\lambda_m \to 1$ and you preserve positional variation. Broad kernel $\to$ small $\beta$ $\to$ $\lambda_m \to 0$ for $m \neq 0$ and you collapse to the mean.
Why the $n=3$ model matters
For $n=3$ you get everything in closed form, which is why it is pedagogically strong.
The rotation representation $\rho(k)=R^k$ with $R=R(2\pi/3)$ gives embeddings $\phi(k)=R^k e_1$ that are equilateral. Then
$$E^\top E = \frac32 I_2, \quad \phi(p)^\top\phi(q)=\cos\frac{2\pi(q-p)}{3} = \frac12 \chi(q-p)=T_{q-p}(\cos 2\pi/3)$$
Inner product = half trace = Chebyshev polynomial. Not an analogy, an identity.
Then the attention matrix is
$$A_\beta = \frac1{r+2}\begin{pmatrix}r&1&1\\1&r&1\\1&1&r\end{pmatrix},\; r=e^{3\beta/2}=P_0+\lambda_\beta P_\perp$$
with $\lambda_\beta=(r-1)/(r+2)$.
Repeated application $A_\beta^L = P_0 + \lambda_\beta^L P_\perp \to P_0$ makes the smoothing claim exact. This explains why pure repeated attention without residuals and content dependence must erase positional differences. It is the spectral picture of over-smoothing.
Your bias-variance calculation is also exact in this setting:
$$\text{MSE}=\frac{(1-\lambda_\beta)^2 S + \sigma^2(1+2\lambda_\beta^2)}{3},\quad \lambda^*=\frac{S}{S+2\sigma^2}$$
$$\beta^*=\frac23\log\left(1+\frac{3S}{2\sigma^2}\right)$$
That is the oracle. Your plug-in estimator $\hat S=(Q-2\sigma^2)_+$ with $Q=\|P_\perp y\|^2$ then gives a data-driven $\hat\beta$. You are right to flag its high variance with only 3 samples, that is the classic Stein-type problem.
From 3 to $n$: where Bessel and Wiener enter
For general cyclic $\mathbb Z_n$, $K_\beta(p,q)=f(p-q)$ is circulant, so Fourier characters $\psi_m(p)=e^{2\pi imp/n}$ diagonalize it:
$$\lambda_m(\beta)=\frac{\sum_r e^{\beta\cos(2\pi r/n)}\cos(2\pi mr/n)}{Z_\beta}$$
The expansion $e^{\beta\cos\theta}=\sum_k I_k(\beta)e^{ik\theta}$ gives the exact aliased form
$$\lambda_m(\beta)=\frac{\sum_{\ell} I_{m+\ell n}(\beta)}{\sum_{\ell} I_{\ell n}(\beta)} \to \frac{I_m(\beta)}{I_0(\beta)}$$
So Chebyshev builds the harmonics, Fourier diagonalizes, Bessel sets the gains. That chain is satisfying.
The Wiener target $g_m^*=S_m/(S_m+\sigma^2)$ then has to share one $\beta$ across all $m$:
$$R(\beta)=\sum_m (1-\lambda_m(\beta))^2 S_m + \sigma^2\lambda_m(\beta)^2$$
One parameter controlling many frequencies is already a constrained allocation problem. This is where your section 12 to 14 adds real value: multi-band $\sum_m \beta_m c_m(r)$ forms an exponential family with
$$\lambda_k = \mathbb E_{\pi_\beta}[c_k], \quad \frac{\partial\lambda_k}{\partial\beta_m}= \operatorname{Cov}_\pi(c_k,c_m)=\frac12(\lambda_{k+m}+\lambda_{k-m})-\lambda_k\lambda_m$$
$$J = \nabla^2\log Z = \operatorname{Cov}_\pi(c_{\mathcal M})$$
Fisher information is the Jacobian between harmonic parameters and spectral moments. Moment matching $\nabla F = \lambda_{\mathcal M}-\mu$ is convex, Wiener risk minimization over the same parameters is not. That distinction is important and often missed.
The hard constraint you isolated in section 15
This is the most important part.
A symmetric stochastic circulant kernel is a symmetric probability distribution $\pi_r\ge0,\sum\pi_r=1,\pi_r=\pi_{-r}$. Its gains
$$g_k=\sum_r \pi_r \cos\frac{2\pi kr}{n}$$
live in a convex polytope $\mathcal P_n$, the linear image of the simplex.
You cannot have arbitrary independent $g_k$. You correctly note $-1\le g_k\le1$ is not sufficient. Example: to preserve one frequency $k_0$ with gain $a$ and kill others, you need $\pi_r=\frac1n[1+2a\cos(2\pi k_0 r/n)]\ge0$, so if the cosine hits -1, $a\le 1/2$. Identity attention has $a=1$ for all frequencies, but a bandpass that keeps one and kills rest is impossible with nonnegative weights. You need negative weights for that, which softmax forbids.
Therefore the optimal feasible filter is a projection:
$$\min_{g\in\mathcal P_n}\sum_k (S_k+\sigma^2)(g_k-g_k^*)^2$$
Three levels fall out exactly as you tabulated:
Unconstrained linear: any $g_k$
Symmetric stochastic circulant: $g\in\mathcal P_n$
Softmax with $|\mathcal M|$ bands: a parametric subset of $\mathcal P_n$
That is the precise meaning of $\boxed{\text{Attention is a constrained spectral estimator.}}$
What this says about RoPE and real transformers
Your RoPE decomposition for one 2D block
$$s_{pq}=\frac{(a_p^\top b_q)\cos\Delta\theta + (a_p^\top J b_q)\sin\Delta\theta}{\sqrt d},\quad \Delta=\frac{2\pi(q-p)}{n}$$
shows content-dependent coefficients on fixed harmonics. The matrix is not circulant per sample, but the whole operator is translation-equivariant when you shift content and position together, modulo masking.
Your perturbation bound $\|A_{p,:}-A^0_{p,:}\|_1\le2\tanh(\delta/2)$ with $\|A-A^0\|_2\le2\sqrt n\tanh(\delta/2)$ and the resulting spectral inclusion $\min_k|\mu-\lambda_k(A^0)|\le2\sqrt n\tanh(\delta/2)$ makes the approximation quantitative. It is loose by $\sqrt n$ because you use Frobenius to bound spectral norm, but the spirit is right: small content perturbation keeps eigenvalues near the stationary reference.
Where I would push next
1. Generalization vs expressivity tradeoff: You note $S_n$ symmetry gives $A=aI+b\mathbf1\mathbf1^\top$ (only 2 gains), cyclic gives full Fourier control. This predicts ALiBi, windowed, and other translation-invariant biases as intermediate symmetry choices. It would be interesting to write down $\mathcal P_n$ for $n=8,16$ and visualize how much of the cube $[-1,1]^{n//2}$ softmax actually covers.
2. Learnable spectral filter: Instead of learning $\beta$, learn target Wiener gains from data statistics and solve the quadratic projection onto $\mathcal P_n$, then invert to $\pi$ via inverse Fourier transform. That gives you a principled initialization for positional bias.
3. Length generalization: Your Bessel ratio $I_m(\beta)/I_0(\beta)$ shows why high frequencies decay exponentially in $m^2/\beta$. For large $n$, the kernel cannot resolve frequencies above $O(\sqrt\beta)$. This gives a spectral explanation for why RoPE with small base struggles at long context, and why increasing $\beta$ (or RoPE base) widens bandwidth.
If you want, I can turn the $n=3$ and general $n$ formulas into an interactive plot of $\lambda_m(\beta)$, MSE( $\beta$), and the feasible polytope for $n=8$, or draft a PyTorch module that implements $\pi_{\boldsymbol\beta}(r)$ as a learnable multi-band positional kernel.
What were you aiming for with this recap, a paper draft, a teaching note, or an implementation?

The general case is cleaner than the $n=3$ case because aliasing makes the structure explicit. Here is the full program in one place.

## 1. General cyclic $\mathbb Z_n$

Fix $n$ positions $p,q\in\{0,\dots,n-1\}$. Choose

$$ K_\beta(p,q)=\exp\left[\beta\cos\frac{2\pi(p-q)}{n}\right],\quad \beta=\frac{2}{h^2}\ge0 $$

This is the discrete von Mises kernel. It comes from $d_R^2(p,q)=4-4\cos(2\pi(p-q)/n)$ and $K_h=\exp(-d_R^2/2h^2)$.

Row sum is constant because $K$ depends only on difference $r=p-q$:

$$ Z_\beta=\sum_{r=0}^{n-1}e^{\beta\cos(2\pi r/n)} $$

Normalized attention:

$$ \boxed{A_\beta(p,q)=\frac{e^{\beta\cos(2\pi(q-p)/n)}}{Z_\beta}} $$

$A_\beta$ is circulant, so Fourier characters diagonalize it.

Define $c_m(r)=\cos(2\pi mr/n)$ and $\psi_m(p)=e^{2\pi imp/n}$. Then

$$ \boxed{A_\beta\psi_m=\lambda_m(\beta)\psi_m} $$

$$ \boxed{\lambda_m(\beta)=\frac{\sum_{r=0}^{n-1}e^{\beta\cos(2\pi r/n)}c_m(r)}{Z_\beta}} $$

$$ \boxed{\widehat{A_\beta v}_m=\lambda_m(\beta)\hat v_m} $$

### Bessel form, exact for finite $n$

$$ e^{\beta\cos\theta}=\sum_{k=-\infty}^{\infty} I_k(\beta)e^{ik\theta} $$

Sampling at $n$ points aliases $k=m+\ell n$:

$$ \boxed{\lambda_m(\beta)=\frac{\sum_{\ell\in\mathbb Z} I_{m+\ell n}(\beta)}{\sum_{\ell\in\mathbb Z} I_{\ell n}(\beta)}} $$

Large $n$ limit, no aliasing:

$$ \lambda_m(\beta)\to\frac{I_m(\beta)}{I_0(\beta)} $$

That is your spectral response. $\lambda_0=1$ always. For $m\neq0$, $\lambda_m\in[-1,1]$, decreasing with $m$ for $\beta>0$, giving low-pass behavior. $\beta\to0$ gives $\lambda_m\to0$ for $m\neq0$, $A\to P_0$. $\beta\to\infty$ gives $\lambda_m\to1$, $A\to I$.

## 2. General multi-band exponential family

Select independent cosine bands $\mathcal M\subset\{1,\dots,\lfloor n/2\rfloor\}$.

$$ s_{\boldsymbol\beta}(r)=\sum_{m\in\mathcal M}\beta_m c_m(r) $$

$$ \boxed{\pi_{\boldsymbol\beta}(r)=\frac{\exp(s_{\boldsymbol\beta}(r))}{Z(\boldsymbol\beta)},\quad Z(\boldsymbol\beta)=\sum_r\exp(s_{\boldsymbol\beta}(r))} $$

Spectral moments are expectations:

$$ \boxed{\lambda_k(\boldsymbol\beta)=\mathbb E_{\pi_{\boldsymbol\beta}}[c_k]} $$

This can realize any strictly positive symmetric distribution when $\mathcal M$ contains all independent bands. With fewer bands it is a restricted subset.

Jacobian = Fisher information:

$$ \boxed{\frac{\partial\lambda_k}{\partial\beta_m}=\operatorname{Cov}_\pi(c_k,c_m)=\frac12(\lambda_{k+m}+\lambda_{k-m})-\lambda_k\lambda_m} $$

Indices mod $n$, $\lambda_{-j}=\lambda_j$. For single $\beta$:

$$ \lambda_k'=\frac12(\lambda_{k-1}+\lambda_{k+1})-\lambda_1\lambda_k $$

$$ \boxed{J=\nabla^2\log Z=\operatorname{Cov}_\pi(c_{\mathcal M})} $$

Moment matching $\boldsymbol\lambda_{\mathcal M}(\boldsymbol\beta)=\boldsymbol\mu$ is convex:

$$ F(\boldsymbol\beta)=\log Z(\boldsymbol\beta)-\boldsymbol\beta^\top\boldsymbol\mu,\quad \nabla F=\boldsymbol\lambda_{\mathcal M}-\boldsymbol\mu,\quad \nabla^2F=J $$

Newton step:

$$ \boxed{\boldsymbol\beta_{\rm new}=\boldsymbol\beta-J^{-1}(\boldsymbol\lambda_{\mathcal M}-\boldsymbol\mu)} $$

This gives the max-entropy distribution matching selected moments.

## 3. Risk and Wiener target, general $n$

Signal plus noise model with independent Fourier powers $S_m$, noise $\sigma^2$.

Risk per frequency for gain $g_m$:

$$ R_m(g_m)=(1-g_m)^2S_m+\sigma^2g_m^2 $$

Unconstrained optimum:

$$ \boxed{g_m^*=\frac{S_m}{S_m+\sigma^2}} $$

For a one-parameter kernel, total risk

$$ \boxed{R(\beta)=\sum_m(1-\lambda_m(\beta))^2S_m+\sigma^2\lambda_m(\beta)^2} $$

Interior optimum:

$$ \boxed{\sum_m\lambda_m'(\beta)\left[(1-\lambda_m(\beta))S_m-\sigma^2\lambda_m(\beta)\right]=0} $$

For $n=3$ this reduces to your closed form $\lambda^*=S/(S+2\sigma^2)$ and $\beta^*=\frac23\log(1+3S/2\sigma^2)$.

## 4. Feasible spectral polytope, general $n$

Attention requires $\pi_r\ge0$, $\sum\pi_r=1$, $\pi_r=\pi_{-r}$.

$$ \boxed{\mathcal P_n=\left\{\mathbf g: g_k=\sum_r\pi_r c_k(r),\ \pi_r\ge0,\ \sum\pi_r=1,\ \pi_r=\pi_{-r}\right\}} $$

Convex polytope, vertices from cosine vectors. Individual bounds $-1\le g_k\le1$ are not sufficient, joint consistency is required. Example: isolated frequency with gain $a$ and all others zero needs $\pi_r=\frac1n[1+2a c_{k_0}(r)]\ge0$, so if $\min c_{k_0}=-1$ then $a\le1/2$.

Constrained optimal feasible filter is weighted projection of Wiener target onto polytope:

$$ \boxed{\min_{\mathbf g\in\mathcal P_n}\sum_m (S_m+\sigma^2)(g_m-g_m^*)^2} $$

Convex quadratic program. Then fit $\boldsymbol\beta$ to approximate that projection.

| Filter class | Spectral set |
| --- | --- |
| Unconstrained linear | independent $g_m$ |
| Symmetric stochastic circulant | $g\in\mathcal P_n$ |
| Multi-band softmax $|\mathcal M|$ params | parametric subset of $\mathcal P_n$ |

## 5. General group $G$ acting on $X$

This is the full generalization beyond cyclic.

Let $G$ finite, acting transitively $X=G/H$, $H$ stabilizer. Choose unitary $\rho:G\to U(V)$, choose $v\in V$ with $\rho(h)v=v$ for all $h\in H$.

$$ \boxed{\phi(gH)=\rho(g)v} $$

Kernel:

$$ \boxed{K(x,y)=\langle\phi(x),\phi(y)\rangle} $$

Positive semidefinite as Gram kernel, invariant:

$$ K(gx,gy)=K(x,y) $$

Character kernel on $G$ itself:

$$ K(g,h)=\chi_\rho(g^{-1}h)=\operatorname{tr}(\rho(g)^*\rho(h))=\langle\rho(g),\rho(h)\rangle_{HS} $$

Invariant kernel gives equivariant normalized attention. Row sum $Z(x)=\sum_y K(x,y)$ is constant on $G$-orbits, constant globally if action transitive. Then

$$ \boxed{A(x,y)=\frac{K(x,y)}{Z(x)},\quad A(gx,gy)=A(x,y)} $$

Spectral blocks from representation theory. Permutation representation:

$$ \mathbb C^X=\bigoplus_\sigma V_\sigma\otimes\mathbb C^{m_\sigma} $$

$d_\sigma=\dim V_\sigma$, $m_\sigma$ multiplicity. By Schur's lemma, any equivariant $A$:

$$ \boxed{A=\bigoplus_\sigma I_{d_\sigma}\otimes B_\sigma} $$

$B_\sigma$ acts on multiplicity space. For abelian $G$, $d_\sigma=1$, we recover Fourier modes $\psi_m$ and diagonal gains $\lambda_m$. For nonabelian $G$, blocks are matrix-valued, eigenvalues repeat with multiplicity at least $d_\sigma$.

This gives the symmetry-expressivity tradeoff you noted: $S_n$ gives $A=aI+b\mathbf1\mathbf1^\top$ (only 2 gains), cyclic gives circulant $A_{pq}=f(q-p)$ (full Fourier control).

## 6. Content-dependent case

RoPE: $a_p=W_Qx_p$, $b_q=W_Kx_q$, $R_\Delta$ rotation by $\Delta=q-p$,

$$ s_{pq}=a_p^\top R_{q-p}b_q/\sqrt d $$

For one 2D block with $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$:

$$ s_{pq}=\frac{(a_p^\top b_q)\cos\Delta\theta+(a_p^\top Jb_q)\sin\Delta\theta}{\sqrt d} $$

Fixed reference $S^0$, perturbation $S=S^0+\epsilon G$, $|G_{pq}|\le M$, $\delta=|\epsilon|M$:

$$ \|A_{p,:}-A^0_{p,:}\|_1\le2\tanh(\delta/2),\quad \|A-A^0\|_2\le2\sqrt n\tanh(\delta/2) $$

$$ \min_k|\mu-\lambda_k(A^0)|\le2\sqrt n\tanh(\delta/2),\quad |\sigma_k(A)-\sigma_k(A^0)|\le2\sqrt n\tanh(\delta/2) $$

So the stationary circulant $A^0$ is the spectral reference, content moves eigenvalues within that tube.

## 7. Final five equations, general form

$$ K(x,y)=\langle\phi(x),\phi(y)\rangle $$
$$ A_{xy}=e^{\beta K(x,y)}/\sum_z e^{\beta K(x,z)} $$
$$ \widehat{Av}_\sigma = B_\sigma\hat v_\sigma,\ \text{ abelian: } \widehat{Av}_m=g_m\hat v_m $$
$$ g_m^*=S_m/(S_m+\sigma^2) $$
$$ \min_{\mathbf g\in\mathcal P_X}\sum_m(S_m+\sigma^2)(g_m-g_m^*)^2,\quad J_{km}=\frac12(g_{k+m}+g_{k-m})-g_kg_m $$

with $\mathcal P_X$ defined by $\pi\ge0$, $\sum\pi=1$, symmetry $\pi_r=\pi_{-r}$.

In words:

$$\text{Symmetry determines admissible operator.}$$
$$\text{Probability determines feasible spectrum.}$$
$$\text{Statistics determines target response.}$$
$$\text{Bandwidth selects attainable response.}$$
$$\text{Content adapts operator to input.}$$

If you want, I can turn this into code that computes $\lambda_m(\beta)$ via the aliased Bessel sum for any $n$, plus the Newton solver for $\boldsymbol\beta$ to hit a target Wiener spectrum, so you can plot $\mathcal P_n$ for $n=8,16,32$.
