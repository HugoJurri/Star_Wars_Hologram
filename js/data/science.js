/* ==========================================================================
   SCIENCE — the real-world physics of Star Wars technology
   score: 0–100 plausibility (author's reading of the research verdicts)
   Source: Info/star_wars_real_physics_guide.md
   ========================================================================== */
window.SW = window.SW || {};

SW.science = [
  {
    id: 'blasters', name: 'Blasters', score: 25, basis: 'Plasma physics, plasmoids', verdict: 'Kernel of truth, but not as depicted',
    shows: 'Glowing bolts that visibly travel, can be dodged, and hit with kinetic force.',
    real: [
      ['Not lasers', 'A laser moves at 300,000 km/s and is invisible from the side in clean air. A bolt you can watch cross a room is not a laser.'],
      ['Probably plasma', 'Lore says tibanna gas is energised into plasma and shaped by magnetic fields — a **plasmoid**, which really exists in fusion labs.'],
      ['The problems', 'In open air a plasmoid dissipates in microseconds. The US MARAUDER project reached ~3,000 km/s; film bolts crawl at 30–80 m/s — baseball speed.']
    ],
    today: 'Real directed-energy weapons — the US Navy\'s LaWS, the Army\'s DE-SHORAD — are true lasers: silent, invisible, light-speed.'
  },
  {
    id: 'lightsabers', name: 'Lightsabers', score: 4, basis: 'Plasma arcs, lasers', verdict: 'Essentially impossible',
    shows: 'A metre-long energy blade that cuts anything, clashes with other blades and deflects bolts.',
    real: [
      ['Light doesn\'t stop', 'There is no way to end a beam at exactly one metre in open air.'],
      ['Light doesn\'t clash', 'Photons pass straight through each other. Two blades could never lock.'],
      ['Power', 'Cutting a blast door needs kilowatts to megawatts — impossible from a 25 cm hilt with no cable or cooling.'],
      ['Closest idea', 'A looped, magnetically confined plasma arc solves the length problem — but still can\'t clash.']
    ],
    today: 'The most impossible iconic weapon in science fiction — which is exactly why we love it.'
  },
  {
    id: 'hyperspace', name: 'Hyperspace / FTL', score: 12, basis: 'Alcubierre drive, wormholes', verdict: 'Theoretical only, likely impossible',
    shows: 'Ships jump into an alternate dimension and cross the galaxy in hours.',
    real: [
      ['Einstein\'s limit', 'Nothing with mass can reach light speed — it would need infinite energy.'],
      ['The loophole', 'Spacetime itself can stretch faster than light. The 1994 **Alcubierre drive** rides a warp bubble — but needs exotic negative-energy matter.'],
      ['Star Wars\' version', 'An extra dimension where distances are shorter — closer to wormholes, which are unstable and unproven.'],
      ['Ignored', 'Time dilation: near light speed, hours for Han would be years for everyone else.']
    ],
    today: 'One of physics\' deepest open questions.'
  },
  {
    id: 'shields', name: 'Deflector Shields', score: 15, basis: 'Magnetic shielding, plasma windows', verdict: 'Very limited real basis',
    shows: 'Invisible barriers that stop bolts and debris but let friendly fire out.',
    real: [
      ['Real shielding', 'Earth\'s magnetosphere deflects the solar wind; NASA has studied active magnetic shields for Mars crews. Useless against neutral matter or light.'],
      ['Plasma windows', 'Real — they separate vacuum from air in accelerators. They don\'t stop weapons.'],
      ['Impossible part', 'Blocking both energy and matter, selectively, from compact equipment.']
    ]
  },
  {
    id: 'gravity', name: 'Artificial Gravity', score: 5, basis: 'Rotation, acceleration', verdict: 'No known mechanism',
    shows: 'Every ship has Earth-like gravity, whatever it is doing.',
    real: [
      ['Acceleration', 'Thrust at 9.8 m/s² feels like gravity — until you stop, turn or hover.'],
      ['Rotation', 'Ring habitats like the O\'Neill cylinder work — but need huge structures.'],
      ['Generators', 'Gravity comes from mass-energy. Making it on demand would need an Earth\'s mass under the deck.']
    ]
  },
  {
    id: 'deathstar', name: 'The Death Star', score: 8, basis: 'Laser physics, binding energy', verdict: 'Calculable but absurd',
    shows: 'A station 120–160 km wide that destroys a planet with one beam.',
    real: [
      ['Binding energy', 'E = 3GM² / 5R. For Earth: **≈ 2.24 × 10³² J** — a full week of the Sun\'s total output in one shot.'],
      ['Plasma shielding', 'A beam that intense would raise a plasma plume that shields the deeper layers.'],
      ['The exhaust port', 'Actually realistic — huge reactors must dump heat. A 2 m port on a 160 km station is a 0.3 mm hole in a basketball.']
    ],
    calc: true
  },
  {
    id: 'ion', name: 'Ion Engines', score: 45, basis: 'Real ion propulsion', verdict: 'Real tech, wildly exaggerated',
    shows: 'Glowing engines that fling fighters through dogfights.',
    real: [
      ['Real', 'NASA\'s **Dawn**, ESA\'s **SMART-1** and **Starlink** satellites all use ion or Hall-effect thrusters, with exhaust speeds of 30–50 km/s.'],
      ['Weak', 'Dawn\'s engine produced ~90 millinewtons — the weight of a sheet of paper.'],
      ['G-forces', 'Pilots black out near 9 G. X-wing manoeuvres would be fatal without fictional inertial dampeners.']
    ]
  },
  {
    id: 'sound', name: 'Sound in Space', score: 1, basis: 'None', verdict: 'Completely wrong',
    shows: 'Roaring engines, screaming TIEs, booming explosions.',
    real: [
      ['Vacuum', 'Sound needs a medium. A Star Destroyer would explode in total silence.'],
      ['A choice', 'Lucas knew — silence just isn\'t dramatic. *Gravity* and *The Expanse* chose differently.'],
      ['A caveat', 'NASA "sonified" pressure waves from the Perseus cluster\'s black hole — real sound, billions of times too low to hear.']
    ],
    today: 'Deliberately and gloriously wrong.'
  },
  {
    id: 'repulsor', name: 'Repulsorlifts', score: 10, basis: 'Maglev, Meissner effect', verdict: 'No known anti-gravity',
    shows: 'Silent hovering speeders over any terrain.',
    real: [
      ['No anti-gravity', 'Mass always attracts; there is no negative gravitational charge.'],
      ['Look-alikes', 'Superconductor "quantum levitation", maglev trains and hovercraft — all electromagnetic or air-driven.']
    ]
  },
  {
    id: 'tractor', name: 'Tractor Beams', score: 20, basis: 'Optical tweezers', verdict: 'Real at micro-scale only',
    shows: 'Beams that seize and haul starships.',
    real: [
      ['They exist — tiny', 'Optical tweezers trap cells and particles; Arthur Ashkin won the 2018 Nobel Prize. Acoustic tractor beams exist too.'],
      ['Scaling', 'Forces of piconewtons to micronewtons — billions of times too weak for a ship.']
    ]
  },
  {
    id: 'droids', name: 'Droids & AI', score: 70, basis: 'Modern AI & robotics', verdict: 'Most plausible long-term',
    shows: 'Thinking, feeling machines — C-3PO\'s six million languages, R2\'s slicing, K-2SO\'s sarcasm.',
    real: [
      ['Language', 'AI translates hundreds of languages, though not yet with 3PO\'s nuance.'],
      ['Bodies', 'Walking, running humanoid robots are in development.'],
      ['The gap', 'Droids show artificial *general* intelligence — and raise the unsolved question of machine consciousness.']
    ]
  },
  {
    id: 'kyber', name: 'Kyber Crystals', score: 10, basis: 'Real laser crystals', verdict: 'Violates thermodynamics',
    shows: 'Force-attuned crystals that power sabers and superlasers.',
    real: [
      ['Real crystals', 'The first laser (Maiman, 1960) used ruby; Nd:YAG powers modern lasers; quartz is piezoelectric.'],
      ['The problem', 'Crystals amplify pumped energy — they never create it.']
    ]
  },
  {
    id: 'carbonite', name: 'Carbonite Freezing', score: 30, basis: 'Cryopreservation, vitrification', verdict: 'Genuine research, far from achieved',
    shows: 'Han frozen in a block and thawed alive.',
    real: [
      ['Real', 'Cells and embryos are frozen routinely; wood frogs freeze solid and thaw in spring.'],
      ['Ice', 'Ice crystals shred cells. **Vitrification** turns water to glass instead — so far only for small tissues.']
    ]
  },
  {
    id: 'holograms', name: 'Holograms', score: 55, basis: 'Volumetric displays, laser plasma', verdict: 'Actively being developed',
    shows: 'Free-floating 3D messages visible from every angle.',
    real: [
      ['Holography', 'Invented by Dennis Gabor in 1947 (Nobel 1971).'],
      ['Today', 'Volumetric displays and femtosecond-laser plasma dots draw real points of light in mid-air — small, but improving.']
    ]
  }
];

SW.scienceRight = [
  { t: 'Twin suns', d: 'Circumbinary planets like Tatooine are real — Kepler has confirmed them, and binary stars are common.' },
  { t: 'Asteroid fields', d: 'Real — but in our belt the average gap is about a million kilometres.' },
  { t: 'Diverse worlds', d: 'Ice, desert, gas, lava and ocean worlds all exist — just not single-biome ones.' },
  { t: 'Vast, empty space', d: 'The galaxy really is enormous, and controlling it really would be a monumental challenge.' }
];

/* Bodies for the planet-busting calculator: mass (kg), radius (m) */
SW.bodies = [
  { n: 'Earth', m: 5.97e24, r: 6.37e6 },
  { n: 'Alderaan (≈ Earth)', m: 5.97e24, r: 6.37e6 },
  { n: 'The Moon', m: 7.35e22, r: 1.737e6 },
  { n: 'Mars', m: 6.42e23, r: 3.39e6 },
  { n: 'Jupiter', m: 1.898e27, r: 6.99e7 }
];
