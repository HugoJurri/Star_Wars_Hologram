/* ==========================================================================
   CORE — helpers, icons, starfield, router, search, opening crawl
   Plain scripts (no modules) so the site also works from file://
   ========================================================================== */
window.SW = window.SW || {};
SW.views = {};

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Tiny markdown: **bold**, *italic*, paragraphs on blank lines */
SW.md = (str = '') => str
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>');
SW.paras = (str = '') => str.trim().split(/\n\s*\n/).map(p => `<p>${SW.md(p.trim())}</p>`).join('');
SW.esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
SW.fmtYear = y => y === 0 ? '0' : y < 0 ? `${Math.abs(y).toLocaleString('en')} BBY` : `${y} ABY`;
SW.corners = '<i class="corner tl"></i><i class="corner br"></i>';
SW.reveal = (i = 0, kind = '') => `data-reveal${kind ? `="${kind}"` : ''} style="--d:${Math.min(i, 12) * 0.06}s"`;

/* Shared page header used by every section */
SW.pageHero = ({ num, eyebrow, title, lede }) => `
  <section class="page-hero">
    <svg class="hero-rings" viewBox="0 0 400 400" aria-hidden="true">
      <circle class="r1" cx="200" cy="200" r="190"/><circle class="r2" cx="200" cy="200" r="150"/><circle class="r3" cx="200" cy="200" r="110"/>
    </svg>
    <div class="index-num" aria-hidden="true">${num}</div>
    <div class="wrap">
      <span class="eyebrow" ${SW.reveal(0)}>Archive ${num} // ${eyebrow}</span>
      <h1 class="h1 gradient-text" ${SW.reveal(1)}>${title}</h1>
      ${lede ? `<p class="lede" ${SW.reveal(2)}>${SW.md(lede)}</p>` : ''}
    </div>
  </section>`;

