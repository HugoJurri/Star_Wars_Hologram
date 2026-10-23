/* ==========================================================================
   VIEW — Real-world physics of Star Wars technology
   ========================================================================== */
SW.views.science = {
  title: 'Real Science',
  render() {
    const sorted = [...SW.science].sort((a, b) => b.score - a.score);
    return `
    ${SW.pageHero({ num: '10', eyebrow: 'Physics lab', title: 'Could It Really Work?', lede: 'What\'s plausible, what\'s stretched and what\'s pure fiction. Every technology gets a plausibility rating — tap one for the full analysis.' })}

    <section class="section tight" style="padding-top:0">
      <div class="wrap grid auto">
        ${SW.science.map((s, i) => `
          <article class="card hover sci-card" id="sci-${s.id}" data-id="${s.id}" role="button" tabindex="0" ${SW.reveal(i % 9)}>
            ${SW.corners}
            <h3>${s.name}</h3>
            <p class="verdict">${s.verdict}</p>
            <div class="score"><span>Plausibility</span><b>${s.score}<small style="font-size:.6em;color:var(--dim)">/100</small></b></div>
            <div class="meter" style="--v:${s.score}%;--full:${(100 / Math.max(s.score, 1)) * 100}%"><i></i></div>
            <span class="label" style="color:var(--ink-2)">Basis: ${s.basis}</span>
          </article>`).join('')}
      </div>
    </section>

    <section class="section" id="calc">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Interactive</span>
          <h2 class="h2" ${SW.reveal(1)}>The planet-killer calculator</h2>
          <p class="lede" ${SW.reveal(2)}>How much energy would the Death Star need? Pick a target and calculate its gravitational binding energy — the energy required to blow it apart for good.</p>
        </div>
        <div class="card calc" ${SW.reveal(3, 'scale')}>${SW.corners}
          <div>
            <label class="label" for="body-sel">Target</label>
            <select id="body-sel">${SW.bodies.map((b, i) => `<option value="${i}">${b.n}</option>`).join('')}</select>
            <div class="formula">E = 3GM² / 5R</div>
            <dl class="kv" id="calc-in"></dl>
          </div>
          <div class="out" id="calc-out"></div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Ranking</span>
          <h2 class="h2" ${SW.reveal(1)}>From most to least plausible</h2>
        </div>
        <div class="card table-scroll" style="padding:6px" ${SW.reveal(2)}>${SW.corners}
          <table class="vs-table">
            <thead><tr><th>Technology</th><th>Real physics basis</th><th>Verdict</th><th style="width:160px">Rating</th></tr></thead>
            <tbody>${sorted.map(s => `<tr><td>${s.name}</td><td>${s.basis}</td><td>${s.verdict}</td><td><div class="meter in" style="--v:${s.score}%;--full:${(100 / Math.max(s.score, 1)) * 100}%"><i></i></div></td></tr>`).join('')}</tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Credit where due</span>
          <h2 class="h2" ${SW.reveal(1)}>What Star Wars gets right</h2>
        </div>
        <div class="grid g4" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
          ${SW.scienceRight.map((r, i) => `<div class="card" ${SW.reveal(i)}>${SW.corners}<h3 class="h3" style="font-size:1.1rem">${r.t}</h3><p class="muted" style="font-size:14.5px;margin-top:6px">${r.d}</p></div>`).join('')}
        </div>
        <p class="label" style="text-align:center;margin-top:50px">"It's not my fault!" — Han Solo, whose ship regularly violates thermodynamics</p>
      </div>
    </section>`;
  },

  open(id) {
    const s = SW.science.find(x => x.id === id); if (!s) return;
    SW.openDrawer(`
      <span class="eyebrow">Plausibility ${s.score}/100</span>
      <h2 style="margin:10px 0 14px">${s.name}</h2>
      <div class="meter in" style="--v:${s.score}%;--full:${(100 / Math.max(s.score, 1)) * 100}%"><i></i></div>
      <div class="shows"><div class="label" style="margin-bottom:4px">What Star Wars shows</div>${SW.md(s.shows)}</div>
      ${s.real.map(([t, d]) => `<div class="block"><b>${t}</b><p>${SW.md(d)}</p></div>`).join('')}
      ${s.today ? `<div class="block"><b>Bottom line</b><p>${SW.md(s.today)}</p></div>` : ''}
      <div class="block" style="border:0"><span class="label">Verdict</span><p style="font-family:var(--display);font-size:1.4rem;color:#fff">${s.verdict}</p></div>
      ${s.calc ? `<a class="btn" href="#/science?focus=calc" onclick="SW.closeDrawer()">Try the calculator ${SW.icons.arrow}</a>` : ''}`);
  },

  focus(id) { if (id.startsWith('sci-')) this.open(id.slice(4)); },

  mount(root) {
    $$('.sci-card', root).forEach(c => {
      c.addEventListener('click', () => this.open(c.dataset.id));
      c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.open(c.dataset.id); } });
    });

    // Binding-energy calculator
    const G = 6.674e-11, SUN = 3.8e26, TSAR = 2.1e17;
    const sci = (n, d = 2) => { const e = Math.floor(Math.log10(n)); return `${(n / 10 ** e).toFixed(d)} × 10<sup>${e}</sup>`; };
    const dur = s => s < 3600 ? `${(s / 60).toFixed(1)} minutes` : s < 86400 ? `${(s / 3600).toFixed(1)} hours` : s < 86400 * 365 ? `${(s / 86400).toFixed(1)} days` : `${(s / 86400 / 365).toFixed(1)} years`;
    const calc = () => {
      const b = SW.bodies[+$('#body-sel', root).value];
      const E = (3 * G * b.m * b.m) / (5 * b.r);
      $('#calc-in', root).innerHTML = `<dt>Mass</dt><dd>${sci(b.m)} kg</dd><dt>Radius</dt><dd>${(b.r / 1000).toLocaleString('en', { maximumFractionDigits: 0 })} km</dd><dt>G</dt><dd>6.674 × 10<sup>-11</sup> N·m²/kg²</dd>`;
      $('#calc-out', root).innerHTML = `<div class="swap" style="display:grid;gap:18px">
        <div><div class="label">Binding energy</div><div class="big">${sci(E)} J</div></div>
        <div><div class="label">The Sun's entire output for</div><div class="big" style="font-size:1.8rem">${dur(E / SUN)}</div></div>
        <div><div class="label">Equivalent Tsar Bombas (largest bomb ever tested)</div><div class="big" style="font-size:1.8rem">${sci(E / TSAR, 1)}</div></div>
      </div>`;
    };
    $('#body-sel', root).addEventListener('change', calc);
    calc();
  }
};
