const SVG_NS = "http://www.w3.org/2000/svg";

function makeSVG(tag, attrs) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
}

/* ---------------- BAR CHART ---------------- */
const chart = document.getElementById("chart");

const data = [85, 80, 75, 70];
const labels = ["HTML", "CSS", "Java", "Godot"];
const barColors = ["#60a5fa", "#34d399", "#f59e0b", "#a78bfa"];

// background
chart.appendChild(makeSVG("rect", {
  x: 0,
  y: 0,
  width: 420,
  height: 260,
  rx: 18,
  fill: "#f8fafc"
}));

// axis lines
chart.appendChild(makeSVG("line", {
  x1: 40,
  y1: 220,
  x2: 380,
  y2: 220,
  stroke: "#94a3b8",
  "stroke-width": 2
}));

chart.appendChild(makeSVG("line", {
  x1: 40,
  y1: 30,
  x2: 40,
  y2: 220,
  stroke: "#94a3b8",
  "stroke-width": 2
}));

for (let i = 0; i <= 4; i++) {
  const y = 220 - i * 40;
  const value = i * 25;

  chart.appendChild(makeSVG("line", {
    x1: 40,
    y1: y,
    x2: 380,
    y2: y,
    stroke: "#e2e8f0",
    "stroke-width": 1
  }));

  const tick = makeSVG("text", {
    x: 30,
    y: y + 4,
    "text-anchor": "end",
    "font-size": 11,
    fill: "#64748b"
  });
  tick.textContent = value;
  chart.appendChild(tick);
}

for (let i = 0; i < data.length; i++) {
  const x = 65 + i * 78;
  const height = data[i] * 1.8;
  const y = 220 - height;

  const bar = makeSVG("rect", {
    x: x,
    y: y,
    width: 42,
    height: height,
    rx: 8,
    fill: barColors[i]
  });
  chart.appendChild(bar);

  const valueText = makeSVG("text", {
    x: x + 21,
    y: y - 8,
    "text-anchor": "middle",
    "font-size": 12,
    "font-weight": "600",
    fill: "#334155"
  });
  valueText.textContent = data[i];
  chart.appendChild(valueText);

  const labelText = makeSVG("text", {
    x: x + 21,
    y: 240,
    "text-anchor": "middle",
    "font-size": 12,
    fill: "#334155"
  });
  labelText.textContent = labels[i];
  chart.appendChild(labelText);
}

/* ---------------- SIMPLE ART ---------------- */
const art = document.getElementById("art");

// sky
art.appendChild(makeSVG("rect", {
  x: 0,
  y: 0,
  width: 420,
  height: 240,
  rx: 18,
  fill: "#dbeafe"
}));

// sun
art.appendChild(makeSVG("circle", {
  cx: 330,
  cy: 55,
  r: 28,
  fill: "#facc15"
}));

// cloud 1
art.appendChild(makeSVG("circle", {
  cx: 90,
  cy: 60,
  r: 18,
  fill: "white"
}));
art.appendChild(makeSVG("circle", {
  cx: 110,
  cy: 55,
  r: 22,
  fill: "white"
}));
art.appendChild(makeSVG("circle", {
  cx: 132,
  cy: 62,
  r: 17,
  fill: "white"
}));

// cloud 2
art.appendChild(makeSVG("circle", {
  cx: 220,
  cy: 80,
  r: 14,
  fill: "white"
}));
art.appendChild(makeSVG("circle", {
  cx: 238,
  cy: 74,
  r: 18,
  fill: "white"
}));
art.appendChild(makeSVG("circle", {
  cx: 258,
  cy: 81,
  r: 14,
  fill: "white"
}));

// back hill
art.appendChild(makeSVG("ellipse", {
  cx: 120,
  cy: 170,
  rx: 110,
  ry: 45,
  fill: "#86efac"
}));

// front hill
art.appendChild(makeSVG("ellipse", {
  cx: 290,
  cy: 185,
  rx: 140,
  ry: 55,
  fill: "#4ade80"
}));

// ground
art.appendChild(makeSVG("rect", {
  x: 0,
  y: 180,
  width: 420,
  height: 60,
  fill: "#22c55e"
}));

// tree trunk
art.appendChild(makeSVG("rect", {
  x: 78,
  y: 130,
  width: 14,
  height: 42,
  fill: "#92400e"
}));

// tree top
art.appendChild(makeSVG("circle", {
  cx: 85,
  cy: 120,
  r: 24,
  fill: "#16a34a"
}));

// small flower
art.appendChild(makeSVG("circle", {
  cx: 300,
  cy: 195,
  r: 5,
  fill: "#f472b6"
}));
art.appendChild(makeSVG("circle", {
  cx: 294,
  cy: 200,
  r: 5,
  fill: "#f472b6"
}));
art.appendChild(makeSVG("circle", {
  cx: 306,
  cy: 200,
  r: 5,
  fill: "#f472b6"
}));
art.appendChild(makeSVG("circle", {
  cx: 300,
  cy: 201,
  r: 4,
  fill: "#facc15"
}));