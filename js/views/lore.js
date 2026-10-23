/* ==========================================================================
   VIEW — Lore primer: dating, canon vs legends, media, themes
   ========================================================================== */
SW.views.lore = {
  title: 'Lore Primer',
  render() {
    const C = SW.canon;
    return `
    ${SW.pageHero({ num: '11', eyebrow: 'Primer', title: 'Reading the Archive', lede: 'How the galaxy keeps time, which stories count, where they are told — and what they are really about.' })}

    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Dating system</span><h2 class="h2" ${SW.reveal(1)}>BBY and ABY</h2><p class="lede" ${SW.reveal(2)}>${SW.md(SW.dating.intro)}</p></div>
        <div class="grid g3">
          ${SW.dating.items.map((d, i) => `<div class="card" ${SW.reveal(i)}>${SW.corners}<div class="stat-big" style="font-size:2.6rem">${d.k}</div><h3 class="h3" style="margin:8px 0 4px">${d.v}</h3><p class="muted" style="font-size:14.5px">${d.d}</p></div>`).join('')}
        </div>
        <p class="muted" style="margin-top:18px;max-width:760px" ${SW.reveal(0)}>${SW.dating.note}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Continuity</span><h2 class="h2" ${SW.reveal(1)}>Canon vs. Legends</h2></div>
        <div class="split-cl">
          ${[C.canon, C.legends].map((x, i) => `
            <div class="card" style="${i ? 'color:#d7b8ff' : ''}" ${SW.reveal(i)}>${SW.corners}
              <span class="label" style="color:inherit">${x.sub}</span>
              <h3 class="h2" style="font-size:2rem;color:var(--ink);margin:6px 0 10px">${x.title}</h3>
              <p class="prose">${SW.md(x.text)}</p>
              <ul>${x.list.map(l => `<li>${SW.md(l)}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
        <p class="lede" style="margin-top:28px" ${SW.reveal(0)}>${SW.md(C.why)}</p>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Sources</span><h2 class="h2" ${SW.reveal(1)}>Where the saga is told</h2></div>
        <dl class="facts card" ${SW.reveal(2)}>${SW.corners}${SW.media.map(m => `<div><dt>${m.k}</dt><dd>${SW.md(m.v)}</dd></div>`).join('')}</dl>
      </div>
    </section>

    <section class="section" id="themes">
      <div class="wrap">
        <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Philosophy</span><h2 class="h2" ${SW.reveal(1)}>What Star Wars is about</h2></div>
        <div class="grid g3">
          ${SW.themes.map((t, i) => `<div class="card hover theme-card" ${SW.reveal(i)}>${SW.corners}<h3>${t.t}</h3><p>${t.d}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap quote-block">
        <span class="eyebrow" ${SW.reveal(0)}>Closing transmission</span>
        <q ${SW.reveal(1)}>The Force will be with you. Always.</q>
        <cite class="label" ${SW.reveal(2)}>— Obi-Wan Kenobi</cite>
      </div>
    </section>`;
  }
};
