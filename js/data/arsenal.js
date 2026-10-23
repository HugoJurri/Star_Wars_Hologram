/* ==========================================================================
   ARSENAL — starfighters, capital ships, superweapons, ground vehicles,
   weapons, armour, systems.  len = length in metres (for the scale chart)
   Source: Info/star_wars_military_technology_guide.md
   ========================================================================== */
window.SW = window.SW || {};

SW.arsenalCats = [
  { id: 'starfighters', name: 'Starfighters', blurb: 'Single- and two-seat combat craft — the backbone of tactical space combat in every era.' },
  { id: 'capital', name: 'Capital Ships', blurb: 'Destroyers, cruisers, frigates and dreadnoughts — the warships that decide naval engagements.' },
  { id: 'superweapons', name: 'Superweapons', blurb: 'A recurring pattern: technological terrors built to enforce obedience through fear.' },
  { id: 'ground', name: 'Ground Vehicles', blurb: 'Walkers, tanks and speeders.' },
  { id: 'weapons', name: 'Weapons', blurb: 'Blasters, explosives and melee arms.' },
  { id: 'armor', name: 'Armour', blurb: 'From clone plastoid to Mandalorian beskar.' },
  { id: 'systems', name: 'Systems', blurb: 'Planetary defence, area denial, orbital weapons and information warfare.' }
];

SW.arsenalFactions = {
  republic: { name: 'Republic', color: '#d9b25a' },
  separatist: { name: 'Separatist', color: '#8fa0b8' },
  empire: { name: 'Empire', color: '#c9ced6' },
  rebel: { name: 'Rebel / New Republic', color: '#ff8a3d' },
  'first-order': { name: 'First Order / Final Order', color: '#e0262f' },
  mandalorian: { name: 'Mandalorian & Hunters', color: '#9fb6c9' },
  other: { name: 'Other', color: '#c79bff' }
};

