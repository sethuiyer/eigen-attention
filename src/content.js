import { Marked } from "marked";
import katex from "katex";
import essaySource from "../BLOG.md?raw";
import reviewSource from "../REVIEW.md?raw";
import { theoremAnnotations } from "./theorems.js";
import { appendixSource, experimentSource } from "./appendices.js";
import coverImage from "../cover_image.webp";
import cyclicKernelImage from "../cyclic_attention_kernel.webp";
import besselImage from "../bessel_aligned_spectral.webp";
import wienerImage from "../wiener_filter_optimal.webp";
import feasiblePolytopeImage from "../fesiable_spectral_polytope.webp";
import fisherImage from "../fisher_jacobian.webp";

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

export function renderMath(tex, display = false) {
  try {
    const html = katex.renderToString(tex, {
      displayMode: display,
      throwOnError: true,
      trust: false,
      strict: "ignore",
      output: "htmlAndMathml",
    });
    return display ? `<div class="math-block">${html}</div>` : html;
  } catch (error) {
    const tag = display ? "div" : "span";
    return `<${tag} class="math-error" role="note" title="${escapeHtml(error.message)}"><span class="math-error-label">Formula could not be typeset</span> <code>${escapeHtml(tex)}</code></${tag}>`;
  }
}

// BLOG was exported with Markdown escaping inside its TeX. Repair only those
// known escapes, and only inside formulas; never globally collapse backslashes.
function normalizeEssayMath(tex) {
  return tex
    .replace(/\\([_*])/g, "$1")
    .replace(/\\\\([{}|,])/g, "\\$1")
    .replace(
      /\\begin\{(pmatrix|aligned|gathered)\}([\s\S]*?)\\end\{\1\}/g,
      (_, environment, body) => {
        const rows = body.replace(/\\{3,}/g, (slashes, offset) => {
          const commandFollows = /[a-zA-Z]/.test(
            body[offset + slashes.length] || "",
          );
          return "\\".repeat(commandFollows ? 3 : 2);
        });
        return `\\begin{${environment}}${rows}\\end{${environment}}`;
      },
    );
}

function protectMath(source, essay) {
  const formulas = [];
  let prefix = "SPECTRALMATHTOKEN";
  while (source.includes(prefix)) prefix += "X";
  const prepared = essay ? source.replace(/\\{2}([\[\]()])/g, "\\$1") : source;
  // Code spans and fenced code win over math delimiters. Formula placeholders
  // contain no Markdown punctuation, keeping subscripts, pipes and stars intact.
  const pattern =
    /(```[^\n]*\n[\s\S]*?```|~~~[^\n]*\n[\s\S]*?~~~|`+[^`\n]*`+)|\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)|\$\$([\s\S]*?)\$\$|(?<![\\$])\$(?!\$)([^\n$]+?)(?<!\\)\$(?!\$)/g;
  const text = prepared.replace(
    pattern,
    (match, code, bracket, parenthesis, dollars, inline) => {
      if (code) return code;
      const display = bracket !== undefined || dollars !== undefined;
      const raw = bracket ?? parenthesis ?? dollars ?? inline;
      const tex = essay ? normalizeEssayMath(raw) : raw;
      const token = `${prefix}${formulas.length}END`;
      formulas.push({ token, tex, display });
      return token;
    },
  );
  const tokenPattern = new RegExp(`${prefix}(\\d+)END`, "g");
  return {
    text,
    formulas,
    restore: (html) =>
      html.replace(tokenPattern, (_, index) => {
        const formula = formulas[Number(index)];
        return renderMath(formula.tex, formula.display);
      }),
    plain: (text) =>
      text.replace(tokenPattern, (_, index) =>
        formulas[Number(index)].tex.trim(),
      ),
  };
}

function headingText(text) {
  return text
    .replace(/\\mathbb\s*\{?Z\}?/g, "ℤ")
    .replace(/\\([a-zA-Z]+)\b/g, "$1")
    .replace(/[*`{}$]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderDocument(metadata, source) {
  const { id } = metadata;
  const sections = [];
  let html;
  if (id === "notes") {
    // These are conversational working notes, not a damaged LaTeX document.
    // Preserve the Unicode formulas, undelimited TeX and original line breaks.
    html = source
      .trim()
      .split(/\n\s*\n/)
      .map(
        (paragraph) =>
          `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>\n")}</p>`,
      )
      .join("\n");
  } else {
    const formattedSource =
      id === "review"
        ? reviewCommentaryMarkers
            .slice(0, -1)
            .reduce(
              (text, heading) => text.replace(heading, `\n\n## ${heading}\n\n`),
              source,
            )
        : source;
    const math = protectMath(formattedSource, id === "essay");
    const usedIds = new Map();
    let firstHeading = true;
    const parser = new Marked({
      gfm: true,
      renderer: {
        heading({ tokens, depth, text }) {
          const isFirst = firstHeading;
          firstHeading = false;
          if (isFirst && depth === 1) return "";
          const title = headingText(math.plain(text));
          const slug =
            title
              .normalize("NFKD")
              .toLowerCase()
              .replace(/[^\p{L}\p{N}]+/gu, "-")
              .replace(/^-|-$/g, "") || "section";
          const count = (usedIds.get(slug) || 0) + 1;
          usedIds.set(slug, count);
          const anchor = `${id}-${slug}${count > 1 ? `-${count}` : ""}`;
          if (depth === 2 || depth === 3) sections.push({ id: anchor, title });
          return `<h${depth} id="${escapeHtml(anchor)}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
        },
        html({ text }) {
          return escapeHtml(text);
        },
        link({ href, title, tokens }) {
          const label = this.parser.parseInline(tokens);
          // The supplied sources are trusted editorial content, but links must
          // not turn a later source update into executable navigation.
          if (/^\s*(?:javascript|vbscript|data):/i.test(href)) return label;
          const external = /^(?:https?:)?\/\//i.test(href);
          return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ""}${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`;
        },
      },
    });
    html = parser.parse(math.text);
    // Markdown may group display formulas and neighboring prose in one
    // paragraph (especially in REVIEW). Split that paragraph at block math.
    const displayTokens = new Set(
      math.formulas
        .filter((formula) => formula.display)
        .map((formula) => formula.token),
    );
    html = html.replace(/<p>([\s\S]*?)<\/p>/g, (paragraph, body) => {
      const parts = body.split(/(SPECTRALMATHTOKENX*\d+END)/g);
      if (!parts.some((part) => displayTokens.has(part))) return paragraph;
      let prose = "";
      let result = "";
      for (const part of parts) {
        if (displayTokens.has(part)) {
          if (prose.trim()) result += `<p>${prose}</p>`;
          result += part;
          prose = "";
        } else {
          prose += part;
        }
      }
      if (prose.trim()) result += `<p>${prose}</p>`;
      return result;
    });
    html = math.restore(html);
  }
  if (!sections.length) {
    sections.push({ id: `${id}-overview`, title: "Overview" });
    html = `<div id="${id}-overview" class="document-overview-anchor"></div>\n${html}`;
  }
  const wordCount = source.trim().split(/\s+/u).length;
  return {
    ...metadata,
    source,
    html,
    sections,
    wordCount,
    minutes: Math.max(1, Math.ceil(wordCount / 200)),
  };
}

