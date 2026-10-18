import { brandMark } from "./mark.js";

const icons = {
  search: '<circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.6 15.6 4.4 4.4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.2v2.1M12 19.7v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.2 12h2.1M19.7 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"/>',
  moon: '<path d="M20.2 14.6A8.7 8.7 0 0 1 9.4 3.8a8.7 8.7 0 1 0 10.8 10.8Z"/>',
  menu: '<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>',
  chevron: '<path d="m6.5 9 5.5 5.5L17.5 9"/>',
};

const icon = (name) =>
  `<svg class="chrome-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">${icons[name]}</svg>`;

const navItems = [
  { href: "#reading", label: "Essay" },
  { href: "#playground", label: "Explorer" },
];

/**
 * Render the masthead for the single annotated essay. Hooks consumed by the
 * shell: .search-trigger, .theme-toggle, .mobile-menu, .brand,
 * .reading-progress > div.
 */
export function renderChrome() {
  return `
    <div class="reading-progress" aria-hidden="true"><div></div></div>
    <header class="site-header" data-chrome="masthead">
      <div class="masthead-inner">
        <a class="brand" href="#top" aria-label="eigen — mathematics and machine learning">
          <span class="brand-mark" aria-hidden="true">${brandMark}</span><span class="brand-word">eigen<span class="brand-dot">.</span></span>
        </a>

        <p class="masthead-meta">
          <span class="meta-fields">Attention / Spectral Analysis</span>
          <span class="meta-divider" aria-hidden="true"></span>
          <span class="meta-issue">Annotated</span>
        </p>

        <span class="masthead-spacer" aria-hidden="true"></span>

        <nav class="site-nav" aria-label="On this page">
          ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </nav>

        <div class="header-actions">
          <button class="search-trigger" type="button" aria-label="Search the essay" aria-keyshortcuts="Meta+K Control+K">
            ${icon("search")}<span class="search-label">Search</span><kbd aria-hidden="true">⌘K</kbd>
          </button>
          <span class="header-divider" aria-hidden="true"></span>
          <button class="icon-button theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme">
            <span class="theme-icon theme-icon--sun" aria-hidden="true">${icon("sun")}</span>
            <span class="theme-icon theme-icon--moon" aria-hidden="true">${icon("moon")}</span>
          </button>
          <button class="icon-button mobile-menu" type="button" aria-label="Toggle table of contents" aria-expanded="false" aria-controls="chapter-list">
            ${icon("menu")}
          </button>
        </div>
      </div>
    </header>`;
}
