/* ==========================================================================
   VIEW — Interactive galaxy map
   ========================================================================== */
SW.views.galaxy = {
  title: 'The Galaxy',
  C: 500, R: 460,

  pos(grid) {
    const col = grid.charCodeAt(0) - 65, row = parseInt(grid.slice(1), 10);
    return [500 + (col - 11) * 42, 500 + (row - 10) * 44];
  },
  /* Catmull-Rom spline through points → SVG path */
  spline(pts) {
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
    }
    return d;
  },
  biome(id) { return SW.biomes.find(b => b.id === id); },

  render() {
    const { C, R } = this;
    const rings = SW.regions.filter(r => r.r);
    // Unknown Regions wedge on the galactic west
    const a1 = (150 * Math.PI) / 180, a2 = (215 * Math.PI) / 180, ri = 150, ro = 480;
    const P = (r, a) => `${C + r * Math.cos(a)},${C + r * Math.sin(a)}`;
    const wedge = `M${P(ri, a1)} L${P(ro, a1)} A${ro},${ro} 0 0 1 ${P(ro, a2)} L${P(ri, a2)} A${ri},${ri} 0 0 0 ${P(ri, a1)}Z`;

    return `
    ${SW.pageHero({ num: '02', eyebrow: 'Astrography', title: 'A Galaxy Far, Far Away', lede: SW.galaxyIntro })}

    <section class="section tight" style="padding-top:0">
      <div class="wrap">
        <div class="toolbar">
          <div class="chips" id="biome-chips">
            <button class="chip on" data-b="all">All worlds</button>
            ${SW.biomes.map(b => `<button class="chip" data-b="${b.id}"><span class="sw" style="background:${b.color}"></span>${b.name}</button>`).join('')}
          </div>
        </div>
        <div class="map-layout">
          <div class="map-box" ${SW.reveal(0, 'scale')}>
            <div class="map-legend">
              <span><i></i> Hyperspace lanes</span>
              <span>Drag to pan · scroll to zoom</span>
            </div>
            <div class="map-inner" style="position:absolute;inset:0;transform-origin:0 0">
              <canvas id="galaxy-canvas"></canvas>
              <svg class="map" viewBox="0 0 1000 1000" aria-label="Galaxy map">
                <defs>
                  <radialGradient id="fog" cx="0" cy="50%" r="80%">
                    <stop offset="0" stop-color="#05060c" stop-opacity=".2"/>
                    <stop offset=".5" stop-color="#05060c" stop-opacity=".75"/>
                    <stop offset="1" stop-color="#05060c" stop-opacity=".95"/>
                  </radialGradient>
                </defs>
                <path class="unknown" id="unknown-wedge" d="${wedge}"/>
                <text class="ring-label" x="${C - 400}" y="${C - 8}" style="fill:rgba(199,155,255,.7)">Unknown Regions</text>
                ${rings.map(r => `<circle class="ring" data-region="${r.id}" cx="${C}" cy="${C}" r="${r.r * R}"/>`).join('')}
                ${rings.filter(r => r.r > .1).map(r => `<text class="ring-label" x="${C}" y="${C - r.r * R + 16}" text-anchor="middle">${r.name.replace('The ', '').replace(' Territories', '')}</text>`).join('')}
                ${SW.hyperlanes.map(l => {
                  const pts = l.path.map(g => this.pos(g));
                  const mid = pts[Math.floor(pts.length / 2)];
                  return `<path class="lane" d="${this.spline(pts)}"/><text class="lane-label" x="${mid[0] + 8}" y="${mid[1] - 8}">${l.name}</text>`;
                }).join('')}
                ${SW.planets.map(p => {
                  const [x, y] = this.pos(p.grid), c = this.biome(p.biome).color;
                  return `<g class="planet" id="planet-${p.id}" data-id="${p.id}" data-b="${p.biome}" tabindex="0" role="button" aria-label="${p.name}">
                    <circle class="pulse" cx="${x}" cy="${y}" r="7" stroke="${c}"/>
                    <circle cx="${x}" cy="${y}" r="14" fill="transparent"/>
                    <circle class="core" cx="${x}" cy="${y}" r="5" fill="${c}" style="filter:drop-shadow(0 0 4px ${c})"/>
                    <text x="${x + 10}" y="${y + 4}">${p.name.replace(' (Forest Moon)', '').replace(' (Korriban)', '')}</text>
                  </g>`;
                }).join('')}
              </svg>
            </div>
            <div class="map-controls">
              <button data-z="in" aria-label="Zoom in">+</button>
              <button data-z="out" aria-label="Zoom out">−</button>
              <button data-z="reset" aria-label="Reset view" style="font-size:13px">⟲</button>
            </div>
          </div>

          <aside class="panel">
            <div class="card planet-card" id="planet-panel">${SW.corners}${this.intro()}</div>
            <div class="card" style="padding:18px">
              <div class="label" style="margin-bottom:10px">Galactic regions</div>
              <div class="region-list">
                ${SW.regions.map(r => `<button class="region-item" id="region-${r.id}" data-region="${r.id}"><b>${r.name}</b><span class="rtext" hidden>${r.text}</span></button>`).join('')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Planetary index</span>
          <h2 class="h2" ${SW.reveal(1)}>Worlds of the saga</h2>
          <p class="lede" ${SW.reveal(2)}>Star Wars is famous for its "single-biome" planets — worlds defined by one dominant environment.</p>
        </div>
        <div class="grid auto-sm" id="planet-grid">
          ${SW.planets.map((p, i) => `
            <button class="card hover species-card" id="pc-${p.id}" data-pick="${p.id}" data-b="${p.biome}" style="text-align:left" ${SW.reveal(i % 8)}>
              ${SW.corners}
              <div class="row"><span class="monogram" style="color:${this.biome(p.biome).color};border-color:${this.biome(p.biome).color}55">${p.name[0]}</span>
              <div><h3>${p.name}</h3><div class="sub">${p.region} · ${this.biome(p.biome).name}</div></div></div>
            </button>`).join('')}
        </div>
      </div>
    </section>`;
  },

  intro() {
    return `<div class="label">Navicomputer</div><h3 style="font-family:var(--display);font-size:1.6rem;margin:6px 0 10px">Select a world</h3>
      <p class="muted" style="font-size:15px">Tap any planet on the map to open its record. Filter by biome, or pick a region to highlight its boundary. Map positions follow the galactic grid and are approximate.</p>`;
  },

  select(id, pan) {
    const p = SW.planets.find(x => x.id === id); if (!p) return;
    const b = this.biome(p.biome);
    $$('.planet').forEach(g => g.classList.toggle('sel', g.dataset.id === id));
    const panel = $('#planet-panel');
    panel.style.setProperty('--c', b.color);
    panel.innerHTML = `${SW.corners}<div class="swap">
      <div class="orb"></div>
      <div class="label">Grid ${p.grid[0]}-${p.grid.slice(1)}</div>
      <h3>${p.name}</h3>
      <div class="meta"><span class="tag"><span class="dot" style="color:${b.color}"></span>${b.name}</span><span class="tag">${p.region}</span></div>
      <p>${SW.md(p.text)}</p>
      <div class="tags" style="margin-top:14px">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      ${this.linked(p)}
    </div>`;
    if (pan) this.zoomTo(this.pos(p.grid), 1.8);
  },

  /* Characters born here and species native to this world */
  linked(p) {
    const people = SW.characters.filter(c => c.home === p.id);
    const natives = SW.species.filter(s => (SW.speciesDetail[s.id] || {}).planet === p.id);
    if (!people.length && !natives.length) return '';
    return `<div class="linked">
      ${people.length ? `<div class="label">Homeworld of</div><div class="rel-list">${people.map(c => `<a class="rel" href="#/characters/${c.id}">${SW.portrait(c, 32)}<span><b>${c.name}</b></span></a>`).join('')}</div>` : ''}
      ${natives.length ? `<div class="label" style="margin-top:10px">Native life</div><div class="tags">${natives.map(s => `<a class="tag long xtag" href="#/species/${s.id}">${s.name}</a>`).join('')}</div>` : ''}
    </div>`;
  },

  mount(root) {
    this.drawGalaxy();
    const inner = $('.map-inner', root), box = $('.map-box', root);
    // View state in box-relative units (1 = full box width), so it is independent of layout timing
    const st = { s: 1, x: 0, y: 0 };
    const apply = () => {
      inner.style.transition = st.anim ? 'transform .7s cubic-bezier(.22,.8,.2,1)' : 'none';
      inner.style.transform = `translate(${st.x * 100}%,${st.y * 100}%) scale(${st.s})`;
      $$('.map text', root).forEach(t => t.style.fontSize = `${(t.classList.contains('lane-label') ? 10 : t.classList.contains('ring-label') ? 11 : 12) / Math.sqrt(st.s)}px`);
      st.anim = false;
    };
    const clamp = () => {
      st.s = Math.min(5, Math.max(1, st.s));
      st.x = Math.min(0, Math.max(1 - st.s, st.x)); st.y = Math.min(0, Math.max(1 - st.s, st.y));
    };
    const zoomAt = (cx, cy, f) => { const ns = Math.min(5, Math.max(1, st.s * f)); st.x = cx - (cx - st.x) * (ns / st.s); st.y = cy - (cy - st.y) * (ns / st.s); st.s = ns; clamp(); };
    this.zoomTo = ([vx, vy], s) => {
      st.s = Math.max(st.s, s); st.x = .5 - (vx / 1000) * st.s; st.y = .5 - (vy / 1000) * st.s; clamp(); st.anim = true; apply();
    };

    $('.map-controls', root).addEventListener('click', e => {
      const z = e.target.closest('button')?.dataset.z; if (!z) return;
      if (z === 'in') zoomAt(.5, .5, 1.4); if (z === 'out') zoomAt(.5, .5, 1 / 1.4);
      if (z === 'reset') { st.s = 1; st.x = 0; st.y = 0; }
      st.anim = true; apply();
    });
    box.addEventListener('wheel', e => {
      e.preventDefault(); const r = box.getBoundingClientRect();
      zoomAt((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, e.deltaY < 0 ? 1.15 : 1 / 1.15); apply();
    }, { passive: false });
    let drag = null;
    box.addEventListener('pointerdown', e => { if (e.target.closest('.map-controls')) return; drag = { x: e.clientX, y: e.clientY, sx: st.x, sy: st.y, w: box.clientWidth, moved: false }; });
    addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      st.x = drag.sx + dx / drag.w; st.y = drag.sy + dy / drag.w; clamp(); apply();
    });
    addEventListener('pointerup', () => { setTimeout(() => { drag = null; }, 0); });

    // Planets
    $$('.planet', root).forEach(g => {
      const pick = () => { if (drag && drag.moved) return; this.select(g.dataset.id); };
      g.addEventListener('click', pick);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.select(g.dataset.id, true); } });
    });
    $$('[data-pick]', root).forEach(b => b.addEventListener('click', () => {
      this.select(b.dataset.pick, true);
      $('.map-box').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));

    // Biome filter
    $('#biome-chips', root).addEventListener('click', e => {
      const c = e.target.closest('.chip'); if (!c) return;
      $$('#biome-chips .chip').forEach(x => x.classList.toggle('on', x === c));
      const b = c.dataset.b;
      $$('.planet', root).forEach(g => g.classList.toggle('dim', b !== 'all' && g.dataset.b !== b));
      $$('#planet-grid [data-b]', root).forEach(g => g.style.display = b === 'all' || g.dataset.b === b ? '' : 'none');
    });

    // Regions
    $$('.region-item', root).forEach(btn => btn.addEventListener('click', () => this.region(btn.dataset.region)));
  },

  region(id) {
    $$('.region-item').forEach(b => {
      const on = b.dataset.region === id && !b.classList.contains('on');
      b.classList.toggle('on', on);
      $('.rtext', b).hidden = !on;
    });
    const active = $('.region-item.on');
    $$('.ring').forEach(r => r.classList.toggle('hi', !!active && r.dataset.region === id));
    $('#unknown-wedge').style.fill = active && id === 'unknown' ? 'rgba(199,155,255,.18)' : '';
  },

  focus(id) {
    if (id.startsWith('planet-')) { this.select(id.slice(7), true); return $('.map-box'); }
    if (id.startsWith('region-')) { this.region(id.slice(7)); return $('.map-box'); }
  },

  /* Procedural spiral galaxy painted once onto the canvas */
  drawGalaxy() {
    const cv = $('#galaxy-canvas'); if (!cv) return;
    const size = 1000 * Math.min(devicePixelRatio || 1, 2);
    cv.width = cv.height = size;
    const c = cv.getContext('2d'), k = size / 1000, C = 500 * k;
    const g = c.createRadialGradient(C, C, 0, C, C, 230 * k);
    g.addColorStop(0, 'rgba(255,236,190,.55)'); g.addColorStop(.25, 'rgba(255,200,140,.18)'); g.addColorStop(1, 'rgba(60,80,160,0)');
    c.fillStyle = g; c.fillRect(0, 0, size, size);
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 14000; i++) {
      const arm = i % 4, t = Math.pow(rnd(), .7);
      const r = t * 470;
      const ang = arm * Math.PI / 2 + t * 5.2 + (rnd() - .5) * (0.9 - t * .5);
      const spread = (rnd() - .5) * 26 * (1 - t * .4);
      const x = C + (Math.cos(ang) * r + Math.cos(ang + 1.57) * spread) * k;
      const y = C + (Math.sin(ang) * r + Math.sin(ang + 1.57) * spread) * k;
      const warm = 1 - t;
      c.fillStyle = `rgba(${200 + 55 * warm | 0},${200 + 20 * warm | 0},${255 - 70 * warm | 0},${(.15 + rnd() * .55) * (1 - t * .5)})`;
      const s = (rnd() < .04 ? 1.8 : .9) * k;
      c.fillRect(x, y, s, s);
    }
    for (let i = 0; i < 1500; i++) { // halo dust
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 480 * k;
      c.fillStyle = `rgba(180,200,255,${rnd() * .25})`;
      c.fillRect(C + Math.cos(a) * r, C + Math.sin(a) * r, k, k);
    }
  }
};