SW.arsenal = [
  /* ---------------- STARFIGHTERS ---------------- */
  { id: 'v19', cat: 'starfighters', f: 'republic', name: 'V-19 Torrent', role: 'Space superiority fighter', specs: [['Maker', 'Slayn & Korpil'], ['Crew', '1 clone pilot'], ['Armament', '2 blaster cannons, 6 concussion missiles']], text: 'Folding wings for carrier storage; flies in space and atmosphere. The Republic\'s main early-war fighter.' },
  { id: 'arc170', cat: 'starfighters', f: 'republic', name: 'ARC-170', len: 14.5, role: 'Heavy fighter / reconnaissance', specs: [['Maker', 'Incom'], ['Crew', '3 + astromech'], ['Armament', '2 medium lasers, 2 rear lasers, 6 proton torpedoes'], ['Hyperdrive', 'Class 1.5'], ['Shields', 'Yes']], text: 'S-foils open for combat and heat dissipation. Long-ranged, shielded, hyperdrive-equipped — the direct ancestor of the X-wing. Flew at Coruscant and during Order 66.' },
  { id: 'eta2', cat: 'starfighters', f: 'republic', name: 'Eta-2 Actis Interceptor', len: 5.47, role: 'Jedi interceptor', specs: [['Maker', 'Kuat Systems Engineering'], ['Crew', '1 + astromech'], ['Armament', '2 lasers, 2 ion cannons'], ['Hyperdrive', 'None — external ring']], text: 'Extremely agile; built for Force-sensitive pilots to push beyond normal limits. Flown by Anakin and Obi-Wan at the Battle of Coruscant.' },
  { id: 'delta7', cat: 'starfighters', f: 'republic', name: 'Delta-7 Aethersprite', role: 'Jedi interceptor (early war)', specs: [['Maker', 'Kuat Systems Engineering'], ['Crew', '1 + astromech'], ['Armament', '2 dual lasers'], ['Hyperdrive', 'Syliure-31 ring']], text: 'Obi-Wan\'s fighter in the hunt for Jango Fett.' },
  { id: 'z95', cat: 'starfighters', f: 'other', name: 'Z-95 Headhunter', role: 'Multi-role light fighter', specs: [['Maker', 'Incom / Subpro'], ['Crew', '1'], ['Armament', '2 lasers, concussion missiles']], text: 'One of the oldest, most widespread designs — cheap, reliable, flown by Republic forces, pirates and rebels alike. A precursor of the X-wing.' },
  { id: 'vwing', cat: 'starfighters', f: 'republic', name: 'V-wing (Alpha-3 Nimbus)', role: 'Fast interceptor', specs: [['Maker', 'Kuat Systems Engineering'], ['Crew', '1 + astromech'], ['Armament', '2 twin lasers']], text: 'A very fast late-war fighter that escorted Palpatine\'s shuttle and passed into early Imperial service.' },
  { id: 'vulture', cat: 'starfighters', f: 'separatist', name: 'Vulture Droid', role: 'Droid starfighter', specs: [['Crew', 'None (droid)'], ['Control', 'Central command ship']], text: 'Mass-produced and able to walk on surfaces. Its dependence on a control signal was a critical weakness: destroy the command ship and every linked fighter dies.' },
  { id: 'trifighter', cat: 'starfighters', f: 'separatist', name: 'Droid Tri-Fighter', role: 'Advanced droid fighter', specs: [['Crew', 'None (droid)'], ['Brain', 'Independent processor']], text: 'Three arms around a central eye-like sensor — more agile and deadly than the Vulture.' },
  { id: 'hyena', cat: 'starfighters', f: 'separatist', name: 'Hyena Bomber', role: 'Droid bomber', specs: [['Payload', 'Proton bombs, concussion missiles']], text: 'Bombing variant of the Vulture droid.' },
  { id: 'tieln', cat: 'starfighters', f: 'empire', name: 'TIE/ln Fighter', len: 7.24, role: 'Space superiority fighter', specs: [['Maker', 'Sienar Fleet Systems'], ['Crew', '1'], ['Armament', '2 L-s1 laser cannons'], ['Hyperdrive', 'None'], ['Shields', 'None']], text: 'The most-produced starfighter in history. Fast, cheap, expendable: quantity over quality. Its howl became the sound of Imperial power — and with no shields, its pilots were effectively on suicide missions.' },
  { id: 'tiein', cat: 'starfighters', f: 'empire', name: 'TIE Interceptor', role: 'Fast interceptor', specs: [['Crew', '1'], ['Armament', '4 L-s9.3 laser cannons'], ['Shields', 'None']], text: 'Arrow-shaped panels, smaller profile. Introduced after Yavin; the elite of the 181st under Baron Soontir Fel.' },
  { id: 'tiesa', cat: 'starfighters', f: 'empire', name: 'TIE Bomber', role: 'Tactical bomber', specs: [['Crew', '1'], ['Payload', 'Proton bombs, torpedoes, mines, thermal detonators']], text: 'Double-hulled: one pod for the pilot, one for ordnance. Slow and reliant on escorts.' },
  { id: 'tied', cat: 'starfighters', f: 'empire', name: 'TIE Defender', role: 'Multi-role superiority fighter', specs: [['Armament', '4 lasers, 2 ion cannons, 2 warhead launchers'], ['Hyperdrive', 'Class 2'], ['Shields', 'Strong']], text: 'Thrawn\'s answer to Rebel quality — arguably the best fighter of its era. It lost the political battle to the Death Star; had the Empire chosen otherwise, the Rebellion might have been crushed.' },
  { id: 'tieadv', cat: 'starfighters', f: 'empire', name: 'TIE Advanced x1', role: 'Prototype — Vader\'s fighter', specs: [['Armament', '2 heavy lasers, cluster missiles'], ['Hyperdrive', 'Class 4'], ['Shields', 'Yes']], text: 'Bent-wing prototype flown by Darth Vader at the Battle of Yavin. Too costly for mass production.' },
  { id: 'tierp', cat: 'starfighters', f: 'empire', name: 'TIE Reaper', role: 'Troop transport', specs: [['Cargo', 'Death Troopers and other ground teams']], text: 'Atmospheric troop carrier deployed at Scarif.' },
  { id: 'xwing', cat: 'starfighters', f: 'rebel', name: 'T-65B X-wing', len: 13.4, role: 'Multi-role superiority fighter', specs: [['Maker', 'Incom'], ['Crew', '1 + astromech'], ['Armament', '4 KX9 lasers, 2 proton torpedo launchers'], ['Hyperdrive', 'Class 1'], ['Shields', 'Yes']], text: 'The symbol of the Rebellion. Designed for the Empire — until Incom\'s whole design team defected with the prototypes. It destroyed both Death Stars. T-70 (Poe\'s Black One) and T-85 variants followed.' },
  { id: 'ywing', cat: 'starfighters', f: 'rebel', name: 'BTL-A4 Y-wing', role: 'Bomber', specs: [['Maker', 'Koensayr'], ['Armament', '2 lasers, ion turret, torpedoes, bombs'], ['Hyperdrive', 'Class 1']], text: 'Rebel Y-wings were stripped of hull plating for easy field maintenance — hence the exposed look. Slow, tough, flew at both Death Star battles.' },
  { id: 'awing', cat: 'starfighters', f: 'rebel', name: 'RZ-1 A-wing', role: 'Fast interceptor', specs: [['Maker', 'Kuat Systems Engineering'], ['Armament', '2 lasers, 12 concussion missiles'], ['Hyperdrive', 'Class 1']], text: 'The fastest fighter in the Rebel fleet, with sensor jammers. At Endor, Arvel Crynyd\'s A-wing crashed into the Executor\'s bridge and sent it into the Death Star.' },
  { id: 'bwing', cat: 'starfighters', f: 'rebel', name: 'A/SF-01 B-wing', role: 'Heavy assault fighter', specs: [['Maker', 'Slayn & Korpil'], ['Armament', '3 ion cannons, heavy laser, auto-blasters, torpedoes'], ['Hyperdrive', 'Class 2']], text: 'A gyroscopic cockpit stays level while the wing rotates around it. The most heavily armed single-seat Rebel fighter, designed by Quarrie with Hera Syndulla to kill capital ships.' },
  { id: 'uwing', cat: 'starfighters', f: 'rebel', name: 'UT-60D U-wing', role: 'Troop transport / gunship', specs: [['Maker', 'Incom'], ['Crew', '2 + 8 troops'], ['Armament', '2 door lasers']], text: 'Swing-wing transport that inserted ground teams — prominent at Scarif.' },
  { id: 'tiefo', cat: 'starfighters', f: 'first-order', name: 'TIE/fo Fighter', role: 'Superiority fighter', specs: [['Shields', 'None'], ['Upgrades', 'Life support, ejection seat']], text: 'An improved TIE — the First Order at least gave its pilots ejection seats.' },
  { id: 'tiesf', cat: 'starfighters', f: 'first-order', name: 'TIE/sf Special Forces', role: 'Two-seat elite fighter', specs: [['Crew', '2'], ['Hyperdrive', 'Yes'], ['Shields', 'Yes']], text: 'Finn and Poe escaped the Finalizer in one.' },
  { id: 'tiewi', cat: 'starfighters', f: 'first-order', name: 'TIE Whisper', role: 'Kylo Ren\'s interceptor', specs: [['Special', 'Stealth']], text: 'Kylo Ren\'s personal fighter in *The Rise of Skywalker*.' },
  { id: 'tiese', cat: 'starfighters', f: 'empire', name: 'TIE Striker', role: 'Atmospheric superiority', specs: [['Specialty', 'In-atmosphere combat']], text: 'Aerodynamic TIE used at the Battle of Scarif.' },
  { id: 'tiedagger', cat: 'starfighters', f: 'first-order', name: 'TIE Dagger', role: 'Sith fighter', specs: [['Fleet', 'Final Order']], text: 'Red-accented Sith Eternal fighter launched from Xyston-class destroyers at Exegol.' },
  { id: 'gauntlet', cat: 'starfighters', f: 'mandalorian', name: 'Kom\'rk-class Gauntlet', role: 'Fighter / transport', specs: [['Wings', 'Rotating']], text: 'The signature Mandalorian multirole craft — Death Watch, Nite Owls and more.' },
  { id: 'fang', cat: 'starfighters', f: 'mandalorian', name: 'Fang Fighter', role: 'Interceptor', specs: [['Wing', 'Pivoting, can slash']], text: 'Built for Mandalorian pilots who consider ramming an acceptable tactic.' },
  { id: 'firespray', cat: 'starfighters', f: 'mandalorian', name: 'Firespray-31 (Slave I)', role: 'Patrol & attack craft', specs: [['Maker', 'Kuat Systems Engineering'], ['Armament', 'Blasters, missiles, seismic charges, ion cannon, tractor beam']], text: 'Flies upright, lands flat. Jango\'s, then Boba Fett\'s — and the home of the legendary seismic charge.' },
  { id: 'razorcrest', cat: 'starfighters', f: 'mandalorian', name: 'Razor Crest', role: 'Gunship / transport', specs: [['Origin', 'Pre-Empire military surplus'], ['Fitted', 'Carbonite freezer']], text: 'Din Djarin\'s ship — destroyed on Tython by an Imperial orbital strike.' },
  { id: 'falcon', cat: 'starfighters', f: 'rebel', name: 'Millennium Falcon', len: 34.75, role: 'Modified YT-1300 freighter', specs: [['Maker', 'Corellian Engineering Corp.'], ['Owners', 'Lando, then Han & Chewie, then Rey']], text: 'The fastest hunk of junk in the galaxy — won by Han from Lando in a sabacc game.' },

  /* ---------------- CAPITAL SHIPS ---------------- */
  { id: 'venator', cat: 'capital', f: 'republic', name: 'Venator-class Star Destroyer', len: 1137, role: 'Destroyer / carrier', specs: [['Maker', 'Kuat Drive Yards'], ['Crew', '7,400 + 2,000 troops'], ['Armament', '8 heavy dual turbolasers, 2 medium, 52 point-defence, 4 torpedo launchers'], ['Fighters', '~420']], text: 'A carrier first and battleship second: its dorsal flight deck opens to launch whole fighter wings. The Republic\'s workhorse, later retired for the Imperial-class.' },
  { id: 'acclamator', cat: 'capital', f: 'republic', name: 'Acclamator Assault Ship', len: 752, role: 'Troop transport / assault', specs: [['Capacity', '16,000 troops, 80 gunships, 48 walkers, 320 speeders']], text: 'Delivered the clone army at Geonosis — a purpose-built invasion ship.' },
  { id: 'pelta', cat: 'capital', f: 'republic', name: 'Pelta-class Frigate', len: 170, role: 'Medical / supply', specs: [['Armament', 'Light']], text: 'Medical ships and command frigates throughout the Clone Wars.' },
  { id: 'consular', cat: 'capital', f: 'republic', name: 'Consular-class Cruiser', len: 115, role: 'Diplomatic vessel', specs: [['Variant', 'Charger c70 retrofit']], text: 'The red ship that carried Qui-Gon and Obi-Wan into the Naboo blockade.' },
  { id: 'lucrehulk', cat: 'capital', f: 'separatist', name: 'Lucrehulk Battleship', len: 3170, role: 'Battleship / carrier', specs: [['Maker', 'Hoersch-Kessel Drive'], ['Armament', '185 quad turbolasers'], ['Fighters', '1,500+ Vultures']], text: 'Converted cargo haulers in a ring shape. The central sphere housed the droid control centre — destroy it and the droids fall.' },
  { id: 'providence', cat: 'capital', f: 'separatist', name: 'Providence-class Dreadnought', len: 1088, role: 'Heavy command ship', specs: [['Notable', 'Invisible Hand']], text: 'Grievous\'s flagship class — the ship the Jedi boarded to rescue Palpatine.' },
  { id: 'munificent', cat: 'capital', f: 'separatist', name: 'Munificent-class Frigate', len: 825, role: 'Frigate / fire support', specs: [['Armament', '2 heavy bow turbolasers, 38 point-defence']], text: 'Banking Clan frigate whose bow guns hit far above its weight.' },
  { id: 'recusant', cat: 'capital', f: 'separatist', name: 'Recusant-class Destroyer', len: 1187, role: 'Light destroyer', specs: [['Doctrine', 'Cheap, numerous']], text: 'One of the most common Separatist warships.' },
  { id: 'isd', cat: 'capital', f: 'empire', name: 'Imperial-class Star Destroyer', len: 1600, role: 'Backbone of the Imperial Navy', specs: [['Maker', 'Kuat Drive Yards'], ['Crew', '9,235 officers, 27,850 enlisted, 9,700 troopers'], ['Armament', '60 turbolasers, 60 ion cannons, 10 tractor beams'], ['Fighters', '72 TIEs'], ['Ground', '20 AT-ATs, 30 AT-STs'], ['Hyperdrive', 'Class 2']], text: 'The most iconic warship in science fiction. One ISD could subjugate a whole system. About 25,000 were built. Weak points: the twin shield domes, and fighters that died with their carrier.' },
  { id: 'executor', cat: 'capital', f: 'empire', name: 'Executor-class Super Star Destroyer', len: 19000, role: 'Command dreadnought', specs: [['Crew', '~280,000+'], ['Armament', '5,000+ turbolasers & ion cannons'], ['Fighters', '~5,000']], text: 'Vader\'s flagship — a city with an engine. At Endor an A-wing crashed into its bridge and it fell into the Death Star II.' },
  { id: 'interdictor', cat: 'capital', f: 'empire', name: 'Interdictor Cruiser', len: 600, role: 'Interdiction', specs: [['Special', '4 gravity-well projectors']], text: 'Generates artificial mass shadows that stop ships entering hyperspace — pulling fleets into ambushes.' },
  { id: 'arquitens', cat: 'capital', f: 'empire', name: 'Arquitens Light Cruiser', len: 325, role: 'Patrol / escort', specs: [['Seen in', '*Rebels*']], text: 'Ubiquitous Imperial patrol cruiser.' },
  { id: 'raider', cat: 'capital', f: 'empire', name: 'Raider-class Corvette', len: 150, role: 'Anti-starfighter', specs: [['Doctrine', 'Counter Rebel fighters']], text: 'Fast and agile, with weapons tuned for small craft.' },
  { id: 'gozanti', cat: 'capital', f: 'empire', name: 'Gozanti-class Cruiser', len: 64, role: 'Transport / light patrol', specs: [['Carries', 'TIEs or AT-ATs, externally']], text: 'An Imperial workhorse seen constantly in *Rebels*.' },
  { id: 'lambda', cat: 'capital', f: 'empire', name: 'Lambda-class Shuttle', len: 20, role: 'Personnel shuttle', specs: [['Crew', '6 + 20']], text: 'The tri-wing shuttle of Vader and the Emperor.' },
  { id: 'mc80', cat: 'capital', f: 'rebel', name: 'MC80 Star Cruiser', len: 1200, role: 'Fleet command', specs: [['Maker', 'Mon Calamari Shipyards'], ['Notable', 'Home One']], text: 'Converted luxury liners, each hand-built and unique. Superb shields. Without the Mon Calamari, the Alliance would never have had a fleet.' },
  { id: 'mc75', cat: 'capital', f: 'rebel', name: 'MC75 Star Cruiser', len: 1204, role: 'Cruiser', specs: [['Notable', 'Profundity']], text: 'Admiral Raddus\'s flagship at Scarif.' },
  { id: 'mc85', cat: 'capital', f: 'rebel', name: 'MC85 Star Cruiser', len: 3438, role: 'Resistance flagship', specs: [['Notable', 'Raddus']], text: 'Holdo\'s ship — rammed through the Supremacy at lightspeed.' },
  { id: 'nebulonb', cat: 'capital', f: 'rebel', name: 'Nebulon-B Frigate', len: 300, role: 'Escort / medical', specs: [['Maker', 'Kuat Drive Yards']], text: 'A thin spar joins its two halves — a known weak point. Luke received his new hand aboard one.' },
  { id: 'cr90', cat: 'capital', f: 'rebel', name: 'CR90 Corvette', len: 150, role: 'Corvette / blockade runner', specs: [['Maker', 'Corellian Engineering Corp.'], ['Armament', '2 dual + 4 single turbolasers'], ['Notable', 'Tantive IV']], text: 'The very first ship ever seen in Star Wars.' },
  { id: 'gr75', cat: 'capital', f: 'rebel', name: 'GR-75 Transport', len: 90, role: 'Cargo / troops', specs: [['Armament', 'None']], text: 'The unarmed transports that fled Hoth under the ion cannon\'s cover.' },
  { id: 'hammerhead', cat: 'capital', f: 'rebel', name: 'Hammerhead Corvette', len: 315, role: 'Corvette', specs: [['Famous for', 'Ramming']], text: 'At Scarif one pushed a disabled Star Destroyer into another — and both into the Shield Gate.' },
  { id: 'resurgent', cat: 'capital', f: 'first-order', name: 'Resurgent-class Star Destroyer', len: 2915, role: 'Battlecruiser', specs: [['Armament', '1,500+ turbolasers & ion cannons'], ['Notable', 'Finalizer']], text: 'Nearly twice an Imperial-class. Built in secret in the Unknown Regions.' },
  { id: 'supremacy', cat: 'capital', f: 'first-order', name: 'Mega-class Supremacy', len: 13239, role: 'Mobile capital', specs: [['Wingspan', '60,542 m'], ['Contains', 'Factories, shipyards, training']], text: 'Snoke\'s flagship — the widest warship ever built, crippled by Holdo\'s hyperspace ram.' },
  { id: 'fulminatrix', cat: 'capital', f: 'first-order', name: 'Mandator IV Siege Dreadnought', len: 7669, role: 'Siege ship', specs: [['Armament', '2 orbital autocannons, 26 point-defence']], text: 'The "fleet killer" at D\'Qar, destroyed by Resistance bombers.' },
  { id: 'xyston', cat: 'capital', f: 'first-order', name: 'Xyston-class Star Destroyer', len: 2400, role: 'Planet-killer', specs: [['Armament', 'Axial superlaser']], text: 'Thousands formed the Final Order — every ship able to destroy a planet.' },
  { id: 'ghost', cat: 'capital', f: 'rebel', name: 'The Ghost', len: 43.9, role: 'VCX-100 light freighter', specs: [['Carries', 'Phantom shuttle']], text: 'Home of the Ghost crew in *Rebels*.' },

  /* ---------------- SUPERWEAPONS ---------------- */
  { id: 'deathstar', cat: 'superweapons', f: 'empire', name: 'Death Star (DS-1)', len: 120000, role: 'Orbital battle station', specs: [['Diameter', '~120 km (some sources 160)'], ['Crew', '~1.7 million + 400,000 droids'], ['Armament', 'Superlaser, 15,000 turbolasers, 768 tractor beams'], ['Fighters', '7,000 TIEs'], ['Power', 'Hypermatter reactor + kyber']], text: 'Eight tributary beams converge into one. Begun on Geonosis, overseen by Orson Krennic, ~19 years to build. Its 2 m exhaust port was Galen Erso\'s deliberate sabotage. Destroyed at Yavin, 0 BBY.' },
  { id: 'deathstar2', cat: 'superweapons', f: 'empire', name: 'Death Star II', len: 200000, role: 'Orbital battle station', specs: [['Diameter', '~200 km'], ['Status', 'Incomplete — superlaser live']], text: 'A trap: unfinished but armed, able to recharge fast enough to kill capital ships. No exhaust-port flaw. Destroyed at Endor by Lando and Wedge.' },
  { id: 'starkiller', cat: 'superweapons', f: 'first-order', name: 'Starkiller Base', len: 660000, role: 'Planetary superweapon', specs: [['Host', 'The planet Ilum'], ['Power', 'Drained an entire star'], ['Range', 'Interstellar, through hyperspace']], text: 'Destroyed the five worlds of the Hosnian system in a single shot. Poe\'s strike on a thermal oscillator collapsed it into a new star.' },
  { id: 'xystonfleet', cat: 'superweapons', f: 'first-order', name: 'The Final Order', role: 'Fleet of planet-killers', specs: [['Ships', 'Thousands of Xyston-class'], ['Weakness', 'Central navigation signal']], text: 'The endpoint of superweapon doctrine: not one station but a fleet. Trapped when its navigation signal fell and the citizens\' fleet arrived.' },
  { id: 'bdz', cat: 'superweapons', f: 'empire', name: 'Base Delta Zero', role: 'Bombardment protocol', specs: [['Type', 'Doctrine, not a weapon']], text: 'Star Destroyers bombard a planet until all life is gone and the crust turns to slag.' },
  { id: 'darksaber-sw', cat: 'superweapons', f: 'empire', name: 'Darksaber Project', role: 'Legends superweapon', legends: true, specs: [['Design', 'Death Star superlaser in a hull']], text: 'A stripped-down superlaser built into a cylindrical hull.' },

  /* ---------------- GROUND VEHICLES ---------------- */
  { id: 'atat', cat: 'ground', f: 'empire', name: 'AT-AT', len: 22.5, role: 'Heavy assault walker', specs: [['Height', '22.5 m'], ['Crew', '5'], ['Troops', '40 + 5 speeder bikes'], ['Armament', '2 heavy lasers, 2 medium blasters'], ['Speed', '~60 km/h']], text: 'The ultimate symbol of Imperial ground power — its psychological impact rivalled its firepower. Weak points: slow turret arc, neck joint, and tow cables at Hoth.' },
  { id: 'atst', cat: 'ground', f: 'empire', name: 'AT-ST', len: 8.6, role: 'Scout walker', specs: [['Height', '8.6 m'], ['Crew', '2'], ['Armament', 'Twin blaster, grenade launcher, light blasters']], text: 'The "chicken walker". Lethal to infantry — and to Ewok log traps, vulnerable.' },
  { id: 'atm6', cat: 'ground', f: 'first-order', name: 'AT-M6', len: 40, role: 'Heavy siege walker', specs: [['Height', '~40 m'], ['Armament', 'MegaCaliber Six turbolaser, missiles']], text: 'Knuckle-walking "gorilla" design built so it cannot be tripped. Deployed at Crait.' },
  { id: 'atact', cat: 'ground', f: 'empire', name: 'AT-ACT', role: 'Cargo walker', specs: [['Seen', 'Scarif']], text: 'A taller, bulkier cargo AT-AT.' },
  { id: 'atte', cat: 'ground', f: 'republic', name: 'AT-TE', len: 13.2, role: 'Main battle walker', specs: [['Maker', 'Rothana Heavy Engineering'], ['Height', '5.32 m'], ['Crew', '7'], ['Troops', '20'], ['Armament', '6 laser turrets, mass-driver cannon']], text: 'Six legs, magnetic feet, a kinetic cannon that ignores shields. More practical than the AT-AT — the Empire traded tactics for terror.' },
  { id: 'atrt', cat: 'ground', f: 'republic', name: 'AT-RT', len: 3.2, role: 'Recon walker', specs: [['Crew', '1 (exposed)'], ['Speed', '~90 km/h']], text: 'A mechanical horse for scouts.' },
  { id: 'atap', cat: 'ground', f: 'republic', name: 'AT-AP', len: 10.97, role: 'Artillery walker', specs: [['Crew', '3'], ['Special', 'Third bracing leg']], text: 'Plants a third leg to fire sustained bombardments.' },
  { id: 'juggernaut', cat: 'ground', f: 'republic', name: 'HAVw A6 Juggernaut', len: 49.4, role: 'Heavy assault vehicle', specs: [['Crew', '12'], ['Troops', '300'], ['Speed', '~160 km/h']], text: 'Ten wheels, multiple decks, an internal speeder hangar. The Republic\'s heaviest conventional ground vehicle.' },
  { id: 'saber', cat: 'ground', f: 'republic', name: 'TX-130 Saber Tank', role: 'Light repulsor tank', specs: [['Crew', '2'], ['Armament', '2 lasers, beam cannon, 2 missile launchers']], text: 'Fast flanker — Mace Windu used one on Ryloth.' },
  { id: 'spha', cat: 'ground', f: 'republic', name: 'SPHA', role: 'Anti-orbital artillery', specs: [['Armament', 'Turbolaser beam cannon']], text: 'Twelve legs; at Geonosis its beams reached fleeing core ships in the upper atmosphere.' },
  { id: 'laat', cat: 'ground', f: 'republic', name: 'LAAT/i Gunship', len: 17.4, role: 'Troop gunship', specs: [['Crew', '4'], ['Troops', '30'], ['Armament', 'Turrets, lasers, 8 rockets']], text: 'The Huey of the Clone Wars — open troop bays, nose art and all.' },
  { id: 'barc', cat: 'ground', f: 'republic', name: 'BARC Speeder', role: 'Recon speeder', specs: [['Speed', '~520 km/h'], ['Armament', '2 lasers']], text: 'Heavier and better armed than the 74-Z.' },
  { id: 't47', cat: 'ground', f: 'rebel', name: 'T-47 Snowspeeder', role: 'Airspeeder', specs: [['Crew', '2'], ['Armament', '2 lasers, harpoon & tow cable']], text: 'A civilian craft turned AT-AT killer by Rebel ingenuity.' },
  { id: 'aat', cat: 'ground', f: 'separatist', name: 'AAT', role: 'Main battle tank', specs: [['Crew', '4 droids'], ['Armament', 'Heavy laser turret, lateral lasers']], text: 'The Trade Federation\'s tank at Naboo.' },
  { id: 'hailfire', cat: 'ground', f: 'separatist', name: 'Hailfire Droid', role: 'Missile platform', specs: [['Payload', '30 guided missiles']], text: 'Two giant hoop wheels and a terrifying turn of speed.' },
  { id: 'octuptarra', cat: 'ground', f: 'separatist', name: 'Octuptarra Tri-Droid', role: 'Walker droid', specs: [['Legs', '3']], text: 'A rotating cannon head on three legs.' },
  { id: 'stap', cat: 'ground', f: 'separatist', name: 'STAP', role: 'Aerial platform', specs: [['Crew', '1 droid']], text: 'Fast, fragile, expendable.' },
  { id: 'speeder74z', cat: 'ground', f: 'empire', name: '74-Z Speeder Bike', role: 'Recon', specs: [['Speed', 'Up to 500 km/h']], text: 'The Endor forest chase — at speed, any collision was fatal.' },
  { id: 'x34', cat: 'ground', f: 'other', name: 'X-34 Landspeeder', role: 'Civilian', specs: [['Owner', 'Luke Skywalker']], text: 'Everyday repulsorlift transport.' },

  /* ---------------- WEAPONS ---------------- */
  { id: 'e11', cat: 'weapons', f: 'empire', name: 'E-11 Blaster Rifle', role: 'Stormtrooper standard', specs: [['Maker', 'BlasTech'], ['Range', '~300 m']], text: 'Compact and reliable. The prop was a modified Sterling submachine gun.' },
  { id: 'dc15a', cat: 'weapons', f: 'republic', name: 'DC-15A / DC-15S', role: 'Clone rifle / carbine', specs: [['Era', 'Clone Wars']], text: 'Longer-ranged and harder-hitting than the E-11.' },
  { id: 'dl44', cat: 'weapons', f: 'rebel', name: 'DL-44 Heavy Blaster Pistol', role: 'Han Solo\'s sidearm', specs: [['Prop', 'Mauser C96']], text: 'Powerful for a pistol, scoped.' },
  { id: 'elg3a', cat: 'weapons', f: 'republic', name: 'ELG-3A', role: 'Diplomat\'s pistol', specs: [['User', 'Padmé Amidala']], text: 'Compact and elegant.' },
  { id: 'se14r', cat: 'weapons', f: 'empire', name: 'SE-14r', role: 'Officer\'s repeater', specs: [['Fire', 'Semi / full auto']], text: 'An Imperial sidearm.' },
  { id: 'dlt19', cat: 'weapons', f: 'empire', name: 'DLT-19', role: 'Heavy rifle', specs: [['Prop', 'MG-34']], text: 'Suppression and long-range fire.' },
  { id: 'e5', cat: 'weapons', f: 'separatist', name: 'E-5', role: 'Battle droid rifle', specs: [['Accuracy', 'Mediocre']], text: 'Cheap and mass-produced — like its wielders.' },
  { id: 'bowcaster', cat: 'weapons', f: 'other', name: 'Bowcaster', role: 'Wookiee weapon', specs: [['Fires', 'Explosive energy quarrels']], text: 'Chewbacca\'s signature — far stronger than a blaster.' },
  { id: 'cycler', cat: 'weapons', f: 'other', name: 'Cycler Rifle', role: 'Tusken slugthrower', specs: [['Fires', 'Solid slugs']], text: 'Solid rounds can slip past shields tuned for bolts.' },
  { id: 'disruptor', cat: 'weapons', f: 'other', name: 'Disruptor', role: 'Banned weapon', specs: [['Effect', 'Molecular disintegration']], text: 'Outlawed by Republic and Empire alike.' },
  { id: 'thermal', cat: 'weapons', f: 'other', name: 'Thermal Detonator', role: 'Grenade', specs: [['Yield', 'Vaporises a wide radius']], text: 'Leia, as Boushh, threatened Jabba with one.' },
  { id: 'popper', cat: 'weapons', f: 'republic', name: 'Droid Popper', role: 'EMP grenade', specs: [['Target', 'Droids, electronics']], text: 'A Clone Wars staple.' },
  { id: 'electrostaff', cat: 'weapons', f: 'separatist', name: 'Electrostaff', role: 'MagnaGuard weapon', specs: [['Alloy', 'Phrik']], text: 'Can block a lightsaber.' },
  { id: 'vibroblade', cat: 'weapons', f: 'other', name: 'Vibroblade', role: 'Melee', specs: [['Alloys', 'Cortosis, phrik']], text: 'Vibrates at extreme frequency; some resist sabers.' },
  { id: 'z6baton', cat: 'weapons', f: 'first-order', name: 'Z6 Riot Baton', role: 'Melee', specs: [['Type', 'Electrified']], text: '"Traitor!"' },
  { id: 'forcepike', cat: 'weapons', f: 'empire', name: 'Force Pike', role: 'Royal Guard polearm', specs: [['Type', 'Electrified']], text: 'Carried by the Emperor\'s guards.' },
  { id: 'beskarspear', cat: 'weapons', f: 'mandalorian', name: 'Beskar Spear', role: 'Melee', specs: [['Material', 'Pure beskar']], text: 'Lightsaber-resistant; Din Djarin carried one.' },

  /* ---------------- ARMOUR ---------------- */
  { id: 'phase1', cat: 'armor', f: 'republic', name: 'Phase I Clone Armour', role: 'Early war', specs: [['Helmet', 'T-visor'], ['Sealed', 'Vacuum-rated']], text: 'Mandalorian-inspired, heavy and uncomfortable.' },
  { id: 'phase2', cat: 'armor', f: 'republic', name: 'Phase II Clone Armour', role: 'Mid–late war', specs: [['Upgrades', 'Life support, HUD, modular']], text: 'Lighter, and painted with legion colours and battle honours.' },
  { id: 'katarn', cat: 'armor', f: 'republic', name: 'Katarn Commando Armour', role: 'Special forces', specs: [['Features', 'Shields, HUD, stealth, vibroblade']], text: 'For four-man commando squads.' },
  { id: 'stormarmor', cat: 'armor', f: 'empire', name: 'Stormtrooper Armour', role: 'Imperial infantry', specs: [['Material', 'Plastoid over body glove'], ['Variants', 'Sand, snow, scout, shore, death, purge, range, incinerator, dark troopers']], text: 'Stops shrapnel and glancing bolts, not direct hits. "I can\'t see a thing in this helmet!"' },
  { id: 'beskargam', cat: 'armor', f: 'mandalorian', name: 'Beskar\'gam', role: 'Mandalorian armour', specs: [['Material', 'Beskar'], ['Gear', 'Jetpack, flamethrower, whipcord, whistling birds']], text: 'Resists blasters and lightsabers. Sacred, passed through clans. "This is the Way."' },
  { id: 'royalguard', cat: 'armor', f: 'empire', name: 'Royal / Praetorian Guard', role: 'Elite guards', specs: [['Colour', 'Red']], text: 'The Emperor\'s and Snoke\'s personal guards.' },

  /* ---------------- SYSTEMS ---------------- */
  { id: 'shieldgen', cat: 'systems', f: 'other', name: 'Planetary Shield Generator', role: 'Defence', specs: [['Examples', 'Endor, Scarif Shield Gate']], text: 'Destroying the generator was always the objective.' },
  { id: 'v150', cat: 'systems', f: 'rebel', name: 'v-150 Ion Cannon', role: 'Planet defence', specs: [['Effect', 'Disables, not destroys']], text: 'Knocked out Star Destroyers so Hoth\'s transports could escape.' },
  { id: 'seismic', cat: 'systems', f: 'mandalorian', name: 'Seismic Charge', role: 'Area denial', specs: [['Effect', 'Planar shockwave']], text: 'The pause, then the "BWONNNG" — legendary sound design.' },
  { id: 'turbolaser', cat: 'systems', f: 'other', name: 'Turbolaser', role: 'Capital ship weapon', specs: [['Type', 'Heavy plasma bolt']], text: 'One bolt can level city blocks.' },
  { id: 'protontorp', cat: 'systems', f: 'other', name: 'Proton Torpedo', role: 'Guided warhead', specs: [['Best against', 'Shielded targets']], text: 'The weapon that killed the first Death Star.' },
  { id: 'probe', cat: 'systems', f: 'empire', name: 'Viper Probe Droid', role: 'Reconnaissance', specs: [['Deployed', 'By the thousand']], text: 'One found Echo Base.' },
  { id: 'holonet', cat: 'systems', f: 'other', name: 'HoloNet', role: 'Information warfare', specs: [['Controlled by', 'The Empire']], text: 'The galaxy-wide network — censored by the Empire.' },
  { id: 'slicing', cat: 'systems', f: 'other', name: 'Slicing', role: 'Hacking', specs: [['Experts', 'Astromechs']], text: 'R2-D2 could open nearly anything.' }
];

