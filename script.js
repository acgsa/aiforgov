// AI for GOV wireframe interactions

const IDEAS = [
  "faster passport processing",
  "disaster response mapping",
  "veterans' claims triage",
  "streamlined export licensing",
  "small-business permitting",
  "benefits fraud detection",
  "weather-model forecasting",
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Hero headline rotator ----------
const rotator = document.getElementById("rotator");
if (rotator && !reducedMotion) {
  let index = 0;
  setInterval(() => {
    const current = rotator.querySelector(".rotator-phrase");
    index = (index + 1) % IDEAS.length;

    const next = document.createElement("span");
    next.className = "rotator-phrase";
    next.textContent = IDEAS[index];
    rotator.appendChild(next);

    current.classList.remove("is-active");
    current.classList.add("is-leaving");
    // next frame so the entry transition runs
    requestAnimationFrame(() => requestAnimationFrame(() => next.classList.add("is-active")));
    setTimeout(() => current.remove(), 600);
  }, 3000);
}

// ---------- Hero ticker (duplicated list for seamless loop) ----------
const ticker = document.getElementById("ticker");
if (ticker) {
  ticker.innerHTML = [...IDEAS, ...IDEAS].map((i) => `<span>${i}</span>`).join("");
}

// ---------- Expanding form ----------
const toggle = document.getElementById("form-toggle");
const panel = document.getElementById("form-panel");
const form = document.getElementById("submit-form");
const success = document.getElementById("form-success");

function openPanel() {
  panel.hidden = false;
  toggle.hidden = true;
  requestAnimationFrame(() => panel.classList.add("is-open"));
  toggle.setAttribute("aria-expanded", "true");
}

function closePanel() {
  panel.classList.remove("is-open");
  toggle.hidden = false;
  toggle.setAttribute("aria-expanded", "false");
  const delay = reducedMotion ? 0 : 350;
  setTimeout(() => { panel.hidden = true; }, delay);
}

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  expanded ? closePanel() : openPanel();
});

// any "#submit" CTA expands the form on arrival
document.querySelectorAll('a[href="#submit"]').forEach((a) => {
  a.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") !== "true") openPanel();
  });
});

document.getElementById("form-cancel").addEventListener("click", closePanel);

panel.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePanel();
    toggle.focus();
  }
});

// Fake submit — wireframe only, no backend
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  form.hidden = true;
  success.hidden = false;
});

document.getElementById("form-reset").addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  success.hidden = true;
  form.querySelector("input").focus();
});
