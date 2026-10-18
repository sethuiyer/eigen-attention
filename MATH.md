The trick: don’t design the similarity function — read it off the symmetry group’s character, and the kernel, the eigenbasis, and the bandwidth come for free.

That’s the whole thing. Everything else in the derivation is bookkeeping.

Here is the move, stated as a recipe you can carry to any problem:

1. Find the group acting on your indices. (Positions on a line or circle, time steps, periodic grid cells, graph automorphisms, channels under a symmetry.)
2. Pick a representation \rho of that group, and take its character \chi(g) = \operatorname{tr}\rho(g).
3. Set your kernel to K(p,q) = \chi(q^{-1}p).

That’s it. You now have:

· Positive definiteness, for free. Characters are positive-definite functions (this is Bochner’s theorem on groups, and it is why the Gram matrix in §11 is PSD without you having to check).
· An eigenbasis, for free. If the group is abelian, the characters are the eigenfunctions, and your kernel matrix is circulant/Toeplitz. You get Fourier diagonalization without computing a single eigenvector.
· A bandwidth knob, for free. The character is bounded and its level sets are the group’s “distance spheres.” Exponentiating it, e^{\beta\chi}, gives you a one-parameter family of valid kernels interpolating between uniform averaging (\beta \to 0) and the identity (\beta \to \infty) — and the spectral multipliers are ratios of Bessel functions, not something you fit.

The hard part is recognizing that this is one move and not three. Most people encounter positivity, diagonalization, and smoothing as separate problems — they prove PSD with a Gram argument, they diagonalize a circulant with a DFT, they tune a temperature by grid search. The trick is that a single character delivers all three simultaneously, because the representation, the kernel, and the spectrum are the same object viewed through three functors.

The simple part is that it’s one line of code:

K = np.cos(2*np.pi*np.subtract.outer(p, q) / n)   # character of Z_n in SO(2)
A = softmax(beta * K, axis=1)



No parameters, no training, no positivity check. The softmax is not the trick — it’s just the normalizer that turns the kernel matrix into a stochastic operator and preserves PSD (Schur product with the nonnegative series e^{\beta s}). The interesting object is the character underneath it.

And here is the part that makes it a genuinely reusable trick rather than a cute observation: the trick tells you exactly when it fails. It works iff the indices carry a group action that the kernel respects. The moment you multiply the kernel by a content-dependent factor — which is precisely what RoPE does, a_p^\top R_{q-p} b_q — you break the translation invariance, and the free eigenbasis evaporates. The 2025 spectral-contraction results are the statement that the breakage is controlled: a Hadamard product with a Toeplitz structure perturbs the spectrum by a bounded amount. So the trick also hands you its own perturbation theory. That’s the sign of a good abstraction — it tells you its domain of validity in the same breath as its construction.

If I had to compress the entire article into one sentence a working engineer could use: whenever your index set has a symmetry, build the kernel from the symmetry’s character, and you get positivity, an FFT, and a temperature dial in one shot — and when you can’t, the deviation is a spectral perturbation you can bound.
…

BRO. This is a powerful abstraction. The central insight is that positive definiteness, Fourier diagonalization, and smoothing can all emerge from the same representation-theoretic construction, rather than being designed independently.

But there are four mathematical distinctions worth making before turning this into a theorem.

1. Your PSD argument is correct.

For a unitary representation ρ
ρ,
K(p,q)=χ(q−1p)=tr⁡(ρ(q)∗ρ(p)).
K(p,q)=χ(q−1p)=tr(ρ(q)∗ρ(p)).

This is a Gram kernel in the Hilbert–Schmidt inner product. PSD follows immediately.

Moreover, eβK
eβK remains PSD for β≥0
β≥0, by the Schur product theorem and the exponential's nonnegative power series.

2. The eigenbasis is free, but the spectrum depends on the representation.

For a finite abelian group, convolution kernels are diagonalized by group Fourier characters. For a nonabelian group, the analogous statement uses irreducible representations and block Fourier analysis.

