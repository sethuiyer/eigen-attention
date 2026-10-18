import "./explorer.css";

const N = 32;
const HALF = N / 2;
const TAU = Math.PI * 2;
const BETA_MAX = 12;
const BETA_INITIAL = 2.4;

const POSITION = { cx: 150, cy: 136, inner: 24, outer: 94 };
const MATRIX = { x: 34, y: 22, stride: 7, cell: 6.2, size: 224 };
const SPECTRUM = { x: 36, y: 22, width: 252, baseline: 194, height: 172 };

let instance = 0;

function niceScale(peak) {
  const target = Math.max(peak * 1.06, 0.05);
  const steps = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.75, 1];
  return steps.find((step) => step >= target) ?? 1;
}

function measure(beta) {
  const unnormalized = Array.from({ length: N }, (_, r) =>
    Math.exp(beta * (Math.cos((TAU * r) / N) - 1)),
  );
  const total = unnormalized.reduce((sum, value) => sum + value, 0);
  const weights = unnormalized.map((value) => value / total);
  const gains = Array.from({ length: HALF + 1 }, (_, m) =>
    Math.max(
      0,
      weights.reduce(
        (sum, weight, r) => sum + weight * Math.cos((TAU * m * r) / N),
        0,
      ),
    ),
  );
  const peak = Math.max(...weights);
  const effectiveWidth =
    1 / weights.reduce((sum, weight) => sum + weight ** 2, 0);
  return { weights, gains, peak, effectiveWidth };
}

function positionPoint(radius, angle) {
  return [
    POSITION.cx + Math.cos(angle) * radius,
    POSITION.cy + Math.sin(angle) * radius,
  ];
}

function polarLabel(index, radius) {
  const angle = -Math.PI / 2 + (TAU * index) / N;
  const [x, y] = positionPoint(radius, angle);
  const anchor =
    Math.abs(Math.cos(angle)) < 0.2
      ? "middle"
      : Math.cos(angle) > 0
        ? "start"
        : "end";
  const shift = Math.abs(Math.cos(angle)) < 0.2 ? 3 : 0;
  return `<text class="spec-polar-label" x="${x.toFixed(2)}" y="${(y + shift).toFixed(2)}" text-anchor="${anchor}">${index}</text>`;
}

function buildPositionSvg(id) {
  const rings = [0.25, 0.5, 0.75].map((fraction) => {
    const radius =
      POSITION.inner + (POSITION.outer - POSITION.inner) * fraction;
    return `<circle class="spec-ring" cx="${POSITION.cx}" cy="${POSITION.cy}" r="${radius.toFixed(2)}"/>`;
  });
  const beams = Array.from({ length: N }, (_, r) => {
    const angle = -Math.PI / 2 + (TAU * r) / N;
    const [x1, y1] = positionPoint(POSITION.inner, angle);
    const [x2, y2] = positionPoint(POSITION.inner + 1, angle);
    return `<line class="spec-beam" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"><title>Position ${r}</title></line><circle class="spec-beam-tip" cx="${x2.toFixed(2)}" cy="${y2.toFixed(2)}" r="1.45"/>`;
  }).join("");

  return `<svg class="spec-svg spec-position-svg" viewBox="0 0 300 286" role="img" aria-labelledby="${id}-position-title ${id}-position-desc">
    <title id="${id}-position-title">Cyclic attention weights in position space</title>
    <desc id="${id}-position-desc">Thirty-two radial bars show the normalized attention weight at each cyclic offset. The dashed ring marks uniform weight.</desc>
    <g aria-hidden="true">
      <line class="spec-axis-line" x1="${POSITION.cx - POSITION.outer}" y1="${POSITION.cy}" x2="${POSITION.cx + POSITION.outer}" y2="${POSITION.cy}"/>
      <line class="spec-axis-line" x1="${POSITION.cx}" y1="${POSITION.cy - POSITION.outer}" x2="${POSITION.cx}" y2="${POSITION.cy + POSITION.outer}"/>
      ${rings}
      <circle class="spec-ring spec-ring--outer" cx="${POSITION.cx}" cy="${POSITION.cy}" r="${POSITION.outer}"/>
      ${beams}
      <circle class="spec-uniform-ring" cx="${POSITION.cx}" cy="${POSITION.cy}" r="60"/>
      <circle class="spec-center-dot" cx="${POSITION.cx}" cy="${POSITION.cy}" r="1.7"/>
      ${polarLabel(0, POSITION.outer + 14)}
      ${polarLabel(8, POSITION.outer + 14)}
      ${polarLabel(16, POSITION.outer + 14)}
      ${polarLabel(24, POSITION.outer + 14)}
      <text class="spec-svg-caption" x="${POSITION.cx}" y="280" text-anchor="middle">relative position r</text>
    </g>
  </svg>`;
}

