/* ================== DATOS DEL PROGRAMA ================== */

const FIN_F1 = [
  { n: "Jumping jacks", i: "jumpingjack", s: 4, t: "45 seg", r: 15 },
  { n: "Mountain climbers", i: "mountainclimber", s: 4, t: "45 seg", r: 15 },
  { n: "Burpees", i: "burpee", s: 4, t: "45 seg", r: 15 },
  { n: "Sentadilla con salto", i: "squat", s: 4, t: "45 seg", r: 15 },
  { n: "High knees", i: "highknees", s: 4, t: "45 seg", r: 15 },
];
const FIN_F2 = [
  { n: "Burpees", i: "burpee", s: 5, t: "45 seg", r: 15 },
  { n: "Sentadilla con salto", i: "squat", s: 5, t: "45 seg", r: 15 },
  { n: "Mountain climbers", i: "mountainclimber", s: 5, t: "45 seg", r: 15 },
  { n: "Push-ups", i: "pushup", s: 5, t: "45 seg", r: 15 },
  { n: "High knees", i: "highknees", s: 5, t: "45 seg", r: 15 },
];
const FIN_F3 = [
  { n: "Burpee con push-up", i: "burpee", s: 5, t: "50 seg", r: 10 },
  { n: "Jump squats", i: "squat", s: 5, t: "50 seg", r: 10 },
  { n: "Mountain climbers", i: "mountainclimber", s: 5, t: "50 seg", r: 10 },
  { n: "Push-ups explosivos", i: "pushup", s: 5, t: "50 seg", r: 10 },
  { n: "High knees", i: "highknees", s: 5, t: "50 seg", r: 10 },
];