/* Ship size classification (for the scale chart) */
SW.scale = [
  { name: 'X-wing', cls: 'Starfighter', len: 13.4 },
  { name: 'LAAT gunship', cls: 'Gunship', len: 17.4 },
  { name: 'Millennium Falcon', cls: 'Freighter', len: 34.75 },
  { name: 'CR90 Corvette', cls: 'Corvette', len: 150 },
  { name: 'Nebulon-B', cls: 'Frigate', len: 300 },
  { name: 'Acclamator', cls: 'Assault ship', len: 752 },
  { name: 'Venator', cls: 'Star Destroyer', len: 1137 },
  { name: 'MC80', cls: 'Star Cruiser', len: 1200 },
  { name: 'Imperial-class', cls: 'Star Destroyer', len: 1600 },
  { name: 'Resurgent-class', cls: 'Battlecruiser', len: 2915 },
  { name: 'Lucrehulk', cls: 'Battleship', len: 3170 },
  { name: 'Supremacy', cls: 'Mega-dreadnought', len: 13239 },
  { name: 'Executor', cls: 'Dreadnought', len: 19000 },
  { name: 'Death Star', cls: 'Battle station', len: 120000 },
  { name: 'Death Star II', cls: 'Battle station', len: 200000 }
];

SW.doctrine = [
  { id: 'tarkin', name: 'The Tarkin Doctrine', side: 'Empire', text: 'Rule through the fear of force rather than force itself. Overwhelming superiority, centralised command, and willingness to make examples — Alderaan was a demonstration, not a necessity.', weak: 'Dependence on superweapons and top-down command. When the Death Star fell, the fear evaporated and systems flocked to the Rebellion.' },
  { id: 'rebel', name: 'Rebel Strategy', side: 'Alliance', text: 'Classic asymmetric warfare: outgunned but agile and motivated.', points: ['Intelligence superiority — the Bothan spynet, stolen plans', 'Avoid pitched fleet battles unless decisive', 'Strike high-value targets', 'Distributed, redundant command', 'Starfighter quality over quantity', 'Every victory is propaganda'] },
  { id: 'clone', name: 'Clone Wars Grand Strategy', side: 'Palpatine', text: 'Both sides answered to the same man. The war was never meant to be won, but to:', points: ['Justify a massive army', 'Expand emergency powers', 'Spread the Jedi thin, far from Coruscant', 'Erode trust in the Jedi and Senate', 'Provide the pretext for Order 66 and Empire'] },
  { id: 'fo', name: 'First Order Doctrine', side: 'First Order', text: 'Imperial terror plus fanatical indoctrination: children kidnapped and raised as soldiers.', weak: 'Zealous but brittle — soldiers never given a choice were the most likely to defect when shown one. Finn is the proof.' }
];

