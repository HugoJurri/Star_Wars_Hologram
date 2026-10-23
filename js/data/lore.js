/* ==========================================================================
   LORE — eras, timeline, dating system, canon vs legends, media, themes
   Source: Info/star_wars_complete_eras_guide.md + star_wars_universe_guide.md
   ========================================================================== */
window.SW = window.SW || {};

SW.dating = {
  intro: `All of galactic history is measured against one anchor point: **the Battle of Yavin** — the climax of *A New Hope*, where Luke Skywalker destroyed the first Death Star.`,
  items: [
    { k: 'BBY', v: 'Before the Battle of Yavin', d: 'Higher numbers lie further in the past. The Clone Wars began in 22 BBY; the High Republic flourished roughly 500–100 BBY.' },
    { k: '0', v: 'The Battle of Yavin', d: 'The inflection point of galactic history — the first Death Star is destroyed.' },
    { k: 'ABY', v: 'After the Battle of Yavin', d: 'The Battle of Endor fell in 4 ABY. The Battle of Exegol in 35 ABY.' }
  ],
  note: `It works like BCE/CE with a different anchor. In-universe, characters use other calendars (the Galactic Standard Calendar is tied to the Republic's founding), but BBY/ABY is the convention used by fans and reference works.`
};

SW.canon = {
  canon: {
    title: 'Canon',
    sub: 'Official continuity since April 2014',
    text: `When Disney acquired Lucasfilm in 2012, storytelling was reorganised. From April 2014 onward, only the following counts as official canon:`,
    list: ['The nine episodic films (I–IX)', 'Anthology films — *Rogue One*, *Solo*', '*The Clone Wars* series and film', '*Star Wars Rebels*', 'All Disney-era films and series', 'Novels, comics and games from 2014 onward', 'The High Republic initiative']
  },
  legends: {
    title: 'Legends',
    sub: 'The former Expanded Universe',
    text: `Everything published before April 2014 outside the films and *The Clone Wars* — thousands of novels, comics and games — was rebranded "Star Wars Legends". It includes:`,
    list: ['The Thrawn Trilogy (Timothy Zahn)', '*Knights of the Old Republic*', '*The Old Republic* MMORPG', 'The New Jedi Order novels', 'The *Legacy* comics']
  },
  why: `Legends remains foundational to fan culture. Some ideas were folded back into canon (Thrawn, the Inquisitorius), many were not (Mara Jade, Jacen and Jaina Solo, the Yuuzhan Vong War, the KOTOR-era Sith). This handbook follows canon and flags Legends material where it gives useful context.`
};

SW.media = [
  { k: 'Films', v: '11 theatrical releases — 9 saga films and 2 anthology films.' },
  { k: 'Animated series', v: '*The Clone Wars*, *Rebels*, *Resistance*, *The Bad Batch*, *Tales of the Jedi*, *Tales of the Empire*, *Visions*, *Young Jedi Adventures*.' },
  { k: 'Live-action series', v: '*The Mandalorian*, *The Book of Boba Fett*, *Andor*, *Obi-Wan Kenobi*, *Ahsoka*, *Skeleton Crew*.' },
  { k: 'Games', v: '*Jedi: Fallen Order*, *Jedi: Survivor*, *Squadrons*, *Battlefront* and more.' },
  { k: 'Publishing', v: 'Hundreds of novels and comics across every era, plus The High Republic multimedia initiative.' }
];

SW.themes = [
  { t: 'Redemption', d: 'No one is ever truly lost. Vader\'s return to the light is the emotional core of the saga.' },
  { t: 'Attachment & Selflessness', d: 'Anakin fell through fear of loss. The Jedi ban on attachment was both wise and tragically flawed — and it was Luke\'s love for his father that saved the galaxy.' },
  { t: 'The Corruption of Power', d: 'Democracy can die with thunderous applause. Institutions fail through internal rot more often than external attack.' },
  { t: 'Hope as a Weapon', d: '"Rebellions are built on hope." Even in the darkest hour — the fall of the Republic, the burning of Luke\'s temple, the near-destruction of the Resistance — hope endures.' },
  { t: 'Identity is a Choice', d: 'Luke, born of Vader, chose the light. Rey, a Palpatine, chose to be a Skywalker. No one is defined by blood or origin — only by what they choose to become.' },
  { t: 'Cycles & Balance', d: 'The Sith fall and rise; republics form and collapse. The Force seeks balance — perhaps not the triumph of light over dark, but a deeper harmony.' }
];

