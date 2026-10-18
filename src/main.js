import "./base.css";
import "katex/dist/katex.min.css";
import { post, renderMath } from "./content.js";
import { mountExplorer } from "./explorer.js";
import { renderChrome } from "./ui/chrome.js";
import { brandMark } from "./ui/mark.js";
import "./ui/chrome.css";
import { renderHero } from "./ui/hero.js";
import "./ui/hero.css";
import { renderRail, renderRailItems } from "./ui/rail.js";
import { renderArticleShell } from "./ui/article.js";
import "./ui/integration.css";
import introAudio from "../intro.mp3";

const escape = (text) =>
  String(text).replace(
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

const searchIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.6 15.6 4.4 4.4"/></svg>';
const closeIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>';
const bookmarkIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>';
const checkIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
const arrowIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
const playIcon =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.4v13.2L19 12z"/></svg>';
const pauseIcon =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>';

const saved = new Set(
  (() => {
    try {
      const value = JSON.parse(localStorage.getItem("eigen-saved") || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  })(),
);

let searchIndex = [];

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#reading">Skip to the essay</a>
  ${renderChrome()}
  <div class="page-layout">
    ${renderRail()}
    <main id="top">
      ${renderHero({
        title: post.title,
        description:
          "Attention as normalized kernel regression and spectral filtering, with annotations, a 2026 research update, a controlled experiment, and reproducible checks.",
        minutes: post.minutes,
        sectionCount: post.sections.length,
        annotationCount: post.annotationCount,
      })}
      <section class="audio-intro" aria-labelledby="audio-intro-title">
        <div class="audio-intro-copy">
          <span class="audio-kicker">Audio</span>
          <h2 id="audio-intro-title">Introduction</h2>
          <p>66 seconds.</p>
        </div>
        <div class="audio-player">
          <button class="audio-toggle" id="audio-toggle" type="button" data-playing="false" aria-label="Play audio introduction">
            <span class="audio-icon audio-icon--play">${playIcon}</span>
            <span class="audio-icon audio-icon--pause">${pauseIcon}</span>
          </button>
          <div class="audio-player-main">
            <div class="audio-player-meta"><span>Intro</span><span id="audio-time" aria-hidden="true">0:00 / 1:06</span></div>
            <input class="audio-seek" id="audio-seek" type="range" min="0" max="66" step="0.1" value="0" aria-label="Audio introduction position" aria-valuetext="0:00 of 1:06" />
          </div>
          <audio id="audio-intro" src="${introAudio}" preload="none"></audio>
        </div>
      </section>
      <section class="central-idea" aria-label="Central result">
        <div class="idea-label"><span>Central result</span><span class="idea-arrow" aria-hidden="true">↘</span></div>
        <div class="idea-content">
          <p>Attention is a <em>constrained spectral estimator.</em></p>
          <span>Nonnegative, normalized weights couple the attainable frequency gains.</span>
        </div>
        <div class="idea-formula">${renderMath("\\widehat{Av}_m = \\lambda_m\\hat v_m")}</div>
      </section>
      <section id="playground" class="playground-section" aria-labelledby="playground-title">
        <div class="section-heading">
          <div><div class="eyebrow">Cyclic attention · n = 32</div><h2 id="playground-title">Kernel and spectral response</h2></div>
          <span class="interactive-badge"><span aria-hidden="true"></span>Interactive</span>
        </div>
        <p class="section-description">Adjust inverse temperature β to compare positional attention weights, the resulting attention matrix, and their Fourier gains.</p>
        <div class="explorer-card">
          <div class="explorer-card-heading"><span>Position and frequency representations</span><span class="experiment-tag">Experiment 01</span></div>
          <div id="explorer"></div>
        </div>
      </section>
      <section id="reading" class="reading-section" aria-label="Annotated essay">
        ${renderArticleShell(post)}
      </section>
      <footer class="site-footer">
        <a class="brand" href="#top" aria-label="eigen home"><span class="brand-mark" aria-hidden="true">${brandMark}</span><span class="brand-word">eigen<span class="brand-dot">.</span></span></a>
        <span>Mathematics &amp; machine learning</span>
        <a href="#playground">Open the kernel explorer ${arrowIcon}</a>
      </footer>
    </main>
  </div>
  <dialog id="figure-dialog" aria-labelledby="figure-dialog-title">
    <div class="figure-dialog-head">
      <div><span id="figure-dialog-label" class="figure-dialog-label"></span><span id="figure-dialog-title" class="figure-dialog-title"></span></div>
      <div class="figure-dialog-actions">
        <a id="figure-dialog-source" href="#" target="_blank" rel="noopener noreferrer">Open image <span aria-hidden="true">↗</span></a>
        <button class="figure-dialog-close" type="button" aria-label="Close figure">${closeIcon}</button>
      </div>
    </div>
    <div class="figure-dialog-canvas"><img id="figure-dialog-image" alt="" /></div>
    <p id="figure-dialog-caption" class="figure-dialog-caption"></p>
  </dialog>
  <dialog id="search-dialog" aria-label="Search the essay">
    <div class="search-dialog-heading">
      ${searchIcon}
      <input id="search-input" type="search" placeholder="Search the essay and annotations…" aria-label="Search the essay" autocomplete="off" />
      <button class="close-search" type="button" aria-label="Close search">${closeIcon}</button>
    </div>
    <div class="search-hint">Essay · working notes · review · checkpoints</div>
    <div id="search-results"></div>
    <div class="search-footer"><span>All ${post.annotationCount} companion annotations are indexed</span><kbd>Esc to close</kbd></div>
  </dialog>
  <div id="toast" role="status" aria-live="polite"></div>
`;

mountExplorer(document.querySelector("#explorer"));

const toast = (message) => {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("visible"), 2400);
};

const readingSection = document.querySelector("#reading");
const readingArticle = document.querySelector("#article-content");
const chapterList = document.querySelector("#chapter-list");
const mobileMenu = document.querySelector(".mobile-menu");

readingArticle.innerHTML = post.html;
document.querySelector("#hero-time").textContent = `${post.minutes} min read`;

const audio = document.querySelector("#audio-intro");
const audioToggle = document.querySelector("#audio-toggle");
const audioSeek = document.querySelector("#audio-seek");
const audioTime = document.querySelector("#audio-time");

function formatAudioTime(value) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const seconds = Math.floor(value);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function syncAudio() {
  const duration = Number.isFinite(audio.duration) ? audio.duration : 66;
  const current = Math.min(audio.currentTime || 0, duration);
  const percent = duration ? (current / duration) * 100 : 0;
  audioSeek.max = String(duration);
  audioSeek.value = String(current);
  audioSeek.style.setProperty("--audio-progress", `${percent}%`);
  audioSeek.setAttribute(
    "aria-valuetext",
    `${formatAudioTime(current)} of ${formatAudioTime(duration)}`,
  );
  audioTime.textContent = `${formatAudioTime(current)} / ${formatAudioTime(duration)}`;
  const playing = !audio.paused;
  audioToggle.dataset.playing = String(playing);
  audioToggle.setAttribute(
    "aria-label",
    playing ? "Pause audio introduction" : "Play audio introduction",
  );
}

audioToggle.addEventListener("click", () => {
  if (audio.paused) {
    if (audio.ended) audio.currentTime = 0;
    audio.play().catch(() => toast("The audio could not be played."));
  } else {
    audio.pause();
  }
});

audioSeek.addEventListener("input", () => {
  audio.currentTime = Number(audioSeek.value);
  syncAudio();
});

audio.addEventListener("play", syncAudio);
audio.addEventListener("pause", syncAudio);
audio.addEventListener("ended", syncAudio);
audio.addEventListener("timeupdate", syncAudio);
audio.addEventListener("loadedmetadata", syncAudio);
syncAudio();

const figureDialog = document.querySelector("#figure-dialog");
const figureDialogImage = document.querySelector("#figure-dialog-image");
const figureDialogTitle = document.querySelector("#figure-dialog-title");
const figureDialogLabel = document.querySelector("#figure-dialog-label");
const figureDialogCaption = document.querySelector("#figure-dialog-caption");
const figureDialogSource = document.querySelector("#figure-dialog-source");
const figureDialogClose = document.querySelector(".figure-dialog-close");

readingArticle.addEventListener("click", (event) => {
  const trigger = event.target.closest(".article-figure-open");
  if (!trigger) return;
  const figure = trigger.closest(".article-figure");
  const image = figure?.querySelector("img");
  if (!image) return;
  const source = image.currentSrc || image.src;
  figureDialogImage.src = source;
  figureDialogImage.alt = image.alt;
  figureDialogTitle.textContent =
    figure.querySelector(".article-figure-title")?.textContent ?? "Figure";
  figureDialogLabel.textContent =
    figure.querySelector(".article-figure-label")?.textContent ?? "Figure";
  figureDialogCaption.textContent =
    figure.querySelector(".article-figure-note")?.textContent ?? "";
  figureDialogSource.href = source;
  figureDialog.showModal();
  figureDialogClose.focus();
});

figureDialogClose.addEventListener("click", () => figureDialog.close());
figureDialog.addEventListener("click", (event) => {
  if (event.target === figureDialog) figureDialog.close();
});

function revealTarget(id) {
  const target = document.getElementById(id);
  if (!target) return null;
  const details = target.matches("details")
    ? target
    : (target.querySelector(":scope > details") ?? target.closest("details"));
  if (details) details.open = true;
  return target;
}

function scrollToTarget(id) {
  const target = revealTarget(id);
  target?.scrollIntoView({ behavior: "instant", block: "start" });
}

function closeMobileRail() {
  document.body.classList.remove("mobile-toc-open");
  mobileMenu?.setAttribute("aria-expanded", "false");
}

function renderChapters() {
  document.querySelector("#chapter-count").textContent = String(
    post.sections.length,
  ).padStart(2, "0");
  document.querySelector(".rail-count-label").textContent =
    post.sections.length === 1 ? "section" : "sections";
  chapterList.innerHTML = renderRailItems(post.sections);
}

function updateActiveChapter() {
  if (readingSection.getBoundingClientRect().top > window.innerHeight * 0.65) {
    chapterList.querySelectorAll(".chapter-link").forEach((link) => {
      link.classList.remove("current");
      link.removeAttribute("aria-current");
    });
    return;
  }

  const headerBottom =
    document.querySelector(".site-header").getBoundingClientRect().bottom || 76;
  const threshold = headerBottom + 56;
  const sectionIds = new Set(post.sections.map((section) => section.id));
  let active = null;
  for (const heading of readingArticle.querySelectorAll("h2[id], h3[id]")) {
    if (!sectionIds.has(heading.id)) continue;
    const disclosure = heading.closest("details");
    if (disclosure && !disclosure.open) continue;
    if (!heading.getClientRects().length) continue;
    if (heading.getBoundingClientRect().top <= threshold) active = heading.id;
    else break;
  }

  let activeLink = null;
  chapterList.querySelectorAll(".chapter-link").forEach((link) => {
    const current = Boolean(active) && link.hash === `#${active}`;
    link.classList.toggle("current", current);
    if (current) {
      link.setAttribute("aria-current", "location");
      activeLink = link;
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (activeLink && chapterList.clientHeight > 0) {
    const listRect = chapterList.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    if (linkRect.top < listRect.top || linkRect.bottom > listRect.bottom) {
      chapterList.scrollTop += linkRect.top - listRect.top - 18;
    }
  }
}

function updateProgress() {
  const maximum = document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    maximum > 0 ? Math.min(1, Math.max(0, window.scrollY / maximum)) : 0;
  const bar = document.querySelector(".reading-progress > div");
  if (bar) bar.style.width = `${progress * 100}%`;
  const side = document.querySelector(".side-progress > span");
  if (side) side.style.width = `${progress * 100}%`;
  document.querySelector("#reading-left").textContent =
    progress < 0.01
      ? "Reading progress"
      : `${Math.max(1, Math.ceil(post.minutes * (1 - progress)))} min remaining`;
  updateActiveChapter();
}

let scrollQueued = false;
window.addEventListener(
  "scroll",
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(() => {
        scrollQueued = false;
        updateProgress();
      });
    }
  },
  { passive: true },
);

renderChapters();
updateProgress();

function updateSaved() {
  const button = document.querySelector("#save-essay");
  const isSaved = saved.has("essay");
  button.setAttribute("aria-pressed", String(isSaved));
  button.setAttribute(
    "aria-label",
    isSaved ? "Remove saved essay" : "Save essay",
  );
  button.innerHTML = `${isSaved ? checkIcon : bookmarkIcon}<span>${isSaved ? "Saved" : "Save"}</span>`;
}

updateSaved();
document.querySelector("#save-essay").addEventListener("click", () => {
  saved.has("essay") ? saved.delete("essay") : saved.add("essay");
  localStorage.setItem("eigen-saved", JSON.stringify([...saved]));
  updateSaved();
  toast(
    saved.has("essay")
      ? "Saved in this browser."
      : "Removed from saved reading.",
  );
});

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("eigen-theme", dark ? "dark" : "light");
  const button = document.querySelector(".theme-toggle");
  button.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  button.setAttribute(
    "title",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? "#0d1714" : "#eef3f0");
}