/* ---------- Icons (24px line icons) ---------- */
const ic = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
SW.icons = {
  search: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  arrow: ic('<path d="M4 12h16M14 6l6 6-6 6"/>'),
  back: ic('<path d="M20 12H4M10 6l-6 6 6 6"/>'),
  up: ic('<path d="M12 20V4M6 10l6-6 6 6"/>'),
  down: ic('<path d="M6 9l6 6 6-6"/>'),
  spark: ic('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'),
  timeline: ic('<path d="M3 12h18"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 10V5M12 14v5M18 10V5"/>'),
  galaxy: ic('<circle cx="12" cy="12" r="2"/><path d="M12 4c5 0 8 3.6 8 8M12 20c-5 0-8-3.6-8-8M4.5 8.5C7 5.5 13 5.5 15 9M19.5 15.5C17 18.5 11 18.5 9 15"/>'),
  species: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/><path d="M8 5 6 2M16 5l2-3"/>'),
  characters: ic('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M15.5 4.5a3.5 3.5 0 0 1 0 7M18 14.3c2.1.7 3.5 2.6 3.5 5.7"/>'),
  force: ic('<circle cx="12" cy="12" r="9"/><path d="M12 3a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0 9"/><circle cx="12" cy="7.5" r="1"/><circle cx="12" cy="16.5" r="1"/>'),
  factions: ic('<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/><path d="M12 7v10M8 11h8"/>'),
  arsenal: ic('<path d="M12 2 9 10H3l6 4-2 8 5-5 5 5-2-8 6-4h-6z"/>'),
  battles: ic('<path d="m4 20 8-8M14.5 9.5 20 4M4 4l16 16M9.5 14.5 4 20"/><path d="M15 4h5v5M9 20H4v-5"/>'),
  clones: ic('<path d="M5 10a7 7 0 0 1 14 0v6l-3 4H8l-3-4z"/><path d="M8 11h8M12 11v6"/>'),
  science: ic('<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>'),
  lore: ic('<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>'),
  close: ic('<path d="M6 6l12 12M18 6 6 18"/>')
};
SW.brandMark = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
  <circle cx="20" cy="20" r="18" stroke-dasharray="3 3"/><circle cx="20" cy="20" r="12"/>
  <path d="M20 2v8M20 30v8M2 20h8M30 20h8"/><path d="M20 12l6 8-6 8-6-8z" fill="currentColor" fill-opacity=".25"/></svg>`;

/* Stylised clone helmet; c = marking colour */
SW.helmet = c => `<svg class="helmet" viewBox="0 0 64 64">
  <path d="M12 30C12 15 20 7 32 7s20 8 20 23v12l-6 13H18l-6-13z" fill="#e9ecf1" stroke="#9aa3b2" stroke-width="1.2"/>
  <path d="M32 7c-5 0-9 1.5-12 4.5L22 26h20l2-14.5C41 8.5 37 7 32 7z" fill="${c}" opacity=".9"/>
  <path d="M17 30h30v5H35v14h-6V35H17z" fill="#0b0e14"/>
  <path d="M22 50h20l-2 4H24z" fill="${c}" opacity=".8"/>
  <circle cx="20" cy="42" r="2" fill="#0b0e14"/><circle cx="44" cy="42" r="2" fill="#0b0e14"/></svg>`;

/* ---------- Starfield with hyperspace warp ---------- */
SW.starfield = (() => {
  const cv = $('#stars');
  const ctx = cv.getContext('2d');
  let w, h, dpr, stars = [], speed = 0.00035, target = 0.00035, mx = 0, my = 0, raf;
  const N = () => Math.min(900, Math.floor((innerWidth * innerHeight) / 2600));
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
    const n = N();
    while (stars.length < n) stars.push(newStar(true));
    stars.length = n;
  }
  function newStar(any) {
    return { x: (Math.random() - .5) * 2, y: (Math.random() - .5) * 2, z: any ? Math.random() : 1, pz: 0, hue: Math.random() < .15 ? (Math.random() < .5 ? 210 : 40) : 0 };
  }
  function frame() {
    speed += (target - speed) * 0.06;
    const warp = speed > 0.004;
    ctx.fillStyle = warp ? 'rgba(4,5,10,0.35)' : '#04050a';
    ctx.fillRect(0, 0, w, h);
    const cx = w / 2 + mx * 30 * dpr, cy = h / 2 + my * 30 * dpr, scale = Math.max(w, h) * .5;
    for (const s of stars) {
      s.pz = s.z;
      s.z -= speed;
      if (s.z <= 0.02) { Object.assign(s, newStar(false)); s.pz = s.z; continue; }
      const sx = cx + (s.x / s.z) * scale, sy = cy + (s.y / s.z) * scale;
      if (sx < 0 || sx > w || sy < 0 || sy > h) { if (s.z < .9) { Object.assign(s, newStar(false)); s.pz = s.z; } continue; }
      const a = Math.min(1, (1 - s.z) * 1.4);
      const r = (1 - s.z) * 1.6 * dpr + .2;
      const col = s.hue ? `hsla(${s.hue},80%,80%,${a})` : `rgba(235,240,255,${a})`;
      if (warp) {
        const px = cx + (s.x / s.pz) * scale, py = cy + (s.y / s.pz) * scale;
        ctx.strokeStyle = s.hue ? col : `rgba(190,225,255,${a})`;
        ctx.lineWidth = r;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(sx, sy); ctx.stroke();
      } else {
        ctx.fillStyle = col;
        ctx.beginPath(); ctx.arc(sx, sy, r, 0, 6.283); ctx.fill();
      }
    }
    raf = requestAnimationFrame(frame);
  }
  addEventListener('resize', resize);
  addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(frame); });
  resize(); frame();
  return {
    warp(ms = 900) {
      if (reduceMotion) return;
      target = 0.03;
      setTimeout(() => { target = 0.00035; }, ms);
    }
  };
})();

/* ---------- Reveal on scroll ---------- */
SW.observe = root => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('[data-reveal], .lifespan, .pyramid, .meter', root).forEach(el => io.observe(el));
};

/* Animated count-up for any [data-count] element (optional data-suffix) */
SW.countUp = root => $$('[data-count]', root).forEach(el => {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  const o = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return; o.disconnect();
    const t0 = performance.now();
    const tick = t => {
      const p = reduceMotion ? 1 : Math.min(1, (t - t0) / 1600);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en') + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  o.observe(el);
});

/* ---------- Router ---------- */
SW.routes = [
  { id: 'home', path: '', label: 'Home' },
  { id: 'timeline', path: 'timeline', label: 'Timeline' },
  { id: 'galaxy', path: 'galaxy', label: 'Galaxy' },
  { id: 'characters', path: 'characters', label: 'Characters' },
  { id: 'species', path: 'species', label: 'Species' },
  { id: 'force', path: 'force', label: 'Force' },
  { id: 'factions', path: 'factions', label: 'Factions' },
  { id: 'arsenal', path: 'arsenal', label: 'Arsenal' },
  { id: 'battles', path: 'battles', label: 'Battles' },
  { id: 'clones', path: 'clones', label: 'Clones' },
  { id: 'science', path: 'science', label: 'Science' },
  { id: 'lore', path: 'lore', label: 'Lore' }
];

function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, query = ''] = raw.split('?');
  const parts = path.split('/').filter(Boolean);
  const params = Object.fromEntries(new URLSearchParams(query));
  return { page: parts[0] || '', sub: parts[1] || '', params };
}

let current = { page: null, sub: null };
SW.navigate = async function () {
  const { page, sub, params } = parseHash();
  const route = SW.routes.find(r => r.path === page) || SW.routes[0];
  const view = SW.views[route.id];
  const el = $('#view');
  document.body.classList.remove('menu-open');

  // Same page and sub-page — only the focus target changed
  if (current.page === route.id && current.sub === sub) {
    if (params.focus) focusTarget(view, params.focus);
    return;
  }
  const first = current.page === null;
  current = { page: route.id, sub };

  if (!first) {
    SW.starfield.warp(800);
    el.classList.add('leaving');
    await new Promise(r => setTimeout(r, reduceMotion ? 0 : 340));
  }
  document.body.classList.remove('side-dark', 'drawer-open', 'o66-active');
  el.classList.remove('leaving', 'entering');
  el.innerHTML = view.render(sub, params);
  document.title = (view.title ? (typeof view.title === 'function' ? view.title(sub) : view.title) + ' — ' : '') + 'Holocron · The Galactic Handbook';
  window.scrollTo({ top: 0, behavior: 'instant' });
  void el.offsetWidth;
  el.classList.add('entering');
  view.mount && view.mount(el, sub, params);
  SW.observe(el);
  SW.countUp(el);
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.route === route.id));
  if (params.focus) setTimeout(() => focusTarget(view, params.focus), first ? 300 : 650);
};

function focusTarget(view, id) {
  // A view's focus() may return a different element to scroll to
  const custom = view && view.focus ? view.focus(id) : null;
  const t = custom || document.getElementById(id);
  if (!t) return;
  t.classList.add('in');
  t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  t.classList.remove('flash'); void t.offsetWidth; t.classList.add('flash');
}

/* ---------- Shell (nav, footer, palette) ---------- */
function buildShell() {
  $('.brand-mark').innerHTML = SW.brandMark;
  $('.nav-links').innerHTML = SW.routes.slice(1).map(r => `<a href="#/${r.path}" data-route="${r.id}">${r.label}</a>`).join('');
  $('.search-btn').insertAdjacentHTML('afterbegin', SW.icons.search);
  $('.to-top').innerHTML = SW.icons.up;
  $('.palette .field').insertAdjacentHTML('afterbegin', SW.icons.search);

  $('.menu-btn').addEventListener('click', () => document.body.classList.toggle('menu-open'));
  $('.to-top').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  const prog = $('.progress'), top = $('.to-top');
  addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
    top.classList.toggle('show', scrollY > innerHeight);
  }, { passive: true });

  // Drawer (shared by views)
  $('.drawer-bg').addEventListener('click', SW.closeDrawer);
  $('.drawer .close').addEventListener('click', SW.closeDrawer);
  $('.drawer .close').innerHTML = SW.icons.close;

  $$('[data-replay]').forEach(b => b.addEventListener('click', () => SW.crawl(true)));
}
SW.openDrawer = html => {
  $('.drawer .content').innerHTML = html;
  $('.drawer').scrollTop = 0;
  document.body.classList.add('drawer-open');
  SW.observe($('.drawer'));
};
SW.closeDrawer = () => document.body.classList.remove('drawer-open');

/* ---------- Search palette ---------- */
SW.search = (() => {
  let index = null, results = [], sel = 0;
  const input = () => $('.palette input');
  function build() {
    const I = [];
    const add = (t, s, kind, href, c) => I.push({ t, s, kind, href, c, hay: (t + ' ' + s).toLowerCase() });
    SW.routes.slice(1).forEach(r => add(r.label, 'Section', 'Section', `#/${r.path}`));
    SW.eras.forEach(e => {
      add(e.name, e.range + ' — ' + e.tagline, 'Era', `#/timeline?focus=era-${e.id}`, e.color);
      e.events.forEach((ev, i) => add(ev.title, `${ev.date} · ${e.name}`, 'Event', `#/timeline?focus=ev-${e.id}-${i}`, e.color));
    });
    SW.planets.forEach(p => add(p.name, `${p.region} · ${SW.biomes.find(b => b.id === p.biome).name}`, 'Planet', `#/galaxy?focus=planet-${p.id}`, SW.biomes.find(b => b.id === p.biome).color));
    SW.regions.forEach(r => add(r.name, 'Galactic region', 'Region', `#/galaxy?focus=region-${r.id}`));
    SW.characters.forEach(c => add(c.name, c.alias + ' — ' + c.short, 'Character', `#/characters/${c.id}`, SW.sides[c.side].color));
    SW.species.forEach(s => add(s.name, s.known || '', s.kind === 'creature' ? 'Creature' : 'Species', `#/species/${s.id}`));
    SW.factions.forEach(f => add(f.name, f.range, 'Faction', `#/factions/${f.id}`, f.color));
    SW.arsenal.forEach(a => add(a.name, a.role, SW.arsenalCats.find(c => c.id === a.cat).name, `#/arsenal/${a.cat}?focus=ar-${a.id}`, SW.arsenalFactions[a.f].color));
    SW.battles.forEach((b, i) => add(b.name, `${b.date} · ${b.outcome}`, 'Battle', `#/battles?focus=battle-${i}`));
    SW.clones.legions.forEach(l => add(l.name, `${l.jedi} · ${l.cmd}`, 'Legion', `#/clones?focus=legion-${l.id}`, l.color));
    SW.science.forEach(s => add(s.name + ' — real physics', s.verdict, 'Science', `#/science?focus=sci-${s.id}`));
    SW.themes.forEach(t => add(t.t, 'Theme', 'Theme', `#/lore?focus=themes`));
    return I;
  }
  function score(item, terms) {
    let s = 0;
    for (const t of terms) {
      const i = item.hay.indexOf(t);
      if (i < 0) return -1;
      s += item.t.toLowerCase().startsWith(t) ? 10 : i < item.t.length ? 6 : 2;
    }
    return s - item.t.length * 0.01;
  }
  function render() {
    const q = input().value.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    results = terms.length
      ? index.map(it => [score(it, terms), it]).filter(x => x[0] >= 0).sort((a, b) => b[0] - a[0]).slice(0, 40).map(x => x[1])
      : index.filter(i => i.kind === 'Section');
    sel = 0;
    $('.results').innerHTML = results.length ? results.map((r, i) => `
      <a class="result${i === 0 ? ' on' : ''}" href="${r.href}" data-i="${i}" style="${r.c ? `--c:${r.c}` : ''}">
        <span class="bul"></span>
        <div><div class="t">${SW.esc(r.t)}</div><div class="s">${SW.esc(r.s.replace(/\*/g, ''))}</div></div>
        <span class="kind">${r.kind}</span>
      </a>`).join('') : `<div class="empty">No records found in the archive.</div>`;
  }
  function move(d) {
    const els = $$('.result');
    if (!els.length) return;
    els[sel].classList.remove('on');
    sel = (sel + d + els.length) % els.length;
    els[sel].classList.add('on');
    els[sel].scrollIntoView({ block: 'nearest' });
  }
  function open() {
    index = index || build();
    document.body.classList.add('search-open');
    input().value = '';
    render();
    input().focus();
  }
  function close() { document.body.classList.remove('search-open'); }
  function init() {
    $('.search-btn').addEventListener('click', open);
    $('.palette-bg').addEventListener('click', close);
    input().addEventListener('input', render);
    $('.results').addEventListener('click', e => { if (e.target.closest('.result')) close(); });
    $('.results').addEventListener('mousemove', e => {
      const r = e.target.closest('.result'); if (!r) return;
      $$('.result').forEach(x => x.classList.remove('on')); r.classList.add('on'); sel = +r.dataset.i;
    });
    addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); return; }
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); return; }
      if (e.key === 'Escape') { close(); SW.closeDrawer(); document.body.classList.remove('menu-open'); }
      if (!document.body.classList.contains('search-open')) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      if (e.key === 'Enter' && results[sel]) { e.preventDefault(); location.hash = results[sel].href; close(); }
    });
  }
  return { init, open, close };
})();

