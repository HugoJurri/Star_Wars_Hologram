/* ==========================================================================
   VIEW — Home
   ========================================================================== */
SW.views.home = {
  title: '',
  portals: [
    { r: 'timeline', icon: 'timeline', t: 'Timeline', d: 'Ten eras across 36,000 years — from the Prime Jedi to Rey Skywalker.' },
    { r: 'galaxy', icon: 'galaxy', t: 'The Galaxy', d: 'An interactive map of regions, hyperlanes and more than thirty worlds.' },
    { r: 'characters', icon: 'characters', t: 'Characters', d: 'In-depth records of Jedi, Sith, rebels, bounty hunters and droids — and the lineage of the Force.' },
    { r: 'species', icon: 'species', t: 'Species', d: 'Biology, culture and history of Wookiees, Hutts, Chiss, Ewoks and the creatures of the wild.' },
    { r: 'force', icon: 'force', t: 'The Force', d: 'Light and dark, Jedi and Sith, kyber, prophecy and the dyad.' },
    { r: 'factions', icon: 'factions', t: 'Factions', d: 'Republic, Empire, Rebellion, First Order, Mandalorians, the underworld.' },
    { r: 'arsenal', icon: 'arsenal', t: 'Arsenal', d: 'Over a hundred starfighters, capital ships, walkers and weapons — with a scale chart.' },
    { r: 'battles', icon: 'battles', t: 'Battles & Doctrine', d: 'From Naboo to Exegol, and the strategies behind them.' },
    { r: 'clones', icon: 'clones', t: 'Clone Army', d: 'The Grand Army of the Republic — legions, ranks and Order 66.' },
    { r: 'science', icon: 'science', t: 'Real Science', d: 'Could a lightsaber exist? The real physics behind the technology.' },
    { r: 'lore', icon: 'lore', t: 'Lore Primer', d: 'BBY and ABY, canon versus Legends, where the saga is told — and what it is about.' }
  ],
  render() {
    const q = SW.quotes[Math.floor(Math.random() * SW.quotes.length)];
    return `
    <section class="home-hero">
      <div class="holo-disc" aria-hidden="true"></div>
      <div class="wrap">
        <h1 class="home-title gradient-text" ${SW.reveal(1)}><span>The Galactic Handbook</span>HOLOCRON</h1>
        <p class="lede" ${SW.reveal(3)}>An archive of everything there is to know about a galaxy far, far away — its eras and worlds, its peoples and powers, its wars, its warships and the Force that binds it all together.</p>
        <div class="home-cta" ${SW.reveal(5)}>
          <a class="btn primary" href="#/timeline">Begin at the dawn ${SW.icons.arrow}</a>
          <button class="btn" data-open-search>${SW.icons.search} Search the archive</button>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true"><span class="label">Scroll</span><i></i></div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>The archive</span>
          <h2 class="h2" ${SW.reveal(1)}>Choose a record</h2>
        </div>
        <div class="grid g3">
          ${this.portals.map((p, i) => `
            <a class="card portal" href="#/${p.r}" ${SW.reveal(i)}>
              ${SW.corners}
              <span class="num">${String(i + 1).padStart(2, '0')}</span>
              <span class="icon">${SW.icons[p.icon]}</span>
              <h3>${p.t}</h3>
              <p>${p.d}</p>
              <span class="go">Open ${SW.icons.arrow}</span>
            </a>`).join('')}
          <button class="card portal" data-open-search style="text-align:left" ${SW.reveal(this.portals.length)}>
            ${SW.corners}
            <span class="num">${String(this.portals.length + 1).padStart(2, '0')}</span>
            <span class="icon">${SW.icons.search}</span>
            <h3>Search everything</h3>
            <p>Every planet, ship, character, battle and era — one keystroke away. Press <kbd>Ctrl K</kbd> anywhere.</p>
            <span class="go">Search ${SW.icons.arrow}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Galactic Standard Calendar</span>
          <h2 class="h2" ${SW.reveal(1)}>How the galaxy counts time</h2>
          <p class="lede" ${SW.reveal(2)}>${SW.md(SW.dating.intro)}</p>
        </div>
        <div class="card calendar" ${SW.reveal(3, 'scale')}>
          ${SW.corners}
          <div class="side"><span class="k">BBY</span><b>${SW.dating.items[0].v}</b><span class="muted">${SW.dating.items[0].d}</span></div>
          <div class="zero"><b>0</b></div>
          <div class="side right"><span class="k">ABY</span><b>${SW.dating.items[2].v}</b><span class="muted">${SW.dating.items[2].d}</span></div>
        </div>
        <div style="margin-top:28px" ${SW.reveal(4)}>
          <div class="label" style="margin-bottom:12px">The ten eras — hover to expand, click to travel</div>
          <div class="ribbon">
            ${SW.eras.map(e => `<a href="#/timeline?focus=era-${e.id}" style="--c:${e.color}" title="${e.name}"><b>${String(e.n).padStart(2, '0')}</b><span>${e.name}</span></a>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="card" ${SW.reveal(0)}>
          ${SW.corners}
          <div class="label" style="margin-bottom:10px">Archive fragment</div>
          <div class="fact-ticker">
            <span class="ico">${SW.icons.spark}</span>
            <div style="flex:1">
              <div class="fact-text"></div>
              <div class="fact-dots">${SW.facts.map(() => '<i></i>').join('')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap quote-block">
        <span class="eyebrow" ${SW.reveal(0)}>Transmission</span>
        <q ${SW.reveal(1)}>${q.q}</q>
        <cite class="label" ${SW.reveal(2)}>— ${q.a}</cite>
      </div>
    </section>`;
  },
  mount(root) {
    $$('[data-open-search]', root).forEach(b => b.addEventListener('click', () => SW.search.open()));

    // Cursor-following glow on portal cards
    $$('.portal', root).forEach(c => c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));

    // Rotating facts
    const txt = $('.fact-text', root), dots = $$('.fact-dots i', root);
    let i = Math.floor(Math.random() * SW.facts.length);
    const show = () => {
      txt.classList.add('out');
      setTimeout(() => {
        txt.textContent = SW.facts[i];
        dots.forEach((d, j) => d.classList.toggle('on', j === i));
        txt.classList.remove('out');
        i = (i + 1) % SW.facts.length;
      }, 400);
    };
    show();
    const timer = setInterval(() => { if (!document.body.contains(txt)) return clearInterval(timer); show(); }, 6000);
    dots.forEach((d, j) => { d.style.cursor = 'pointer'; d.addEventListener('click', () => { i = j; show(); }); });
  }
};
