/* ==========================================================================
   VIEW — Arsenal (military technology) and Battles & Doctrine
   ========================================================================== */
SW.views.arsenal = {
  title: 'Arsenal',
  render(sub) {
    const cat = SW.arsenalCats.some(c => c.id === sub) || sub === 'scale' ? sub : 'starfighters';
    return `
    ${SW.pageHero({ num: '07', eyebrow: 'Military technology', title: 'The Arsenal', lede: 'An encyclopedia of the weapons, vehicles, ships and military systems of the galaxy — from the Clone Wars to the Final Order. Tap any record to open its spec sheet.' })}
    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="tabs" id="cat-tabs" style="margin-bottom:18px">
          ${SW.arsenalCats.map(c => `<button class="tab${c.id === cat ? ' on' : ''}" data-cat="${c.id}">${c.name}</button>`).join('')}
          <button class="tab${cat === 'scale' ? ' on' : ''}" data-cat="scale">Scale chart</button>
        </div>
        <div id="cat-body"></div>
      </div>
    </section>`;
  },

  body(cat) {
    if (cat === 'scale') return this.scale();
    const c = SW.arsenalCats.find(x => x.id === cat);
    const items = SW.arsenal.filter(a => a.cat === cat);
    const facs = [...new Set(items.map(a => a.f))];
    return `
      <div class="toolbar">
        <p class="muted" style="max-width:560px">${c.blurb}</p>
        <div class="chips" id="fac-chips">
          <button class="chip on" data-f="all">All · ${items.length}</button>
          ${facs.map(f => `<button class="chip" data-f="${f}"><span class="sw" style="background:${SW.arsenalFactions[f].color}"></span>${SW.arsenalFactions[f].name}</button>`).join('')}
        </div>
      </div>
      <div class="grid auto" id="ar-grid">
        ${items.map((a, i) => {
          const F = SW.arsenalFactions[a.f];
          return `
          <article class="card hover spec-card" id="ar-${a.id}" data-f="${a.f}" style="--c:${F.color}" role="button" tabindex="0" aria-expanded="false" ${SW.reveal(i % 9)}>
            ${SW.corners}
            <div class="top">
              <div><h3>${a.name}</h3><div class="role">${a.role}</div></div>
              <span class="fdot" title="${F.name}"></span>
            </div>
            <div class="tags">
              <span class="tag"><span class="dot" style="color:${F.color}"></span>${F.name}</span>
              ${a.len ? `<span class="tag lenbadge">${a.len >= 1000 ? (a.len / 1000).toLocaleString('en') + ' km' : a.len + ' m'}</span>` : ''}
              ${a.legends ? '<span class="tag legends">Legends</span>' : ''}
            </div>
            <p>${SW.md(a.text)}</p>
            <div class="specs"><div><dl class="kv">${a.specs.map(([k, v]) => `<dt>${k}</dt><dd>${SW.md(v)}</dd>`).join('')}</dl></div></div>
            <span class="more">Spec sheet ${SW.icons.down}</span>
          </article>`;
        }).join('')}
      </div>`;
  },

  scale() {
    const max = Math.max(...SW.scale.map(s => s.len));
    return `
      <div class="toolbar">
        <p class="muted" style="max-width:600px">From a 13-metre X-wing to a 200-kilometre battle station. On a linear scale almost everything vanishes next to the Death Stars — switch to logarithmic to compare.</p>
        <div class="chips" id="scale-mode"><button class="chip on" data-m="log">Logarithmic</button><button class="chip" data-m="lin">Linear</button></div>
      </div>
      <div class="card scale-chart">${SW.corners}
        ${SW.scale.map(s => `
          <div class="scale-row" data-len="${s.len}">
            <div class="nm">${s.name}<small>${s.cls}</small></div>
            <div class="track"><div class="bar" style="width:0"></div></div>
            <div class="val">${s.len >= 1000 ? (s.len / 1000).toLocaleString('en') + ' km' : s.len.toLocaleString('en') + ' m'}</div>
          </div>`).join('')}
      </div>
      <p class="muted" style="margin-top:14px;font-size:13px">Max length shown: ${(max / 1000).toLocaleString('en')} km. Starkiller Base (the planet Ilum, ~660 km) is off the chart.</p>`;
  },

  mount(root, sub) {
    const cat = SW.arsenalCats.some(c => c.id === sub) || sub === 'scale' ? sub : 'starfighters';
    this.show(cat, root);
    $('#cat-tabs', root).addEventListener('click', e => {
      const t = e.target.closest('.tab'); if (!t) return;
      $$('#cat-tabs .tab', root).forEach(x => x.classList.toggle('on', x === t));
      history.replaceState(null, '', `#/arsenal/${t.dataset.cat}`);
      this.show(t.dataset.cat, root);
    });
  },

  show(cat, root) {
    const body = $('#cat-body', root);
    body.innerHTML = `<div class="swap">${this.body(cat)}</div>`;
    SW.observe(body);
    if (cat === 'scale') {
      const max = Math.max(...SW.scale.map(s => s.len));
      const draw = m => $$('.scale-row', body).forEach(r => {
        const L = +r.dataset.len;
        $('.bar', r).style.width = (m === 'log' ? Math.log10(L) / Math.log10(max) : L / max) * 100 + '%';
      });
      requestAnimationFrame(() => draw('log'));
      $('#scale-mode', body).addEventListener('click', e => {
        const c = e.target.closest('.chip'); if (!c) return;
        $$('#scale-mode .chip', body).forEach(x => x.classList.toggle('on', x === c));
        draw(c.dataset.m);
      });
      return;
    }
    $('#fac-chips', body).addEventListener('click', e => {
      const c = e.target.closest('.chip'); if (!c) return;
      $$('#fac-chips .chip', body).forEach(x => x.classList.toggle('on', x === c));
      $$('#ar-grid .spec-card', body).forEach(card => {
        card.style.display = c.dataset.f === 'all' || card.dataset.f === c.dataset.f ? '' : 'none';
      });
    });
    $$('.spec-card', body).forEach(card => {
      const toggle = () => { card.classList.toggle('open'); card.setAttribute('aria-expanded', card.classList.contains('open')); };
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });
  },

  focus(id) { const c = document.getElementById(id); if (c) c.classList.add('open'); }
};