/* ---------- Opening crawl ---------- */
SW.crawl = (force) => {
  let seen = false;
  try { seen = sessionStorage.getItem('sw-crawl') === '1'; } catch (e) { /* storage blocked */ }
  if ((seen && !force) || (reduceMotion && !force)) return;
  try { sessionStorage.setItem('sw-crawl', '1'); } catch (e) { /* ignore */ }

  const el = document.createElement('div');
  el.className = 'crawl';
  el.innerHTML = `
    <canvas></canvas>
    <div class="intro">A long time ago in a galaxy far,<br>far away….</div>
    <div class="logo">HOLOCRON<small>THE GALACTIC HANDBOOK</small></div>
    <div class="stage"><div class="text">
      <h2>Episode I</h2>
      <h3>THE ARCHIVE AWAKENS</h3>
      <p>It is a time of wonder. Across a galaxy of four hundred billion stars, the stories of Jedi and Sith, of republics and empires, lie scattered across a thousand worlds.</p>
      <p>From the dawn of the Jedi on Ahch-To to the last stand on Exegol, an archivist has gathered the records of eras, worlds, species and starships into a single HOLOCRON.</p>
      <p>Now, as the archive opens its doors, a new traveller arrives in search of knowledge — of the Force, of war, and of the hope that endures through every age….</p>
    </div></div>
    <button class="skip">Skip intro ›</button>`;
  document.body.appendChild(el);
  document.body.style.overflow = 'hidden';

  // Static star backdrop for the crawl
  const cv = $('canvas', el), c = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  for (let i = 0; i < 500; i++) {
    c.fillStyle = `rgba(255,255,255,${Math.random() * .9})`;
    c.fillRect(Math.random() * cv.width, Math.random() * cv.height, Math.random() < .1 ? 2 : 1, Math.random() < .1 ? 2 : 1);
  }
  let finished = false;
  const end = () => {
    if (finished) return; finished = true;
    el.classList.add('done');
    document.body.style.overflow = '';
    SW.starfield.warp(1200);
    setTimeout(() => el.remove(), 1000);
  };
  el.addEventListener('click', end);
  addEventListener('keydown', function k(e) { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); end(); removeEventListener('keydown', k); } });
  setTimeout(end, 44000);
};

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  buildShell();
  SW.search.init();
  addEventListener('hashchange', SW.navigate);
  SW.navigate();
  SW.crawl();
});