applyTheme(localStorage.getItem("eigen-theme") || "light");
document.querySelector(".theme-toggle").addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
});

const textSizes = ["standard", "large", "extra large"];
const storedTextSize = Number(localStorage.getItem("eigen-text-size"));
let textSize =
  Number.isInteger(storedTextSize) && textSizes[storedTextSize]
    ? storedTextSize
    : 0;

function applyTextSize() {
  readingSection.style.setProperty("--reading-size", `${21 + textSize * 2}px`);
}

applyTextSize();
document.querySelector(".text-size").addEventListener("click", () => {
  textSize = (textSize + 1) % textSizes.length;
  localStorage.setItem("eigen-text-size", String(textSize));
  applyTextSize();
  toast(`Reading text: ${textSizes[textSize]}.`);
});

document.querySelector(".focus-toggle").addEventListener("click", (event) => {
  const active = document.body.classList.toggle("focus-mode");
  event.currentTarget.setAttribute("aria-pressed", String(active));
  toast(active ? "Distraction-free reading." : "Contents restored.");
});

chapterList.addEventListener("click", (event) => {
  if (!event.target.closest(".chapter-link")) return;
  closeMobileRail();
});

mobileMenu.addEventListener("click", () => {
  const open = document.body.classList.toggle("mobile-toc-open");
  mobileMenu.setAttribute("aria-expanded", String(open));
});

