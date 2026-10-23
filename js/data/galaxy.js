/* ==========================================================================
   GALAXY — regions, hyperlanes, planets
   Grid positions follow the in-universe galactic grid (columns A–W west→east,
   rows 1–21 north→south). Positions are approximate and stylised.
   ========================================================================== */
window.SW = window.SW || {};

SW.galaxyIntro = `The whole saga unfolds in one spiral galaxy, roughly **100,000 light-years** across with over **400 billion stars**, arranged in concentric regions around a supermassive black hole. Travel between systems happens through **hyperspace** — an alternate dimension crossed along mapped routes called hyperspace lanes.`;

/* r = outer radius as a fraction of the galaxy disc (0–1) */
SW.regions = [
  { id: 'deep-core', name: 'The Deep Core', r: 0.07, text: 'The innermost region, packed with stars and gravitational anomalies. Navigation is extremely dangerous. A hiding place for Sith lords and secret Imperial installations like Byss.' },
  { id: 'core', name: 'The Core Worlds', r: 0.16, text: 'The political, economic and cultural heart of the galaxy — Coruscant, Corellia, Alderaan. Core citizens often see themselves as the pinnacle of civilisation.' },
  { id: 'colonies', name: 'The Colonies', r: 0.24, text: 'A ring of worlds settled early in galactic expansion. Prosperous and well-developed, an economic bridge between the Core and the Mid Rim.' },
  { id: 'inner-rim', name: 'The Inner Rim', r: 0.33, text: 'A transitional zone — once the frontier of galactic civilisation before expansion pushed outward.' },
  { id: 'mid-rim', name: 'The Mid Rim', r: 0.55, text: 'A vast band of moderately developed worlds — the galaxy\'s "middle class". Naboo and Kashyyyk lie here.' },
  { id: 'outer-rim', name: 'The Outer Rim Territories', r: 0.86, text: 'The largest and most sparsely populated region: lawless, independent, harsh. Home to Tatooine, Mustafar, Hoth and Geonosis. The Hutts dominate much of it, and the Republic\'s grip was always tenuous — fertile ground for Separatists and later Rebels.' },
  { id: 'wild-space', name: 'Wild Space', r: 1.0, text: 'Beyond the Outer Rim: partially explored and not integrated into galactic civilisation.' },
  { id: 'unknown', name: 'The Unknown Regions', r: null, text: 'The largely uncharted western quadrant, riddled with hyperspace anomalies. Home of the Chiss Ascendancy; where the Empire\'s remnants fled and rebuilt as the First Order, and where Palpatine\'s Sith Eternal built the Final Order on Exegol.' }
];

SW.hyperlanes = [
  { id: 'corellian-run', name: 'Corellian Run', path: ['L9', 'N11', 'O13', 'R16', 'R17'] },
  { id: 'perlemian', name: 'Perlemian Trade Route', path: ['L9', 'N8', 'P6', 'R5'] },
  { id: 'hydian', name: 'Hydian Way', path: ['P2', 'Q6', 'Q10', 'P14', 'N18', 'L21'] },
  { id: 'rimma', name: 'Rimma Trade Route', path: ['L10', 'L13', 'M17', 'M19'] }
];

SW.biomes = [
  { id: 'desert', name: 'Desert', color: '#e0a85a' },
  { id: 'forest', name: 'Forest & Jungle', color: '#5fbf6b' },
  { id: 'ice', name: 'Ice & Snow', color: '#bfe4ff' },
  { id: 'urban', name: 'City Worlds', color: '#f2d36b' },
  { id: 'volcanic', name: 'Volcanic', color: '#ff6a3d' },
  { id: 'ocean', name: 'Ocean', color: '#4fa8ff' },
  { id: 'other', name: 'Other', color: '#c79bff' }
];