function buildMatrixSvg(id) {
  const cells = [];
  for (let row = 0; row < N; row++) {
    for (let column = 0; column < N; column++) {
      cells.push(
        `<rect class="spec-matrix-cell" x="${(MATRIX.x + column * MATRIX.stride).toFixed(2)}" y="${(MATRIX.y + row * MATRIX.stride).toFixed(2)}" width="${MATRIX.cell}" height="${MATRIX.cell}" rx="0.35" fill-opacity="0.12"/>`,
      );
    }
  }
  const ticks = [0, 8, 16, 24, 31];
  const topLabels = ticks
    .map((tick) => {
      const x = MATRIX.x + tick * MATRIX.stride + MATRIX.cell / 2;
      return `<text class="spec-matrix-tick" x="${x.toFixed(2)}" y="15" text-anchor="middle">${tick}</text>`;
    })
    .join("");
  const leftLabels = ticks
    .map((tick) => {
      const y = MATRIX.y + tick * MATRIX.stride + MATRIX.cell / 2 + 2.5;
      return `<text class="spec-matrix-tick" x="${MATRIX.x - 6}" y="${y.toFixed(2)}" text-anchor="end">${tick}</text>`;
    })
    .join("");

  return `<svg class="spec-svg spec-matrix-svg" viewBox="0 0 280 280" role="img" aria-labelledby="${id}-matrix-title ${id}-matrix-desc">
    <title id="${id}-matrix-title">Attention matrix and its Toeplitz structure</title>
    <desc id="${id}-matrix-desc">A thirty-two by thirty-two attention matrix. Rows are query positions and columns are key positions. Cell shade encodes the attention weight; equal diagonals show that the matrix is Toeplitz.</desc>
    <g aria-hidden="true">
      <rect class="spec-matrix-ground" x="${MATRIX.x}" y="${MATRIX.y}" width="${MATRIX.size}" height="${MATRIX.size}"/>
      ${cells.join("")}
      <rect class="spec-matrix-frame" x="${MATRIX.x}" y="${MATRIX.y}" width="${MATRIX.size}" height="${MATRIX.size}"/>
      ${topLabels}
      ${leftLabels}
      <text class="spec-matrix-axis" x="${MATRIX.x + MATRIX.size / 2}" y="275" text-anchor="middle">key position j</text>
      <text class="spec-matrix-axis" x="9" y="${MATRIX.y + MATRIX.size / 2}" text-anchor="middle" transform="rotate(-90 9 ${MATRIX.y + MATRIX.size / 2})">query i</text>
      <g class="spec-probe-marks" visibility="hidden">
        <line class="spec-crosshair" x1="0" y1="0" x2="0" y2="0"/>
        <line class="spec-crosshair" x1="0" y1="0" x2="0" y2="0"/>
        <rect class="spec-probe-cell" x="0" y="0" width="${MATRIX.cell}" height="${MATRIX.cell}" rx="0.35"/>
      </g>
    </g>
  </svg>`;
}

