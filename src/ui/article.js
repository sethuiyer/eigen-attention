import "./article.css";

const escapeHtml = (value) =>
  String(value ?? "").replace(
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

const focusIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>`;

const arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>`;

const plural = (count, singular, pluralForm = `${singular}s`) =>
  `${count} ${count === 1 ? singular : pluralForm}`;

/**
 * Render the single annotated essay. Mount inside
 * `<section id="reading" class="reading-section">`.
 */
export function renderArticleShell(
  active = {
    title: "Attention as Constrained Spectral Regression",
    description: "",
    minutes: 0,
    sections: [],
    annotationCount: 0,
  },
) {
  return `<div class="reading-topline">
    <div class="reading-identity">
      <span class="reading-kicker">ANNOTATED ESSAY</span>
      <span class="reading-identity-meta">${active.sections?.length ?? 0} SECTIONS · ${active.annotationCount ?? 0} ANNOTATIONS · ${active.minutes ?? 0} MIN</span>
    </div>
    <div class="reading-tools">
      <span class="reading-tools-label" aria-hidden="true">TYPE</span>
      <button type="button" class="text-size" aria-label="Increase reading text size" title="Cycle reading text size">Aa</button>
      <button type="button" class="focus-toggle" aria-label="Toggle distraction-free reading" aria-pressed="false" title="Distraction-free reading">${focusIcon}</button>
    </div>
  </div>

  <header class="article-header">
    <div class="article-header-rule">
      <span>ATTENTION / SYMMETRY</span>
      <span>ANNOTATED ESSAY</span>
      <span>${plural(active.sections?.length ?? 0, "SECTION", "SECTIONS")}</span>
    </div>
    <div class="article-measure" aria-hidden="true">${"<span></span>".repeat(12)}</div>
    <div class="article-header-grid">
      <div class="article-header-copy">
        <div class="article-label">
          <span id="document-kind">ANNOTATED ESSAY</span>
          <span class="article-label-separator" aria-hidden="true">/</span>
          <span id="document-time">${active.minutes ?? 0} MIN READ</span>
        </div>
        <h2 class="article-title" id="document-title">${escapeHtml(active.title)}</h2>
        <p class="article-description" id="document-description">${escapeHtml(active.description)}</p>
      </div>
      <aside class="article-folio" aria-label="Essay extent">
        <span class="article-folio-kicker">COMPANION NOTES</span>
        <span class="article-folio-number" id="article-folio-number">${active.annotationCount ?? 0}</span>
        <span class="article-folio-unit" id="article-folio-unit">ANNOTATIONS</span>
        <span class="article-folio-meta" id="article-folio-meta">${active.sections?.length ?? 0} SECTIONS<br />${active.minutes ?? 0} MIN READING</span>
      </aside>
    </div>
  </header>

  <article id="article-content" class="prose" aria-labelledby="document-title"></article>

  <footer class="reading-close">
    <div class="reading-close-rule" aria-hidden="true"><span>∴</span></div>
    <p class="reading-close-note">End of the annotated edition · ${active.annotationCount ?? 0} companion annotations</p>
    <div class="reading-close-actions">
      <a class="reading-close-contents" href="#playground">Kernel explorer <span aria-hidden="true">↑</span></a>
      <button type="button" id="back-to-top" aria-label="Return to the top of the page">Return to top ${arrowIcon}</button>
    </div>
  </footer>`;
}
