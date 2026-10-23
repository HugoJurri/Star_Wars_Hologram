/* ==========================================================================
   VIEW — The Grand Army of the Republic
   ========================================================================== */
SW.views.clones = {
  title: 'Clone Army',
  render() {
    const K = SW.clones;
    const maxLog = Math.log10(36864);
    return `
    ${SW.pageHero({ num: '09', eyebrow: 'Grand Army of the Republic', title: 'The Clone Army', lede: K.intro })}

    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Part I — Origins</span>
          <h2 class="h2" ${SW.reveal(1)}>The conspiracy</h2>
        </div>
        <div class="card steps" style="padding:0" ${SW.reveal(2)}>
          ${K.conspiracy.map(s => `<div class="st"><b>${s.t}</b><p>${SW.md(s.d)}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2" style="gap:30px;align-items:start">
        <div>
          <div class="section-head">
            <span class="eyebrow" ${SW.reveal(0)}>Kamino</span>
            <h2 class="h2" ${SW.reveal(1)}>The cloning process</h2>
          </div>
          <dl class="facts card" ${SW.reveal(2)}>${SW.corners}${K.process.map(p => `<div><dt>${p.k}</dt><dd>${SW.md(p.v)}</dd></div>`).join('')}</dl>
        </div>
        <div class="grid" style="gap:18px">
          <div class="card" ${SW.reveal(1)}>${SW.corners}
            <div class="label">Initial order</div>
            <div class="stat-big" data-count="200000">0</div>
            <p class="prose" style="margin-top:10px">${SW.md(K.scale)}</p>
          </div>
          <div class="card" ${SW.reveal(2)}>${SW.corners}
            <div class="label">Accelerated ageing</div>
            <div class="stat-big">2×</div>
            <p class="prose" style="margin-top:10px">Combat-ready in about ten years — biologically twenty.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2" style="gap:30px;align-items:start">
        <div>
          <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Training</span><h2 class="h2" ${SW.reveal(1)}>Born for war</h2></div>
          <div class="doctrine"><ul>${K.training.map((t, i) => `<li ${SW.reveal(i)}>${SW.md(t)}</li>`).join('')}</ul></div>
        </div>
        <div>
          <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Identity</span><h2 class="h2" ${SW.reveal(1)}>Brothers, not numbers</h2></div>
          <p class="prose" style="font-size:1.05rem" ${SW.reveal(2)}>${SW.md(K.identity)}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Part II — Organisation</span>
          <h2 class="h2" ${SW.reveal(1)}>The command hierarchy</h2>
          <p class="lede" ${SW.reveal(2)}>Jedi served as generals and commanders; clone officers led tactically. Each unit is four of the one below it. Bars use a log scale.</p>
        </div>
        <div class="card pyramid">${SW.corners}
          ${K.hierarchy.map((h, i) => `
            <div class="pyr">
              <div class="nm">${h.u}</div>
              <div class="bar-wrap"><div class="bar" style="width:${h.size ? Math.max(18, (Math.log10(h.size) / maxLog) * 100) : 100}%;--d:${i * .08}s">
                <b>${h.size ? h.size.toLocaleString('en') : 'Variable'}</b>
                <span>Clone: ${h.clone}</span><span>Jedi: ${h.jedi}</span>
              </div></div>
            </div>`).join('')}
        </div>
        <div class="label" style="margin:40px 0 14px">Phase I rank markings</div>
        <div class="rank-row">
          ${K.ranks.map((r, i) => `<div class="rank" ${SW.reveal(i)}>${SW.helmet(r.c)}<b>${r.r}</b><span>${r.d}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Legions</span>
          <h2 class="h2" ${SW.reveal(1)}>Major units</h2>
          <p class="lede" ${SW.reveal(2)}>Each unit developed its own identity, colours, culture and reputation.</p>
        </div>
        <div class="grid auto">
          ${K.legions.map((l, i) => `
            <article class="card hover legion" id="legion-${l.id}" style="--c:${l.color}" ${SW.reveal(i % 6)}>
              ${SW.corners}
              <div style="display:flex;gap:14px;align-items:center">
                <span class="helm">${SW.helmet(l.color)}</span>
                <div><h3>${l.name}</h3>${l.nick ? `<div class="nick">"${l.nick}"</div>` : ''}</div>
              </div>
              <dl class="kv"><dt>Jedi</dt><dd>${l.jedi}</dd><dt>Clone</dt><dd>${l.cmd}</dd>${l.members !== '—' ? `<dt>Notable</dt><dd>${l.members}</dd>` : ''}</dl>
              <p>${l.text}</p>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Part III — Specialisations</span>
          <h2 class="h2" ${SW.reveal(1)}>More than a trooper</h2>
        </div>
        <div class="tabs" id="spec-tabs" style="margin-bottom:18px;width:max-content;max-width:100%">
          ${K.specialists.map((g, i) => `<button class="tab${i ? '' : ' on'}" data-i="${i}">${g.g}</button>`).join('')}
        </div>
        <div id="spec-body"></div>
        <p class="muted" style="margin-top:18px">Republic vehicles — AT-TE, Juggernaut, LAAT/i, BARC speeders and more — are in the <a href="#/arsenal/ground" style="color:var(--accent)">Arsenal</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="o66" id="order-66">
          <span class="eyebrow" style="color:#ff5a5a">Part IV — Contingency</span>
          <h2 class="h2" style="margin:12px 0 14px">Order 66</h2>
          <p class="prose" style="max-width:760px;font-size:1.05rem">${K.order66.chip}</p>
          <div style="margin-top:26px"><button class="o66-btn" id="o66-btn">Execute Order 66</button></div>
          <div class="falls">
            ${K.order66.falls.map(f => `<div class="fall${f.survived ? ' survived' : ''}"><span class="w">${f.w}</span><b>${f.j}</b><span>${f.by}${f.survived ? ' — survived' : ''}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2" style="gap:30px;align-items:start">
        <div>
          <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Those who resisted</span></div>
          <div class="grid" style="gap:12px">
            ${K.order66.resisted.map((r, i) => `<div class="card" ${SW.reveal(i)}>${SW.corners}<h3 class="h3" style="font-size:1.05rem;display:flex;gap:10px;align-items:center">${r.n}${r.legends ? '<span class="tag legends">Ancillary</span>' : ''}</h3><p class="muted" style="font-size:14.5px;margin-top:4px">${r.d}</p></div>`).join('')}
          </div>
        </div>
        <div>
          <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Into the Empire</span></div>
          <div class="doctrine"><ul>${K.order66.after.map((a, i) => `<li ${SW.reveal(i)}>${a}</li>`).join('')}</ul></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Part V — Context</span>
          <h2 class="h2" ${SW.reveal(1)}>Clones versus droids</h2>
        </div>
        <div class="card table-scroll" style="padding:6px" ${SW.reveal(2)}>${SW.corners}
          <table class="vs-table">
            <thead><tr><th>Factor</th><th>Clone army</th><th>Droid army</th></tr></thead>
            <tbody>${K.vs.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <p class="lede" style="margin-top:36px" ${SW.reveal(0)}>${SW.md(K.legacy)}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap quote-block">
        <q ${SW.reveal(0)} style="font-size:clamp(1.3rem,3vw,2.2rem)">${K.quote.q1}</q>
        <q ${SW.reveal(1)} style="color:var(--jedi)">${K.quote.q2}</q>
        <cite class="label" ${SW.reveal(2)}>— ${K.quote.a}</cite>
      </div>
    </section>`;
  },

  mount(root) {
    const K = SW.clones;
    const spec = i => {
      $('#spec-body', root).innerHTML = `<div class="grid auto-sm swap">${K.specialists[i].items.map(([n, d]) => `<div class="card hover">${SW.corners}<h3 class="h3" style="font-size:1.05rem">${n}</h3><p class="muted" style="font-size:14px;margin-top:4px">${d}</p></div>`).join('')}</div>`;
    };
    spec(0);
    $('#spec-tabs', root).addEventListener('click', e => {
      const t = e.target.closest('.tab'); if (!t) return;
      $$('#spec-tabs .tab', root).forEach(x => x.classList.toggle('on', x === t));
      spec(+t.dataset.i);
    });

    // Order 66 sequence
    const btn = $('#o66-btn', root);
    btn.addEventListener('click', () => {
      btn.disabled = true; btn.textContent = 'Yes, my lord.';
      document.body.classList.add('o66-active', 'side-dark');
      SW.starfield.warp(500);
      $$('.fall', root).forEach((f, i) => setTimeout(() => f.classList.add('lit'), 500 + i * 550));
      setTimeout(() => { document.body.classList.remove('o66-active'); btn.textContent = 'Order executed'; }, 500 + 6 * 550 + 400);
    });
  }
};
