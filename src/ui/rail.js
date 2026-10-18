import "./rail.css";

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

const FIRST_INDEX_MARK = "00";

/**
 * The contents spine. Parent fills #chapter-list with renderRailItems(),
 * updates #chapter-count / #reading-left, sets .current on the active link,
 * and wires .rail-close.
 */
export function renderRail() {
  return `
    <aside class="chapter-sidebar" aria-label="Contents">
      <header class="rail-head">
        <span class="rail-kicker"><span class="rail-mark" aria-hidden="true"></span>Contents</span>
        <span class="rail-count"><span id="chapter-count">00</span><span class="rail-count-label">sections</span></span>
      </header>
      <div class="rail-ruler" aria-hidden="true"></div>
      <nav id="chapter-list" aria-label="Table of contents"></nav>
      <footer class="rail-foot">
        <div class="side-progress" aria-hidden="true"><span></span></div>
        <div class="rail-foot-row">
          <span class="rail-foot-mark" aria-hidden="true"></span>
          <span id="reading-left">Reading progress</span>
        </div>
      </footer>
      <button class="rail-close" type="button" aria-label="Close contents">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>
      </button>
    </aside>`;
}

/** Anchor list for #chapter-list. Every section is shown. */
export function renderRailItems(sections) {
  const items = Array.isArray(sections) ? sections : [];
  return items
    .map((section, index) => {
      const title =
        String(section?.title ?? "Untitled")
          .replace(/^\s*\d+\.\s*/, "")
          .trim() || "Untitled";
      const number =
        index === 0
          ? `<span class="chapter-number chapter-number--abstract" aria-hidden="true">${FIRST_INDEX_MARK}</span>`
          : `<span class="chapter-number" aria-hidden="true">${String(index).padStart(2, "0")}</span>`;
      const count = Number(section?.annotationCount ?? 0);
      const review = count
        ? `<span class="chapter-review" title="${count} companion annotation${count === 1 ? "" : "s"}" aria-label="${count} companion annotation${count === 1 ? "" : "s"}">+${count}</span>`
        : "";
      const href = `#${escapeHtml(section?.id ?? "")}`;
      return `<a href="${href}" class="chapter-link">${number}<span class="chapter-title">${escapeHtml(title)}${review}</span></a>`;
    })
    .join("");
}