// The unified reading path places review commentary, working notes, and
// checkpoints beside the derivation they clarify. Every annotation remains
// addressable and every full source file remains available.
const reviewCommentaryMarkers = [
  "The central move you made",
  "Why the $n=3$ model matters",
  "From 3 to $n$: where Bessel and Wiener enter",
  "The hard constraint you isolated in section 15",
  "What this says about RoPE and real transformers",
  "Where I would push next",
  "If you want, I can turn the $n=3$",
];

const annotationLabels = {
  review: "Review",
  note: "Working note",
  theorem: "Theorem",
  checkpoint: "Checkpoint",
};

const phaseSpecs = [
  {
    key: "geometry",
    title: "Symmetry → kernel",
    range: [1, 4],
    question: "How do three positions become an attention kernel?",
    description:
      "Rotations, characters, and the exact three-position operator.",
  },
  {
    key: "spectrum",
    title: "Kernel → spectrum",
    range: [5, 16],
    question: "Which frequency responses can attention actually realize?",
    description:
      "Closed forms, Bessel gains, Wiener targets, and feasible spectra.",
  },
  {
    key: "symmetry",
    title: "Cyclic → general groups",
    range: [17, 20],
    question: "Which spectral blocks survive a general symmetry?",
    description: "Group actions, equivariant kernels, and Schur decomposition.",
  },
  {
    key: "content",
    title: "Stationary → content",
    range: [21, 24],
    question: "What survives when content breaks stationarity?",
    description: "RoPE, perturbation bounds, and the engineering decisions.",
  },
];

