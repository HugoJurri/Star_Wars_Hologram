/* ==========================================================================
   VIEW — Species & creatures (index + detail pages)
   ========================================================================== */
SW.views.species = {
  title: sub => (SW.species.find(s => s.id === sub) || {}).name || 'Species',
  kinds: [['all', 'All'], ['major', 'Major species'], ['notable', 'Notable species'], ['creature', 'Creatures']],
  kindName: k => k === 'creature' ? 'Creature' : k === 'major' ? 'Major sentient species' : 'Sentient species',
  mono: s => s.name.replace(/[^A-Za-z]/g, '').slice(0, 2),

  render(sub) {
    const s = SW.species.find(x => x.id === sub);
    return s ? this.detail(s) : this.index();
  },

  index() {
    return `
    ${SW.pageHero({ num: '04', eyebrow: 'Xenobiology', title: 'Peoples of the Galaxy', lede: SW.speciesIntro + ' Open any record for its biology, culture and history.' })}
    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="toolbar">
          <div class="tabs" id="kind-tabs">${this.kinds.map(([k, n], i) => `<button class="tab${i ? '' : ' on'}" data-k="${k}">${n}</button>`).join('')}</div>
          <label class="field">${SW.icons.search}<input id="sp-q" type="text" placeholder="Filter species…" autocomplete="off"></label>
        </div>
        <div class="grid auto" id="sp-grid">
          ${SW.species.map((s, i) => {
            const d = SW.speciesDetail[s.id] || {};
            return `
            <a class="card species-card" id="sp-${s.id}" href="#/species/${s.id}" data-k="${s.kind}" data-q="${(s.name + ' ' + (s.known || '') + ' ' + (s.home || '')).toLowerCase()}" ${SW.reveal(i % 9)}>
              ${SW.corners}
              <div class="row">
                <span class="monogram">${this.mono(s)}</span>
                <div><h3>${s.name}</h3><div class="sub">${this.kindName(s.kind)}</div></div>
              </div>
              <p>${SW.md(s.text)}</p>
              <dl class="kv">
                ${s.home || d.home ? `<dt>Homeworld</dt><dd>${s.home || d.home}</dd>` : ''}
                ${d.height ? `<dt>${s.kind === 'creature' ? 'Size' : 'Height'}</dt><dd>${d.height}</dd>` : ''}
                ${s.known ? `<dt>${s.kind === 'creature' ? 'Found' : 'Notable'}</dt><dd>${s.known}</dd>` : ''}
              </dl>
              <span class="go label" style="display:flex;align-items:center;gap:6px;margin-top:auto;color:var(--ink-2)">Full record <span style="width:14px">${SW.icons.arrow}</span></span>
            </a>`;
          }).join('')}
        </div>
        <div class="empty" id="sp-empty" hidden>No species match that search.</div>
      </div>
    </section>`;
  },

  detail(s) {
    const d = SW.speciesDetail[s.id] || {};
    const list = SW.species, i = list.indexOf(s);
    const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const planet = d.planet && SW.planet(d.planet);
    const homeTxt = planet ? SW.link.planet(planet.id) : (s.home || d.home || '—');
    const stats = [
      [s.kind === 'creature' ? 'Size' : 'Average height', d.height || '—'],
      ['Lifespan', d.life || '—'],
      ['Language', d.lang || (s.kind === 'creature' ? 'None' : '—')],
      ['Homeworld', homeTxt]
    ];
    const chars = SW.characters.filter(c => c.species === s.id);
    const notable = [...new Set([...(d.notable || []), ...chars.map(c => c.id)])];
    const sections = [['Physiology', d.body], ['Culture & society', d.culture], ['History', d.history]].filter(x => x[1]);
    const related = SW.species.filter(x => x.kind === s.kind && x.id !== s.id).slice(0, 6);

    return `
    <section class="detail-hero" style="--c:var(--accent)">
      <div class="bigglow"></div>
      <div class="wrap" style="position:relative">
        <a class="back" href="#/species">${SW.icons.back} All species</a>
        <div class="char-hero-grid">
          <span class="monogram big" ${SW.reveal(0, 'scale')}>${this.mono(s)}</span>
          <div>
            <div class="eyebrow" ${SW.reveal(1)}>${this.kindName(s.kind)}</div>
            <h1 class="h1 gradient-text" style="margin:12px 0" ${SW.reveal(2)}>${s.name}</h1>
            <p class="lede" ${SW.reveal(3)}>${SW.md(s.text)}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section tight" style="padding-top:10px">
      <div class="wrap">
        <dl class="card stat-strip" ${SW.reveal(0)}>${SW.corners}${stats.map(([k, v]) => `<div><dt class="label">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap detail-layout">
        <div>
          ${sections.length ? sections.map(([h, t], j) => `
            <div class="sp-block" ${SW.reveal(j)}>
              <span class="eyebrow">${String(j + 1).padStart(2, '0')} — ${h}</span>
              <p class="prose">${SW.md(t)}</p>
            </div>`).join('') : `<p class="prose">${SW.md(s.text)}</p>`}
          ${d.trivia ? `
            <div class="card" style="margin-top:34px" ${SW.reveal(0)}>${SW.corners}
              <div class="label" style="margin-bottom:10px">Archive notes</div>
              <div class="doctrine"><ul>${d.trivia.map(t => `<li>${SW.md(t)}</li>`).join('')}</ul></div>
            </div>` : ''}
        </div>
        <aside class="grid" style="gap:18px;align-content:start">
          ${notable.length ? `
            <div class="card" ${SW.reveal(1)}>${SW.corners}
              <div class="label" style="margin-bottom:12px">${s.kind === 'creature' ? 'Encountered by' : 'Notable individuals'}</div>
              <div class="rel-list">
                ${notable.map(n => {
                  const c = SW.char(n);
                  return c ? `<a class="rel" href="#/characters/${c.id}">${SW.portrait(c, 38)}<span><b>${c.name}</b><small>${c.alias}</small></span></a>`
                    : `<div class="rel"><span class="portrait ghost" style="--size:38px"><span class="ini">${n.replace(/^The /, '').split(' ').map(w => w[0]).join('').slice(0, 2)}</span></span><span><b>${n}</b></span></div>`;
                }).join('')}
              </div>
            </div>` : ''}
          ${planet ? `
            <a class="card planet-card hover" href="#/galaxy?focus=planet-${planet.id}" style="--c:${SW.biomes.find(b => b.id === planet.biome).color};min-height:0" ${SW.reveal(2)}>${SW.corners}
              <div class="orb" style="width:54px;height:54px"></div>
              <div class="label">Homeworld · open on the map</div>
              <h3 style="font-size:1.5rem">${planet.name}</h3>
              <p style="font-size:14px">${planet.text}</p>
            </a>` : ''}
          <div class="card" ${SW.reveal(3)}>${SW.corners}
            <div class="label" style="margin-bottom:10px">Related records</div>
            <div class="tags">${related.map(r => `<a class="tag long xtag" href="#/species/${r.id}">${r.name}</a>`).join('')}</div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2">
        <a class="card portal pn" href="#/species/${prev.id}" ${SW.reveal(0)}>${SW.corners}<span class="label">Previous record</span><h3>${prev.name}</h3></a>
        <a class="card portal pn" href="#/species/${next.id}" style="text-align:right" ${SW.reveal(1)}>${SW.corners}<span class="label">Next record</span><h3>${next.name}</h3></a>
      </div>
    </section>`;
  },

  mount(root, sub) {
    if (sub) return;
    let kind = 'all';
    const q = $('#sp-q', root);
    const apply = () => {
      const term = q.value.trim().toLowerCase();
      let n = 0;
      $$('#sp-grid .species-card', root).forEach(c => {
        const show = (kind === 'all' || c.dataset.k === kind) && (!term || c.dataset.q.includes(term));
        c.style.display = show ? '' : 'none';
        if (show) { n++; c.classList.add('in'); }
      });
      $('#sp-empty', root).hidden = n > 0;
    };
    $('#kind-tabs', root).addEventListener('click', e => {
      const t = e.target.closest('.tab'); if (!t) return;
      kind = t.dataset.k;
      $$('#kind-tabs .tab', root).forEach(x => x.classList.toggle('on', x === t));
      apply();
    });
    q.addEventListener('input', apply);
  }
};