/* Eras — start/end are numeric years (negative = BBY, positive = ABY) */
SW.eras = [
  {
    id: 'dawn', n: 1, name: 'Dawn of the Jedi', range: '~36,000 – 25,000 BBY', start: -36000, end: -25000, color: '#6db1c9',
    tagline: 'The mythic pre-history of the Force.',
    overview: `The earliest era of recorded history, predating the Republic itself. The Force was first studied and the foundations of the Jedi were laid. Even in-universe, records from this time are fragmentary, mythic and contested.`,
    events: [
      { title: 'The first Force traditions', date: 'Deep antiquity', text: 'Species across the galaxy independently discover the Force and develop their own philosophies. Force-sensitive communities arise on many worlds.' },
      { title: 'The Prime Jedi of Ahch-To', date: '~Founding', text: 'The first Jedi Temple is established on the ocean world of **Ahch-To**. The mosaic of the Prime Jedi — a figure balanced between light and dark — suggests the original Jedi philosophy was one of harmony rather than opposition.' },
      { title: 'The Ones of Mortis', date: 'Timeless', text: 'The Father, the Daughter and the Son — god-like beings embodying balance, light and dark, existing in a realm between dimensions. Their story suggests the Force has personified manifestations beyond mortal users.' },
      { title: 'The Sith pure-bloods of Korriban', date: 'Antiquity', legends: true, text: 'The original Sith were a species — red-skinned humanoids of **Korriban** (Moraband in canon) — with their own Force civilisation long before "Sith" meant dark-side user.' },
      { title: 'The Jedi Order takes form', date: '~25,000 BBY', text: 'Over millennia, scattered traditions consolidate into the Jedi Order, a formal institution dedicated to the light side.' }
    ],
    why: 'It establishes the cosmic, mythological foundation: the Force has been studied for tens of thousands of years before the films begin.'
  },
  {
    id: 'old-republic', n: 2, name: 'The Old Republic', range: '~25,000 – 1,000 BBY', start: -25000, end: -1000, color: '#c89a4f',
    tagline: 'Twenty-four millennia of Republic and Sith wars.',
    overview: `The Galactic Republic is founded, expands and fights a series of cataclysmic wars against the Sith that reshape the galaxy again and again. Most of this era lives in Legends (*Knights of the Old Republic*), though canon is filling in fragments.`,
    events: [
      { title: 'Founding of the Galactic Republic', date: '~25,000 BBY', text: 'A democratic union of worlds forms on Coruscant, linked by newly opened hyperspace lanes. The Jedi become its peacekeepers and guardians.' },
      { title: 'The Hundred-Year Darkness', date: '~7,000 BBY', legends: true, text: 'Dark Jedi experimenting with forbidden knowledge are defeated and exiled. They reach Korriban, conquer the native Sith and merge with them — "Sith" becomes the name of a dark-side tradition.' },
      { title: 'The Great Hyperspace War', date: '~5,000 BBY', legends: true, text: 'A hidden Sith Empire launches a surprise invasion. The war is brief but devastating; the Sith are driven back.' },
      { title: 'Mandalorian Wars & Jedi Civil War', date: '~4,000 BBY', legends: true, text: '**Revan** and **Malak** defeat the Mandalorians, discover the Sith Empire and fall. Revan returns as a Sith Lord, is captured and redeemed — the story of *Knights of the Old Republic*.' },
      { title: 'The Great Galactic War', date: '~3,600 BBY', legends: true, text: 'A reconstituted Sith Empire attacks again, followed by a long cold war — the setting of *The Old Republic*.' },
      { title: 'The New Sith Wars', date: '~2,000 – 1,000 BBY', legends: true, text: 'A millennium of near-constant war between the Republic and Sith factions.' },
      { title: 'Seventh Battle of Ruusan', date: '1,000 BBY', legends: true, text: 'Jedi Master Hoth faces Lord Kaan\'s Brotherhood of Darkness. Kaan detonates a "thought bomb" that annihilates nearly every Sith and Jedi present.' },
      { title: 'The Rule of Two', date: '~1,000 BBY', text: 'The sole survivor, **Darth Bane**, decides the Sith destroyed themselves through numbers. From now on: only two — a master and an apprentice. "One to embody the power, one to crave it."' },
      { title: 'The Ruusan Reformation', date: '~1,000 BBY', text: 'The Jedi give up their armies and the Republic decentralises. A thousand years of peace follow — and with them complacency, bureaucracy and corruption.' }
    ],
    why: 'Bane\'s Rule of Two lets the Sith hide for a millennium — the lineage that culminates in Darth Sidious.'
  },
  {
    id: 'high-republic', n: 3, name: 'The High Republic', range: '~500 – 100 BBY', start: -500, end: -100, color: '#f3d979',
    tagline: 'The golden age of the Jedi.',
    overview: `The Republic and the Jedi at the height of their power, numbers and idealism — adventurer-knights operating from grand frontier stations. Opened up by Lucasfilm's 2021 publishing initiative, it is now one of canon's richest periods.`,
    events: [
      { title: 'The Era of Light', date: '~300 BBY', text: 'The Republic expands into the Outer Rim. Tens of thousands of Jedi serve from outposts across the galaxy rather than only Coruscant. The aesthetic is chivalric: ornate robes, capes and tabards.' },
      { title: 'The Great Disaster', date: '~232 BBY', text: 'The colony vessel *Legacy Run* breaks apart mid-jump. Its debris erupts from hyperspace at random across multiple systems; the Republic and the Jedi lead a vast rescue effort.' },
      { title: 'The rise of the Nihil', date: '~232 BBY', text: 'Anarchic marauders led by **Marchion Ro**, using secret hyperspace "Paths" — and the **Nameless**, ancient creatures that consume a Jedi\'s connection to the Force and turn them to dust.' },
      { title: 'Fall of Starlight Beacon', date: '~230 BBY', text: 'The great frontier station — symbol of the Republic\'s reach — is destroyed by the Nihil, killing many Jedi and civilians. A turning point of the era.' },
      { title: 'The Nihil War', date: '~232 – 200 BBY', text: 'The Nihil are ultimately defeated, but at enormous cost.' },
      { title: 'Tales of the Jedi', date: 'Late era', text: 'A young Count Dooku and his master Yaddle bridge this era into the prequels.' }
    ],
    people: ['Avar Kriss — "Marshal of Starlight", who hears the Force as a song', 'Stellan Gios — Council member and strategist', 'Elzar Mann — passionate, struggling with attachment', 'Bell Zettifar — young Padawan', 'Yoda — already a centuries-old Master', 'Reath Silas, Vernestra Rwoh, Cohmac Vitus'],
    why: 'The Jedi at their best — and the seeds of their fall: confidence verging on arrogance, rigid doctrine on attachment, misplaced faith in the Republic.'
  },
  {
    id: 'fall', n: 4, name: 'Fall of the Jedi', range: '~100 – 19 BBY', start: -100, end: -19, color: '#c44545',
    tagline: 'The prequel trilogy & The Clone Wars.',
    overview: `A century of decline culminates in the most dramatic transformation in galactic history: the Republic becomes the Empire, and the Jedi Order is all but annihilated in a single day.`,
    events: [
      { title: 'Darth Plagueis the Wise', date: 'Before 32 BBY', text: 'A Muun Sith Lord obsessed with manipulating midi-chlorians to create life and cheat death. His apprentice, Sheev Palpatine, murders him in his sleep. Anakin — conceived without a father — may be Plagueis\'s work.' },
      { title: 'Invasion of Naboo — Episode I', date: '32 BBY', text: 'The Trade Federation blockades Naboo. Qui-Gon Jinn finds **Anakin Skywalker** on Tatooine, a slave with the highest midi-chlorian count ever recorded. Darth Maul reveals the Sith have returned. Qui-Gon falls; Obi-Wan takes Anakin as his Padawan; Palpatine becomes Supreme Chancellor.' },
      { title: 'Rise of the Separatists', date: '32 – 22 BBY', text: 'Count Dooku — secretly **Darth Tyranus** — forms the Confederacy of Independent Systems, backed by the Trade Federation, Techno Union, Banking Clan and Commerce Guild. Sifo-Dyas secretly orders a clone army, then is murdered.' },
      { title: 'Battle of Geonosis — Episode II', date: '22 BBY', text: 'Obi-Wan discovers the clone army on Kamino. A Jedi rescue force and Yoda\'s clone army storm Geonosis. Jango Fett dies. The Clone Wars begin. Anakin and Padmé marry in secret.' },
      { title: 'The Clone Wars', date: '22 – 19 BBY', text: 'Ahsoka Tano becomes Anakin\'s Padawan. Campaigns rage on Christophsis, Teth, Ryloth, Kamino, Umbara, Onderon and Mandalore. Fives uncovers the inhibitor chips and is silenced. Ahsoka is framed, cleared — and walks away from the Order.' },
      { title: 'Siege of Mandalore', date: '19 BBY', text: 'Ahsoka and Rex lead the 332nd against Maul\'s regime on Mandalore and capture him — just as Order 66 arrives.' },
      { title: 'Order 66 — Episode III', date: '19 BBY', text: 'Anakin falls and becomes **Darth Vader**. Across thousands of worlds clones turn on their generals. Palpatine declares the First Galactic Empire to thunderous applause. Obi-Wan defeats Vader on Mustafar; Padmé dies giving birth to **Luke and Leia**, who are hidden apart.' }
    ],
    why: 'Every institution of the saga breaks here — and the Skywalker tragedy that drives the next forty years begins.'
  },
  {
    id: 'empire', n: 5, name: 'Reign of the Empire', range: '19 – 5 BBY', start: -19, end: -5, color: '#8a8a92',
    tagline: 'The Dark Times.',
    overview: `The Jedi are hunted almost to extinction. Resistance is scattered and uncoordinated. Covers *The Bad Batch*, *Solo*, *Obi-Wan Kenobi*, the *Jedi* games and the start of *Andor* and *Rebels*.`,
    events: [
      { title: 'The Inquisitorius', date: '19 BBY →', text: 'Dark-side hunters — many of them broken former Jedi — led by the **Grand Inquisitor**: the Second Sister (Trilla), Third Sister (Reva), Fifth Brother, Seventh Sister, Eighth Brother, Ninth Sister.' },
      { title: 'The Bad Batch', date: '19 BBY →', text: 'Clone Force 99 refuses to massacre civilians and goes rogue, protecting Omega. The Empire phases out clones and begins secret experiments — including **Project Necromancer**.' },
      { title: 'The Tarkin Doctrine', date: '~18 BBY', text: 'Rule through fear of force rather than force itself. Regional governors are replaced by Moffs answerable to Palpatine. The Death Star is begun in secret.' },
      { title: 'Solo', date: '~10 BBY', text: 'Han escapes Corellia, meets Chewbacca, Lando and Beckett, crosses Maul\'s Crimson Dawn and wins the Millennium Falcon in a sabacc game.' },
      { title: 'Kenobi\'s return', date: '~9 BBY', text: 'Obi-Wan leaves exile to rescue a kidnapped young Leia — and discovers Anakin still lives inside the suit.' },
      { title: 'Scattered resistance', date: '~5 BBY', text: 'Bail Organa and Mon Mothma quietly organise. Saw Gerrera\'s Partisans and the Lothal rebels fight on their own.' }
    ],
    why: 'It shows how tyranny consolidates — and how resistance is born from small acts of defiance.'
  },
  {
    id: 'rebellion', n: 6, name: 'Age of Rebellion', range: '5 BBY – 4 ABY', start: -5, end: 4, color: '#e87544',
    tagline: 'The original trilogy.',
    overview: `The Rebellion wages a desperate guerrilla war against the Empire. This is the saga's emotional climax: the redemption of Anakin Skywalker through his son.`,
    events: [
      { title: 'Andor & Rebels', date: '5 – 1 BBY', text: 'Cassian Andor\'s turn from thief to rebel — Aldhani, Ferrix, Narkina 5. The Ghost crew on Lothal, Thrawn\'s arrival, Ahsoka\'s duel with Vader on Malachor, Maul\'s end, and Ezra\'s purrgil gambit.' },
      { title: 'The Rebel Alliance forms', date: '~2 BBY', text: 'Cells unite as the **Alliance to Restore the Republic**, founded by Mon Mothma and Bail Organa, with a base on Yavin 4.' },
      { title: 'Battle of Scarif — Rogue One', date: '0 BBY', text: 'Jyn Erso\'s team steals the Death Star plans from the Citadel archive. Every member of the ground team dies; the plans escape — by a heartbeat — ahead of Darth Vader.' },
      { title: 'Battle of Yavin — Episode IV', date: '0 BBY/ABY', text: 'Luke leaves Tatooine, rescues Leia and, guided by the Force, fires the shot that destroys the Death Star. Obi-Wan becomes one with the Force.' },
      { title: 'Battle of Hoth — Episode V', date: '3 ABY', text: 'AT-ATs crush Echo Base. Luke trains with Yoda on Dagobah; Han is frozen in carbonite at Cloud City; Vader reveals: **"No. I am your father."**' },
      { title: 'Battle of Endor — Episode VI', date: '4 ABY', text: 'A three-front battle. Ewoks help destroy the shield generator; Lando and Wedge destroy the Death Star II\'s reactor; and Anakin turns on Palpatine to save his son — fulfilling the prophecy.' }
    ],
    why: 'The heart of the saga: hope wins, and a father is redeemed by his son.'
  },
  {
    id: 'new-republic', n: 7, name: 'The New Republic', range: '5 – 28 ABY', start: 5, end: 28, color: '#5fb8a0',
    tagline: 'The Mandalorian era.',
    overview: `The Empire collapses in stages, the New Republic is born, and Luke tries to rebuild the Jedi. In the shadows of the Unknown Regions, the Empire's remnants plan their return.`,
    events: [
      { title: 'Battle of Jakku', date: '5 ABY', text: 'The last stand of the Imperial Navy. The Empire surrenders and the **Galactic Concordance** imposes disarmament and war-crimes tribunals. Jakku is left littered with wrecks.' },
      { title: 'A rotating capital', date: '5 ABY →', text: 'Mon Mothma becomes Chancellor. To prevent another Coruscant, the capital rotates between worlds — and the Republic dramatically demilitarises.' },
      { title: 'Project Necromancer', date: 'Hidden', text: 'Imperial loyalists in the Unknown Regions secretly work to resurrect Palpatine (Necromancer) and rebuild their war machine (Project Sledgehammer).' },
      { title: 'The Mandalorian & Grogu', date: '~9 ABY', text: 'Din Djarin and Grogu become family. Boba Fett takes Jabba\'s throne. Bo-Katan and Din retake Mandalore and unite the sects.' },
      { title: 'Return of Thrawn', date: '~9 ABY', text: 'Thrawn returns from exile in another galaxy; Ahsoka trains Sabine Wren and hunts him.' },
      { title: 'Fall of Luke\'s temple', date: '~28 ABY', text: 'Sensing Snoke\'s grip on his nephew, Luke has a moment of weakness. Ben Solo wakes, burns the temple and becomes **Kylo Ren**. Luke exiles himself to Ahch-To.' }
    ],
    why: 'Victory is not the end. Complacency and disarmament leave the galaxy open to the next tyranny.'
  },
  {
    id: 'first-order', n: 8, name: 'Rise of the First Order', range: '28 – 34 ABY', start: 28, end: 34, color: '#a51e1e',
    tagline: 'The shadow returns.',
    overview: `The First Order, built in secret for decades, emerges as a galactic power. The New Republic refuses to take it seriously, so Leia Organa founds the Resistance.`,
    events: [
      { title: 'The Resistance is founded', date: '~28 ABY', text: 'Leia gathers veterans (Ackbar, Statura), sympathetic systems and private donors, with a new generation of pilots: Poe Dameron, Snap Wexley, Karé Kun.' },
      { title: 'The search for Luke', date: '~34 ABY', text: 'Both sides hunt a fragmented map to the last Jedi.' }
    ],
    why: 'It sets the board for the sequel trilogy.'
  },
  {
    id: 'sequel', n: 9, name: 'The Last War', range: '34 – 35 ABY', start: 34, end: 35, color: '#d4a04a',
    tagline: 'The sequel trilogy.',
    overview: `Two years that end the Skywalker saga: the destruction of the New Republic, the death of Luke and the final defeat of Palpatine.`,
    events: [
      { title: 'The Force Awakens — Episode VII', date: '34 ABY', text: 'Finn defects, Rey awakens to the Force, and **Starkiller Base** destroys the Hosnian system — five planets in a single shot. Kylo Ren kills his father, Han Solo. Rey finds Luke on Ahch-To.' },
      { title: 'The Last Jedi — Episode VIII', date: '34 ABY', text: 'Kylo kills Snoke. Holdo jumps to lightspeed through the *Supremacy*. On Crait, Luke projects himself across the galaxy to save the Resistance, then becomes one with the Force.' },
      { title: 'The Rise of Skywalker — Episode IX', date: '35 ABY', text: 'Palpatine has returned on **Exegol** with the Final Order. Rey learns she is his granddaughter. Lando arrives with a citizens\' fleet; Rey and Ben, a Force dyad, destroy Palpatine. Ben gives his life to save her.' }
    ],
    why: 'The galaxy itself rises up — and a Palpatine chooses to be a Skywalker.'
  },
  {
    id: 'new-jedi', n: 10, name: 'A New Jedi Order', range: '35 ABY →', start: 35, end: 45, color: '#b8d4e8',
    tagline: 'The future, still unwritten.',
    overview: `Largely unexplored in current canon. Rey is rebuilding the Jedi in a new form, learning from the failures of the past — a story the announced *Rey* film will explore.`,
    events: [
      { title: '"Rey. Rey Skywalker."', date: '35 ABY', text: 'Rey buries Luke and Leia\'s lightsabers at the Lars homestead beneath Tatooine\'s twin suns, and chooses her name.' },
      { title: 'Legends futures', date: '25 – 130 ABY', legends: true, text: 'The Yuuzhan Vong War (in which Chewbacca and Anakin Solo die), Jacen Solo\'s fall as Darth Caedus, and the *Legacy* era of Cade Skywalker.' }
    ],
    why: 'The Force, as ever, continues to seek balance.'
  }
];