document
  .querySelector(".rail-close")
  ?.addEventListener("click", closeMobileRail);

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("mobile-toc-open")) return;
  if (
    event.target.closest(".chapter-sidebar") ||
    event.target.closest(".mobile-menu")
  )
    return;
  closeMobileRail();
});

document
  .querySelector(".chapter-sidebar")
  .addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeMobileRail();
  });

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let printOpenedAnnotations = [];
window.addEventListener("beforeprint", () => {
  printOpenedAnnotations = [
    ...readingArticle.querySelectorAll(".annotation-details:not([open])"),
  ];
  printOpenedAnnotations.forEach((details) => {
    details.open = true;
  });
  readingArticle.querySelectorAll(".article-figure img").forEach((image) => {
    image.loading = "eager";
  });
  readingArticle
    .querySelectorAll(".appendix-disclosure:not([open])")
    .forEach((details) => {
      details.open = true;
    });
});
window.addEventListener("afterprint", () => {
  printOpenedAnnotations.forEach((details) => {
    details.open = false;
  });
  printOpenedAnnotations = [];
  readingArticle.querySelectorAll(".appendix-disclosure").forEach((details) => {
    details.open = false;
  });
});

// Build a text index from the rendered post, routing matches inside an
// annotation to that annotation rather than the section heading.
const annotationLabels = {
  review: "Review",
  note: "Working note",
  checkpoint: "Checkpoint",
};
const renderedPost = document.createElement("template");
renderedPost.innerHTML = post.html;
renderedPost.content
  .querySelectorAll(".katex-mathml")
  .forEach((element) => element.remove());