/* ---------------------------------------------------------------------- */
SW.views.battles = {
  title: 'Battles & Doctrine',
  render() {
    return `
    ${SW.pageHero({ num: '08', eyebrow: 'Military history', title: 'Battles & Doctrine', lede: 'The engagements that decided the fate of the galaxy — and the strategic thinking behind each side.' })}
    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="section-head"><span class="eyebrow" ${SW.reveal(0)}>Key battles — a tactical summary</span></div>
        <div class="grid auto">
          ${SW.battles.map((b, i) => {
            const era = SW.eras.find(e => e.id === b.era);
            return `
            <article class="card hover battle-card" id="battle-${i}" style="--c:${era.color}" ${SW.reveal(i % 6)}>
              ${SW.corners}
              <span class="date">${b.date} · ${era.name}</span>
              <h3>${b.name}</h3>
              <div class="tech"><span class="label">Key tech</span> — ${b.tech}</div>
              <div class="out"><i style="background:${b.win === 'light' ? 'var(--jedi)' : 'var(--sith)'};box-shadow:0 0 8px ${b.win === 'light' ? 'var(--jedi)' : 'var(--sith)'}"></i><span>${b.outcome}</span></div>
            </article>`;
          }).join('')}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Doctrine</span>
          <h2 class="h2" ${SW.reveal(1)}>How each side made war</h2>
        </div>
        <div class="grid g2">
          ${SW.doctrine.map((d, i) => `
            <div class="card doctrine" id="doc-${d.id}" ${SW.reveal(i)}>
              ${SW.corners}
              <span class="label">${d.side}</span>
              <h3 class="h2" style="font-size:1.6rem">${d.name}</h3>
              <p class="prose">${d.text}</p>
              ${d.points ? `<ul>${d.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
              ${d.weak ? `<p class="weak"><b class="label" style="color:var(--sith)">Weakness</b><br>${d.weak}</p>` : ''}
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }
};