A character kernel can also be low rank. For example, your cosine kernel on Zn
Zn​ has only two nonzero Fourier modes before exponentiation.

3. The bandwidth claim needs a qualification.

Exponentiating a character gives a valid kernel, but it does not always produce an identity limit.

That requires the character's maximum to occur uniquely at the identity, as happens for a faithful unitary representation. A nonfaithful representation can have several indistinguishable group elements, so the limiting operator averages over a subgroup rather than becoming the identity.

Also, Bessel-function multipliers arise naturally for the circle cosine kernel, but are not universal across arbitrary groups and representations.

4. Row softmax does not preserve PSD in general.

This is the most important correction.

Let
Wpq=eβK(p,q),D=diag⁡(W1).
Wpq​=eβK(p,q),D=diag(W1).

The attention operator is
A=D−1W.
A=D−1W.

Although W
W is symmetric PSD, A
A need not be symmetric. What remains true is
D1/2AD−1/2=D−1/2WD−1/2⪰0.
D1/2AD−1/2=D−1/2WD−1/2⪰0.

Therefore A
A is similar to a PSD matrix and has real, nonnegative eigenvalues. In the translation-invariant case, all row sums coincide, so A=W/c
A=W/c is itself symmetric PSD.

That distinction actually strengthens your story: the group symmetry makes stochastic normalization compatible with the PSD structure.

One further correction: content-dependent RoPE does destroy the fixed convolution eigenbasis in general, but it does not automatically imply a small spectral perturbation. A useful bound requires explicit assumptions on the content factors and the reference operator.

Your strongest reusable formulation is therefore:

    A faithful unitary representation of a finite group induces a positive-definite character kernel. Exponentiating and normalizing that kernel produces a symmetry-equivariant stochastic smoothing operator whose spectral structure is determined by group Fourier analysis. Content dependence breaks exact equivariance, and its spectral effects can be studied through perturbation bounds under suitable assumptions.

And here's the genuinely interesting research direction, bro: instead of learning an unconstrained attention matrix, learn a representation or a small mixture of irreducible characters. Then PSD, equivariance, and a tractable spectral description survive by construction.

That is a much stronger engineering proposition than merely replacing a positional encoding with a cosine.
if your index set has a transitive symmetry, build the kernel from a character to get positivity and a Fourier eigenbasis; you still have to choose the bandwidth, and content dependence turns the exact theory into a perturbation problem.

Bro, that's the mathematically disciplined version. You've removed the overclaims without losing the insight.

One final refinement: transitive symmetry alone does not guarantee an ordinary Fourier eigenbasis. That is automatic for finite abelian groups acting regularly. For nonabelian groups, you generally get a group-Fourier decomposition into representation blocks.

I'd state it as:

    If your index set carries a transitive group action, construct an invariant positive-definite kernel from a unitary character. Group representation theory supplies its spectral decomposition; bandwidth remains a design choice, and content dependence breaks exact equivariance, making perturbation analysis necessary.

The conceptual payoff is still substantial:

Symmetry determines the admissible structure. Representation theory determines the spectrum. Engineering determines the bandwidth. Data determines how far the real operator departs from the idealized one.

That separation is what makes the abstraction reusable.
Attention is a stochastic circulant kernel filter. Its gains are constrained by:
(a) the probability simplex (normalization, nonnegativity of the kernel),
(b) the Fourier structure of the index group (the gains are Fourier coefficients of a probability vector, hence lie in a zonotope, not a box),
(c) the representation (which harmonics are independent is determined by the group action; nonabelian groups give matrix-valued blocks with degenerate eigenfamilies).
 
The Wiener filter is the unconstrained target. The achievable target is the risk-metric projection of the Wiener filter onto the feasible zonotope. Softmax attention with one bandwidth is a one-dimensional curve in this zonotope; multi-band attention is a higher-dimensional exponential submanifold; the Fisher metric is the natural geometry for navigating both.

Bro, this is a substantially stronger formulation. You've moved from constructing a valid attention kernel to characterizing the entire space of spectral filters that stochastic attention can implement.

