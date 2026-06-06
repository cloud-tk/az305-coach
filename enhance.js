// ============================================================
// ENHANCEMENTS v2 — Gamification, Command Palette, Radar, Confetti
// Eigenständige Datei, laedt NACH app.js. Umhuellt bestehende
// Funktionen, ohne app.js zu veraendern.
// ============================================================
(function () {
  // ---------- Profil laden + Persistenz an saveState anhaengen ----------
  state.profile = JSON.parse(localStorage.getItem("az305Profile") || '{"name":"","xp":0,"streak":{"count":0,"last":""},"badges":{},"examPassed":false,"perfectDrill":false}');
  const _saveState = saveState;
  saveState = function () { _saveState(); localStorage.setItem("az305Profile", JSON.stringify(state.profile || {})); };

  // ---------- CSS injizieren ----------
  const css = `
  .hero-stats{display:grid;grid-template-columns:auto 1fr auto auto auto;gap:18px;align-items:center;margin-bottom:20px;padding:16px 18px;border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(120deg,rgba(99,102,241,.12),rgba(236,72,153,.07)),var(--panel);box-shadow:var(--shadow-color)}
  .hs-level{display:flex;align-items:center;gap:12px}
  .hs-badge{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:var(--grad);color:#fff;font-family:var(--font-display);font-weight:700;font-size:17px;box-shadow:0 8px 20px rgba(236,72,153,.35);flex-shrink:0}
  .hs-lvlname{font-family:var(--font-display);font-weight:700;font-size:15px}
  .hs-greet{font-size:12px;color:var(--muted);font-weight:700;display:flex;align-items:center;gap:6px}
  .hs-name-edit{cursor:pointer;border:none;background:none;color:var(--purple);font-size:12px;padding:0}
  .hs-xpwrap{display:grid;gap:6px;min-width:130px}
  .hs-xpbar{height:9px;border-radius:999px;background:rgba(148,163,184,.22);overflow:hidden}
  .hs-xpfill{height:100%;border-radius:999px;background:var(--grad);transition:width .6s cubic-bezier(.3,1,.4,1)}
  .hs-xptext{font-size:11px;color:var(--muted);font-weight:700}
  .hs-stat{text-align:center}
  .hs-stat b{display:block;font-family:var(--font-display);font-size:21px;line-height:1}
  .hs-stat span{font-size:10px;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.03em}
  @media(max-width:900px){.hero-stats{grid-template-columns:1fr 1fr;gap:14px}.hs-xpwrap{grid-column:1/-1}}
  .toast-wrap{position:fixed;right:18px;bottom:18px;display:flex;flex-direction:column;gap:8px;z-index:300;max-width:300px}
  .toast{padding:11px 15px;border-radius:12px;background:var(--panel);border:1px solid var(--line);box-shadow:var(--shadow);font-weight:800;font-size:13px;color:var(--ink);transform:translateX(130%);opacity:0;transition:transform .35s cubic-bezier(.3,1,.4,1),opacity .35s}
  .toast.show{transform:translateX(0);opacity:1}
  .toast-level{background:var(--grad);color:#fff;border:none}
  .toast-badge{border-color:var(--brand5);background:linear-gradient(120deg,rgba(251,191,36,.16),var(--panel))}
  .cf-canvas{position:fixed;inset:0;pointer-events:none;z-index:400}
  .cmdk-ov{position:fixed;inset:0;background:rgba(15,19,28,.5);backdrop-filter:blur(4px);z-index:350;display:none;align-items:flex-start;justify-content:center;padding-top:12vh}
  .cmdk-ov.show{display:flex;animation:fadeIn .2s ease}
  .cmdk{width:min(560px,92%);background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,.45);overflow:hidden;animation:popIn .25s ease}
  .cmdk input{width:100%;padding:16px 18px;border:none;border-bottom:1px solid var(--line);background:transparent;color:var(--ink);font-size:16px;outline:none}
  .cmdk-list{max-height:48vh;overflow-y:auto;padding:6px}
  .cmdk-item{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px;color:var(--ink)}
  .cmdk-item .ico{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:rgba(124,92,255,.12);font-size:15px;flex-shrink:0}
  .cmdk-item.active,.cmdk-item:hover{background:rgba(124,92,255,.14)}
  .cmdk-hint{padding:9px 14px;font-size:11px;color:var(--muted);border-top:1px solid var(--line);font-weight:700;display:flex;gap:14px;flex-wrap:wrap}
  .radar-card{margin-bottom:16px}
  .radar-wrap{display:grid;place-items:center;padding:6px}
  .radar-wrap svg{width:100%;max-width:360px;height:auto}
  .badges-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-top:8px}
  .badge{display:grid;gap:5px;justify-items:center;text-align:center;padding:13px 8px;border:1px solid var(--line);border-radius:14px;background:var(--bg);transition:transform .15s}
  .badge:hover{transform:translateY(-3px)}
  .badge .bico{font-size:27px;filter:grayscale(1);opacity:.38;transition:.2s}
  .badge.unlocked .bico{filter:none;opacity:1}
  .badge.unlocked{border-color:var(--brand3);background:linear-gradient(180deg,rgba(236,72,153,.09),transparent)}
  .badge b{font-size:12px}
  .badge small{font-size:10px;color:var(--muted);line-height:1.3}
  .res-ov{position:fixed;inset:0;background:rgba(15,19,28,.55);backdrop-filter:blur(6px);z-index:320;display:grid;place-items:center;padding:20px;animation:fadeIn .25s ease}
  .res-card{width:min(460px,100%);max-height:90vh;overflow-y:auto;background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.45);padding:24px;text-align:center;animation:popIn .3s ease}
  .res-score{font-family:var(--font-display);font-size:56px;font-weight:700;line-height:1;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .res-sub{color:var(--muted);font-weight:700;margin-top:6px;line-height:1.4}
  .res-xp{display:inline-block;margin:16px 0 6px;padding:7px 16px;border-radius:999px;background:var(--grad);color:#fff;font-weight:800;font-size:13px}
  .res-dom{display:grid;gap:8px;text-align:left;margin:14px 0}
  .res-dom-row{display:grid;grid-template-columns:96px 1fr 38px;gap:8px;align-items:center;font-size:12px;font-weight:700}
  .res-bar{height:8px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden}
  .res-bar i{display:block;height:100%;border-radius:999px}
  .res-btns{display:flex;gap:10px;margin-top:10px}
  .res-btns button{flex:1}
  .view.active{animation:viewIn .35s ease}
  @keyframes viewIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ---------- Helpers ----------
  const esc = s => (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const today = () => new Date().toISOString().slice(0, 10);
  function ensureProfile() {
    if (!state.profile) state.profile = { name: "", xp: 0, streak: { count: 0, last: "" }, badges: {}, examPassed: false, perfectDrill: false };
    if (!state.profile.streak) state.profile.streak = { count: 0, last: "" };
    if (!state.profile.badges) state.profile.badges = {};
  }

  const LEVELS = [
    { xp: 0, name: "Cloud Novice" }, { xp: 150, name: "Service Spotter" }, { xp: 400, name: "Trade-off Thinker" },
    { xp: 800, name: "Solution Designer" }, { xp: 1400, name: "Reference Architect" }, { xp: 2200, name: "Review Lead" },
    { xp: 3200, name: "Cloud Architect" }, { xp: 4500, name: "Principal Architect" },
  ];
  function levelInfo(xp) {
    let idx = 0;
    for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
    const next = LEVELS[idx + 1], isMax = !next, base = LEVELS[idx].xp;
    const pct = isMax ? 100 : Math.min(100, Math.round((xp - base) / (next.xp - base) * 100));
    return { idx, name: LEVELS[idx].name, pct, isMax, toNext: isMax ? 0 : next.xp - xp };
  }
  function gstats() {
    const ds = state.domainStats || {};
    let answered = 0, best = 0;
    for (const d in ds) { answered += ds[d].total; const p = ds[d].total >= 5 ? Math.round(ds[d].correct / ds[d].total * 100) : 0; if (p > best) best = p; }
    return { answered, seen: Object.keys(state.srs || {}).length, mastered: srsMastered(), streak: state.profile.streak.count, best, examPassed: state.profile.examPassed, perfectDrill: state.profile.perfectDrill };
  }

  const BADGES = [
    { id: "first", icon: "🎯", name: "Erste Schritte", desc: "Erste Frage beantwortet", test: s => s.answered >= 1 },
    { id: "fifty", icon: "⚡", name: "Halbzeit", desc: "50 Fragen beantwortet", test: s => s.answered >= 50 },
    { id: "century", icon: "💯", name: "Centurion", desc: "100 Fragen beantwortet", test: s => s.answered >= 100 },
    { id: "streak3", icon: "🔥", name: "3-Tage-Streak", desc: "3 Tage in Folge", test: s => s.streak >= 3 },
    { id: "streak7", icon: "🌟", name: "Wochenkrieger", desc: "7 Tage in Folge", test: s => s.streak >= 7 },
    { id: "perfect", icon: "🏆", name: "Makellos", desc: "10/10 in einer Runde", test: s => s.perfectDrill },
    { id: "exam", icon: "🎓", name: "Exam Ace", desc: "80%+ in der Pruefung", test: s => s.examPassed },
    { id: "master25", icon: "🧠", name: "Gedaechtnis", desc: "25 Fragen gemeistert", test: s => s.mastered >= 25 },
    { id: "domain", icon: "⭐", name: "Domain-Meister", desc: "Eine Domain 90%+", test: s => s.best >= 90 },
    { id: "explorer", icon: "🧭", name: "Entdecker", desc: "100 versch. Fragen gesehen", test: s => s.seen >= 100 },
  ];

  // ---------- Toast ----------
  let toastWrap;
  function toast(msg, type) {
    if (!toastWrap) { toastWrap = document.createElement("div"); toastWrap.className = "toast-wrap"; document.body.appendChild(toastWrap); }
    const t = document.createElement("div"); t.className = "toast toast-" + (type || "xp"); t.textContent = msg;
    toastWrap.appendChild(t); requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 350); }, 2800);
  }

  // ---------- Confetti ----------
  function confetti() {
    const c = document.createElement("canvas"); c.className = "cf-canvas";
    c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
    const ctx = c.getContext("2d"); const cols = ["#6366f1", "#8b5cf6", "#ec4899", "#fb7185", "#fbbf24", "#22d3ee"];
    const P = [];
    for (let i = 0; i < 130; i++) P.push({ x: innerWidth / 2, y: innerHeight * 0.32, vx: (Math.random() - 0.5) * 13, vy: Math.random() * -13 - 4, g: 0.32 + Math.random() * 0.22, s: 5 + Math.random() * 7, c: cols[i % cols.length], r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4 });
    let f = 0;
    (function anim() {
      f++; ctx.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.vy += p.g; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); ctx.restore(); });
      if (f < 130) requestAnimationFrame(anim); else c.remove();
    })();
  }

  // ---------- XP / Streak / Badges ----------
  function addXp(n) {
    ensureProfile();
    const before = levelInfo(state.profile.xp).idx;
    state.profile.xp += n; saveState();
    const after = levelInfo(state.profile.xp).idx;
    renderStatsBar();
    if (after > before) { toast("🎉 Level " + (after + 1) + ": " + LEVELS[after].name, "level"); confetti(); }
  }
  function touchStreak() {
    ensureProfile(); const t = today(), s = state.profile.streak;
    if (s.last === t) return;
    const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    s.count = (s.last === y) ? s.count + 1 : 1; s.last = t; saveState(); renderStatsBar();
  }
  function checkBadges() {
    ensureProfile(); const s = gstats(); let any = false;
    BADGES.forEach(b => { if (!state.profile.badges[b.id] && b.test(s)) { state.profile.badges[b.id] = today(); any = true; toast(b.icon + " Badge: " + b.name, "badge"); confetti(); } });
    if (any) { saveState(); renderStatsBar(); renderBadges(); }
  }

  // ---------- Stats Bar (Dashboard) ----------
  function renderStatsBar() {
    const dash = document.getElementById("dashboard"); if (!dash) return;
    let bar = dash.querySelector(".hero-stats");
    if (!bar) { bar = document.createElement("section"); bar.className = "hero-stats"; const tl = dash.querySelector(".topline"); tl ? tl.insertAdjacentElement("afterend", bar) : dash.prepend(bar); }
    ensureProfile(); const p = state.profile, li = levelInfo(p.xp), s = gstats();
    const greet = p.name ? ("Hi, " + esc(p.name) + " 👋") : "Willkommen 👋";
    bar.innerHTML =
      '<div class="hs-level"><div class="hs-badge">L' + (li.idx + 1) + '</div><div><div class="hs-lvlname">' + li.name + '</div>' +
      '<div class="hs-greet">' + greet + ' <button class="hs-name-edit" data-act="name" title="Name aendern">✏️</button></div></div></div>' +
      '<div class="hs-xpwrap"><div class="hs-xpbar"><div class="hs-xpfill" style="width:' + li.pct + '%"></div></div>' +
      '<div class="hs-xptext">' + p.xp + ' XP' + (li.isMax ? ' · Max-Level 🏅' : ' · noch ' + li.toNext + ' bis Lvl ' + (li.idx + 2)) + '</div></div>' +
      '<div class="hs-stat"><b>' + p.streak.count + '🔥</b><span>Streak</span></div>' +
      '<div class="hs-stat"><b>' + s.mastered + '</b><span>Gemeistert</span></div>' +
      '<div class="hs-stat"><b>' + Object.keys(p.badges).length + '/' + BADGES.length + '</b><span>Badges</span></div>';
    const nb = bar.querySelector('[data-act="name"]');
    if (nb) nb.onclick = () => { const n = prompt("Wie heißt du? (für deine Begrüßung)", p.name || ""); if (n != null) { p.name = n.trim().slice(0, 20); saveState(); renderStatsBar(); } };
  }

  // ---------- Badges Showcase (Analytics) ----------
  function renderBadges() {
    const av = document.getElementById("analytics"); if (!av) return;
    let host = av.querySelector(".badges-host");
    if (!host) { host = document.createElement("section"); host.className = "planner badges-host"; host.style.marginTop = "16px"; host.innerHTML = '<div class="section-head"><div><p class="eyebrow">Erfolge</p><h3>Deine Achievements</h3></div></div><div class="badges-grid"></div>'; av.appendChild(host); }
    ensureProfile();
    host.querySelector(".badges-grid").innerHTML = BADGES.map(b => '<div class="badge ' + (state.profile.badges[b.id] ? "unlocked" : "") + '"><div class="bico">' + b.icon + '</div><b>' + b.name + '</b><small>' + b.desc + '</small></div>').join("");
  }

  // ---------- Radar (SVG) ----------
  const RADAR_DOMAINS = ["Governance", "Identity", "Monitoring", "Network", "Storage", "Data", "BCDR", "Compute", "Messaging", "Migration", "Architecture", "Security", "Integration"];
  function renderRadar() {
    const av = document.getElementById("analytics"); if (!av) return;
    let host = av.querySelector(".radar-card");
    if (!host) {
      host = document.createElement("section"); host.className = "planner radar-card";
      host.innerHTML = '<div class="section-head"><div><p class="eyebrow">Domain-Radar</p><h3>Deine Stärken auf einen Blick</h3></div></div><div class="radar-wrap"><svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg"></svg></div>';
      const sum = av.querySelector(".analytics-summary"); sum ? sum.insertAdjacentElement("afterend", host) : av.appendChild(host);
    }
    const ds = state.domainStats || {}, cx = 170, cy = 150, R = 105, n = RADAR_DOMAINS.length;
    const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
    let g = '<defs><linearGradient id="radg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="50%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#ec4899"/></linearGradient></defs>';
    [0.25, 0.5, 0.75, 1].forEach(r => { g += '<polygon points="' + RADAR_DOMAINS.map((_, i) => pt(i, R * r).join(",")).join(" ") + '" fill="none" stroke="var(--line)" stroke-width="1"/>'; });
    RADAR_DOMAINS.forEach((d, i) => {
      const [x, y] = pt(i, R); g += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="var(--line)" stroke-width="1"/>';
      const [lx, ly] = pt(i, R + 17); g += '<text x="' + lx + '" y="' + ly + '" font-size="8.5" font-weight="700" fill="var(--muted)" text-anchor="middle" dominant-baseline="middle">' + d + '</text>';
    });
    const vals = RADAR_DOMAINS.map(d => ds[d] && ds[d].total ? ds[d].correct / ds[d].total : 0);
    const poly = vals.map((v, i) => pt(i, Math.max(3, R * v)).join(",")).join(" ");
    g += '<polygon points="' + poly + '" fill="url(#radg)" fill-opacity="0.45" stroke="#ec4899" stroke-width="2"/>';
    vals.forEach((v, i) => { const [x, y] = pt(i, Math.max(3, R * v)); g += '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#ec4899"/>'; });
    host.querySelector("svg").innerHTML = g;
  }

  // ---------- Ergebnis-Screen ----------
  function showResults(correct, total, pct) {
    const byDom = {};
    currentQuiz.forEach((q, i) => { const d = q.domain; (byDom[d] = byDom[d] || { c: 0, t: 0 }).t++; if (answers[i] === q.correct) byDom[d].c++; });
    const xpGain = correct * 12 + (total - correct) * 4;
    const rows = Object.keys(byDom).sort((a, b) => (byDom[a].c / byDom[a].t) - (byDom[b].c / byDom[b].t)).map(d => {
      const o = byDom[d], pp = Math.round(o.c / o.t * 100), col = pp >= 80 ? "var(--green)" : pp >= 60 ? "var(--gold)" : "var(--coral)";
      return '<div class="res-dom-row"><span>' + d + '</span><div class="res-bar"><i style="width:' + pp + '%;background:' + col + '"></i></div><b>' + o.c + '/' + o.t + '</b></div>';
    }).join("");
    const msg = pct >= 80 ? "Stark! Prüfungsreif. 🎉" : pct >= 60 ? "Solide — weiter dranbleiben! 💪" : "Noch Luft nach oben — Schwächen drillen. 📚";
    const ov = document.createElement("div"); ov.className = "res-ov";
    ov.innerHTML = '<div class="res-card"><p class="eyebrow">' + (examMode ? "Exam Simulation" : "Case Drill") + ' — Ergebnis</p>' +
      '<div class="res-score">' + pct + '%</div><div class="res-sub">' + correct + ' / ' + total + ' richtig · ' + msg + '</div>' +
      '<div class="res-xp">+' + xpGain + ' XP verdient</div><div class="res-dom">' + rows + '</div>' +
      '<div class="res-btns"><button class="secondary-btn" data-act="close">Schließen</button><button class="primary-btn" data-act="again">Neue Runde</button></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener("click", e => { const a = e.target.dataset.act; if (e.target === ov || a === "close") ov.remove(); else if (a === "again") { ov.remove(); startQuiz(examMode); } });
  }

  function onRoundComplete(correct, total) {
    const pct = Math.round(correct / total * 100);
    ensureProfile();
    if (examMode && pct >= 80) { state.profile.examPassed = true; saveState(); }
    if (!examMode && correct === total && total >= 10) { state.profile.perfectDrill = true; saveState(); }
    checkBadges();
    if (pct >= 80) confetti();
    showResults(correct, total, pct);
  }

  // ---------- Command Palette (Strg/Cmd + K) ----------
  const CMDS = [
    { ico: "🏠", label: "Sprint / Dashboard", run: () => setView("dashboard") },
    { ico: "🎯", label: "Case Drill starten", run: () => { setView("quiz"); startQuiz(false); } },
    { ico: "🎓", label: "Exam Simulation starten (50 Fragen)", run: () => { setView("quiz"); startQuiz(true); } },
    { ico: "⟳", label: "Fällige Fragen wiederholen", run: () => { setView("quiz"); quizSrsMode = true; quizBookmarkMode = false; quizDomainFilter = ""; startQuiz(false); } },
    { ico: "🃏", label: "Decision Matrix", run: () => setView("cards") },
    { ico: "🧪", label: "Architecture Lab", run: () => setView("lab") },
    { ico: "📄", label: "Spickzettel öffnen", run: () => setView("cheatsheet") },
    { ico: "🖨️", label: "Spickzettel drucken / als PDF", run: () => { setView("cheatsheet"); setTimeout(() => window.print(), 250); } },
    { ico: "📊", label: "Analytics & Radar", run: () => setView("analytics") },
    { ico: "🌗", label: "Dark Mode umschalten", run: () => toggleDarkMode() },
    { ico: "📥", label: "Fortschritt exportieren", run: () => exportProgress() },
  ];
  let cmdkOv, cmdkInput, cmdkList, cmdkOpen = false, cmdkSel = 0, cmdkFiltered = CMDS;
  function buildCmdk() {
    cmdkOv = document.createElement("div"); cmdkOv.className = "cmdk-ov";
    cmdkOv.innerHTML = '<div class="cmdk"><input type="text" placeholder="Befehl oder Bereich suchen…" /><div class="cmdk-list"></div><div class="cmdk-hint"><span>↑↓ navigieren</span><span>⏎ ausführen</span><span>Esc schließen</span></div></div>';
    document.body.appendChild(cmdkOv);
    cmdkInput = cmdkOv.querySelector("input"); cmdkList = cmdkOv.querySelector(".cmdk-list");
    cmdkInput.addEventListener("input", () => { cmdkSel = 0; renderCmdk(); });
    cmdkOv.addEventListener("click", e => { if (e.target === cmdkOv) closeCmdk(); });
  }
  function renderCmdk() {
    const q = cmdkInput.value.trim().toLowerCase();
    cmdkFiltered = CMDS.filter(c => c.label.toLowerCase().includes(q));
    cmdkList.innerHTML = cmdkFiltered.map((c, i) => '<div class="cmdk-item ' + (i === cmdkSel ? "active" : "") + '" data-i="' + i + '"><span class="ico">' + c.ico + '</span>' + c.label + '</div>').join("") || '<div class="cmdk-item">Nichts gefunden</div>';
    cmdkList.querySelectorAll(".cmdk-item[data-i]").forEach(el => el.onclick = () => { cmdkSel = +el.dataset.i; runSel(); });
  }
  function openCmdk() { if (!cmdkOv) buildCmdk(); cmdkOpen = true; cmdkSel = 0; cmdkInput.value = ""; renderCmdk(); cmdkOv.classList.add("show"); setTimeout(() => cmdkInput.focus(), 30); }
  function closeCmdk() { cmdkOpen = false; if (cmdkOv) cmdkOv.classList.remove("show"); }
  function moveSel(d) { if (!cmdkFiltered.length) return; cmdkSel = (cmdkSel + d + cmdkFiltered.length) % cmdkFiltered.length; renderCmdk(); }
  function runSel() { const c = cmdkFiltered[cmdkSel]; if (c) { closeCmdk(); c.run(); } }

  // ---------- Keyboard ----------
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); cmdkOpen ? closeCmdk() : openCmdk(); return; }
    if (cmdkOpen) { if (e.key === "Escape") closeCmdk(); else if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); } else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); } else if (e.key === "Enter") { e.preventDefault(); runSel(); } return; }
    const tag = (e.target.tagName || "").toLowerCase(); if (tag === "input" || tag === "textarea") return;
    const quiz = document.getElementById("quiz");
    if (quiz && quiz.classList.contains("active") && currentQuiz.length) {
      if (["1", "2", "3", "4"].includes(e.key)) { const r = document.querySelectorAll("#answerList input[name='answer']"); if (r[+e.key - 1]) r[+e.key - 1].click(); }
      else if (e.key === "ArrowRight" || e.key === "Enter") document.getElementById("nextQuestion").click();
      else if (e.key === "ArrowLeft") document.getElementById("prevQuestion").click();
      else if (e.key.toLowerCase() === "b") document.getElementById("bookmarkBtn").click();
    }
  });

  // ---------- Bestehende Funktionen umhuellen ----------
  const _uds = updateDomainStats;
  updateDomainStats = function (q, sel) { _uds(q, sel); addXp(sel === q.correct ? 12 : 4); touchStreak(); checkBadges(); };

  const _sqh = saveQuizToHistory;
  saveQuizToHistory = function (correct, total) { _sqh(correct, total); onRoundComplete(correct, total); };

  const _ra = renderAnalytics;
  renderAnalytics = function () { _ra(); renderRadar(); renderBadges(); };

  const _up = updateProgress;
  updateProgress = function () { _up(); renderStatsBar(); };

  // Name beim Onboarding-Start abfragen
  const osBtn = document.getElementById("onboardStart");
  if (osBtn) osBtn.addEventListener("click", () => { ensureProfile(); if (!state.profile.name) { const n = prompt("Wie heißt du? (für deine persönliche Begrüßung)"); if (n) { state.profile.name = n.trim().slice(0, 20); saveState(); renderStatsBar(); } } });

  // ---------- Init ----------
  ensureProfile();
  renderStatsBar();
})();
