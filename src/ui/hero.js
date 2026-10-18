const CURATED_TITLE = "Attention as Constrained Spectral Regression";
const CURATED_LINES = ["Attention as", "Constrained", "Spectral", "Regression"];

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

const metric = (value) =>
  value === undefined || value === null || value === ""
    ? "&mdash;"
    : escapeHtml(value);

/* One shared coordinate system: the unit circle is centred in the plate and
   all annotations are derived from the same radius and angle. */
const CENTER = 260;
const RADIUS = 150;

const polar = (radius, degrees) => {
  const angle = (degrees * Math.PI) / 180;
  return [CENTER + radius * Math.cos(angle), CENTER + radius * Math.sin(angle)];
};

const n = (value) => Number(value.toFixed(2)).toString();

const point = (radius, degrees) => {
  const [x, y] = polar(radius, degrees);
  return `${n(x)} ${n(y)}`;
};

const segment = (className, degrees, inner, outer) => {
  const [x1, y1] = polar(inner, degrees);
  const [x2, y2] = polar(outer, degrees);
  return `<line class="${className}" x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}"/>`;
};

const phi0 = polar(RADIUS, 0);
const phi1 = polar(RADIUS, 240);
const phi2 = polar(RADIUS, 120);

// Measurement ticks run every five degrees; every sixth mark is long.
const ticks = Array.from({ length: 72 }, (_, index) => {
  const degrees = index * 5;
  const major = index % 6 === 0;
  return segment(
    major ? "h-tick h-tick-major" : "h-tick",
    degrees,
    178,
    major ? 190 : 184,
  );
}).join("");

const titleLines = (title) =>
  title === CURATED_TITLE ? CURATED_LINES : [title];

/**
 * The opening plate: pure HTML string, no DOM reads or mutations.
 * Parent owns event wiring and the current read time.
 */