const PHASES = [
  { name: "Fundamento", days: [
    { type: "push", ex: [
      { n: "Push-ups estándar", i: "pushup", s: 4, t: "12-15 reps", r: 60 },
      { n: "Pike push-ups", i: "pike", s: 3, t: "8-10 reps", r: 60 },
      { n: "Dips asistidos", i: "dips", s: 3, t: "8-10 reps", r: 60 },
      { n: "Plancha (hold)", i: "plank", s: 3, t: "30-40 seg", r: 45 },
    ], fin: FIN_F1 },
    { type: "pull", ex: [
      { n: "Dominadas (o negativas)", i: "pullup", s: 4, t: "5-8 reps", r: 90 },
      { n: "Remo invertido", i: "row", s: 4, t: "10-12 reps", r: 60 },
      { n: "Face pulls con banda", i: "facepull", s: 3, t: "15 reps", r: 45 },
    ], fin: FIN_F1 },
    { type: "cardio", ex: [
      { n: "Caminata rápida / trote suave", i: "cardio", s: 1, t: "25-30 min ritmo conversacional", r: 0 },
      { n: "Movilidad hombros y cadera", i: "mobility", s: 1, t: "5-10 min", r: 0 },
    ] },
    { type: "pushvol", ex: [
      { n: "Push-ups anchos/estrechos", i: "pushup", s: 4, t: "12 reps", r: 60 },
      { n: "Pike push-ups pies elevados", i: "pike", s: 3, t: "8 reps", r: 60 },
      { n: "Dips", i: "dips", s: 3, t: "10 reps", r: 60 },
    ], fin: FIN_F1 },
    { type: "full", ex: [
      { n: "Sentadilla búlgara", i: "squat", s: 3, t: "10 reps/pierna", r: 60 },
      { n: "Push-ups", i: "pushup", s: 3, t: "15 reps", r: 45 },
      { n: "Hollow body hold", i: "hollow", s: 3, t: "30 seg", r: 45 },
      { n: "Plancha + toque de hombro", i: "plank", s: 3, t: "20 reps", r: 45 },
    ], fin: FIN_F1 },
    { type: "metabolic", ex: [
      { n: "Burpees", i: "burpee", s: 4, t: "40 seg", r: 20 },
      { n: "Mountain climbers", i: "mountainclimber", s: 4, t: "40 seg", r: 20 },
      { n: "Push-ups", i: "pushup", s: 4, t: "40 seg", r: 20 },
      { n: "Jumping jacks", i: "jumpingjack", s: 4, t: "40 seg", r: 20 },
      { n: "Sentadilla con salto", i: "squat", s: 4, t: "40 seg", r: 20 },
    ] },
    { type: "rest", ex: [] },
  ]},
  { name: "Construcción", days: [
    { type: "push", ex: [
      { n: "Push-ups con déficit", i: "pushup", s: 4, t: "10-12 reps", r: 60 },
      { n: "Pike push-ups pies elevados", i: "pike", s: 4, t: "8-10 reps", r: 60 },
      { n: "Dips completos", i: "dips", s: 4, t: "10-12 reps", r: 75 },
      { n: "Plancha frontal (tuck)", i: "plank", s: 3, t: "20-30 seg", r: 45 },
    ], fin: FIN_F2 },
    { type: "pull", ex: [
      { n: "Dominadas", i: "pullup", s: 5, t: "6-8 reps", r: 90 },
      { n: "Remo invertido pies elevados", i: "row", s: 4, t: "10 reps", r: 60 },
      { n: "Dominadas archer", i: "archer", s: 3, t: "4-6 reps/lado", r: 90 },
    ], fin: FIN_F2 },
    { type: "cardio", ex: [
      { n: "Trote continuo o bici", i: "cardio", s: 1, t: "30-35 min ritmo moderado", r: 0 },
      { n: "Sprints ligeros", i: "cardio", s: 5, t: "30 seg fuerte", r: 90 },
    ] },
    { type: "pushvol", ex: [
      { n: "Push-ups explosivos", i: "pushup", s: 4, t: "8 reps", r: 60 },
      { n: "Pike push-ups", i: "pike", s: 4, t: "10 reps", r: 60 },
      { n: "Dips", i: "dips", s: 4, t: "12 reps", r: 60 },
    ], fin: FIN_F2 },
    { type: "full", ex: [
      { n: "Zancadas con salto", i: "squat", s: 3, t: "12 reps/pierna", r: 60 },
      { n: "Push-ups diamante", i: "pushup", s: 3, t: "12 reps", r: 45 },
      { n: "Dragon flag negativa / L-sit", i: "dragonflag", s: 3, t: "8-10 seg", r: 60 },
    ], fin: FIN_F2 },
    { type: "metabolic", ex: [
      { n: "Burpees (min. impar)", i: "burpee", s: 10, t: "10 reps", r: 0 },
      { n: "Mountain climbers + push-ups (min. par)", i: "mountainclimber", s: 10, t: "15+10 reps", r: 0 },
    ] },
    { type: "rest", ex: [] },
  ]},
  { name: "Intensificación", days: [
    { type: "push", ex: [
      { n: "Handstand push-up asistido (pared)", i: "handstand", s: 4, t: "5-8 reps", r: 90 },
      { n: "Push-ups con banda", i: "pushup", s: 4, t: "10 reps", r: 60 },
      { n: "Dips lastre / tempo lento", i: "dips", s: 4, t: "10 reps (bajada 3seg)", r: 75 },
      { n: "Plancha lean", i: "plank", s: 3, t: "15-20 seg", r: 45 },
    ], fin: FIN_F3 },
    { type: "pull", ex: [
      { n: "Dominadas lastre / tempo lento", i: "pullup", s: 5, t: "6-8 reps", r: 90 },
      { n: "Remo invertido a una mano", i: "row", s: 3, t: "6 reps/lado", r: 75 },
      { n: "Dominadas archer", i: "archer", s: 4, t: "5 reps/lado", r: 90 },
    ], fin: FIN_F3 },
    { type: "cardio", ex: [
      { n: "Trote o bici moderado", i: "cardio", s: 1, t: "35-40 min", r: 0 },
      { n: "Sprints moderados", i: "cardio", s: 6, t: "30 seg fuerte", r: 90 },
    ] },
    { type: "pushvol", ex: [
      { n: "Handstand push-up pared", i: "handstand", s: 4, t: "6 reps", r: 90 },
      { n: "Push-ups pseudo planche", i: "pushup", s: 4, t: "8-10 reps", r: 60 },
      { n: "Dips", i: "dips", s: 4, t: "15 reps", r: 60 },
    ], fin: FIN_F3 },
    { type: "full", ex: [
      { n: "Sentadilla pistol asistida", i: "squat", s: 3, t: "6 reps/pierna", r: 60 },
      { n: "Push-ups a una mano (asistidos)", i: "pushup", s: 3, t: "5 reps/lado", r: 60 },
      { n: "Dragon flag", i: "dragonflag", s: 3, t: "6-8 reps", r: 60 },
    ], fin: FIN_F3 },
    { type: "metabolic", ex: [
      { n: "Burpee con push-up", i: "burpee", s: 5, t: "45 seg", r: 15 },
      { n: "Jump squats", i: "squat", s: 5, t: "45 seg", r: 15 },
      { n: "Mountain climbers", i: "mountainclimber", s: 5, t: "45 seg", r: 15 },
      { n: "Push-ups", i: "pushup", s: 5, t: "45 seg", r: 15 },
      { n: "High knees", i: "highknees", s: 5, t: "45 seg", r: 15 },
    ] },
    { type: "rest", ex: [] },
  ]},
];