And the most important insight is the distinction between the optimal unconstrained filter and the optimal realizable attention filter.

There are three mathematical refinements that make this precise.
1. The feasible spectral set really is a polytope

For a circulant attention operator on Zn
Zn​,
Apq=a(p−q) mod n,aj≥0,∑jaj=1.
Apq​=a(p−q)modn​,aj​≥0,j∑​aj​=1.

Its Fourier gains are
gk=∑j=0n−1aje−2πikj/n.
gk​=j=0∑n−1​aj​e−2πikj/n.

Consequently,
G=FΔn−1
G=FΔn−1​

where F
F is the discrete Fourier transform and Δn−1
Δn−1 is the probability simplex.

This is the convex hull of the Fourier images of the simplex vertices. It can be described as a constrained zonotope, although Fourier simplex polytope is the more precise general term.

The gains are coupled. They cannot be independently selected from [−1,1]
[−1,1].

One subtlety: stochasticity alone does not guarantee nonnegative Fourier eigenvalues. A symmetric stochastic circulant matrix can have negative gains. If attention is constructed by exponentiating a positive-definite character kernel, its spectral feasible set is smaller.
2. Wiener filtering becomes constrained quadratic optimization

Suppose the signal and noise are stationary, with spectral powers Sk
Sk​ and Nk
Nk​.

The unconstrained Wiener gain is
wk=SkSk+Nk.
wk​=Sk​+Nk​Sk​​.

The mean-squared estimation risk can be written as
R(g)=R(w)+∑k(Sk+Nk)∣gk−wk∣2.
R(g)=R(w)+k∑​(Sk​+Nk​)∣gk​−wk​∣2.

Therefore, the optimal realizable stochastic circulant filter is
g⋆=arg⁡min⁡g∈G∑k(Sk+Nk)∣gk−wk∣2
g⋆=argg∈Gmin​k∑​(Sk​+Nk​)∣gk​−wk​∣2​

This is exactly a weighted projection of the Wiener solution onto the Fourier image of the probability simplex.

Importantly, this is the risk metric, not the Fisher metric. They describe different geometries.
3. Softmax is an exponential-family restriction

For character-derived features ϕr(j)
ϕr​(j), define
aθ(j)=exp⁡(∑rθrϕr(j))∑ℓexp⁡(∑rθrϕr(ℓ)).
aθ​(j)=∑ℓ​exp(∑r​θr​ϕr​(ℓ))exp(∑r​θr​ϕr​(j))​.

Then
g(θ)=Faθ.
g(θ)=Faθ​.

A single temperature parameter traces a one-dimensional curve inside G
G. Multiple independent character features produce a higher-dimensional exponential family, whose image under F
F is generally a curved manifold, not a linear subspace.

The natural Fisher information matrix is
Irs(θ)=Cov⁡aθ[ϕr,ϕs]
Irs​(θ)=Covaθ​​[ϕr​,ϕs​]​

This gives a principled natural-gradient geometry for optimizing the attention distribution.

However, Fisher geometry does not automatically minimize Wiener risk. The risk supplies the objective; Fisher information supplies the local optimization metric.
The deeper consequence

There are now three nested optimization problems:
w⏟Unconstrained Wiener⟶g⋆∈FΔ⏟Best stochastic filter⟶g(θ⋆)⏟Best parameterized attention.
Unconstrained Wiener
w​​⟶Best stochastic filter
g⋆∈FΔ​​⟶Best parameterized attention
g(θ⋆)​​.

This separates two sources of performance loss:
R(g(θ⋆))−R(w)=R(g⋆)−R(w)⏟Stochastic feasibility gap+R(g(θ⋆))−R(g⋆)⏟Parameterization gap
R(g(θ⋆))−R(w)=Stochastic feasibility gap
R(g⋆)−R(w)​​+Parameterization gap
R(g(θ⋆))−R(g⋆)​​​

That decomposition is valuable because it tells you whether an attention mechanism is limited by the probability-simplex constraint itself or merely by an impoverished parameterization.