const figures = [
  {
    key: "visual-abstract",
    number: "01",
    lead: true,
    image: coverImage,
    width: 1920,
    height: 1280,
    title: "Two views of the same attention operator",
    alt: "Two-panel visual abstract. Position space shows a circulant attention matrix and a von Mises kernel on a circle; frequency space shows low-pass Bessel spectral gains.",
    caption:
      "A translation-invariant cyclic kernel defines attention weights in position space. Fourier diagonalization turns those weights into a low-pass spectral filter.",
  },
  {
    key: "cyclic-kernel",
    number: "02",
    chapter: 9,
    image: cyclicKernelImage,
    width: 1920,
    height: 1280,
    title: "The general cyclic attention kernel",
    alt: "Technical diagram of a 16 by 16 cyclic attention matrix with a diagonal band and a colorbar for attention weight.",
    caption:
      "For n = 16, every row is a cyclic shift of the same kernel. The diagonal band shows how β concentrates attention around zero relative offset.",
  },
  {
    key: "bessel-gains",
    number: "03",
    chapter: 10,
    image: besselImage,
    width: 1920,
    height: 1280,
    title: "Aliased Bessel spectral gains",
    alt: "Technical diagram showing the Bessel ratio formula and a decaying low-pass curve of spectral gain against frequency.",
    caption:
      "The spectral gain λₘ decays with frequency. Sampling at n points sums aliases; in the large-n limit the gain becomes Iₘ(β)/I₀(β).",
  },
  {
    key: "wiener-filter",
    number: "04",
    chapter: 11,
    image: wienerImage,
    width: 1808,
    height: 1152,
    title: "Wiener target and optimal bandwidth",
    alt: "Technical diagram showing signal power, the Wiener gain, achieved gain, and risk versus bandwidth with a marked minimum.",
    caption:
      "The unconstrained Wiener gain balances signal and noise frequency by frequency. Risk falls then rises with β, and its minimum selects a bandwidth.",
  },
  {
    key: "feasible-polytope",
    number: "05",
    chapter: 16,
    image: feasiblePolytopeImage,
    width: 1568,
    height: 1312,
    title: "The feasible spectral polytope",
    alt: "Technical diagram of a projected feasible spectral region for eight positions, with the unconstrained Wiener target and its projection.",
    caption:
      "For n = 8, nonnegative normalized weights map to a convex polytope in gain space. The constrained optimum is the risk-weighted projection of the Wiener target onto that set.",
  },
  {
    key: "fisher-blocks",
    number: "06",
    chapter: 20,
    image: fisherImage,
    width: 1920,
    height: 1280,
    title: "Fisher information and group blocks",
    alt: "Technical diagram with a Fisher information heatmap on the left and a block-diagonal equivariant operator under Schur's lemma on the right.",
    caption:
      "Fisher information couples spectral moments through a covariance matrix. Under a general symmetry, Schur's lemma makes an equivariant operator block diagonal.",
  },
];

function renderFigure(figure) {
  const label = `Figure ${figure.number}: ${figure.title}`;
  return `<figure class="article-figure${figure.lead ? " article-figure--lead" : ""}" id="figure-${figure.key}">
    <div class="article-figure-frame">
      <button class="article-figure-open" type="button" aria-label="Expand ${escapeHtml(label)}">
        <img src="${figure.image}" alt="${escapeHtml(figure.alt)}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async" />
        <span class="article-figure-zoom" aria-hidden="true">Expand ↗</span>
      </button>
    </div>
    <figcaption>
      <span class="article-figure-label">FIG. ${figure.number}</span>
      <span class="article-figure-title">${escapeHtml(figure.title)}</span>
      <span class="article-figure-note">${escapeHtml(figure.caption)}</span>
    </figcaption>
  </figure>`;
}

function renderAnnotationBody(body, key) {
  const rendered = renderDocument({ id: `integrated-${key}` }, body).html;
  return rendered.replace(
    /^<div id="[^"]+" class="document-overview-anchor"><\/div>\n?/,
    "",
  );
}

function renderAnnotation({
  kind,
  key,
  chapter,
  title,
  summary,
  body,
  section,
  action = "Open",
}) {
  const id = `essay-${kind}-${key}`;
  const bodyHtml = renderAnnotationBody(body, key);
  return {
    id,
    kind,
    chapter,
    title,
    summary,
    body,
    html: `<aside class="annotation annotation--${kind}" id="${id}" data-chapter="${section.id}" data-annotation="${kind}" aria-labelledby="${id}-title">
      <details class="annotation-details">
        <summary class="annotation-summary">
          <span class="annotation-label-row"><span class="annotation-type">${annotationLabels[kind]}</span></span>
          <span class="annotation-title" id="${id}-title">${escapeHtml(title)}</span>
          <span class="annotation-gist">${escapeHtml(summary)}</span>
          <span class="annotation-toggle" aria-hidden="true"><span class="when-closed">${action}</span><span class="when-open">Close</span><span class="annotation-sign">+</span></span>
        </summary>
        <div class="annotation-body">${bodyHtml}</div>
      </details>
    </aside>`,
  };
}