const LABEL = { push: "Empuje", pull: "Tracción", cardio: "Cardio ligero", pushvol: "Empuje volumen", full: "Full body + Core", metabolic: "Metabólico", rest: "Descanso" };
const BLUE = "#0B4DA3", RED = "#C21807", GRAY = "#444";
const COLOR = { push: BLUE, pull: BLUE, cardio: BLUE, pushvol: BLUE, full: BLUE, metabolic: RED, rest: GRAY };
const TOTAL = 84;

function dayInfo(idx) {
  const week = Math.floor(idx / 7) + 1;
  const wd = idx % 7;
  const pi = Math.min(2, Math.floor((week - 1) / 4));
  return { week, wd, pi, phase: PHASES[pi], day: PHASES[pi].days[wd], dayNum: wd + 1 };
}

/* ================== ICONOS ================== */

const ICONS = {
  pushup: '<circle cx="12" cy="18" r="5"/><path d="M16 21 L46 44"/><path d="M46 44 L58 44"/><path d="M30 30 L24 46"/><path d="M46 44 L40 56"/><path d="M30 30 L36 42"/>',
  pike: '<circle cx="20" cy="46" r="5"/><path d="M23 43 L40 22"/><path d="M40 22 L58 30"/><path d="M40 22 L34 8"/><path d="M40 22 L46 8"/>',
  dips: '<circle cx="32" cy="10" r="5"/><path d="M32 15 L32 34"/><path d="M32 20 L18 30"/><path d="M32 20 L46 30"/><path d="M32 34 L22 56"/><path d="M32 34 L42 56"/><path d="M14 34 L14 46"/><path d="M50 34 L50 46"/>',
  plank: '<circle cx="12" cy="20" r="5"/><path d="M16 23 L52 40"/><path d="M20 27 L14 46"/><path d="M52 40 L58 46"/>',
  pullup: '<path d="M8 10 L56 10"/><circle cx="32" cy="20" r="5"/><path d="M32 25 L18 12"/><path d="M32 25 L46 12"/><path d="M32 25 L32 42"/><path d="M32 42 L24 58"/><path d="M32 42 L40 58"/>',
  row: '<path d="M8 12 L56 12"/><circle cx="30" cy="34" r="5"/><path d="M30 12 L30 29"/><path d="M30 29 L14 20"/><path d="M30 29 L46 40"/><path d="M30 29 L14 40"/>',
  facepull: '<circle cx="32" cy="14" r="5"/><path d="M32 19 L32 40"/><path d="M32 26 L16 20"/><path d="M32 26 L48 20"/><path d="M32 40 L24 58"/><path d="M32 40 L40 58"/>',
  cardio: '<circle cx="16" cy="10" r="5"/><path d="M16 15 L22 32"/><path d="M22 32 L14 50"/><path d="M22 32 L36 40"/><path d="M16 15 L34 20"/><path d="M34 20 L30 8"/>',
  mobility: '<circle cx="32" cy="10" r="5"/><path d="M32 15 L32 36"/><path d="M32 20 L14 14"/><path d="M32 20 L50 30"/><path d="M32 36 L20 56"/><path d="M32 36 L44 56"/>',
  squat: '<circle cx="32" cy="10" r="5"/><path d="M32 15 L32 30"/><path d="M32 18 L18 24"/><path d="M32 18 L46 24"/><path d="M32 30 L20 40 L22 56"/><path d="M32 30 L44 40 L42 56"/>',
  hollow: '<circle cx="14" cy="40" r="5"/><path d="M18 38 Q34 20 50 34"/><path d="M50 34 L58 26"/><path d="M18 38 L10 50"/>',
  burpee: '<circle cx="32" cy="8" r="5"/><path d="M32 13 L32 26"/><path d="M32 26 L16 40"/><path d="M32 26 L48 40"/><path d="M32 26 L22 50"/><path d="M32 26 L42 50"/>',
  mountainclimber: '<circle cx="14" cy="16" r="5"/><path d="M18 19 L48 38"/><path d="M22 23 L34 12"/><path d="M48 38 L58 40"/><path d="M40 30 L44 46"/>',
  jumpingjack: '<circle cx="32" cy="10" r="5"/><path d="M32 15 L32 38"/><path d="M32 18 L12 8"/><path d="M32 18 L52 8"/><path d="M32 38 L14 58"/><path d="M32 38 L50 58"/>',
  dragonflag: '<circle cx="12" cy="46" r="5"/><path d="M16 44 L54 20"/><path d="M54 20 L58 10"/>',
  handstand: '<circle cx="32" cy="52" r="5"/><path d="M32 47 L32 26"/><path d="M32 30 L18 46"/><path d="M32 30 L46 46"/><path d="M32 26 L22 10"/><path d="M32 26 L42 10"/>',
  archer: '<path d="M8 10 L56 10"/><circle cx="26" cy="34" r="5"/><path d="M26 12 L26 29"/><path d="M26 29 L10 12"/><path d="M26 29 L50 24"/><path d="M26 34 L20 56"/>',
  highknees: '<circle cx="24" cy="12" r="5"/><path d="M24 17 L28 34"/><path d="M28 34 L18 44"/><path d="M28 34 L40 20"/><path d="M24 17 L40 24"/>',
};
function svgIcon(name, color) {
  return '<svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="' + color +
    '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '<circle cx="32" cy="32" r="20"/>') + '</svg>';
}