SW.quotes = [
  { q: 'The Force will be with you. Always.', a: 'Obi-Wan Kenobi' },
  { q: 'Rebellions are built on hope.', a: 'Jyn Erso' },
  { q: 'This is the Way.', a: 'The Mandalorian creed' },
  { q: 'Impressive. Most impressive.', a: 'Darth Vader' },
  { q: 'Do. Or do not. There is no try.', a: 'Yoda' },
  { q: 'So this is how liberty dies… with thunderous applause.', a: 'Padmé Amidala' }
];

SW.facts = [
  'Anakin Skywalker\'s midi-chlorian count was over 20,000 — the highest ever recorded.',
  'The Executor-class Super Star Destroyer is 19 kilometres long — about 12 Imperial Star Destroyers end to end.',
  'Destroying an Earth-sized planet takes about 2.24 × 10³² joules — a week of the Sun\'s entire output.',
  'Clone troopers aged at twice the human rate: combat-ready in just 10 years.',
  'The Death Star\'s exhaust port was about as wide, relative to the station, as a 0.3 mm hole in a basketball.',
  'Purrgil — space whales that travel through hyperspace naturally — inspired the invention of hyperdrive.',
  'Hutts can live for up to 1,000 years.',
  'Roughly 25,000 Imperial-class Star Destroyers were built during the Empire\'s reign.',
  'Grogu was about 50 years old during The Mandalorian.',
  'Planets orbiting two suns — like Tatooine — are real: Kepler has confirmed several.',
  'The E-11 stormtrooper blaster prop was a modified Sterling submachine gun.',
  'An Acclamator could deliver 16,000 troops, 80 gunships and 48 AT-TEs in a single drop.'
];