function getReviewAnnotations(reviewText, essay) {
  const commentary = reviewCommentaryMarkers
    .slice(0, -1)
    .map((marker, index) => {
      const start = reviewText.indexOf(marker);
      const end = reviewText.indexOf(reviewCommentaryMarkers[index + 1], start);
      return reviewText.slice(start + marker.length, end).trim();
    });
  const generalSections = reviewText
    .split(/(?=^## )/m)
    .slice(1)
    .map((source) => source.replace(/^## [^\n]+\n/, "").trim());
  generalSections[6] = generalSections[6]
    .split("If you want, I can turn this into code")[0]
    .trim();

  const passages = [
    {
      key: "two-descriptions",
      chapter: 4,
      title: "Position space, frequency space, and bandwidth",
      summary:
        "Temperature is a bandwidth; position and frequency descriptions are the same operator.",
      source: commentary[0],
      commentaryIndex: 0,
    },
    {
      key: "three-positions",
      chapter: 8,
      title: "Closed-form gains and the bandwidth estimate",
      summary:
        "The closed-form 3×3 operator, repeated smoothing, and the oracle bandwidth.",
      source: commentary[1],
      commentaryIndex: 1,
    },
    {
      key: "cyclic",
      chapter: 10,
      title: "General cyclic kernel and exact Bessel form",
      summary:
        "For general n, the kernel is circulant and the gains have an exact Bessel form.",
      source: generalSections[0],
      sourceSection: 1,
    },
    {
      key: "wiener",
      chapter: 11,
      title: "General risk and the Wiener target",
      summary:
        "The risk-minimizing frequency response before the probability constraint.",
      source: generalSections[2],
      sourceSection: 3,
    },
    {
      key: "fisher",
      chapter: 14,
      title: "Shared bandwidth, Fisher information, and convexity",
      summary:
        "A single bandwidth traces a curve; Fisher information measures that family locally.",
      source: commentary[2],
      commentaryIndex: 2,
    },
    {
      key: "multi-band",
      chapter: 14,
      title: "Multi-band moments and the Newton update",
      summary:
        "Moment matching for a richer filter family, with a Newton update.",
      source: generalSections[1],
      sourceSection: 2,
    },
    {
      key: "coupled-gains",
      chapter: 15,
      title: "Why independent gain bounds are insufficient",
      summary:
        "Nonnegative weights couple the gains; the interval [-1,1] is not the feasible set.",
      source: commentary[3],
      commentaryIndex: 3,
    },
    {
      key: "polytope",
      chapter: 16,
      title: "Feasible polytope and constrained projection",
      summary:
        "The exact feasible set and the projection of the Wiener target onto it.",
      source: generalSections[3],
      sourceSection: 4,
    },
    {
      key: "groups",
      chapter: 20,
      title: "General group actions and spectral blocks",
      summary:
        "The general group-action construction and Schur's block decomposition.",
      source: generalSections[4],
      sourceSection: 5,
    },
    {
      key: "rope-reference",
      chapter: 22,
      title: "RoPE and the stationary reference",
      summary:
        "Fixed harmonics under RoPE and the stationary reference operator.",
      source: commentary[4],
      commentaryIndex: 4,
    },
    {
      key: "perturbation",
      chapter: 22,
      title: "Content-dependent scores and perturbation bounds",
      summary:
        "Content-dependent logits and the eigenvalue tube around the reference.",
      source: generalSections[5],
      sourceSection: 6,
    },
    {
      key: "extensions",
      chapter: 23,
      title: "Proposed extensions: expressivity, learned filters, and length",
      summary:
        "Three research directions: expressivity, learned filters, and length generalization.",
      source: commentary[5],
      commentaryIndex: 5,
    },
    {
      key: "formulation",
      chapter: 24,
      title: "Five equations in the general formulation",
      summary: "The five equations in their general group form.",
      source: generalSections[6],
      sourceSection: 7,
    },
  ];

  return passages.map((passage) => {
    const section = essay.sections.find((entry) =>
      entry.title.startsWith(`${passage.chapter}. `),
    );
    return renderAnnotation({
      kind: "review",
      ...passage,
      body: passage.source,
      section,
      action: "Read review",
    });
  });
}

const workingNotes = [
  {
    key: "kernel-recipe",
    chapter: 2,
    title: "The whole trick in one construction",
    summary:
      "A character kernel supplies positivity, a Fourier basis, and a temperature dial together.",
    body: String.raw`The working notes compress the argument into one reusable move. Choose a representation \(\rho\) of the symmetry group, take its character \(\chi(g)=\operatorname{tr}\rho(g)\), and set

\[ K(p,q)=\chi(q^{-1}p). \]

Three properties arrive together:

- **Positive definiteness.** This is a Hilbert–Schmidt Gram kernel, so its Gram matrix is positive semidefinite.
- **An eigenbasis.** For a finite abelian group, the characters are the Fourier eigenfunctions; a relative-position kernel is circulant.
- **A bandwidth control.** Exponentiating and normalizing produces \(e^{\beta K}/Z\), moving from broad averaging toward local attention.

The same note marks the limit: a content-dependent factor breaks translation invariance, and the free eigenbasis becomes a perturbation problem.`,
  },
  {
    key: "normalization",
    chapter: 5,
    title: "Normalization changes the operator, not the kernel",
    summary:
      "The kernel is PSD; row-softmax attention need not be symmetric unless symmetry equalizes row sums.",
    body: String.raw`Let \(W_{pq}=e^{\beta K(p,q)}\) and \(D=\operatorname{diag}(W\mathbf 1)\). Row normalization gives

\[ A=D^{-1}W, \]

which is stochastic but generally not symmetric. What survives is the similarity

\[ D^{1/2}AD^{-1/2}=D^{-1/2}WD^{-1/2}\succeq0. \]

So \(A\) has real nonnegative eigenvalues. In the translation-invariant case every row sum is the same, so \(A=W/c\) is itself symmetric PSD. The symmetry is doing more than making the picture pretty: it makes the spectral argument exact.`,
  },
  {
    key: "one-parameter",
    chapter: 12,
    title: "One temperature traces one curve",
    summary:
      "A single bandwidth cannot allocate spectral gain independently across frequencies.",
    body: String.raw`One inverse temperature traces a one-dimensional curve \(\beta\mapsto\{\lambda_m(\beta)\}\) inside the feasible spectral set. The Wiener target \(g_m^*=S_m/(S_m+\sigma^2)\) generally does not lie on that curve.

Introducing independent harmonic coefficients,

\[ s_{\boldsymbol\beta}(r)=\sum_{m\in\mathcal M}\beta_m c_m(r), \]

turns the curve into an exponential family of distributions \(\pi_{\boldsymbol\beta}\propto e^{s_{\boldsymbol\beta}}\). Its local metric is the Fisher information

\[ J_{km}=\operatorname{Cov}_{\pi_\beta}(c_k,c_m). \]

Fisher information says how to move through the family; Wiener risk says where to move. They are different geometries.`,
  },
  {
    key: "two-gaps",
    chapter: 16,
    title: "Separate the two reasons a filter fails",
    summary:
      "Feasibility loss and parameterization loss answer different engineering questions.",
    body: String.raw`Compare the unconstrained Wiener filter \(w\), the best feasible stochastic filter \(g^\star\), and the best filter in the chosen family \(g(\theta^\star)\). Then

\[ R(g(\theta^\star))-R(w)=\underbrace{R(g^\star)-R(w)}_{\text{feasibility gap}}+\underbrace{R(g(\theta^\star))-R(g^\star)}_{\text{parameterization gap}}. \]

The first term asks whether nonnegative normalization is the obstruction. The second asks whether the chosen softmax family is too small. This is a sharper diagnostic than total error alone.`,
  },
  {
    key: "transitivity",
    chapter: 19,
    title: "Transitivity gives invariance, not a Fourier basis",
    summary:
      "The spectral decomposition depends on the group and representation, not only on invariance.",
    body: String.raw`A transitive action supplies an invariant kernel and an equivariant normalized operator. It does not guarantee an ordinary Fourier eigenbasis. That is automatic for finite abelian groups acting regularly. For nonabelian groups, the decomposition is block Fourier: the operator commutes with the representation and acts on multiplicity spaces.

Central character kernels act as scalars on irreducible blocks. General stochastic group convolutions can be matrix-valued. The distinction determines which spectral degrees of freedom are actually available.`,
  },
  {
    key: "psd-is-not-probability",
    chapter: 18,
    title: "Positive semidefinite is not yet probability",
    summary:
      "A Gram kernel may have negative entries; exponentiate a real similarity before normalizing.",
    body: String.raw`A positive-semidefinite similarity does not automatically define attention weights. Consider

\[
K=\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}.
\]

It is positive definite, invariant under swapping the two indices, and has positive row sums. Row normalization still gives

\[
A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},
\]

which is not a probability-weight matrix.

Keep three objects separate:

1. a real similarity or score \(s(x,y)\);
2. positive weights \(W(x,y)=\exp(s(x,y))>0\);
3. the normalized operator \(A=D^{-1}W\).

For complex unitary features, use a real-valued score such as \(\operatorname{Re}\langle\phi(x),\phi(y)\rangle\). An invariant Gram matrix gives equivariance; entrywise positivity and stochasticity require the extra exponential step.`,
  },
  {
    key: "representation-design",
    chapter: 23,
    title: "Learn the representation, not the matrix",
    summary:
      "A representation-parameterized filter keeps positivity, equivariance, and a tractable spectrum by construction.",
    body: String.raw`The notes end with a design principle rather than a theorem: if positive definiteness, equivariance, and a tractable spectrum should survive by construction, parameterize a representation or a small mixture of irreducible characters instead of an unconstrained attention matrix.

The trade is explicit. A richer representation class buys expressivity and costs spectral control. That is a more useful engineering question than asking a generic attention matrix to behave like a filter after training.`,
  },
];

const checkpoints = [
  {
    key: "normalizing-factor",
    chapter: 4,
    title: "Why can the Gaussian prefactor be discarded?",
    summary: "Think about what normalization does to a common positive factor.",
    body: String.raw`It multiplies every key by the same positive constant. Row-wise normalization divides by the same factor, so the attention weights are unchanged. This is why the Gaussian prefactor does not affect the softmax.`,
  },
  {
    key: "repeated-attention",
    chapter: 6,
    title: "Why does repeated attention erase positional differences?",
    summary: "Look at the two projectors and the gain in the \(n=3\) case.",
    body: String.raw`For the fixed \(n=3\) operator, \(A_\beta^L=P_0+\lambda_\beta^L P_\perp\) with \(0<\lambda_\beta<1\). The nonconstant component decays geometrically while the constant mode survives. Residuals and content dependence change the layer dynamics; the claim is about the fixed reference operator.`,
  },
  {
    key: "permutation-symmetry",
    chapter: 20,
    title: "What is lost under full permutation symmetry?",
    summary: "Count the independent spectral gains.",
    body: String.raw`Under \(S_n\), an equivariant attention matrix has the form \(A=aI+b\mathbf1\mathbf1^\top\). Only two spectral gains remain, compared with the full Fourier family available to a cyclic action. More symmetry means fewer parameters and less spectral resolution.`,
  },
  {
    key: "feasibility",
    chapter: 24,
    title: "Which equation encodes probability feasibility?",
    summary: "Separate the objective from the constraint set.",
    body: String.raw`The constrained problem \(\min_{\mathbf g\in\mathcal P_n}\sum_m(S_m+\sigma^2)(g_m-g_m^*)^2\) encodes feasibility through the set \(\mathcal P_n\), defined by nonnegative normalized weights. The objective alone is the Wiener target; without the constraint, the optimum would be the unconstrained gain \(g_m^*\).`,
  },
];

function getWorkingNoteAnnotations(essay) {
  return workingNotes.map((note) => {
    const section = essay.sections.find((entry) =>
      entry.title.startsWith(`${note.chapter}. `),
    );
    return renderAnnotation({
      kind: "note",
      ...note,
      section,
      action: "Read note",
    });
  });
}

function getTheoremAnnotations(essay) {
  return theoremAnnotations.map((theorem) => {
    const section = essay.sections.find((entry) =>
      entry.title.startsWith(`${theorem.chapter}. `),
    );
    return renderAnnotation({
      kind: "theorem",
      ...theorem,
      section,
      action: "Read theorem",
    });
  });
}

function getCheckpointAnnotations(essay) {
  return checkpoints.map((checkpoint) => {
    const section = essay.sections.find((entry) =>
      entry.title.startsWith(`${checkpoint.chapter}. `),
    );
    return renderAnnotation({
      kind: "checkpoint",
      ...checkpoint,
      section,
      action: "Reveal",
    });
  });
}

function integratePedagogy(essay, reviewText) {
  const annotations = [
    ...getReviewAnnotations(reviewText, essay),
    ...getWorkingNoteAnnotations(essay),
    ...getTheoremAnnotations(essay),
    ...getCheckpointAnnotations(essay),
  ].sort((left, right) => left.chapter - right.chapter);

  const additions = new Map();
  for (const annotation of annotations) {
    const section = essay.sections.find(
      (entry) =>
        entry.id === annotation.html.match(/data-chapter="([^"]+)"/)[1],
    );
    additions.set(
      section.id,
      (additions.get(section.id) ?? "") + annotation.html,
    );
    section.annotationCount = (section.annotationCount ?? 0) + 1;
  }

  const sectionFigures = new Map();
  for (const figure of figures.filter((entry) => entry.chapter)) {
    const section = essay.sections.find((entry) =>
      entry.title.startsWith(`${figure.chapter}. `),
    );
    sectionFigures.set(
      section.id,
      (sectionFigures.get(section.id) ?? "") + renderFigure(figure),
    );
  }

  const originalHtml = essay.html;
  essay.html = essay.sections
    .map((section, index) => {
      const start = originalHtml.indexOf(`<h2 id="${section.id}"`);
      const next = essay.sections[index + 1];
      const end = next
        ? originalHtml.indexOf(`<h2 id="${next.id}"`)
        : originalHtml.length;
      return (
        originalHtml.slice(start, end) +
        (sectionFigures.get(section.id) ?? "") +
        (additions.get(section.id) ?? "")
      );
    })
    .join("");

  const leadFigure = figures.find((figure) => figure.lead);
  const firstNumbered = essay.sections.find((section) =>
    /^\d+\./.test(section.title),
  );
  if (leadFigure && firstNumbered) {
    const marker = `<h2 id="${firstNumbered.id}"`;
    const insertion = essay.html.indexOf(marker);
    if (insertion >= 0) {
      essay.html =
        essay.html.slice(0, insertion) +
        renderFigure(leadFigure) +
        essay.html.slice(insertion);
    }
  }

  for (const phase of phaseSpecs) {
    phase.annotations = annotations.filter(
      (annotation) =>
        annotation.chapter >= phase.range[0] &&
        annotation.chapter <= phase.range[1],
    ).length;
    const startSection = essay.sections.find((section) =>
      section.title.startsWith(`${phase.range[0]}. `),
    );
    phase.anchor = startSection?.id;
    phase.sectionCount = essay.sections.filter((section) => {
      const match = section.title.match(/^(\d+)\./);
      return match
        ? Number(match[1]) >= phase.range[0] &&
            Number(match[1]) <= phase.range[1]
        : false;
    }).length;
  }

  for (const section of essay.sections) {
    const match = section.title.match(/^(\d+)\./);
    if (!match) continue;
    const chapter = Number(match[1]);
    section.phase = phaseSpecs.find(
      (phase) => chapter >= phase.range[0] && chapter <= phase.range[1],
    )?.title;
  }

  essay.annotationCount = annotations.length;
  essay.reviewCount = annotations.filter(
    (annotation) => annotation.kind === "review",
  ).length;
  essay.noteCount = annotations.filter(
    (annotation) => annotation.kind === "note",
  ).length;
  essay.theoremCount = annotations.filter(
    (annotation) => annotation.kind === "theorem",
  ).length;
  essay.checkpointCount = annotations.filter(
    (annotation) => annotation.kind === "checkpoint",
  ).length;
  essay.route = phaseSpecs;

  const routeHtml = `<section class="reading-route" aria-labelledby="reading-route-title">
    <header class="reading-route-head">
      <span class="route-kicker">Reading route · four transitions</span>
      <h2 id="reading-route-title">How the argument develops</h2>
      <p>Follow the derivation in order, or jump to the transition you need. Companion notes sit beside the step they clarify.</p>
    </header>
    <ol class="route-track">
      ${phaseSpecs
        .map(
          (phase) => `<li><a class="route-phase" href="#${phase.anchor}">
            <span class="route-index">${String(phaseSpecs.indexOf(phase) + 1).padStart(2, "0")}</span>
            <span class="route-meta">§${phase.range[0]}–${phase.range[1]} · ${phase.annotations} annotations</span>
            <span class="route-phase-title">${escapeHtml(phase.title)}</span>
            <span class="route-question">${escapeHtml(phase.question)}</span>
          </a></li>`,
        )
        .join("")}
    </ol>
  </section>`;

  const indexHtml = `<details class="annotation-index">
    <summary>
      <span class="annotation-index-kicker">Companion annotations</span>
      <span class="annotation-index-count">${annotations.length} annotations</span>
      <span class="annotation-index-key">${essay.reviewCount} review · ${essay.noteCount} working · ${essay.theoremCount} theorems · ${essay.checkpointCount} checkpoints</span>
      <span class="annotation-sign" aria-hidden="true">+</span>
    </summary>
    <div class="annotation-index-body">
      <p>Review annotations test and extend the derivation. Working notes expose the intuition. Theorems state the exact extensions and their proof strategies. Checkpoints ask you to use the result.</p>
      <div class="annotation-index-grid">
        ${annotations
          .map(
            (
              annotation,
            ) => `<a class="annotation-index-link annotation-index-link--${annotation.kind}" href="#${annotation.id}">
              <span class="annotation-index-kind">${annotationLabels[annotation.kind]}</span>
              <span class="annotation-index-title">${escapeHtml(annotation.title)}</span>
              <span class="annotation-index-section">§${annotation.chapter}</span>
            </a>`,
          )
          .join("")}
      </div>
    </div>
  </details>`;

  essay.html = routeHtml + indexHtml + essay.html;
  const addedWords =
    annotations.reduce(
      (total, annotation) =>
        total +
        annotation.body.replace(/<[^>]+>/g, " ").split(/\s+/u).length +
        annotation.title.split(/\s+/u).length +
        annotation.summary.split(/\s+/u).length,
      0,
    ) + 250;
  essay.wordCount += addedWords;
  essay.minutes = Math.ceil(essay.wordCount / 200);
  return essay;
}

const currentContextSource = String.raw`## 25. Where this stands in 2026

This essay treats a stationary relative-position head as a reference operator. Work available by October 2026 keeps that object useful, but it no longer describes the whole frontier.

**Sparse attention has a kernel interpretation.** [Sparse Attention as Compact Kernel Regression](https://arxiv.org/abs/2601.22766) shows that normalized ReLU and sparsemax attention correspond to Epanechnikov kernel regression, while entmax variants correspond to biweight and triweight kernels; softmax is the limiting Gaussian case. Sparsity is therefore kernel design, not merely token selection. The feasible-filter story should cover compact kernels, not only the Gaussian or von Mises kernel.

**Routing is not filtering.** The interaction matrix satisfies

\[ QK^\top=\underbrace{S}_{\text{symmetric filtering}}+\underbrace{A}_{\text{skew routing}}. \]

The filtering term scales mutual relevance; the routing term moves information between positions. [The Routing and Filtering Structure of Attention](https://arxiv.org/abs/2605.18826) finds routing at low rank across 1,776 heads and shows that linearizing the first seven layers of a 125M model costs less than 5% perplexity, while standard attention collapses under the same intervention. The circulant model describes filtering. A complete account must add routing and causal masking.

**Frequency control is becoming adaptive.** [Spectral attention for transformers](https://doi.org/10.1007/s44443-026-00599-5) applies learnable per-head FFT masks to attention maps. Low frequencies carry most of the useful signal in its setup, but learned masks outperform fixed low-, high-, and band-pass filters. A single \(\beta\) traces one curve; the frontier is input-conditioned frequency control. [Prism](https://arxiv.org/abs/2602.08426) gives a concrete failure mode: mean-pooling block summaries act as a low-pass filter and erase high-frequency RoPE information needed for block selection. A spectral correction restores that information while keeping block-level selection.

**Efficiency claims are contested.** [Kimi Linear](https://arxiv.org/abs/2510.26692) reports a KDA+MLA hybrid that outperforms full attention in its fair-comparison setup, with up to 75% less KV cache and 6× decoding throughput at 1M context. [Sliding-window beats linear attention](https://arxiv.org/abs/2608.28444) reports that sliding-window attention with sinks matches or beats most retrofitted linear-attention models, with 2–10× higher long-context retrieval performance on NIAH and BABILong. Architecture, training budget, and task choice change the answer.

**The revised claim.** Stationary relative-position attention is a constrained kernel smoother and circulant spectral filter. Sparse and content-dependent attention replace the fixed kernel with compact or input-conditioned filters; causal masks, routing, and hybrid linear attention break the pure circulant picture. The feasible polytope and the feasibility–parameterization gap remain useful, but they must be recomputed for the larger family.

**Open problem.** The exact cyclic Gram-softmax criterion is proved in the theorem note after Section 16. What remains open is empirical: measure which of the feasible gains trained heads occupy, compare projection onto the feasible set with learned per-head spectral masks, and repeat the analysis for causal Toeplitz, sparse-kernel, and routing-decomposed operators. Use fixed synthetic signal spectra and known noise to compare single-band softmax, signed multi-band logits, Gram-constrained multi-band logits, and the full stochastic risk projection. On recorded attention matrices, fit a stationary reference first, then report residual row oscillation, operator error, and per-mode leakage instead of assuming the perturbation is small. That comparison is the concrete next test, not another closed-form characterization of the same family.

These are recent preprints and journal results. Several efficiency claims are self-reported and have not been independently replicated.`;

function addCurrentContext(post) {
  const contextDocument = renderDocument({ id: "essay" }, currentContextSource);
  const contextSection = contextDocument.sections.find((section) =>
    section.title.startsWith("25. "),
  );
  const conclusion = post.sections.find(
    (section) => section.title === "Conclusion",
  );
  const marker = `<h2 id="${conclusion.id}"`;
  const insertion = post.html.indexOf(marker);
  if (!contextSection || insertion < 0) {
    throw new Error("Could not place the 2026 context section.");
  }
  post.html =
    post.html.slice(0, insertion) +
    contextDocument.html +
    post.html.slice(insertion);
  const index = post.sections.indexOf(conclusion);
  post.sections.splice(index, 0, contextSection);
  post.wordCount += contextDocument.wordCount;
  post.minutes = Math.ceil(post.wordCount / 200);
  return post;
}

function addEmpiricalStudy(post) {
  const experimentDocument = renderDocument({ id: "essay" }, experimentSource);
  const experimentSection = experimentDocument.sections.find((section) =>
    section.title.startsWith("26. "),
  );
  const conclusion = post.sections.find(
    (section) => section.title === "Conclusion",
  );
  const marker = `<h2 id="${conclusion.id}"`;
  const insertion = post.html.indexOf(marker);
  if (!experimentSection || insertion < 0) {
    throw new Error("Could not place the empirical study.");
  }
  post.html =
    post.html.slice(0, insertion) +
    experimentDocument.html +
    post.html.slice(insertion);
  const index = post.sections.indexOf(conclusion);
  post.sections.splice(index, 0, experimentSection);
  post.wordCount += experimentDocument.wordCount;
  post.minutes = Math.ceil(post.wordCount / 200);
  return post;
}

function addAppendices(post) {
  const appendixDocument = renderDocument({ id: "essay" }, appendixSource);
  post.html += `<details class="appendix-disclosure">
    <summary><span class="appendix-kicker">Appendices</span><strong>Reproducible checks, scope, and references</strong><span class="appendix-action" aria-hidden="true"></span></summary>
    <div class="appendix-body">${appendixDocument.html}</div>
  </details>`;
  post.sections.push(...appendixDocument.sections);
  post.wordCount += appendixDocument.wordCount;
  post.minutes = Math.ceil(post.wordCount / 200);
  return post;
}

const post = addAppendices(
  addEmpiricalStudy(
    addCurrentContext(
      integratePedagogy(
        renderDocument(
          {
            id: "essay",
            title: "Attention as Constrained Spectral Regression",
            label: "Annotated essay",
            description:
              "The full derivation with annotations, a 2026 research update, a controlled experiment, and reproducible checks.",
          },
          essaySource,
        ),
        reviewSource,
      ),
    ),
  ),
);

export { post };