/* ================== ALMACENAMIENTO (localStorage) ================== */

const KEY = "calistenia12";
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
}
function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
}
let DB = load();
if (DB.current === undefined) DB.current = 0;
if (!DB.done) DB.done = {};
if (!DB.logs) DB.logs = {};
save(DB);

let viewIdx = DB.current;

/* ================== RENDER ================== */

const $ = (id) => document.getElementById(id);

function render() {
  const info = dayInfo(viewIdx);
  const color = COLOR[info.day.type];

  $("h-day").textContent = "SEMANA " + info.week + " · DÍA " + info.dayNum;
  $("h-phase").textContent = "FASE " + (info.pi + 1) + " · " + info.phase.name.toUpperCase();
  const badge = $("d-type");
  badge.textContent = LABEL[info.day.type].toUpperCase();
  badge.style.background = color;

  const curEl = $("d-cur");
  if (viewIdx === DB.current) {
    curEl.innerHTML = '<div class="cur">● DÍA ACTUAL</div>';
  } else {
    curEl.innerHTML = '<button class="curbtn" id="mk-cur">marcar como día actual</button>';
    $("mk-cur").onclick = () => { DB.current = viewIdx; save(DB); render(); };
  }

  const list = $("list");
  list.innerHTML = "";
  const log = DB.logs[viewIdx] || {};

  if (info.day.type === "rest") {
    list.innerHTML = '<div class="rest-day"><div style="font-size:22px;font-weight:900">DÍA DE DESCANSO</div>' +
      '<div style="font-size:13px;color:#444;font-weight:600;margin-top:6px">Recuperación completa. Sin entrenamiento programado.</div></div>';
    return;
  }

  const addCard = (ex, key, isFin) => {
    const c = isFin ? RED : color;
    const div = document.createElement("div");
    div.className = "ex" + (isFin ? " fin" : "");
    let setsHtml = "";
    for (let i = 0; i < ex.s; i++) {
      const val = (log[key] && log[key][i]) || "";
      setsHtml += '<div class="setwrap"><div class="setlbl">S' + (i + 1) + '</div>' +
        '<input class="setinp" inputmode="numeric" data-k="' + key + '" data-i="' + i + '" value="' + val + '" placeholder="0"></div>';
    }
    div.innerHTML =
      '<div class="exrow">' +
        '<div class="exicon">' + svgIcon(ex.i, c) + '</div>' +
        '<div style="flex:1;min-width:0"><div class="exname">' + ex.n + '</div>' +
        '<div class="extarget">' + ex.s + ' × ' + ex.t + '</div></div>' +
        (ex.r > 0 ? '<button class="restbtn" data-rest="' + ex.r + '">⏱ ' + ex.r + 's</button>' : '') +
      '</div><div class="sets">' + setsHtml + '</div>';
    list.appendChild(div);
  };

  info.day.ex.forEach((ex, i) => addCard(ex, "e" + i, false));

  if (info.day.fin && info.day.fin.length) {
    const div = document.createElement("div");
    div.className = "divider";
    div.innerHTML = '<div></div><span>FINISHER METABÓLICO</span><div></div>';
    list.appendChild(div);
    info.day.fin.forEach((ex, i) => addCard(ex, "f" + i, true));
  }

  const act = document.createElement("div");
  act.className = "actions";
  act.innerHTML = '<button class="btn-save" id="btn-save">Guardar registro</button>' +
                  '<button class="btn-done" id="btn-done">✓ Completar día</button>';
  list.appendChild(act);

  // listeners
  list.querySelectorAll(".setinp").forEach((inp) => {
    inp.addEventListener("input", () => {
      const k = inp.dataset.k, i = +inp.dataset.i;
      if (!DB.logs[viewIdx]) DB.logs[viewIdx] = {};
      if (!DB.logs[viewIdx][k]) DB.logs[viewIdx][k] = [];
      DB.logs[viewIdx][k][i] = inp.value;
      save(DB);
    });
  });
  list.querySelectorAll("[data-rest]").forEach((b) => {
    b.addEventListener("click", () => openTimer(+b.dataset.rest, color));
  });
  $("btn-save").onclick = () => {
    const ok = save(DB);
    $("btn-save").textContent = ok ? "✓ Guardado" : "✕ Error al guardar";
    setTimeout(() => { $("btn-save").textContent = "Guardar registro"; }, 1500);
  };
  $("btn-done").onclick = () => {
    DB.done[viewIdx] = true;
    DB.current = Math.min(TOTAL - 1, viewIdx + 1);
    save(DB);
    viewIdx = DB.current;
    render();
    window.scrollTo(0, 0);
  };
}