function buildSpectrumSvg(id) {
  const modes = Array.from({ length: HALF + 1 }, (_, m) => {
    const x = SPECTRUM.x + ((m + 0.5) * SPECTRUM.width) / (HALF + 1);
    return `<g><line class="spec-spectrum-stem" x1="${x.toFixed(2)}" y1="${SPECTRUM.baseline}" x2="${x.toFixed(2)}" y2="${SPECTRUM.baseline}"><title>Mode ${m}</title></line><circle class="spec-spectrum-dot" cx="${x.toFixed(2)}" cy="${SPECTRUM.baseline}" r="2.25"><title>Mode ${m}</title></circle></g>`;
  }).join("");

  const grids = [0, 0.25, 0.5, 0.75, 1]
    .map((fraction) => {
      const y = SPECTRUM.baseline - fraction * SPECTRUM.height;
      const label =
        fraction === 0 || fraction === 0.5 || fraction === 1
          ? `<text class="spec-axis-tick" x="${SPECTRUM.x - 7}" y="${(y + 3).toFixed(2)}" text-anchor="end">${fraction.toFixed(2)}</text>`
          : "";
      return `<line class="spec-gridline${fraction === 1 ? " spec-gridline--unity" : ""}" x1="${SPECTRUM.x}" y1="${y.toFixed(2)}" x2="${SPECTRUM.x + SPECTRUM.width}" y2="${y.toFixed(2)}"/>${label}`;
    })
    .join("");

  const xLabels = [0, 4, 8, 12, 16]
    .map((m) => {
      const x = SPECTRUM.x + ((m + 0.5) * SPECTRUM.width) / (HALF + 1);
      return `<text class="spec-axis-tick" x="${x.toFixed(2)}" y="${SPECTRUM.baseline + 14}" text-anchor="middle">${m}</text>`;
    })
    .join("");

  return `<svg class="spec-svg spec-spectrum-svg" viewBox="0 0 300 246" role="img" aria-labelledby="${id}-spectrum-title ${id}-spectrum-desc">
    <title id="${id}-spectrum-title">Nonnegative cosine Fourier gains</title>
    <desc id="${id}-spectrum-desc">Seventeen nonnegative cosine gains from the constant mode through the Nyquist mode. Each stem is one frequency; zero gain sits on the baseline.</desc>
    <g aria-hidden="true">
      ${grids}
      <path class="spec-spectrum-fill" d=""/>
      <line class="spec-spectrum-axis" x1="${SPECTRUM.x}" y1="${SPECTRUM.baseline}" x2="${SPECTRUM.x + SPECTRUM.width}" y2="${SPECTRUM.baseline}"/>
      ${modes}
      <polyline class="spec-spectrum-line" points=""/>
      ${xLabels}
      <text class="spec-axis-caption" x="${SPECTRUM.x + SPECTRUM.width / 2}" y="232" text-anchor="middle">frequency mode m</text>
    </g>
  </svg>`;
}

