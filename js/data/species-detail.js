/* ==========================================================================
   SPECIES — in-depth records (keyed by SW.species id)
   planet → SW.planets id for a map link; notable → character ids or names
   ========================================================================== */
window.SW = window.SW || {};

SW.speciesDetail = {
  humans: {
    height: `1.5 – 2 m`, life: `~100 standard years`, lang: `Galactic Basic`, planet: 'coruscant', sentient: true,
    body: `Bipedal mammals with enormous variety in skin, hair and eye colour. Humans are adaptable rather than specialised — able to live on almost any temperate world, from Tatooine's deserts to the cloud-cities of Bespin. Several near-human offshoots (such as the Chiss and Mirialans) share their basic form.`,
    culture: `There is no single human culture: Coruscant's politicians, Corellian spacers, Alderaanian nobility and Tatooine moisture farmers have little in common beyond Basic. Humans have dominated galactic politics for millennia, and most chancellors, emperors and generals of the saga were human.`,
    history: `Most legends place their origin on Coruscant, from where they spread across the Core along the earliest hyperlanes. Under the Empire, "High Human Culture" became official ideology: non-humans were barred from high office, pushed out of the Imperial Navy and, in many cases, enslaved.`,
    notable: ['luke', 'leia', 'han', 'obi-wan', 'sidious', 'rey', 'padme', 'din-djarin'],
    trivia: [`The Empire's officer corps was almost entirely human — Thrawn was the great exception.`, `Galactic Basic, the common tongue, grew from human languages of the Core.`]
  },
  twileks: {
    height: `1.6 – 1.8 m`, life: `Comparable to humans`, lang: `Twi'leki & lekku signing`, planet: 'ryloth', sentient: true,
    body: `Humanoids with skin in a wide range of colours and two prehensile head-tails called lekku, which are sensitive and highly expressive. Twi'leks communicate partly through subtle lekku movements — a silent language outsiders rarely understand.`,
    culture: `Clan-based society on a harsh world. Twi'lek communities value cunning and resilience; Ryloth exports ryll spice, which has drawn criminals and slavers for centuries.`,
    history: `During the Clone Wars, Separatist forces occupied Ryloth until Jedi and clone troops liberated it alongside Cham Syndulla's freedom fighters. Under the Empire, Ryloth was occupied again — and Cham's daughter Hera grew into one of the Rebellion's best pilots.`,
    notable: ['hera', `Aayla Secura`, `Cham Syndulla`, `Bib Fortuna`],
    trivia: [`Lekku can convey emotion and even private messages between Twi'leks.`, `The Free Ryloth movement fought both the Separatists and the Empire.`]
  },
  wookiees: {
    height: `2 – 2.3 m`, life: `Several centuries`, lang: `Shyriiwook`, planet: 'kashyyyk', sentient: true,
    body: `Towering, fur-covered beings of tremendous strength, at home high in Kashyyyk's colossal wroshyr trees. Their vocal cords can't form Basic, but they understand it perfectly — and many other species can understand Shyriiwook.`,
    culture: `Fiercely loyal and honourable. A Wookiee who is saved may swear a life debt to their rescuer. They are gifted craftspeople and mechanics, building treetop cities and weapons such as the bowcaster.`,
    history: `Wookiees fought beside Yoda and the clone army in the defence of Kashyyyk at the end of the Clone Wars. The Empire then enslaved them in vast numbers for labour; Kashyyyk was only freed after the Battle of Endor.`,
    notable: ['chewbacca', `Tarfful`, `Gungi`],
    trivia: [`Chewbacca was over 200 years old during the sequel trilogy.`, `"Let the Wookiee win" — never challenge one at holochess.`]
  },
  rodians: {
    height: `~1.6 m`, life: `Comparable to humans`, lang: `Rodese (most also speak Huttese)`, planet: null, home: `Rodia`, sentient: true,
    body: `Green-skinned humanoids with large faceted eyes, tapir-like snouts, antennae and suction-cup fingertips.`,
    culture: `A society that celebrates the hunt; many Rodians become bounty hunters, though Rodia also sent respected senators to the Republic.`,
    history: `During the Clone Wars, Rodia briefly sided with the Separatists to feed its people, until Padmé Amidala persuaded Senator Onaconda Farr to return to the Republic.`,
    notable: [`Greedo`, `Onaconda Farr`],
    trivia: [`Greedo's confrontation with Han Solo in the Mos Eisley cantina is one of the most debated scenes in film history.`]
  },
  togruta: {
    height: `1.7 – 1.9 m`, life: `Comparable to humans`, lang: `Togruti`, planet: null, home: `Shili`, sentient: true,
    body: `Humanoids with striking facial markings, head-tails (lekku) and hollow horn-like montrals. The montrals give them a passive echolocation sense — an awareness of objects and movement around them.`,
    culture: `Togruta evolved as pack hunters on Shili, and their society prizes cooperation.`,
    history: `Togruta colonies such as Kiros were threatened during the Clone Wars, when Ahsoka Tano helped free colonists from the Zygerrian slavers.`,
    notable: ['ahsoka', `Shaak Ti`],
    trivia: [`Ahsoka's markings later became a symbol for the 332nd Company, who painted them on their helmets.`]
  },
  zabrak: {
    height: `1.7 – 1.8 m`, life: `Comparable to humans`, lang: `Zabraki`, planet: 'dathomir', sentient: true,
    body: `Humanoids crowned with rings of vestigial horns, often decorated with facial tattoos.`,
    culture: `Iridonian Zabrak are proud and self-reliant. On Dathomir, a distinct people — the Nightbrothers — served the Force-wielding Nightsisters, marked with red and black tattoos.`,
    history: `The Nightbrother Maul was taken by Darth Sidious as a child. During the Clone Wars, the Nightsisters were nearly wiped out by Grievous at Dooku's command.`,
    notable: ['maul', `Savage Opress`, `Eeth Koth`],
    trivia: [`Jedi Master Eeth Koth sat on the Jedi Council during the Clone Wars.`]
  },
  'mon-calamari': {
    height: `1.3 – 1.8 m`, life: `Comparable to humans`, lang: `Mon Calamarian`, planet: 'mon-cala', sentient: true,
    body: `Amphibious humanoids with high domed heads, large eyes set wide apart and webbed hands. They breathe both air and water.`,
    culture: `Gifted artists, engineers and shipwrights; their organic, hand-built starships are each unique. They share their world with the Quarren, with whom relations have often been tense.`,
    history: `During the Clone Wars, Prince Lee-Char held Mon Cala together against a Separatist-backed Quarren uprising. Under the Empire, Mon Cala was occupied; the Mon Calamari ultimately joined the Rebellion, converting their cruisers into warships — the backbone of the Rebel fleet.`,
    notable: ['ackbar', `Raddus`, `Lee-Char`],
    trivia: [`Without Mon Calamari cruisers, the Alliance could never have fought a fleet battle like Endor.`]
  },
  trandoshans: {
    height: `1.9 – 2 m`, life: `Comparable to humans`, lang: `Dosh`, planet: null, home: `Trandosha (Dosha)`, sentient: true,
    body: `Reptilian humanoids with scaly skin and the ability to regenerate lost limbs over time.`,
    culture: `They worship the Scorekeeper, earning "jagannath points" through successful hunts — Wookiees are prized quarry, making the two species bitter rivals.`,
    history: `Trandoshan hunters once captured Ahsoka Tano and Chewbacca for sport on a moon of Wasskah — a hunt that ended badly for the hunters.`,
    notable: [`Bossk`, `Garnac`],
    trivia: [`Bossk hunted Han Solo and Chewbacca alongside Boba Fett.`]
  },
  duros: {
    height: `~1.8 m`, life: `Comparable to humans`, lang: `Durese`, planet: null, home: `Duro`, sentient: true,
    body: `Blue-green-skinned humanoids with large red eyes, slit nostrils and no external nose.`,
    culture: `Among the first species to travel hyperspace, the Duros are natural explorers, navigators and pilots, and their stories are told across the spacelanes.`,
    history: `Duros scouts helped chart many of the early hyperlanes that made the Republic possible.`,
    notable: ['cad-bane'],
    trivia: [`Duros appear in the Mos Eisley cantina in the very first Star Wars film.`]
  },
  chiss: {
    height: `1.7 – 1.9 m`, life: `Comparable to humans`, lang: `Cheunh`, planet: null, home: `Csilla (Unknown Regions)`, sentient: true,
    body: `Near-humans with blue skin, blue-black hair and glowing red eyes.`,
    culture: `The Chiss Ascendancy is a disciplined, secretive state led by powerful ruling families. Its navigators are young Force-sensitive girls who guide ships through the chaotic hyperspace of the Unknown Regions — an ability that fades as they grow older.`,
    history: `Rarely seen in the wider galaxy. Thrawn's entry into Imperial service brought a Chiss to the highest ranks of the Empire.`,
    notable: ['thrawn'],
    trivia: [`The Ascendancy traditionally forbids preemptive strikes — one reason Thrawn found himself in exile.`]
  },
  hutts: {
    height: `3.5 m+ long`, life: `Up to 1,000 years`, lang: `Huttese`, planet: 'nar-shaddaa', sentient: true,
    body: `Massive gastropods with powerful tails, short arms and wide mouths. They are hermaphroditic, extremely long-lived and highly resistant to mind tricks.`,
    culture: `Organised into great clans ruled by the Grand Hutt Council. Hutts run vast criminal empires of smuggling, spice and gambling, and Huttese has become the trade language of the underworld.`,
    history: `During the Clone Wars, both sides courted the Hutts for access to their hyperspace lanes — the Republic won by rescuing Jabba's son Rotta. Hutt power on Tatooine collapsed after Jabba's death.`,
    notable: ['jabba', `Ziro the Hutt`, `Gardulla the Hutt`, `Rotta`],
    trivia: [`Nar Shaddaa, the "Smuggler's Moon", orbits the Hutt homeworld Nal Hutta.`]
  },
  gungans: {
    height: `~1.9 m`, life: `Comparable to humans`, lang: `Gungan Basic`, planet: 'naboo', sentient: true,
    body: `Amphibious beings with long ears, extendable tongues and powerful legs, at home both underwater and on land.`,
    culture: `They live in shimmering hydrostatic-bubble cities like Otoh Gunga beneath Naboo's lakes, and use organic technology: energy shields, plasma "boomas", and mounts such as kaadu.`,
    history: `Long distrustful of Naboo's humans, the Gungans allied with Queen Amidala against the Trade Federation, and their Grand Army held the droid army on the plains while Naboo was liberated.`,
    notable: [`Jar Jar Binks`, `Boss Nass`, `Captain Tarpals`],
    trivia: [`Jar Jar Binks proposed the emergency powers motion that let Palpatine create the Grand Army of the Republic.`]
  },
  bothans: {
    height: `1.5 – 1.6 m`, life: `Comparable to humans`, lang: `Bothese`, planet: null, home: `Bothawui`, sentient: true,
    body: `Furred humanoids with pointed ears and keen, calculating minds.`,
    culture: `Masters of intelligence-gathering. The Bothan Spynet trades in secrets across the galaxy, and Bothan politics are famously intricate.`,
    history: `Bothan spies located the second Death Star and learned that the Emperor would be aboard — at a heavy cost in lives.`,
    notable: [`The Bothan Spynet`],
    trivia: [`"Many Bothans died to bring us this information." — Mon Mothma`]
  },
  jawas: {
    height: `~1 m`, life: `Comparable to humans`, lang: `Jawaese`, planet: 'tatooine', sentient: true,
    body: `Small beings hidden in brown hooded robes, with only their glowing eyes visible.`,
    culture: `Nomadic clans roam the dunes in huge sandcrawlers, salvaging droids and scrap to repair and trade. Clans meet for great swap meets to trade goods and arrange marriages.`,
    history: `It was a Jawa clan that sold R2-D2 and C-3PO to Owen Lars — setting Luke Skywalker's journey in motion.`,
    notable: [`The clans of the Dune Sea`],
    trivia: [`Jawas carry ionisation blasters to stun droids before collecting them.`]
  },
  tuskens: {
    height: `~1.8 m`, life: `Unknown`, lang: `Tusken language & sign language`, planet: 'tatooine', sentient: true,
    body: `Almost never seen unmasked; they wrap themselves fully in cloth, goggles and breath filters against the desert.`,
    culture: `Nomadic warrior clans who see themselves as Tatooine's true people and regard the planet's water as theirs. They share a deep bond with banthas, and carry the gaffi stick. Adulthood is marked by trials, including the crafting of a gaffi from a sacred tree.`,
    history: `Long in conflict with settlers and moisture farmers. Boba Fett survived among a Tusken clan after escaping the Sarlacc and was adopted into it, before that clan was massacred by the Pyke Syndicate.`,
    notable: ['boba-fett'],
    trivia: [`Tuskens and settlers have occasionally struck water-sharing truces.`]
  },
  ewoks: {
    height: `~1 m`, life: `Comparable to humans`, lang: `Ewokese`, planet: 'endor', sentient: true,
    body: `Small, furred, bear-like beings with sharp senses for forest life.`,
    culture: `They live in treetop villages such as Bright Tree Village, ruled by a chief and guided by shamans. Their technology is primitive — spears, slings, gliders and log traps — but used with great ingenuity.`,
    history: `At first they planned to roast Han, Luke and Chewbacca; after mistaking C-3PO for a god, they joined the Rebels and helped destroy the Imperial shield generator at the Battle of Endor.`,
    notable: [`Wicket W. Warrick`, `Chief Chirpa`, `Logray`],
    trivia: [`Ewok log traps crushed AT-ST walkers during the battle.`]
  },
  cereans: { height: `~2 m`, home: `Cerea`, body: `Humanoids with tall, conical skulls; Cereans are known for calm, analytical minds.`, notable: [`Ki-Adi-Mundi`] },
  nautolans: { height: `~1.8 m`, home: `Glee Anselm`, body: `Amphibious beings whose head-tentacles sense emotions and pheromones — a gift underwater, overwhelming on dry worlds.`, notable: [`Kit Fisto`] },
  'kel-dor': { height: `~1.9 m`, lang: `Kel Dor`, home: `Dorin`, body: `They need masks and goggles outside their helium-rich home atmosphere; oxygen is toxic to them.`, notable: [`Plo Koon`] },
  mirialans: { height: `~1.7 m`, lang: `Mirialan`, home: `Mirial`, body: `Near-humans with green-yellow skin, often marked with geometric facial tattoos.`, notable: [`Luminara Unduli`, `Barriss Offee`] },
  ithorians: { height: `~1.8 m`, home: `Ithor`, body: `Tall herbivores with curved "hammer" heads and long necks — gentle stewards of their forest world.`, notable: [`Momaw Nadon`] },
  weequay: { height: `~1.8 m`, home: `Sriluur`, body: `Humanoids with tough, leathery skin, often working as pirates, mercenaries and guards.`, notable: [`Hondo Ohnaka`] },
  talz: { height: `~2 m`, home: `Orto Plutonia`, body: `Large, white-furred beings with four eyes, at home on frozen worlds.`, notable: [`Chief Thi-Sen`] },
  kaminoans: { height: `~2.1 m`, lang: `Kaminoan`, planet: 'kamino', body: `Tall, slender, pale beings with long necks, living in stilt cities above Kamino's endless ocean. Their society is built around genetic perfection.`, notable: [`Lama Su`, `Nala Se`, `Taun We`] },
  geonosians: { height: `~1.7 m`, lang: `Geonosian`, planet: 'geonosis', body: `Winged insectoids living in hive castes under a queen. Brilliant engineers of droid foundries — and of the first Death Star plans. The Empire later sterilised their world to protect the secret.`, notable: [`Poggle the Lesser`, `Queen Karina`] },
  pauans: { height: `~1.9 m`, home: `Utapau`, body: `Tall, gaunt beings with deeply grooved grey skin and sharp teeth, adapted to life in Utapau's sinkholes.`, notable: ['grand-inquisitor', `Tion Medon`] },
  rancor: { height: `5 – 10 m`, home: `Dathomir (origin)`, body: `Huge predators with long arms, massive claws and a tough hide. Jabba kept one in a pit beneath his throne room.` },
  sarlacc: { planet: 'tatooine', body: `An immense creature living buried in the sand, only its beak and tentacles visible. Victims are slowly digested — reportedly over a thousand years.` },
  krayt: { height: `Enormous`, planet: 'tatooine', body: `Enormous desert predators. Their gizzards produce priceless pearls; Din Djarin and Cobb Vanth fought one with the help of Tuskens.` },
  mynock: { height: `~1.6 m wingspan`, home: `Deep space`, body: `Silicon-based parasites that latch onto starships to feed on power cables and energy.` },
  tauntaun: { height: `~2 m`, planet: 'hoth', body: `Furred, lizard-like mounts of Hoth's ice plains; their body heat kept Luke alive in a blizzard.` },
  wampa: { height: `~3 m`, planet: 'hoth', body: `Large white-furred predators that drag prey back to ice caves.` },
  purrgil: { height: `Up to hundreds of metres`, home: `Deep space`, body: `Space-whales that travel through hyperspace naturally, breathing clouds of Clouzon-36 gas. They inspired the invention of the hyperdrive, and carried Ezra and Thrawn out of the galaxy.` },
  'loth-wolf': { height: `~2 m at the shoulder`, planet: 'lothal', body: `Giant, Force-connected wolves that can travel vast distances through hyperspace-like paths, appearing to those who share a bond with Lothal.` },
  porg: { height: `~30 cm`, planet: 'ahch-to', body: `Small, curious seabirds nesting on Ahch-To's cliffs — and later aboard the Millennium Falcon.` },
  bantha: { height: `~2.5 m`, planet: 'tatooine', body: `Huge, shaggy herbivores used as beasts of burden; Tusken Raiders bond with them for life.` }
};