$("btn-prev").onclick = () => { if (viewIdx > 0) { viewIdx--; render(); window.scrollTo(0, 0); } };
$("btn-next").onclick = () => { if (viewIdx < TOTAL - 1) { viewIdx++; render(); window.scrollTo(0, 0); } };

/* ================== CALENDARIO ================== */

$("btn-cal").onclick = () => { renderCal(); $("cal").classList.add("on"); };
$("cal-close").onclick = () => $("cal").classList.remove("on");

function renderCal() {
  const body = $("cal-body");
  body.innerHTML = "";
  for (let p = 0; p < 3; p++) {
    const h = document.createElement("div");
    h.className = "calphase";
    h.textContent = "FASE " + (p + 1) + " · " + PHASES[p].name.toUpperCase();
    body.appendChild(h);
    const grid = document.createElement("div");
    grid.className = "calgrid";
    for (let i = 0; i < 28; i++) {
      const idx = p * 28 + i;
      const d = dayInfo(idx);
      const b = document.createElement("button");
      b.className = "calday" + (DB.done[idx] ? " done" : "") + (idx === DB.current ? " cur" : "") +
                    (idx === viewIdx ? " view" : "") + (d.day.type === "rest" ? " rest" : "");
      if (DB.done[idx]) b.style.background = COLOR[d.day.type];
      b.textContent = i + 1;
      b.onclick = () => { viewIdx = idx; $("cal").classList.remove("on"); render(); window.scrollTo(0, 0); };
      grid.appendChild(b);
    }
    body.appendChild(grid);
  }
}

/* ================== CRONÓMETRO ================== */

let tTotal = 60, tEndAt = 0, tRemaining = 60, tRunning = false, tTick = null, tDone = false, tAccent = BLUE;
let wakeLock = null;
const CIRC = 2 * Math.PI * 27;