One caveat about the nonabelian extension: general stochastic group convolutions produce matrix-valued Fourier multipliers, while central kernels constructed from characters act as scalars on irreducible representation blocks. That distinction determines which spectral degrees of freedom are actually accessible.

My conclusion: the central theorem here isn't simply that attention is a spectral filter. It's that stationary stochastic attention is a constrained spectral estimator, and its approximation error can be decomposed exactly into a feasibility gap and a parameterization gap.

That's a concrete mathematical framework for comparing attention architectures, not just an analogy to signal processing.
The single hardest question in this program: Which frequency responses can a nonnegative normalized attention mechanism realize? — your question — has the answer: the zonotope generated by the characters of the index group, intersected with the constraint that the non-parameterized coefficients are consistent with a nonnegative kernel. The zonotope part is classical convex geometry. The consistency part is where the representation theory enters, and it's the part that makes the problem attention-specific rather than generic kernel regression.

Bro, you're very close to an exact characterization theorem. But there's one distinction I would preserve: the full realizable set is a Fourier image of a simplex, not generally a zonotope. The representation-theoretic consistency constraints become interesting when you observe or parameterize only part of the spectrum.

For a finite abelian group G
G, define a nonnegative normalized attention kernel a:G→R≥0
a:G→R≥0​, with ∑ga(g)=1
∑g​a(g)=1.

Its frequency response is
λχ=∑g∈Ga(g)χ(g)‾.
λχ​=g∈G∑​a(g)χ(g)​.

Then the exact feasibility theorem is
λ is realizable  ⟺  a(g)=1∣G∣∑χ∈G^λχχ(g)≥0∀g∈G,λ1=1.
λ is realizable⟺a(g)=∣G∣1​χ∈G
∑​λχ​χ(g)≥0∀g∈G,λ1​=1.​

Together with conjugate symmetry, these are necessary and sufficient conditions.

Equivalently,
FG=conv⁡{(χ(g)‾)χ∈G^:g∈G}.
FG​=conv{(χ(g)​)χ∈G
​:g∈G}.

This is the Fourier simplex polytope. Because the full Fourier transform is invertible, it is affinely equivalent to the original probability simplex.

Now your consistency observation becomes particularly powerful when only a subset S⊆G^
S⊆G
 of frequencies is specified:
λS is feasible  ⟺  ∃ λG^∖S such that F−1λ≥0,λ1=1.
λS​ is feasible⟺∃λG
∖S​ such that F−1λ≥0,λ1​=1.​

That is a finite-dimensional positive-definite extension problem.

The unspecified Fourier coefficients cannot simply be selected independently. They must jointly complete a nonnegative probability kernel.

There is also a beautiful equivalent statement using Bochner's theorem:
λ is realizable  ⟺  λ1=1and[λχ−1ψ]χ,ψ∈G^⪰0.
λ is realizable⟺λ1​=1and[λχ−1ψ​]χ,ψ∈G
​⪰0.

Here, positive definiteness is imposed on the frequency-response function over the dual group. That is distinct from requiring the spatial attention matrix itself to be PSD.

For nonabelian groups, the corresponding objects are matrix-valued Fourier coefficients,
a^(ρ)=∑g∈Ga(g)ρ(g)∗,
a
(ρ)=g∈G∑​a(g)ρ(g)∗,

and realizability requires a common probability distribution a
a generating every block. Central attention kernels restrict these blocks to scalar multiples of the identity, while general group-convolution kernels need not.

The key research distinction is therefore:

    Full spectrum: an exactly characterized convex polytope.

    Partial spectrum: a constrained positive-definite completion problem.

    Character-parameterized attention: a restricted family inside that feasible polytope.

    Content-dependent attention: generally no longer a single group-convolution operator.

And here's the part I find most consequential: the feasibility problem is not inherently difficult for a finite abelian group. It is a linear feasibility problem in the spatial probabilities.

The harder question is architectural expressivity: given a fixed collection of characters, a finite number of temperature parameters, and a specified attention parameterization, which points of that feasible polytope are reachable?

That is where representation theory, convex geometry, exponential-family geometry, and approximation theory genuinely meet.





