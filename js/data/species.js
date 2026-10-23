/* ==========================================================================
   SPECIES & CREATURES
   ========================================================================== */
window.SW = window.SW || {};

SW.speciesIntro = `The galaxy teems with life. Thousands of sentient species are represented in the Galactic Senate and populate its worlds — alongside creatures as small as a porg and as vast as a purrgil.`;

/* kind: 'major' | 'notable' | 'creature' */
SW.species = [
  { id: 'humans', name: 'Humans', kind: 'major', home: 'Coruscant (by most legends)', known: 'Skywalkers, Palpatine, Solo', text: 'The most numerous and politically dominant species. Humans colonised the galaxy extensively. The Empire was notoriously human-supremacist, marginalising and enslaving non-humans.' },
  { id: 'twileks', name: 'Twi\'leks', kind: 'major', home: 'Ryloth', known: 'Hera Syndulla, Aayla Secura', text: 'Humanoids with colourful skin and two head-tails (lekku) used for communication. Widespread as diplomats and dancers — and, tragically, victims of the slave trade.' },
  { id: 'wookiees', name: 'Wookiees', kind: 'major', home: 'Kashyyyk', known: 'Chewbacca, Tarfful', text: 'Towering, fur-covered beings of immense strength, fierce loyalty and lifespans of several centuries. They speak Shyriiwook. The Empire enslaved many of them.' },
  { id: 'rodians', name: 'Rodians', kind: 'major', home: 'Rodia', known: 'Greedo', text: 'Green-skinned, bug-eyed humanoids known as hunters.' },
  { id: 'togruta', name: 'Togruta', kind: 'major', home: 'Shili', known: 'Ahsoka Tano, Shaak Ti', text: 'Humanoids with horn-like montrals and head-tails. Their montrals give them a natural echolocation sense of their surroundings.' },
  { id: 'zabrak', name: 'Zabrak', kind: 'major', home: 'Iridonia / Dathomir', known: 'Darth Maul, Savage Opress', text: 'Horned humanoids. Dathomirian Zabrak Nightbrothers — like Maul — are a distinct people of Dathomir.' },
  { id: 'mon-calamari', name: 'Mon Calamari', kind: 'major', home: 'Mon Cala', known: 'Admiral Ackbar, Raddus', text: 'Amphibious humanoids, renowned shipbuilders and military strategists, and vital allies of the Rebellion.' },
  { id: 'trandoshans', name: 'Trandoshans', kind: 'major', home: 'Trandosha', known: 'Bossk', text: 'Reptilian humanoids who worship the Scorekeeper. Natural rivals of the Wookiees; frequent bounty hunters.' },
  { id: 'duros', name: 'Duros', kind: 'major', home: 'Duro', known: 'Cad Bane', text: 'Blue-green, noseless humanoids — among the first to develop hyperspace travel. Legendary navigators and pilots.' },
  { id: 'chiss', name: 'Chiss', kind: 'major', home: 'Csilla (Unknown Regions)', known: 'Grand Admiral Thrawn', text: 'Blue-skinned, red-eyed near-humans who govern the secretive, highly disciplined Chiss Ascendancy.' },
  { id: 'hutts', name: 'Hutts', kind: 'major', home: 'Nal Hutta', known: 'Jabba the Hutt', text: 'Massive slug-like beings — intelligent, living up to 1,000 years, and supremely powerful crime lords. The Hutt Cartel controls vast swathes of the Outer Rim.' },
  { id: 'gungans', name: 'Gungans', kind: 'major', home: 'Naboo', known: 'Jar Jar Binks, Boss Nass', text: 'Amphibious beings living in bubble cities beneath Naboo\'s lakes, with unique plasma-based technology.' },
  { id: 'bothans', name: 'Bothans', kind: 'major', home: 'Bothawui', known: 'Borsk Fey\'lya', text: 'Fur-covered humanoids famed for their spy network. "Many Bothans died to bring us this information."' },
  { id: 'jawas', name: 'Jawas', kind: 'major', home: 'Tatooine', known: 'Sandcrawler clans', text: 'Small, hooded scavengers who roam Tatooine in huge sandcrawlers, salvaging and trading droids and technology.' },
  { id: 'tuskens', name: 'Tusken Raiders', kind: 'major', home: 'Tatooine', known: 'The Sand People', text: 'Nomadic desert warriors in cloth wraps and breath masks — far more complex and honourable than outsiders assume, as *The Book of Boba Fett* explores.' },
  { id: 'ewoks', name: 'Ewoks', kind: 'major', home: 'Forest Moon of Endor', known: 'Wicket W. Warrick', text: 'Small, bear-like forest dwellers. Their stone-age weapons and gliders proved decisive at the Battle of Endor.' },
  { id: 'cereans', name: 'Cereans', kind: 'notable', known: 'Ki-Adi-Mundi', text: 'Large-brained humanoids with tall, conical skulls.' },
  { id: 'nautolans', name: 'Nautolans', kind: 'notable', known: 'Kit Fisto', text: 'Amphibious beings with sensory head-tentacles.' },
  { id: 'kel-dor', name: 'Kel Dor', kind: 'notable', known: 'Plo Koon', text: 'They wear masks to breathe outside their homeworld\'s unusual atmosphere.' },
  { id: 'mirialans', name: 'Mirialans', kind: 'notable', known: 'Luminara Unduli, Barriss Offee', text: 'Near-humans marked with geometric facial tattoos.' },
  { id: 'ithorians', name: 'Ithorians', kind: 'notable', known: '"Hammerheads"', text: 'Gentle herbivores devoted to environmental stewardship.' },
  { id: 'weequay', name: 'Weequay', kind: 'notable', known: 'Hondo Ohnaka', text: 'Leathery-skinned humanoids often found as pirates and enforcers.' },
  { id: 'talz', name: 'Talz', kind: 'notable', known: 'Orto Plutonia natives', text: 'Furry, four-eyed beings of icy worlds.' },
  { id: 'kaminoans', name: 'Kaminoans', kind: 'notable', known: 'Lama Su, Nala Se', text: 'Tall, slender, pale masters of cloning.' },
  { id: 'geonosians', name: 'Geonosians', kind: 'notable', known: 'Poggle the Lesser', text: 'Insectoid hive-dwellers who drew up the Death Star\'s first plans.' },
  { id: 'pauans', name: 'Pau\'ans', kind: 'notable', known: 'The Grand Inquisitor', text: 'Tall, gaunt humanoids with deeply lined faces.' },
  { id: 'rancor', name: 'Rancor', kind: 'creature', known: 'Jabba\'s pet', text: 'Massive, ferocious predators.' },
  { id: 'sarlacc', name: 'Sarlacc', kind: 'creature', known: 'Great Pit of Carkoon', text: 'A pit-dwelling creature said to digest its prey over thousands of years.' },
  { id: 'krayt', name: 'Krayt Dragon', kind: 'creature', known: 'Tatooine', text: 'Enormous desert predators whose pearls are extremely valuable.' },
  { id: 'mynock', name: 'Mynock', kind: 'creature', known: 'Starship hulls', text: 'Parasitic, bat-like silicon creatures that feed on energy.' },
  { id: 'tauntaun', name: 'Tauntaun', kind: 'creature', known: 'Hoth', text: 'Furry, lizard-like mounts of the ice fields.' },
  { id: 'wampa', name: 'Wampa', kind: 'creature', known: 'Hoth', text: 'Predatory ice creatures.' },
  { id: 'purrgil', name: 'Purrgil', kind: 'creature', known: 'Deep space', text: 'Whale-like beings that travel through hyperspace naturally — they inspired the invention of hyperdrive.' },
  { id: 'loth-wolf', name: 'Loth-wolf', kind: 'creature', known: 'Lothal', text: 'Mystical, Force-connected wolves.' },
  { id: 'porg', name: 'Porg', kind: 'creature', known: 'Ahch-To', text: 'Small, curious seabirds.' },
  { id: 'bantha', name: 'Bantha', kind: 'creature', known: 'Tatooine', text: 'Huge, woolly beasts of burden, sacred to the Tuskens.' }
];
