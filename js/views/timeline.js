/* ==========================================================================
   VIEW — Timeline of the eras
   ========================================================================== */
SW.views.timeline = {
  title: 'Timeline',
  render() {
    return `
    ${SW.pageHero({ num: '01', eyebrow: 'Chronicle', title: 'The Ages of the Galaxy', lede: 'Ten eras spanning roughly **36,000 years** of recorded history — from the first Jedi on Ahch-To to a new generation under twin suns.' })}

    <div class="sticky-bar">
      <div class="wrap" style="display:grid;gap:12px">
        <div class="ribbon compact">
          ${SW.eras.map(e => `<a href="#/timeline?focus=era-${e.id}" style="--c:${e.color}" title="${e.name}"><b>${String(e.n).padStart(2, '0')}</b><span>${e.name}</span></a>`).join('')}
        </div>
        <label class="toggle" style="justify-self:end"><input type="checkbox" id="legends-toggle" checked><span class="sw"></span> Show Legends events</label>
      </div>
    </div>

    <div class="wrap">
      ${SW.eras.map(e => `
        <section class="era" id="era-${e.id}" style="--c:${e.color}">
          <div class="era-head">
            <div class="era-num" ${SW.reveal(0, 'left')}>${String(e.n).padStart(2, '0')}</div>
            <div ${SW.reveal(1)}>
              <div class="range">${e.range}</div>
              <h2>${e.name}</h2>
              <div class="tagline">${e.tagline}</div>
            </div>
          </div>
          <p class="era-overview" ${SW.reveal(2)}>${SW.md(e.overview)}</p>
          <div class="events">
            ${e.events.map((ev, i) => `
              <article class="event card hover ${ev.legends ? 'is-legends' : ''}" id="ev-${e.id}-${i}" ${SW.reveal(i)}>
                ${SW.corners}
                <div class="event-top">
                  <span class="date">${ev.date}</span>
                  ${ev.legends ? '<span class="tag legends">Legends</span>' : ''}
                </div>
                <h3>${ev.title}</h3>
                <p>${SW.md(ev.text)}</p>
              </article>`).join('')}
          </div>
          ${e.people ? `
            <div class="people" ${SW.reveal(0)}>
              <div class="label" style="margin-bottom:10px">Notable figures</div>
              <div class="tags">${e.people.map(p => `<span class="tag long">${p}</span>`).join('')}</div>
            </div>` : ''}
          <div class="era-why" ${SW.reveal(0)}><b>Why this era matters</b>${SW.md(e.why)}</div>
        </section>`).join('')}
    </div>`;
  },
  mount(root) {
    const t = $('#legends-toggle', root);
    document.body.classList.remove('hide-legends');
    t.addEventListener('change', () => document.body.classList.toggle('hide-legends', !t.checked));
  }
};