let anchor = post.sections[0].id;
for (const element of renderedPost.content.querySelectorAll(
  "h2, h3, p, li, .math-block, .annotation-title, .annotation-gist, figcaption",
)) {
  if (element.matches("h2, h3")) anchor = element.id;
  if (element.parentElement?.closest("p, li, .math-block")) continue;
  const text = element.textContent.replace(/\s+/g, " ").trim();
  if (!text) continue;
  const annotation = element.closest(".annotation");
  const figure = element.closest(".article-figure");
  searchIndex.push({
    anchor: annotation?.id ?? figure?.id ?? anchor,
    label: annotation
      ? (annotationLabels[annotation.dataset.annotation] ?? "Annotation")
      : figure
        ? "Figure"
        : "Essay",
    text,
  });
}

const dialog = document.querySelector("#search-dialog");
const input = document.querySelector("#search-input");

function search() {
  const query = input.value.trim().toLowerCase();
  const results = [];
  if (query.length >= 2) {
    for (const entry of searchIndex) {
      const index = entry.text.toLowerCase().indexOf(query);
      if (index < 0) continue;
      results.push({
        ...entry,
        text: entry.text.slice(Math.max(0, index - 70), index + 170),
      });
      if (results.length >= 30) break;
    }
  }

  const target = document.querySelector("#search-results");
  target.innerHTML = !query
    ? `<div class="search-empty"><span>Search the essay</span><p>Try “Fourier”, “temperature”, or “polytope”.</p></div>`
    : query.length < 2
      ? '<div class="search-empty">Enter at least two characters.</div>'
      : !results.length
        ? `<div class="search-empty">No matches for “${escape(input.value)}”.<p>Try another mathematical term.</p></div>`
        : `<div class="results-count">${results.length}${results.length === 30 ? "+" : ""} matches</div>${results
            .map(
              (result, index) =>
                `<button class="search-result" type="button" data-result="${index}" data-anchor="${escape(result.anchor)}"><span>${escape(result.label)} ${arrowIcon}</span><p>${escape(result.text)}</p></button>`,
            )
            .join("")}`;

  target.querySelectorAll("[data-result]").forEach((element) => {
    element.addEventListener("click", () => {
      const result = results[Number(element.dataset.result)];
      dialog.close();
      requestAnimationFrame(() => scrollToTarget(result.anchor));
    });
  });
}

function openSearch() {
  dialog.showModal();
  search();
  input.focus();
}

document.querySelector(".search-trigger").addEventListener("click", openSearch);
document
  .querySelector(".close-search")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
input.addEventListener("input", search);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    event.preventDefault();
    dialog.close();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    dialog.open ? dialog.close() : openSearch();
  }
  if (
    event.key === "Escape" &&
    document.body.classList.contains("mobile-toc-open")
  ) {
    closeMobileRail();
    mobileMenu.focus();
  }
});

function openHash(hash) {
  const id = decodeURIComponent(String(hash).replace(/^#/, ""));
  if (!id) return;
  requestAnimationFrame(() => scrollToTarget(id));
}

openHash(location.hash);
window.addEventListener("hashchange", () => openHash(location.hash));
