/* ==========================================================================
   VIEW — The Force
   ========================================================================== */
SW.views.force = {
  title: 'The Force',
  render() {
    const F = SW.force;
    const side = (s, cls) => `
      <div class="half ${cls}">
        <span class="eyebrow">${cls === 'light' ? 'Ashla' : 'Bogan'}</span>
        <h3>${s.name}</h3>
        <p class="prose">${s.text}</p>
        <div class="code">${s.code.map(l => `<span>${l}</span>`).join('')}</div>
        <div class="label">Signature abilities</div>
        <ul>${s.abilities.map(a => `<li><b>${a.n}</b><span>${a.d}</span></li>`).join('')}</ul>
      </div>`;
    return `
    ${SW.pageHero({ num: '05', eyebrow: 'Metaphysics', title: 'The Force', lede: F.intro })}

    <section class="section tight" style="padding-top:0">
      <div class="wrap grid g2">
        <div class="card" ${SW.reveal(0)}>${SW.corners}
          <div class="label">Midi-chlorians</div>
          <div class="stat-big" style="margin:10px 0" data-count="20000" data-suffix="+">0</div>
          <p class="prose">${SW.md(F.midichlorians)}</p>
        </div>
        <div class="grid" style="gap:18px">
          ${F.aspects.map((a, i) => `<div class="card" ${SW.reveal(i + 1)}>${SW.corners}<h3 class="h3" style="margin-bottom:6px">${a.name}</h3><p class="prose">${a.text}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head" style="text-align:center;justify-items:center">
          <span class="eyebrow" ${SW.reveal(0)}>Balance</span>
          <h2 class="h2" ${SW.reveal(1)}>Two paths, one Force</h2>
          <p class="lede" ${SW.reveal(2)}>The Force has a natural state of balance — but it can be channelled through two philosophies. Choose a side to feel the archive shift.</p>
          <div class="lean" ${SW.reveal(3)}>
            <button class="chip" data-lean="light">Light side</button>
            <button class="chip on" data-lean="balance">Balance</button>
            <button class="chip" data-lean="dark">Dark side</button>
          </div>
        </div>
        <div class="balance" data-lean="balance" ${SW.reveal(0, 'scale')}>
          ${side(F.light, 'light')}
          <span class="seam"></span>
          ${side(F.dark, 'dark')}
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" ${SW.reveal(0)}>Powers</span>
          <h2 class="h2" ${SW.reveal(1)}>Common Force abilities</h2>
        </div>
        <div class="grid g4" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
          ${F.common.map((a, i) => `<div class="card hover" ${SW.reveal(i)}>${SW.corners}<h3 class="h3" style="font-size:1.05rem">${a.n}</h3><p class="muted" style="font-size:14px;margin-top:4px">${a.d}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid g2" style="gap:30px;align-items:start">
        <div>
          <div class="section-head">
            <span class="eyebrow" ${SW.reveal(0)}>The Jedi Order</span>
            <h2 class="h2" ${SW.reveal(1)}>Guardians of peace</h2>
            <p class="lede" ${SW.reveal(2)}>${F.jediText}</p>
          </div>
          <div class="ladder">
            ${F.jediRanks.map((r, i) => `
              <div class="step" ${SW.reveal(i)}>
                <div class="bar" style="width:${30 + i * 14}%"></div>
                <div><b>${r.r}</b><span>${r.d}</span></div>
              </div>`).join('')}
          </div>
        </div>
        <div id="sith-lineage">
          <div class="section-head">
            <span class="eyebrow" style="color:var(--sith)" ${SW.reveal(0)}>The Sith</span>
            <h2 class="h2" ${SW.reveal(1)}>The Rule of Two</h2>
            <p class="lede" ${SW.reveal(2)}>${SW.md(F.sithText)}</p>
          </div>
          <div class="lineage">
            ${F.sith.map((s, i) => `
              <div class="lord" ${SW.reveal(i)}>
                <i>${String(i + 1).padStart(2, '0')}</i>
                <div><b>${s.n}</b>${s.real ? `<small>${s.real}</small>` : ''}<p>${s.d}</p></div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="card" style="padding:clamp(22px,4vw,44px)" ${SW.reveal(0)}>${SW.corners}
          <div class="saber-stage">
            <div>
              <span class="eyebrow">Kyber</span>
              <h2 class="h2" style="margin:10px 0 12px">The lightsaber</h2>
              <p class="prose">${SW.md(F.saberText)} Pick a crystal to ignite the blade.</p>
              <div class="saber-swatches">
                ${F.sabers.map((s, i) => `<button class="swatch${i ? '' : ' on'}" style="--c:${s.c === '#111111' ? '#2a2a2a' : s.c}" data-i="${i}" aria-label="${s.n}"></button>`).join('')}
              </div>
            </div>
            <div>
              <div class="saber" style="--blade:${F.sabers[0].c}"><div class="hilt"></div><div class="blade"></div></div>
              <div class="saber-info" style="margin-top:22px"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap grid g2">
        <div class="card" ${SW.reveal(0)}>${SW.corners}<span class="eyebrow">Prophecy</span><h3 class="h2" style="font-size:1.8rem;margin:10px 0">The Chosen One</h3><p class="prose">${SW.md(F.prophecy)}</p></div>
        <div class="card" ${SW.reveal(1)}>${SW.corners}<span class="eyebrow">Rare phenomenon</span><h3 class="h2" style="font-size:1.8rem;margin:10px 0">The Force Dyad</h3><p class="prose">${SW.md(F.dyad)}</p></div>
      </div>
    </section>`;
  },
  mount(root) {
    // Lean toggle shifts the whole page palette
    $('.lean', root).addEventListener('click', e => {
      const c = e.target.closest('.chip'); if (!c) return;
      $$('.lean .chip', root).forEach(x => x.classList.toggle('on', x === c));
      $('.balance', root).dataset.lean = c.dataset.lean;
      document.body.classList.toggle('side-dark', c.dataset.lean === 'dark');
      SW.starfield.warp(300);
    });

    // Lightsaber
    const saber = $('.saber', root), info = $('.saber-info', root);
    const ignite = i => {
      const s = SW.force.sabers[i];
      saber.classList.remove('on');
      $$('.swatch', root).forEach((w, j) => w.classList.toggle('on', j === i));
      setTimeout(() => {
        saber.style.setProperty('--blade', s.c);
        saber.classList.toggle('dark-blade', s.n === 'Darksaber');
        saber.classList.add('on');
        info.innerHTML = `<div class="swap"><div class="label">${s.n}</div><p class="prose" style="margin-top:4px">${s.d}</p></div>`;
      }, 260);
    };
    $$('.swatch', root).forEach(w => w.addEventListener('click', () => ignite(+w.dataset.i)));
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { ignite(0); io.disconnect(); } }, { threshold: .5 });
    io.observe(saber);
  }
};
