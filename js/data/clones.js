/* ==========================================================================
   GRAND ARMY OF THE REPUBLIC
   Source: Info/grand_army_of_the_republic_guide.md
   ========================================================================== */
window.SW = window.SW || {};

SW.clones = {
  intro: 'The clone troopers — their origins, organisation, equipment, and the military machine that fought the Clone Wars.',

  conspiracy: [
    { t: 'The order', d: 'Around 32 BBY, Jedi Master **Sifo-Dyas** foresees war and secretly commissions an army from Kamino — without the Council\'s approval.' },
    { t: 'The murder', d: 'On Palpatine\'s orders, **Count Dooku** has Sifo-Dyas killed and takes over the project. The Sith control the army from birth.' },
    { t: 'The template', d: 'Dooku recruits the bounty hunter **Jango Fett** as the genetic donor.' },
    { t: 'The kill switch', d: 'Every clone receives an organic **inhibitor chip** carrying **Order 66**.' },
    { t: 'The game', d: 'Palpatine controls the droids through Dooku and the clones as Chancellor. The war was never meant to be won — only to consolidate power and destroy the Jedi.' }
  ],

  process: [
    { k: 'Template', v: 'Jango Fett — a Mandalorian bounty hunter, one of the deadliest warriors in the galaxy.' },
    { k: 'Growth', v: 'Aged at twice the normal rate: combat-ready in ~10 years, with drastically shortened lives.' },
    { k: 'Obedience', v: 'Engineered to be more compliant and deferential to command than Jango ever was.' },
    { k: 'Inhibitor chip', v: 'Officially to curb "aggressive impulses". In reality: the kill switch for the Jedi.' },
    { k: 'Unaltered clone', v: 'Part of Jango\'s payment — raised as his son, **Boba Fett**.' }
  ],
  scale: 'Lama Su promised **200,000 units ready, a million more well on the way**. By war\'s end the Grand Army numbered an estimated **3 to 6 million** troopers.',

  training: [
    'Combat drills, weapons, conditioning and tactics from the moment they could walk — in simulated deserts, arctic wastes, jungles, cities and zero-g.',
    'Organised into squads from childhood: brothers in every sense.',
    'Trained by the **Cuy\'val Dar** — 100 instructors (75 Mandalorians, 25 specialists) such as Kal Skirata and Walon Vau (Legends).',
    'Promising clones were routed into pilot, heavy weapons, recon, command, medic, engineer, commando or ARC tracks.',
    'Live ammunition. Units that failed standards were "reconditioned" or terminated — horrifying the Jedi who found out.'
  ],

  identity: `Clones were numbers — CT-7567, CC-2224 — yet almost all chose names: Rex, Cody, Fives, Echo, Jesse, Hardcase, Tup, Dogma, Kix. They individualised with haircuts, tattoos, scars and armour paint — quiet acts of rebellion against being interchangeable. Rex was principled, Fives suspicious of authority, Hardcase reckless, Dogma rigid, Echo methodical.`,

  hierarchy: [
    { u: 'Squad', size: 9, clone: 'Sergeant', jedi: '—' },
    { u: 'Platoon', size: 36, clone: 'Lieutenant', jedi: '—' },
    { u: 'Company', size: 144, clone: 'Captain', jedi: 'Padawan (sometimes)' },
    { u: 'Battalion', size: 576, clone: 'Major / Commander', jedi: 'Jedi Commander' },
    { u: 'Regiment', size: 2304, clone: '—', jedi: 'Jedi General' },
    { u: 'Brigade', size: 9216, clone: '—', jedi: 'Senior Jedi General' },
    { u: 'Legion', size: 36864, clone: 'Clone Marshal Commander', jedi: 'Jedi General' },
    { u: 'Corps', size: null, clone: '—', jedi: 'Jedi High General' },
    { u: 'Systems Army', size: null, clone: '—', jedi: 'Jedi High General' }
  ],
  ranks: [
    { r: 'Trooper (CT)', c: '#f2f2f2', d: 'The backbone of the army.' },
    { r: 'Sergeant', c: '#6aa84f', d: 'Squad leader — olive/green markings (Phase I).' },
    { r: 'Lieutenant', c: '#3d85c6', d: 'Platoon leader — blue markings.' },
    { r: 'Captain', c: '#cc3333', d: 'Company commander — red markings. Rex held this rank.' },
    { r: 'Commander (CC)', c: '#f1c232', d: 'Battalion to legion — yellow. Cody, Wolffe, Bly, Gree.' },
    { r: 'Marshal Commander', c: '#e69138', d: 'Highest clone rank, directly under a Jedi General.' }
  ],

  legions: [
    { id: '501', name: '501st Legion', nick: 'Vader\'s Fist', color: '#3d7bff', jedi: 'Anakin Skywalker', cmd: 'Captain Rex (CT-7567)', members: 'Fives, Echo, Jesse, Hardcase, Tup, Kix, Dogma, Appo', text: 'Aggressive, effective and fiercely loyal to Skywalker — Christophsis, Teth, Umbara, Mandalore. After Order 66 it marched on the Jedi Temple with Vader and lived on as "Vader\'s Fist".' },
    { id: '212', name: '212th Attack Battalion', color: '#ff9d2e', jedi: 'Obi-Wan Kenobi', cmd: 'Commander Cody (CC-2224)', members: 'Waxer, Boil, Wooley, Crys', text: 'Disciplined combined-arms specialists. At Utapau, Cody received Order 66 and fired on Obi-Wan at once — proof of the chips\' power over even the deepest respect.' },
    { id: '104', name: '104th Battalion', nick: 'Wolfpack', color: '#9aa6b2', jedi: 'Plo Koon', cmd: 'Commander Wolffe (CC-3636)', members: 'Sinker, Boost, Comet', text: 'Search-and-rescue and high-risk recovery. Plo Koon was among the first Jedi to insist clones were individuals. Wolffe removed his chip and survived.' },
    { id: '327', name: '327th Star Corps', color: '#f5d33a', jedi: 'Aayla Secura', cmd: 'Commander Bly (CC-5052)', members: '—', text: 'Jungle and hostile-environment campaigns. On Felucia, Bly shot Aayla Secura in the back.' },
    { id: '41', name: '41st Elite Corps', nick: 'Green Company', color: '#5fa34a', jedi: 'Luminara Unduli / Yoda', cmd: 'Commander Gree (CC-1004)', members: 'Kashyyyk scout troopers', text: 'Recon and hostile terrain. On Kashyyyk, Gree turned on Yoda — who sensed it and struck first.' },
    { id: '91', name: '91st Mobile Recon Corps', color: '#a83a3a', jedi: 'Mace Windu / Stass Allie', cmd: 'Commander Neyo (CC-8826) / Ponds', members: '—', text: 'Cavalry and fast attack on BARC speeders and AT-RTs. Neyo executed Order 66 against Stass Allie from his speeder.' },
    { id: 'cg', name: 'Coruscant Guard', color: '#d42f2f', jedi: '—', cmd: 'Commander Fox (CC-1010), Thorn', members: 'Shock troopers', text: 'Security on the capital: the Senate, prisoners, politics and espionage. Fox killed Fives as he tried to expose the chips.' },
    { id: '21', name: '21st Nova Corps', nick: 'Galactic Marines', color: '#8a3a6a', jedi: 'Ki-Adi-Mundi', cmd: 'Commander Bacara (CC-1138)', members: '—', text: 'Elite assault troops for extreme environments. On Mygeeto they gunned Ki-Adi-Mundi down.' },
    { id: '332', name: '332nd Company', color: '#ff7a1a', jedi: 'Ahsoka Tano', cmd: 'Captain Rex', members: 'Part of the 501st', text: 'Assigned to Ahsoka for the Siege of Mandalore. The troopers painted her Togruta markings on their helmets.' }
  ],

  specialists: [
    { g: 'Infantry', items: [['Standard Trooper', 'DC-15A or DC-15S, thermal detonators.'], ['Heavy Trooper', 'Z-6 rotary cannon — devastating against droid masses.'], ['Sharpshooter', 'DC-15x sniper rifle.'], ['Engineer / EOD', 'Demolitions, fortification, mine clearance.'], ['Medic', 'Bacta and medpacs — like Kix.'], ['Ordnance', 'PLX-1 missiles, anti-armour.']] },
    { g: 'Elite', items: [['ARC Troopers', 'Trained by Jango himself, less modified — dual DC-17s, kamas, pauldrons. Fives, Echo, Rex.'], ['Clone Commandos', 'Four-man squads in Katarn armour — Delta Squad.'], ['Clone Force 99', 'The Bad Batch: Hunter, Wrecker, Tech, Crosshair, Echo — and Omega.'], ['Shadow Troopers', 'Experimental stealth armour.'], ['Clone Assassins', 'Targeted killing; later hunted Jedi.'], ['Covert Ops', 'Plainclothes intelligence.']] },
    { g: 'Environment', items: [['SCUBA', 'Underwater — the Battle of Mon Cala.'], ['Cold Assault', 'Heated gloves, anti-fog visors.'], ['Paratroopers', 'Controlled-descent jetpacks.'], ['Scouts', 'Light armour, BARC speeders, AT-RTs.'], ['Flame Troopers', 'BT X-42 flamethrowers.'], ['Jet Troopers', 'JT-12 jetpacks.']] },
    { g: 'Support', items: [['Pilots', 'ARC-170s, V-wings, LAATs — "Oddball", "Hawk".'], ['Tank Crews', 'AT-TEs, AT-APs, Juggernauts.'], ['Naval Officers', 'Aboard Venators.'], ['Shock Troopers', 'The Coruscant Guard.']] }
  ],

  order66: {
    chip: 'Implanted during fetal development. When Palpatine spoke the words, every chip activated at once and designated all Jedi traitors. It did not merely suggest — it hijacked motor control and smothered resistance. Clones later described watching themselves from behind their own eyes, unable to stop.',
    falls: [
      { j: 'Obi-Wan Kenobi', w: 'Utapau', by: 'Cody & the 212th', survived: true },
      { j: 'Aayla Secura', w: 'Felucia', by: 'Bly & the 327th' },
      { j: 'Ki-Adi-Mundi', w: 'Mygeeto', by: 'Bacara & the 21st' },
      { j: 'Stass Allie', w: 'Saleucami', by: 'Neyo & the 91st' },
      { j: 'Yoda', w: 'Kashyyyk', by: 'Gree & the 41st', survived: true },
      { j: 'The Jedi Temple', w: 'Coruscant', by: 'Vader & the 501st' }
    ],
    resisted: [
      { n: 'Rex', d: 'Fought the chip long enough to tell Ahsoka to "find Fives"; she removed it. Later joined the Rebellion.' },
      { n: 'Wolffe & Gregor', d: 'Removed their chips; lived with Rex in a modified AT-TE on Seelos.' },
      { n: 'The Bad Batch', d: 'Mutations dulled the chips. Crosshair\'s worked — he served the Empire before returning to his brothers.' },
      { n: 'Kix', d: 'Kidnapped and frozen before the order. Found decades later — the last clone of the war.', legends: true }
    ],
    after: [
      'Clones were the first stormtroopers — but expensive, slow to produce, short-lived.',
      'Palpatine distrusted them: an army made by one conspiracy could be turned by another.',
      'Kamino\'s facilities were shut down and its cloners suppressed.',
      'Within about five years, recruits had replaced them.'
    ]
  },

  vs: [
    ['Individual quality', 'Superior — trained, adaptive, creative', 'Inferior — predictable programming'],
    ['Numbers', 'Limited by production time', 'Near-unlimited factory output'],
    ['Cost per unit', 'Very high', 'Very low'],
    ['Morale', 'High — bonds, loyalty, purpose', 'None'],
    ['Losses', 'Death is permanent', 'Rebuilt from scrap'],
    ['Command', 'Effective independently', 'Often depends on a control signal'],
    ['Adaptability', 'Improvise and overcome', 'Follow the program'],
    ['Ethical cost', 'Every death is a person', 'None']
  ],

  legacy: 'The clones were at once **victims** — created without consent, engineered for obedience, used as disposable weapons — **heroes** — brave, loyal, selfless — and **perpetrators** of atrocity under the chips\' control. That layered moral reality is what makes their story so powerful.',

  quote: { q1: 'We\'re just clones, sir. We\'re meant to be expendable.', q2: 'Not to me.', a: 'Clone trooper & Plo Koon' }
};