function alarmSound() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = i % 2 === 0 ? 1100 : 850;
      osc.connect(g); g.connect(ctx.destination);
      const st = now + i * 0.32;
      g.gain.setValueAtTime(0.0001, st);
      g.gain.exponentialRampToValueAtTime(0.5, st + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, st + 0.26);
      osc.start(st); osc.stop(st + 0.28);
    }
  } catch (e) { /* sin audio */ }
  if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 400, 150, 400]);
}

async function requestWake() {
  try { if ("wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen"); } catch (e) {}
}
function releaseWake() { try { if (wakeLock) { wakeLock.release(); wakeLock = null; } } catch (e) {} }

function openTimer(seconds, accent) {
  tAccent = accent;
  tTotal = seconds; tRemaining = seconds; tRunning = false; tDone = false;
  $("timer").classList.add("on");
  $("timer").classList.remove("done");
  buildPresets();
  paint();
}

function buildPresets() {
  const box = $("t-presets");
  box.innerHTML = "";
  [10, 15, 30, 45, 60, 90, 120].forEach((s) => {
    const b = document.createElement("button");
    b.textContent = s + "s";
    if (s === tTotal) b.classList.add("sel");
    b.onclick = () => { stopTick(); tTotal = s; tRemaining = s; tRunning = false; tDone = false; $("timer").classList.remove("done"); buildPresets(); paint(); };
    box.appendChild(b);
  });
}

function paint() {
  $("t-num").textContent = tRemaining;
  const pct = tTotal > 0 ? tRemaining / tTotal : 0;
  const arc = $("t-arc");
  arc.setAttribute("stroke-dashoffset", (CIRC * (1 - pct)).toFixed(2));
  arc.setAttribute("stroke", tDone ? "#FFFFFF" : tAccent);
  arc.style.transition = tRunning ? "stroke-dashoffset 1s linear" : "none";
  $("t-dial").classList.toggle("run", tRunning);
  $("t-play").textContent = tRunning ? "❚❚" : "▶";
  $("t-play").style.background = tDone ? "#FFFFFF" : tAccent;
  $("t-play").style.color = tDone ? RED : "#FFFFFF";
  const stat = $("t-stat");
  if (tDone) { stat.textContent = "¡LISTO! TOCA ▶"; stat.style.color = "#FFFFFF"; }
  else if (tRunning) { stat.textContent = "● CORRIENDO"; stat.style.color = RED; }
  else { stat.textContent = "DESCANSO"; stat.style.color = "#111"; }
}

function stopTick() { if (tTick) { clearInterval(tTick); tTick = null; } releaseWake(); }

function startTimer() {
  if (tDone) { tDone = false; tRemaining = tTotal; $("timer").classList.remove("done"); }
  tEndAt = Date.now() + tRemaining * 1000;
  tRunning = true;
  requestWake();
  paint();
  stopTickOnly();
  tTick = setInterval(() => {
    const left = Math.max(0, Math.round((tEndAt - Date.now()) / 1000));
    tRemaining = left;
    if (left <= 0) {
      stopTick();
      tRunning = false; tDone = true;
      $("timer").classList.add("done");
      alarmSound();
    }
    paint();
  }, 250);
}
function stopTickOnly() { if (tTick) { clearInterval(tTick); tTick = null; } }

$("t-play").onclick = () => {
  if (tRunning) { stopTick(); tRunning = false; paint(); }
  else { startTimer(); }
};
$("t-reset").onclick = () => { stopTick(); tRunning = false; tDone = false; tRemaining = tTotal; $("timer").classList.remove("done"); paint(); };
$("t-close").onclick = () => { stopTick(); tRunning = false; tDone = false; $("timer").classList.remove("on", "done"); };

// si la pantalla se apaga y vuelve, recalcular por timestamp (no se desincroniza)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && tRunning) {
    const left = Math.max(0, Math.round((tEndAt - Date.now()) / 1000));
    tRemaining = left;
    if (left <= 0) { stopTick(); tRunning = false; tDone = true; $("timer").classList.add("done"); alarmSound(); }
    else { requestWake(); }
    paint();
  }
});

/* ================== ARRANQUE ================== */

render();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
