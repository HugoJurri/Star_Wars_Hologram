/* ==========================================================================
   VIEW — Factions (index + detail pages)
   ========================================================================== */
SW.views.factions = {
  title: sub => (SW.factions.find(f => f.id === sub) || {}).name || 'Factions',

  /* Symmetric log scale so 25,000 BBY and 35 ABY fit on one axis */
  sx(y) { const v = Math.sign(y) * Math.log10(1 + Math.abs(y)); const lo = -Math.log10(25001), hi = Math.log10(46); return ((v - lo) / (hi - lo)) * 100; },

  render(sub) {
    const f = SW.factions.find(x => x.id === sub);
    return f ? this.detail(f) : this.index();
  },

  index() {
    const ticks = [-25000, -5000, -1000, -100, -19, 0, 5, 35];
    return `
    ${SW.pageHero({ num: '06', eyebrow: 'Polity', title: 'Powers of the Galaxy', lede: 'Republics and empires, orders and cults, rebels and syndicates — who held power, and for how long.' })}
    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="card lifespan" ${SW.reveal(0)}>${SW.corners}
          <div class="label" style="margin-bottom:16px">Lifespans on a logarithmic timeline — ancient ages compressed, recent decades expanded</div>
          <div class="grid-lines">${ticks.map(t => `<i class="${t === 0 ? 'zero' : ''}" style="left:${this.sx(t)}%"></i>`).join('')}</div>
          <div class="rows">
            ${SW.factions.map((f, i) => `
              <a class="row" href="#/factions/${f.id}">
                <span class="nm">${f.name.replace('The ', '')}</span>
                <span class="track"><span class="bar" style="--c:${f.color};left:${this.sx(f.start)}%;width:${this.sx(f.end) - this.sx(f.start)}%;transition-delay:${i * 0.07}s"></span></span>
              </a>`).join('')}
          </div>
          <div class="axis">${ticks.map(t => `<span class="tick" style="left:${this.sx(t)}%">${t === 0 ? 'Yavin' : SW.fmtYear(t)}</span>`).join('')}</div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap grid auto">
        ${SW.factions.map((f, i) => `
          <a class="card faction-card" href="#/factions/${f.id}" style="--c:${f.color}" ${SW.reveal(i % 6)}>
            ${SW.corners}
            <span class="stripe"></span>
            <span class="range">${f.range}</span>
            <h3>${f.name}</h3>
            <p>${f.short}</p>
            <span class="label" style="color:var(--ink-2);display:flex;align-items:center;gap:8px;margin-top:auto">Read record <span style="width:16px">${SW.icons.arrow}</span></span>
          </a>`).join('')}
      </div>
    </section>`;
  },

  detail(f) {
    const i = SW.factions.indexOf(f);
    const next = SW.factions[(i + 1) % SW.factions.length];
    const figures = SW.characters.filter(c => c.aff.includes(f.id));
    return `
    <section class="detail-hero" style="--c:${f.color}">
      <div class="bigglow"></div>
      <div class="wrap" style="position:relative">
        <a class="back" href="#/factions">${SW.icons.back} All factions</a>
        <div class="eyebrow" style="color:${f.color}" ${SW.reveal(0)}>${f.range}</div>
        <h1 class="h1 gradient-text" style="margin:14px 0" ${SW.reveal(1)}>${f.name}</h1>
        <p class="lede" ${SW.reveal(2)}>${f.short}</p>
      </div>
    </section>
    <section class="section tight">
      <div class="wrap detail-layout">
        <div>
          <div class="prose" style="font-size:1.08rem" ${SW.reveal(0)}>${SW.paras(f.text)}</div>
          ${f.groups ? `
            <div class="grid g2" style="margin-top:30px">
              ${f.groups.map(([n, d], j) => `<div class="card hover" ${SW.reveal(j)}>${SW.corners}<h3 class="h3" style="font-size:1.05rem">${n}</h3><p class="muted" style="font-size:14.5px;margin-top:4px">${d}</p></div>`).join('')}
            </div>` : ''}
        </div>
        <aside class="grid" style="gap:18px;align-content:start">
          <div class="card" style="--c:${f.color}" ${SW.reveal(1)}>${SW.corners}
            <div class="label" style="margin-bottom:6px">Record</div>
            <dl class="facts">${f.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
          </div>
          ${figures.length ? `
          <div class="card" ${SW.reveal(2)}>${SW.corners}
            <div class="label" style="margin-bottom:12px">Key figures</div>
            <div class="rel-list">${figures.map(c => `<a class="rel" href="#/characters/${c.id}">${SW.portrait(c, 36)}<span><b>${c.name}</b><small>${c.alias}</small></span></a>`).join('')}</div>
          </div>` : ''}
        </aside>
      </div>
    </section>
    <section class="section tight">
      <div class="wrap">
        <a class="card portal" href="#/factions/${next.id}" style="--c:${next.color};min-height:0" ${SW.reveal(0)}>${SW.corners}
          <span class="label">Next record</span>
          <h3>${next.name}</h3>
          <span class="go">Continue ${SW.icons.arrow}</span>
        </a>
      </div>
    </section>`;
  }
};
