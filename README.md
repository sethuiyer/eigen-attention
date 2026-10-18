# Attention as Constrained Spectral Regression

A single, annotated mathematical essay. Built with Vite, vanilla JavaScript, Marked, and KaTeX.

## Run

```sh
npm install
npm run dev
```

For a production build:

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host.

### GitHub Pages

The repository is `sethuiyer/eigen-attention`; the site is served from the `gh-pages` branch at:

`https://sethuiyer.github.io/eigen-attention/`

Publish an update with:

```sh
npm run deploy
```

The script builds with relative asset paths, copies `dist/` into a temporary `gh-pages` branch, adds `.nojekyll`, and force-pushes that branch. Keep `main` as the source branch and `gh-pages` as the generated deployment branch.

## The post

One reading surface, with **26 annotations** placed beside the derivations they clarify:

- **13 review annotations** test, qualify, or extend the argument.
- **7 working notes** expose the reusable intuition and its limits.
- **2 theorem notes** give exact realizability and a dimension-free stability bound.
- **4 checkpoints** ask a question and reveal a worked answer.

Annotations are collapsed summaries by default. Opening one reveals the full note and typeset formulas. All annotations are addressable, searchable, and listed in one index. There are no separate notes or review views.

A four-stage reading route introduces the argument's transitions: geometry to kernel, kernel to spectrum, cyclic to general groups, and stationary to content-dependent attention. Each stage links to its first section and reports its annotation count.

Section 25, **Where this stands in 2026**, adds the current research context: compact-kernel interpretations of sparse attention, routing/filtering decomposition, adaptive spectral masks, RoPE frequency failures, and the contested state of hybrid linear attention. Claims are linked to primary papers and marked as recent or self-reported where appropriate.

Section 26, **A first controlled experiment**, reports five attention variants on 16-position cyclic tasks with three seeds and 4,096 held-out examples per task. Eight learned harmonic coefficients beat a 288-parameter dot-product baseline on stationary signal tasks; content-dependent attention was required for grouping; a 56-parameter hybrid handled both. The article is explicit that this is a mechanism check, not a complete-Transformer benchmark.

## Media

- `intro.mp3` — a 66-second audio introduction with a custom play, pause, and seek control above the essay. It is not autoplayed or preloaded.
- Six WebP figures are placed with the result they explain: the visual abstract after the abstract, then the cyclic kernel, Bessel gains, Wiener filter, feasible spectral polytope, and Fisher/group-block diagrams.
- Each figure opens in a full-size viewer; the original image can be opened separately. Figures remain in print.

## Interface

- **Masthead** (`src/ui/chrome.js`) — sticky progress, essay and explorer links, search, theme, and the mobile contents control.
- **Opening plate** (`src/ui/hero.js`) — typographic cover with an authored SVG of the three cyclic positions, character kernel, and spectral gain.
- **Contents spine** (`src/ui/rail.js`) — sticky section map with every section visible by default, active tracking, annotation counts, and reading progress.
- **Kernel explorer** (`src/explorer.js`) — an n=32 cyclic softmax instrument. The position rosette, Toeplitz attention matrix, and cosine Fourier gains are computed from the same normalized weights. Inverse temperature β runs from 0 to 12.
- **Essay surface** (`src/ui/article.js`) — article folio, equation numbering, editorial tables, integrated figures, and closing conclusion.
- **Annotations** (`src/content.js`, `src/ui/integration.css`) — reading route, annotation index, review notes, working notes, and checkpoints.

## Typography

- **Instrument Serif** for the masthead, hero, and article title.
- **Spectral** for long-form reading, section headings, annotation titles, and captions.
- **DM Sans** for interface copy.
- **DM Mono** for metadata and numeric labels.

The reading measure is 720px at 21px/1.76, with balanced headings and widened label sizes throughout.

## Reproducibility

- `public/experiments/spectral_attention_checks.py` numerically checks the Gram-realizability criterion, the four-position counterexample, the stability bound, mode leakage, sharpness, and the constrained-risk example.
- `public/experiments/results.json` contains the recorded output.
- `public/experiments/rotational-attention/` contains the trainable-attention experiment, its README, and full per-seed results. The original archive is also available.
- The theorem checks use a fixed seed and exit non-zero on a failed inequality. They were run with Python 3.12 and NumPy 2.5.2.
- These are controlled mechanism checks, not complete-Transformer benchmarks. The empirical next step is stated explicitly in the article.

Appendices A and B are collapsed at the end of the essay and open from the contents rail, annotation index, or search.

## Color system

Color carries meaning:

- **Ultramarine** — navigation, controls, mathematical emphasis, and the active reading position.
- **Magenta** — review commentary and caveats.
- **Viridian** — working-note intuition.
- **Cool sage paper and green-black ink** — the reading surface, deliberately removed from the usual warm cream-and-terracotta AI palette.

## Reading behavior

- Search indexes the full reading path, including annotation titles and bodies. Selecting a result reveals and scrolls to the exact annotation.
- Deep links open the corresponding section or annotation.
- Chapter tracking follows the reader's position; section rows show their annotation count.
- Reading progress, text size, distraction-free mode, saved state, and theme persist.
- Long equations scroll inside their plates; there is no horizontal page overflow down to 320px.
- Print mode opens collapsed annotations so the complete annotated essay is printable.
- Reduced-motion, keyboard-visible focus, and labeled SVG graphics are included.

The app has no backend and no separate document routes. Fonts use Google Fonts with local serif, sans-serif, and monospace fallbacks.