export function renderHero({
  title,
  description,
  minutes,
  sectionCount,
  annotationCount,
} = {}) {
  const safeTitle = escapeHtml(title ?? CURATED_TITLE);
  const lines = titleLines(title ?? CURATED_TITLE);
  const readMinutes = metric(minutes);

  const titleMarkup = lines
    .map((line, index) => {
      const classes = [
        "opening-title-line",
        index === 1 ? "opening-title-line--offset" : "",
        index === lines.length - 1 ? "opening-title-line--last" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const content =
        index === 1 ? `<em>${escapeHtml(line)}</em>` : escapeHtml(line);
      return `<span class="${classes}">${content}</span>`;
    })
    .join("\n        ");

  return `
  <section class="opening-hero" aria-labelledby="hero-title">
    <div class="opening-grid">
      <div class="opening-copy">
        <div class="opening-kicker">
          <span class="opening-square" aria-hidden="true"></span>
          <span>Attention</span>
          <span class="opening-kicker-rule" aria-hidden="true"></span>
          <span>Symmetry &amp; spectral analysis</span>
        </div>
        <h1 class="opening-title" id="hero-title" aria-label="${safeTitle}">
        ${titleMarkup}
        </h1>
        <p class="opening-description">${escapeHtml(description ?? "")}</p>
        <div class="opening-links">
          <a class="opening-link opening-link--primary" href="#reading">
            Read the derivation
            <span class="opening-link-arrow" aria-hidden="true">&rarr;</span>
          </a>
          <a class="opening-link" href="#playground">
            Cyclic kernel explorer
            <span class="opening-link-arrow" aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>

      <figure class="opening-plate" aria-labelledby="opening-plate-caption">
        <div class="opening-plate-head">
          <span>Fig. 01</span>
          <span>Unit circle &middot; n = 3</span>
        </div>
        <div class="opening-plate-art">
          <svg class="opening-figure" viewBox="24 24 472 472" role="img" aria-labelledby="opening-figure-title opening-figure-desc">
            <title id="opening-figure-title">Three cyclic positions on the unit circle</title>
            <desc id="opening-figure-desc">Positions phi zero, phi one and phi two equally spaced at zero, two pi over three and four pi over three radians, with the two pi over three arc, the kernel K beta, and the spectral gain lambda m marked.</desc>
            <defs>
              <pattern id="opening-dotfield" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle class="h-dot" cx="1" cy="1" r="0.7"/>
              </pattern>
            </defs>

            <rect class="h-field" x="24" y="24" width="472" height="472" fill="url(#opening-dotfield)"/>
            <rect class="h-frame" x="24" y="24" width="472" height="472"/>
            <path class="h-corner" d="M24 54V24h30M466 24h30v30M496 466v30h-30M54 496H24v-30"/>
            <path class="h-frame-tick" d="M260 24v12M260 484v12M24 260h12M484 260h12"/>

            <g class="h-rotor" aria-hidden="true">
              <circle class="h-rotor-dash" cx="260" cy="260" r="197"/>
              <path class="h-rotor-mark" d="M260 57l4 7h-8z"/>
            </g>

            <circle class="h-ring" cx="260" cy="260" r="178"/>
            <circle class="h-ring-inner" cx="260" cy="260" r="166"/>
            ${ticks}

            <text class="h-formula" x="42" y="50">&phi; : &#8484;&#8323; &rarr; S&sup1;</text>
            <text class="h-micro" x="478" y="50" text-anchor="end">n = 3</text>

            <g class="h-radii">
              <line x1="260" y1="260" x2="${n(phi0[0])}" y2="${n(phi0[1])}"/>
              <line x1="260" y1="260" x2="${n(phi1[0])}" y2="${n(phi1[1])}"/>
              <line x1="260" y1="260" x2="${n(phi2[0])}" y2="${n(phi2[1])}"/>
            </g>

            <g class="h-chords">
              <path d="M${n(phi0[0])} ${n(phi0[1])} L${n(phi1[0])} ${n(phi1[1])} L${n(phi2[0])} ${n(phi2[1])} Z"/>
              <line class="h-chord-accent" x1="${n(phi1[0])}" y1="${n(phi1[1])}" x2="${n(phi2[0])}" y2="${n(phi2[1])}"/>
            </g>

            <path class="h-arc" d="M${point(54, 0)} A 54 54 0 0 0 ${point(54, 240)}"/>
            ${segment("h-arc-tick", 0, 48, 61)}
            ${segment("h-arc-tick", 240, 48, 61)}
            <text class="h-label h-label-orange" x="277" y="236" text-anchor="middle">2&pi;/3</text>

            <g class="h-points">
              <circle class="h-point-ring" cx="${n(phi0[0])}" cy="${n(phi0[1])}" r="7"/>
              <circle class="h-point" cx="${n(phi0[0])}" cy="${n(phi0[1])}" r="3.2"/>
              <circle class="h-point-ring" cx="${n(phi1[0])}" cy="${n(phi1[1])}" r="7"/>
              <circle class="h-point" cx="${n(phi1[0])}" cy="${n(phi1[1])}" r="3.2"/>
              <circle class="h-point-ring" cx="${n(phi2[0])}" cy="${n(phi2[1])}" r="7"/>
              <circle class="h-point" cx="${n(phi2[0])}" cy="${n(phi2[1])}" r="3.2"/>
            </g>

            <text class="h-label" x="410" y="241" text-anchor="middle">&phi;(0)</text>
            <text class="h-label" x="170" y="126" text-anchor="end">&phi;(1)</text>
            <text class="h-label" x="170" y="396" text-anchor="end">&phi;(2)</text>

            <line class="h-leader" x1="185" y1="282" x2="177" y2="282"/>
            <text class="h-label h-label-small" x="174" y="287" text-anchor="end">K&beta;</text>

            <line class="h-leader" x1="344" y1="259" x2="344" y2="252"/>
            <text class="h-label h-label-small" x="344" y="246" text-anchor="middle">&lambda;m</text>

            <g class="h-center">
              <line x1="252" y1="260" x2="268" y2="260"/>
              <line x1="260" y1="252" x2="260" y2="268"/>
              <circle cx="260" cy="260" r="2.2"/>
            </g>
          </svg>
        </div>
        <figcaption class="opening-plate-caption" id="opening-plate-caption">
          <span class="opening-formula">&phi;(j) = e<sup>i2&pi;j/3</sup></span>
          <span>j = 0, 1, 2</span>
        </figcaption>
      </figure>

      <div class="opening-meta-row">
        <dl class="opening-meta">
          <div class="opening-meta-cell opening-meta-source">
            <dt>Edition</dt>
            <dd>Annotated essay</dd>
          </div>
          <div class="opening-meta-cell">
            <dt>Sections</dt>
            <dd>${metric(sectionCount)}</dd>
          </div>
          <div class="opening-meta-cell">
            <dt>Annotations</dt>
            <dd>${metric(annotationCount)}</dd>
          </div>
          <div class="opening-meta-cell opening-meta-time">
            <dt>Time</dt>
            <dd id="hero-time">${readMinutes} min read</dd>
          </div>
        </dl>
        <button type="button" id="save-essay" class="save-button" aria-label="Save essay" aria-pressed="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>
          <span>Save</span>
        </button>
      </div>
    </div>
  </section>`;
}