SW.planets = [
  { id: 'tatooine', name: 'Tatooine', biome: 'desert', region: 'Outer Rim', grid: 'R16', text: 'A harsh, twin-sunned desert world controlled by Hutt gangsters. Home of Anakin and Luke Skywalker — insignificant on the galactic stage, yet one of the most pivotal places in the saga.', tags: ['Skywalker homestead', 'Mos Eisley', 'Jabba\'s Palace', 'Krayt dragons'] },
  { id: 'jakku', name: 'Jakku', biome: 'desert', region: 'Western Reaches', grid: 'H12', text: 'A desert planet and site of the last great Imperial–Rebel battle after Endor, its dunes littered with Star Destroyer wrecks. Rey grew up scavenging here.', tags: ['Battle of Jakku', 'Starship graveyard'] },
  { id: 'jedha', name: 'Jedha', biome: 'desert', region: 'Mid Rim', grid: 'N14', text: 'A cold desert moon sacred to followers of the Force. The Empire mined it for kyber crystals to power the Death Star\'s superlaser — then destroyed Jedha City.', tags: ['Kyber crystals', 'Guardians of the Whills'] },
  { id: 'geonosis', name: 'Geonosis', biome: 'desert', region: 'Outer Rim', grid: 'S15', text: 'An arid, rocky world of insectoid Geonosians. Site of the first battle of the Clone Wars and the secret birthplace of the Death Star.', tags: ['Battle of Geonosis', 'Droid foundries'] },
  { id: 'endor', name: 'Endor (Forest Moon)', biome: 'forest', region: 'Outer Rim', grid: 'H16', text: 'A lush forest moon inhabited by Ewoks. Site of the decisive Battle of Endor and the shield generator that protected the second Death Star.', tags: ['Ewoks', 'Battle of Endor'] },
  { id: 'kashyyyk', name: 'Kashyyyk', biome: 'forest', region: 'Mid Rim', grid: 'P9', text: 'A jungle world of colossal wroshyr trees. Homeworld of the Wookiees, and battleground of the final days of the Clone Wars.', tags: ['Wookiees', 'Wroshyr trees'] },
  { id: 'yavin-4', name: 'Yavin 4', biome: 'forest', region: 'Outer Rim', grid: 'P6', text: 'A jungle moon whose ancient temples housed the main Rebel base during the Battle of Yavin.', tags: ['Rebel base', 'Massassi temples'] },
  { id: 'dagobah', name: 'Dagobah', biome: 'forest', region: 'Outer Rim', grid: 'M19', text: 'A swampy, fog-covered world strong with the Force, where Yoda lived in exile and trained Luke.', tags: ['Yoda\'s hut', 'The Cave'] },
  { id: 'felucia', name: 'Felucia', biome: 'forest', region: 'Outer Rim', grid: 'R6', text: 'A vibrant, bioluminescent jungle world. Aayla Secura fell here during Order 66.', tags: ['Bioluminescence'] },
  { id: 'ajan-kloss', name: 'Ajan Kloss', biome: 'forest', region: 'Outer Rim', grid: 'J4', text: 'A dense jungle world used as the Resistance\'s final base.', tags: ['Resistance base'] },
  { id: 'hoth', name: 'Hoth', biome: 'ice', region: 'Outer Rim', grid: 'K18', text: 'A frozen wasteland and home of the Rebellion\'s Echo Base — site of one of the saga\'s most iconic battles.', tags: ['Echo Base', 'Wampas', 'Tauntauns'] },
  { id: 'ilum', name: 'Ilum', biome: 'ice', region: 'Unknown Regions', grid: 'G7', text: 'A frigid, sacred Jedi world where younglings harvested their kyber crystals. The First Order hollowed it out to build Starkiller Base.', tags: ['Kyber crystals', 'Starkiller Base'] },
  { id: 'coruscant', name: 'Coruscant', biome: 'urban', region: 'Core Worlds', grid: 'L9', text: 'A single planet-spanning city with a population in the trillions — capital of the Republic and then the Empire, seat of the Senate and the Jedi Temple. Its levels stack kilometres deep, from glittering spires to the lawless underworld.', tags: ['Galactic capital', 'Jedi Temple', 'Senate'] },
  { id: 'corellia', name: 'Corellia', biome: 'urban', region: 'Core Worlds', grid: 'N11', text: 'A legendary shipbuilding world — birthplace of the YT freighters, the CR90 corvette and Han Solo.', tags: ['Shipyards', 'Han Solo'] },
  { id: 'alderaan', name: 'Alderaan', biome: 'other', region: 'Core Worlds', grid: 'M10', text: 'A peaceful, cultured world and home of Bail and Leia Organa — destroyed by the Death Star as a demonstration of terror.', tags: ['Destroyed 0 BBY', 'House Organa'] },
  { id: 'chandrila', name: 'Chandrila', biome: 'other', region: 'Core Worlds', grid: 'M8', text: 'Mon Mothma\'s homeworld and the New Republic\'s first capital.', tags: ['New Republic'] },
  { id: 'hosnian-prime', name: 'Hosnian Prime', biome: 'urban', region: 'Core Worlds', grid: 'K11', text: 'Capital of the New Republic in 34 ABY — annihilated with its entire system by Starkiller Base.', tags: ['Destroyed 34 ABY'] },
  { id: 'nar-shaddaa', name: 'Nar Shaddaa', biome: 'urban', region: 'Hutt Space', grid: 'S12', text: 'The "Smuggler\'s Moon" orbiting Nal Hutta — a grimy, neon-lit city-moon of crime, bounty hunters and black markets.', tags: ['Hutt Cartel', 'Smugglers'] },
  { id: 'mustafar', name: 'Mustafar', biome: 'volcanic', region: 'Outer Rim', grid: 'K20', text: 'A hellish volcanic world where Obi-Wan defeated Anakin — and where Darth Vader later built his fortress.', tags: ['The duel', 'Vader\'s castle'] },
  { id: 'sullust', name: 'Sullust', biome: 'volcanic', region: 'Outer Rim', grid: 'M17', text: 'A volcanic world with underground cities, allied with the Rebellion.', tags: ['Rebel ally'] },
  { id: 'kamino', name: 'Kamino', biome: 'ocean', region: 'Wild Space', grid: 'U15', text: 'An ocean world of endless storms and stilt-cities, erased from the Jedi Archives. Its cloners created the Grand Army of the Republic.', tags: ['Clone army', 'Tipoca City'] },
  { id: 'mon-cala', name: 'Mon Cala', biome: 'ocean', region: 'Outer Rim', grid: 'U6', text: 'Home to the Mon Calamari and Quarren. The Mon Calamari built much of the Rebel fleet.', tags: ['Shipyards', 'Admiral Ackbar'] },
  { id: 'ahch-to', name: 'Ahch-To', biome: 'ocean', region: 'Unknown Regions', grid: 'C14', text: 'A remote ocean world of rocky islands — site of the first Jedi Temple and of Luke Skywalker\'s exile.', tags: ['First Jedi Temple', 'Porgs'] },
  { id: 'scarif', name: 'Scarif', biome: 'ocean', region: 'Outer Rim', grid: 'T17', text: 'A tropical world behind a planetary shield, home to the Imperial Citadel data vault. Site of the Battle of Scarif.', tags: ['Shield Gate', 'Rogue One'] },
  { id: 'naboo', name: 'Naboo', biome: 'other', region: 'Mid Rim', grid: 'O17', text: 'A verdant, idyllic world of grasslands, elegant cities and underwater Gungan settlements. Homeworld of Padmé Amidala — and of Sheev Palpatine.', tags: ['Theed', 'Gungans'] },
  { id: 'mandalore', name: 'Mandalore', biome: 'desert', region: 'Outer Rim', grid: 'O7', text: 'Once lush, now largely white desert after centuries of war and the Imperial "Night of a Thousand Tears". Cultural heart of the Mandalorians.', tags: ['Beskar', 'The Great Forge'] },
  { id: 'bespin', name: 'Bespin', biome: 'other', region: 'Outer Rim', grid: 'K17', text: 'A gas giant with Cloud City, a floating tibanna mining colony run by Lando Calrissian. Site of the "I am your father" reveal.', tags: ['Cloud City', 'Tibanna gas'] },
  { id: 'lothal', name: 'Lothal', biome: 'other', region: 'Outer Rim', grid: 'S8', text: 'A grassland world with a hidden Jedi Temple — home of Ezra Bridger and the Ghost crew in *Rebels*.', tags: ['Loth-wolves', 'Rebels'] },
  { id: 'dathomir', name: 'Dathomir', biome: 'other', region: 'Outer Rim', grid: 'Q7', text: 'A dark, misty world of the Nightsisters and Nightbrothers — Darth Maul\'s people.', tags: ['Nightsisters', 'Magick'] },
  { id: 'exegol', name: 'Exegol', biome: 'other', region: 'Unknown Regions', grid: 'B9', text: 'A hidden Sith world deep in the Unknown Regions — dark, lightning-scarred, home of the Sith Eternal and the Final Order.', tags: ['Sith Eternal', 'Final Order'] },
  { id: 'crait', name: 'Crait', biome: 'other', region: 'Outer Rim', grid: 'I17', text: 'A mineral world with a white salt crust over red crystal. Site of the Resistance\'s last stand in *The Last Jedi*.', tags: ['Vulptices', 'Battle of Crait'] },
  { id: 'moraband', name: 'Moraband (Korriban)', biome: 'desert', region: 'Outer Rim', grid: 'R5', text: 'Ancient homeworld of the Sith, a valley of tombs of long-dead Sith Lords.', tags: ['Sith tombs'] },
  { id: 'ryloth', name: 'Ryloth', biome: 'desert', region: 'Outer Rim', grid: 'R17', text: 'Homeworld of the Twi\'leks, liberated from Separatist occupation during the Clone Wars.', tags: ['Twi\'leks', 'Cham Syndulla'] }
];
