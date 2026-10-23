/* ==========================================================================
   VIEW — Characters (index, lineage chart, detail pages)
   ========================================================================== */

/* Look-ups shared with other views */
SW.char = id => SW.characters.find(c => c.id === id);
SW.planet = id => SW.planets.find(p => p.id === id);
SW.speciesById = id => SW.species.find(s => s.id === id);
SW.faction = id => SW.factions.find(f => f.id === id);

SW.initials = c => c.ini || (c.groups.includes('droids')
  ? c.name.replace(/-/g, '').slice(0, 2)
  : c.name.split(' ').filter(w => !/^(The|Count|General|Captain)$/.test(w)).map(w => w[0]).slice(0, 2).join(''));

/* Holographic portrait — side colour glow, optional saber-colour arc */
SW.portrait = (c, size = 72) => {
  const side = SW.sides[c.side].color;
  const arc = c.saber ? `<circle class="arc" cx="50" cy="50" r="44" style="color:${c.saber}"/>` : '';
  const arc2 = c.saber2 ? `<circle class="arc arc2" cx="50" cy="50" r="44" style="color:${c.saber2}"/>` : '';
  return `<span class="portrait" style="--c:${side};--size:${size}px" aria-hidden="true">
    <svg viewBox="0 0 100 100"><circle class="r1" cx="50" cy="50" r="48"/><circle class="r2" cx="50" cy="50" r="39"/>${arc}${arc2}</svg>
    <span class="ini">${SW.initials(c)}</span><i class="scan"></i></span>`;
};

/* Small inline link to a character, species, planet or faction — falls back to plain text */
SW.link = {
  char: (id, extra = '') => { const c = SW.char(id); return c ? `<a class="xlink" href="#/characters/${c.id}">${c.name}</a>${extra}` : `${id}${extra}`; },
  species: v => { const s = SW.speciesById(v); return s ? `<a class="xlink" href="#/species/${s.id}">${s.name}</a>` : v; },
  planet: v => { const p = SW.planet(v); return p ? `<a class="xlink" href="#/galaxy?focus=planet-${p.id}">${p.name}</a>` : v; },
  faction: v => { const f = SW.faction(v); return f ? `<a class="xlink" href="#/factions/${f.id}" style="--c:${f.color}">${f.name.replace(/^The /, '')}</a>` : v; }
};