export function mountExplorer(element) {
  const id = `spec-instrument-${++instance}`;
  let state = measure(BETA_INITIAL);

  element.innerHTML = `
    <div class="spec-instrument">
      <div class="spec-masthead">
        <div class="spec-masthead-block">
          <span class="spec-kicker">Cyclic softmax kernel</span>
          <span class="spec-kernel">w(r) ∝ exp[β(cos θ<sub>r</sub> − 1)]</span>
        </div>
        <div class="spec-masthead-block spec-masthead-right">
          <span class="spec-kicker">Grid</span>
          <span class="spec-mono">n = 32 &nbsp;·&nbsp; θ<sub>r</sub> = 2πr/32</span>
        </div>
      </div>

      <div class="spec-plates">
        <section class="spec-plate" aria-labelledby="${id}-position-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">01</span>
            <h3 id="${id}-position-heading">Position space</h3>
            <span class="spec-meta" id="${id}-scale">scale 0–0.05</span>
          </div>
          ${buildPositionSvg(id)}
          <div class="spec-plate-foot">
            <span>r = cyclic offset</span>
            <span><i class="spec-key-line" aria-hidden="true"></i>uniform 1/32</span>
          </div>
        </section>

        <section class="spec-plate" aria-labelledby="${id}-matrix-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">02</span>
            <h3 id="${id}-matrix-heading">Attention matrix</h3>
            <span class="spec-meta">32 × 32</span>
          </div>
          ${buildMatrixSvg(id)}
          <div class="spec-plate-foot spec-matrix-foot">
            <span class="spec-formula-small">A<sub>ij</sub> = w((j − i) mod 32)</span>
            <span class="spec-probe" id="${id}-probe" aria-hidden="true">i — → j —</span>
          </div>
        </section>

        <section class="spec-plate" aria-labelledby="${id}-spectrum-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">03</span>
            <h3 id="${id}-spectrum-heading">Frequency space</h3>
            <span class="spec-meta">m = 0…16</span>
          </div>
          ${buildSpectrumSvg(id)}
          <div class="spec-plate-foot">
            <span>cosine transform</span>
            <span>λ<sub>m</sub> ≥ 0</span>
          </div>
        </section>
      </div>

      <dl class="spec-metrics" aria-label="Derived measurements">
        <div class="spec-metric">
          <dt>Effective width</dt>
          <dd><span class="spec-metric-number" id="${id}-width">32.0</span><span class="spec-metric-unit">/ 32</span></dd>
        </div>
        <div class="spec-metric">
          <dt>First gain λ<sub>1</sub></dt>
          <dd><span class="spec-metric-number" id="${id}-lambda1">0.000</span></dd>
        </div>
        <div class="spec-metric">
          <dt>Gain λ<sub>8</sub></dt>
          <dd><span class="spec-metric-number" id="${id}-lambda8">0.000</span></dd>
        </div>
      </dl>

      <div class="spec-control">
        <div class="spec-control-heading">
          <label class="spec-control-label" for="${id}-beta">
            <span class="spec-control-glyph" aria-hidden="true">β</span>
            <span>Inverse temperature</span>
          </label>
        </div>
        <div class="spec-control-row">
          <output class="spec-beta-readout" for="${id}-beta" id="${id}-beta-output">2.4</output>
          <div class="spec-slider-column">
            <input class="spec-slider" id="${id}-beta" type="range" min="0" max="${BETA_MAX}" step="0.1" value="${BETA_INITIAL}" aria-describedby="${id}-endpoints ${id}-beta-help"/>
            <div class="spec-endpoints" id="${id}-endpoints">
              <span><b>0</b> Broad averaging</span>
              <span>Local attention <b>${BETA_MAX}</b></span>
            </div>
            <p class="spec-sr-only" id="${id}-beta-help">Higher values concentrate attention near the current position. Use the arrow keys to adjust inverse temperature.</p>
          </div>
        </div>
      </div>
    </div>`;

  const slider = element.querySelector(".spec-slider");
  const output = element.querySelector(".spec-beta-readout");
  const scaleLabel = element.querySelector(`#${id}-scale`);
  const widthValue = element.querySelector(`#${id}-width`);
  const lambda1Value = element.querySelector(`#${id}-lambda1`);
  const lambda8Value = element.querySelector(`#${id}-lambda8`);
  const positionDescription = element.querySelector(`#${id}-position-desc`);
  const uniformRing = element.querySelector(".spec-uniform-ring");
  const beams = Array.from(element.querySelectorAll(".spec-beam"));
  const tips = Array.from(element.querySelectorAll(".spec-beam-tip"));
  const matrixSvg = element.querySelector(".spec-matrix-svg");
  const matrixCells = Array.from(element.querySelectorAll(".spec-matrix-cell"));
  const probe = element.querySelector(`#${id}-probe`);
  const probeMarks = element.querySelector(".spec-probe-marks");
  const probeLines = Array.from(element.querySelectorAll(".spec-crosshair"));
  const probeCell = element.querySelector(".spec-probe-cell");
  const spectrumStems = Array.from(
    element.querySelectorAll(".spec-spectrum-stem"),
  );
  const spectrumDots = Array.from(
    element.querySelectorAll(".spec-spectrum-dot"),
  );
  const spectrumLine = element.querySelector(".spec-spectrum-line");
  const spectrumFill = element.querySelector(".spec-spectrum-fill");

  function render() {
    const beta = Number(slider.value);
    state = measure(beta);
    const { weights, gains, peak, effectiveWidth } = state;
    const scale = niceScale(peak);
    const barRange = POSITION.outer - POSITION.inner;

    for (let r = 0; r < N; r++) {
      const angle = -Math.PI / 2 + (TAU * r) / N;
      const radius = POSITION.inner + barRange * (weights[r] / scale);
      const [x2, y2] = positionPoint(radius, angle);
      const beam = beams[r];
      beam.setAttribute("x2", x2.toFixed(2));
      beam.setAttribute("y2", y2.toFixed(2));
      beam.querySelector("title").textContent =
        `r = ${r} · weight ${weights[r].toFixed(5)}`;
      tips[r].setAttribute("cx", x2.toFixed(2));
      tips[r].setAttribute("cy", y2.toFixed(2));
    }

    const uniformRadius = POSITION.inner + barRange * (1 / N / scale);
    uniformRing.setAttribute("r", uniformRadius.toFixed(2));
    scaleLabel.textContent = `scale 0–${scale.toFixed(2)}`;

    const concentration = Math.min(1, Math.max(0, 1 - 1 / (N * peak)));
    const opacityFor = Array.from({ length: N }, (_, offset) => {
      const relative = weights[offset] / peak;
      return 0.12 + 0.84 * relative * concentration;
    });
    for (let row = 0; row < N; row++) {
      for (let column = 0; column < N; column++) {
        const offset = (column - row + N) % N;
        matrixCells[row * N + column].setAttribute(
          "fill-opacity",
          opacityFor[offset].toFixed(3),
        );
      }
    }

    const spectrumPoints = gains.map((gain, m) => {
      const x = SPECTRUM.x + ((m + 0.5) * SPECTRUM.width) / (HALF + 1);
      const y = SPECTRUM.baseline - gain * SPECTRUM.height;
      return [x, y];
    });
    for (let m = 0; m <= HALF; m++) {
      const [, y] = spectrumPoints[m];
      spectrumStems[m].setAttribute("y2", y.toFixed(2));
      spectrumStems[m].querySelector("title").textContent =
        `m = ${m} · gain ${gains[m].toFixed(5)}`;
      spectrumDots[m].setAttribute("cy", y.toFixed(2));
      spectrumDots[m].querySelector("title").textContent =
        `m = ${m} · gain ${gains[m].toFixed(5)}`;
    }
    spectrumLine.setAttribute(
      "points",
      spectrumPoints
        .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
        .join(" "),
    );
    spectrumFill.setAttribute(
      "d",
      `M${spectrumPoints[0][0].toFixed(2)},${SPECTRUM.baseline} ` +
        spectrumPoints
          .map(([x, y]) => `L${x.toFixed(2)},${y.toFixed(2)}`)
          .join(" ") +
        ` L${spectrumPoints[HALF][0].toFixed(2)},${SPECTRUM.baseline} Z`,
    );

    widthValue.textContent = effectiveWidth.toFixed(1);
    lambda1Value.textContent = gains[1].toFixed(3);
    lambda8Value.textContent = gains[8].toFixed(3);
    output.textContent = beta.toFixed(1);
    slider.style.setProperty("--spec-progress", `${(beta / BETA_MAX) * 100}%`);
    slider.setAttribute(
      "aria-valuetext",
      `β ${beta.toFixed(1)}. Effective width ${effectiveWidth.toFixed(1)} of 32. First gain ${gains[1].toFixed(3)}.`,
    );
    positionDescription.textContent =
      `Thirty-two radial bars show the normalized attention weight at each cyclic offset. ` +
      `The dashed ring marks uniform weight. At β ${beta.toFixed(1)}, peak weight is ` +
      `${peak.toFixed(4)} and effective width is ${effectiveWidth.toFixed(1)} of 32.`;
  }

  function locateProbe(event) {
    if (!probeMarks) return;
    const matrix = matrixSvg.getScreenCTM();
    if (!matrix) return;
    const point = matrixSvg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const local = point.matrixTransform(matrix.inverse());
    const column = Math.floor((local.x - MATRIX.x) / MATRIX.stride);
    const row = Math.floor((local.y - MATRIX.y) / MATRIX.stride);
    if (column < 0 || column >= N || row < 0 || row >= N) {
      hideProbe();
      return;
    }
    const x = MATRIX.x + column * MATRIX.stride + MATRIX.cell / 2;
    const y = MATRIX.y + row * MATRIX.stride + MATRIX.cell / 2;
    probeLines[0].setAttribute("x1", x.toFixed(2));
    probeLines[0].setAttribute("x2", x.toFixed(2));
    probeLines[0].setAttribute("y1", MATRIX.y);
    probeLines[0].setAttribute("y2", MATRIX.y + MATRIX.size);
    probeLines[1].setAttribute("y1", y.toFixed(2));
    probeLines[1].setAttribute("y2", y.toFixed(2));
    probeLines[1].setAttribute("x1", MATRIX.x);
    probeLines[1].setAttribute("x2", MATRIX.x + MATRIX.size);
    probeCell.setAttribute("x", (MATRIX.x + column * MATRIX.stride).toFixed(2));
    probeCell.setAttribute("y", (MATRIX.y + row * MATRIX.stride).toFixed(2));
    probeMarks.setAttribute("visibility", "visible");
    probe.textContent = `i ${row} → j ${column} · w ${state.weights[(column - row + N) % N].toFixed(4)}`;
  }

  function hideProbe() {
    if (!probeMarks) return;
    probeMarks.setAttribute("visibility", "hidden");
    probe.textContent = "i — → j —";
  }

  slider.addEventListener("input", render);
  matrixSvg.addEventListener("pointermove", locateProbe, { passive: true });
  matrixSvg.addEventListener("pointerdown", locateProbe, { passive: true });
  matrixSvg.addEventListener("pointerleave", hideProbe);
  matrixSvg.addEventListener("pointercancel", hideProbe);
  render();

  return () => {
    slider.removeEventListener("input", render);
    matrixSvg.removeEventListener("pointermove", locateProbe);
    matrixSvg.removeEventListener("pointerdown", locateProbe);
    matrixSvg.removeEventListener("pointerleave", hideProbe);
    matrixSvg.removeEventListener("pointercancel", hideProbe);
    element.replaceChildren();
  };
}