SW.battles = [
  { name: 'Battle of Naboo', date: '32 BBY', era: 'fall', tech: 'AATs, droid army, N-1 starfighters', outcome: 'Republic victory — the droid control ship is destroyed.', win: 'light' },
  { name: 'Battle of Geonosis', date: '22 BBY', era: 'fall', tech: 'AT-TEs, LAAT gunships, the clone army\'s debut', outcome: 'Republic victory — the Clone Wars begin.', win: 'light' },
  { name: 'Battle of Coruscant', date: '19 BBY', era: 'fall', tech: 'ARC-170s, Venators, buzz droids', outcome: 'Republic victory — Grievous flees, Dooku is killed.', win: 'light' },
  { name: 'Battle of Scarif', date: '0 BBY', era: 'rebellion', tech: 'U-wings, Hammerhead corvette, Shield Gate', outcome: 'Pyrrhic Rebel victory — plans transmitted, fleet devastated.', win: 'light' },
  { name: 'Battle of Yavin', date: '0 BBY', era: 'rebellion', tech: 'X-wings and Y-wings vs. the Death Star', outcome: 'Rebel victory — the Death Star is destroyed.', win: 'light' },
  { name: 'Battle of Hoth', date: '3 ABY', era: 'rebellion', tech: 'AT-ATs, snowspeeders, ion cannon', outcome: 'Imperial victory — Echo Base falls; the Rebels escape.', win: 'dark' },
  { name: 'Battle of Endor', date: '4 ABY', era: 'rebellion', tech: 'A-wings, B-wings, Ewoks, Death Star II', outcome: 'Rebel victory — the Death Star II and the Emperor are destroyed.', win: 'light' },
  { name: 'Battle of Jakku', date: '5 ABY', era: 'new-republic', tech: 'Star Destroyers, X-wings, ground assault', outcome: 'New Republic victory — the Empire surrenders.', win: 'light' },
  { name: 'Battle of Takodana', date: '34 ABY', era: 'sequel', tech: 'First Order invasion, X-wing strike', outcome: 'Resistance tactical victory.', win: 'light' },
  { name: 'Battle of Crait', date: '34 ABY', era: 'sequel', tech: 'AT-M6 walkers, battering-ram cannon', outcome: 'First Order victory — the Resistance escapes on the Falcon.', win: 'dark' },
  { name: 'Battle of Exegol', date: '35 ABY', era: 'sequel', tech: 'Xyston fleet vs. the citizens\' fleet', outcome: 'Resistance victory — the Final Order is destroyed.', win: 'light' }
];