SW.views.characters = {
  title: sub => (SW.char(sub) || {}).name || 'Characters',
  render(sub) {
    const c = SW.char(sub);
    return c ? this.detail(c) : this.index();
  },

  index() {
    return `
    ${SW.pageHero({ num: '03', eyebrow: 'Dramatis personae', title: 'Heroes, Villains & Legends', lede: `**${SW.characters.length} in-depth records** of the Jedi, Sith, rebels, imperials, bounty hunters and droids who shaped the galaxy.` })}
    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="toolbar">
          <div class="tabs" id="grp-tabs">
            <button class="tab on" data-g="all">All</button>
            ${SW.charGroups.map(g => `<button class="tab" data-g="${g.id}" title="${g.name}">${g.tab}</button>`).join('')}
          </div>
          <label class="field">${SW.icons.search}<input id="ch-q" type="text" placeholder="Find a character…" autocomplete="off"></label>
        </div>
        <div class="side-legend">${Object.values(SW.sides).map(s => `<span><i style="background:${s.color};box-shadow:0 0 8px ${s.color}"></i>${s.name}</span>`).join('')}</div>
        <div class="grid auto" id="ch-grid">
          ${SW.characters.map((c, i) => `
            <a class="card char-card" id="ch-${c.id}" href="#/characters/${c.id}" data-g="${c.groups.join(' ')}" data-q="${(c.name + ' ' + c.alias).toLowerCase()}" style="--c:${SW.sides[c.side].color}" ${SW.reveal(i % 9)}>
              ${SW.corners}
              <div class="char-top">${SW.portrait(c, 64)}<div><h3>${c.name}</h3><div class="alias">${c.alias}</div></div></div>
              <p>${c.short}</p>
              <div class="char-foot"><span class="tag" style="color:${(SW.eras.find(e => e.id === c.era) || {}).color}"><span class="dot"></span>${(SW.eras.find(e => e.id === c.era) || {}).name}</span><span class="go">Record ${SW.icons.arrow}</span></div>
            </a>`).join('')}
        </div>
        <div class="empty" id="ch-empty" hidden>No one in the archive by that name.</div>
      </div>
    </section>

    <section class="section" id="lineage">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Master & apprentice</span>
          <h2 class="h2" ${SW.reveal(1)}>The lineage of the Force</h2>
          <p class="lede" ${SW.reveal(2)}>Knowledge of the Force passes from teacher to student. Follow the blue threads of the Jedi and the red threads of the Sith — and see where they cross.</p>
        </div>
        <div class="card lineage-card" ${SW.reveal(3, 'scale')}>${SW.corners}<div class="lineage-scroll">${this.lineage()}</div></div>
      </div>
    </section>`;
  },

  lineage() {
    const N = SW.lineage.nodes;
    const curve = ([x1, y1], [x2, y2]) => { const my = (y1 + y2) / 2; return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`; };
    return `<svg class="lineage-svg" viewBox="0 0 1000 640" role="img" aria-label="Master and apprentice lineage">
      ${SW.lineage.edges.map(([a, b, k]) => `<path class="edge ${k === 'd' ? 'dark' : 'light'}" data-a="${a}" data-b="${b}" d="${curve(N[a], N[b])}"/>`).join('')}
      ${Object.entries(N).map(([id, [x, y]]) => {
        const c = SW.char(id), col = SW.sides[c.side].color;
        return `<a class="node" href="#/characters/${id}" data-id="${id}">
          <circle cx="${x}" cy="${y}" r="22" style="stroke:${col};filter:drop-shadow(0 0 6px ${col})"/>
          <text class="ini" x="${x}" y="${y + 5}">${SW.initials(c)}</text>
          <text class="nm" x="${x}" y="${y + 40}">${c.name.replace('Darth ', '').replace(' Skywalker', '').replace('Sheev ', '')}</text>
        </a>`;
      }).join('')}
    </svg>`;
  },

  detail(c) {
    const i = SW.characters.indexOf(c), side = SW.sides[c.side];
    const prev = SW.characters[(i - 1 + SW.characters.length) % SW.characters.length];
    const next = SW.characters[(i + 1) % SW.characters.length];
    const facts = [
      ['Species', SW.link.species(c.species)],
      ['Homeworld', SW.link.planet(c.home)],
      ['Born', c.born], ['Died', c.died],
      ['Affiliations', c.aff.map(SW.link.faction).join(', ')],
      ['Alignment', `<span style="color:${side.color}">${side.name}</span>`]
    ];
    return `
    <section class="detail-hero char-hero" style="--c:${side.color}">
      <div class="bigglow"></div>
      <div class="wrap" style="position:relative">
        <a class="back" href="#/characters">${SW.icons.back} All characters</a>
        <div class="char-hero-grid">
          <div ${SW.reveal(0, 'scale')}>${SW.portrait(c, 190)}</div>
          <div>
            <div class="eyebrow" style="color:${side.color}" ${SW.reveal(1)}>${c.alias}</div>
            <h1 class="h1 gradient-text" style="margin:12px 0" ${SW.reveal(2)}>${c.name}</h1>
            <p class="lede" ${SW.reveal(3)}>${c.short}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap detail-layout">
        <div>
          <div class="section-head"><span class="eyebrow">Biography</span></div>
          <div class="prose bio" ${SW.reveal(0)}>${SW.paras(c.bio)}</div>

          ${c.quote ? `<blockquote class="char-quote" style="--c:${side.color}" ${SW.reveal(0)}><q>${c.quote}</q><cite class="label">— ${c.name}</cite></blockquote>` : ''}

          <div class="section-head" style="margin-top:50px"><span class="eyebrow">Key moments</span></div>
          <div class="events" style="--c:${side.color}">
            ${c.moments.map(([d, t], j) => `<article class="event card" ${SW.reveal(j)}>${SW.corners}<span class="date">${d}</span><p style="margin-top:4px">${SW.md(t)}</p></article>`).join('')}
          </div>

          <div class="grid g2" style="margin-top:40px">
            <div class="card" ${SW.reveal(0)}>${SW.corners}<div class="label" style="margin-bottom:12px">Abilities & skills</div><div class="tags">${c.skills.map(s => `<span class="tag long">${s}</span>`).join('')}</div></div>
            ${c.gear.length ? `<div class="card" ${SW.reveal(1)}>${SW.corners}<div class="label" style="margin-bottom:12px">Signature gear</div><div class="tags">${c.gear.map(s => `<span class="tag long">${s}</span>`).join('')}</div></div>` : ''}
          </div>
        </div>

        <aside class="grid" style="gap:18px;align-content:start">
          <div class="card" style="--c:${side.color}" ${SW.reveal(1)}>${SW.corners}
            <div class="label" style="margin-bottom:6px">Record</div>
            <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
          </div>
          <div class="card" ${SW.reveal(2)}>${SW.corners}
            <div class="label" style="margin-bottom:12px">Connections</div>
            <div class="rel-list">
              ${c.rel.map(([who, what]) => {
                const o = SW.char(who);
                return o
                  ? `<a class="rel" href="#/characters/${o.id}">${SW.portrait(o, 38)}<span><b>${o.name}</b><small>${what}</small></span></a>`
                  : `<div class="rel">${`<span class="portrait ghost" style="--size:38px"><span class="ini">${who.split(' ').map(w => w[0]).join('').slice(0, 2)}</span></span>`}<span><b>${who}</b><small>${what}</small></span></div>`;
              }).join('')}
            </div>
          </div>
          <div class="card" ${SW.reveal(3)}>${SW.corners}
            <div class="label" style="margin-bottom:10px">Appears in</div>
            <div class="tags">${c.seen.map(s => `<span class="tag long">${s}</span>`).join('')}</div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2">
        <a class="card portal pn" href="#/characters/${prev.id}" ${SW.reveal(0)}>${SW.corners}<span class="label">Previous record</span><h3>${prev.name}</h3><span class="go" style="flex-direction:row-reverse;justify-content:flex-end">${prev.alias} <span style="width:16px;transform:scaleX(-1)">${SW.icons.arrow}</span></span></a>
        <a class="card portal pn" href="#/characters/${next.id}" style="text-align:right" ${SW.reveal(1)}>${SW.corners}<span class="label">Next record</span><h3>${next.name}</h3><span class="go" style="justify-content:flex-end">${next.alias} ${SW.icons.arrow}</span></a>
      </div>
    </section>`;
  },

  mount(root, sub) {
    if (sub) return;
    let g = 'all';
    const q = $('#ch-q', root);
    const apply = () => {
      const t = q.value.trim().toLowerCase(); let n = 0;
      $$('#ch-grid .char-card', root).forEach(card => {
        const show = (g === 'all' || card.dataset.g.split(' ').includes(g)) && (!t || card.dataset.q.includes(t));
        card.style.display = show ? '' : 'none';
        if (show) { n++; card.classList.add('in'); }
      });
      $('#ch-empty', root).hidden = n > 0;
    };
    $('#grp-tabs', root).addEventListener('click', e => {
      const b = e.target.closest('.tab'); if (!b) return;
      g = b.dataset.g;
      $$('#grp-tabs .tab', root).forEach(x => x.classList.toggle('on', x === b));
      apply();
    });
    q.addEventListener('input', apply);

    // Lineage: hovering a node lights up its threads
    const svg = $('.lineage-svg', root);
    $$('.node', svg).forEach(n => {
      const id = n.dataset.id;
      n.addEventListener('mouseenter', () => {
        svg.classList.add('focus');
        $$('.edge', svg).forEach(e => e.classList.toggle('hi', e.dataset.a === id || e.dataset.b === id));
        n.classList.add('hi');
      });
      n.addEventListener('mouseleave', () => {
        svg.classList.remove('focus');
        $$('.edge.hi', svg).forEach(e => e.classList.remove('hi'));
        n.classList.remove('hi');
      });
    });
  }
};
