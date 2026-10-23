/* ==========================================================================
   CHARACTERS — in-depth records
   species → SW.species id (or free text), home → SW.planets id (or free text),
   aff → SW.factions ids (or free text), rel → [character id or name, relation]
   groups: jedi | villains | heroes | empire | mando | droids
   side:   light | dark | grey | neutral
   ========================================================================== */
window.SW = window.SW || {};

SW.charGroups = [
  { id: 'jedi', name: 'Jedi & Force users', tab: 'Jedi' },
  { id: 'villains', name: 'Sith & villains', tab: 'Villains' },
  { id: 'heroes', name: 'Republic, Rebellion & Resistance', tab: 'Heroes' },
  { id: 'empire', name: 'Empire, Separatists & First Order', tab: 'Imperials' },
  { id: 'mando', name: 'Mandalorians & underworld', tab: 'Mandalorians & underworld' },
  { id: 'droids', name: 'Droids', tab: 'Droids' }
];

SW.sides = {
  light: { name: 'Light side', color: '#3fa9ff' },
  dark: { name: 'Dark side', color: '#ff2b2b' },
  grey: { name: 'Fallen & redeemed', color: '#c9a0ff' },
  neutral: { name: 'Unaligned', color: '#d9b25a' }
};

SW.characters = [
  /* ---------------- JEDI & FORCE USERS ---------------- */
  {
    id: 'yoda', name: `Yoda`, alias: `Grand Master of the Jedi Order`, groups: ['jedi'], side: 'light', era: 'fall',
    species: `Yoda's species (name unknown)`, home: `Unknown`, born: `896 BBY`, died: `4 ABY · Dagobah`, saber: '#46ff73', aff: ['jedi', 'republic'],
    short: `The legendary Grand Master who trained Jedi for some eight hundred years.`,
    bio: `Almost nothing is known of Yoda's origins or of his species — only that he lived nine centuries and trained Jedi for eight hundred years. Already a revered Master in the High Republic era, he led the Jedi Council as Grand Master through the Republic's final decades, teaching generations of younglings and taking the future Count Dooku as his Padawan.

In the Clone Wars he became a general, leading the clone army that saved the Jedi at Geonosis and defending Kashyyyk alongside the Wookiees. When Order 66 came he sensed the betrayal in the Force, struck down his clone escort and confronted Darth Sidious in the Senate chamber. Their duel ended in stalemate, and Yoda chose exile on the swamp world of Dagobah.

Two decades later he trained Luke Skywalker, warning him against the quick and easy path of the dark side. Before dying at the age of 900 he confirmed that Vader was Luke's father. As a Force spirit he later visited Luke on Ahch-To, teaching one last lesson: that failure, too, is a teacher.`,
    moments: [[`High Republic`, `Already a Jedi Master serving across the frontier.`], [`22 BBY`, `Leads the clone army to Geonosis and duels Count Dooku, his former Padawan.`], [`19 BBY`, `Survives Order 66 on Kashyyyk; duels Sidious, then goes into exile on Dagobah.`], [`3 ABY`, `Trains Luke Skywalker.`], [`4 ABY`, `Becomes one with the Force at the age of 900.`], [`34 ABY`, `Appears to Luke on Ahch-To and calls lightning down on the ancient Jedi tree.`]],
    skills: [`Form IV (Ataru) mastery`, `Foresight & battle meditation`, `Retaining identity after death`, `Teacher of generations`],
    gear: [`Green lightsaber`, `Gimer stick`],
    rel: [['dooku', 'Former Padawan'], ['luke', 'Student'], ['obi-wan', 'Fellow Council Master'], ['sidious', 'Nemesis'], ['grogu', 'Of the same rare species']],
    quote: `Do. Or do not. There is no try.`,
    seen: [`Episodes I–III, V, VI, VIII`, `The Clone Wars`, `Tales of the Jedi`]
  },
  {
    id: 'obi-wan', name: `Obi-Wan Kenobi`, alias: `"Ben" · The Negotiator`, groups: ['jedi'], side: 'light', era: 'fall',
    species: 'humans', home: `Stewjon`, born: `57 BBY`, died: `0 BBY · First Death Star`, saber: '#3fa9ff', aff: ['jedi', 'republic', 'rebellion'],
    short: `Jedi Master, Clone Wars general and guardian of the Skywalker twins.`,
    bio: `Brought to the Jedi Temple as an infant, Obi-Wan became the Padawan of the maverick Qui-Gon Jinn. At Naboo he faced Darth Maul — the first Sith seen in a thousand years — and avenged his master's death. Honouring Qui-Gon's dying wish, he took the boy Anakin Skywalker as his apprentice.

In the Clone Wars he was one of the Republic's finest generals, known as "the Negotiator", commanding the 212th Attack Battalion with Commander Cody. He discovered the clone army on Kamino, killed General Grievous on Utapau, survived Order 66 — and then faced his fallen apprentice on Mustafar, leaving Anakin maimed and burning.

For nineteen years he lived as "Ben" on Tatooine, watching over Luke. He left exile once to rescue a kidnapped young Leia, ended Maul's life in the desert, and finally let Vader strike him down aboard the Death Star — becoming one with the Force so he could keep guiding Luke.`,
    moments: [[`32 BBY`, `Defeats Darth Maul on Naboo; takes Anakin as his Padawan.`], [`22 BBY`, `Discovers the secret clone army on Kamino.`], [`19 BBY`, `Kills Grievous on Utapau; defeats Anakin on Mustafar.`], [`9 BBY`, `Rescues young Leia and duels Vader again.`], [`2 BBY`, `Ends Maul's life on Tatooine.`], [`0 BBY`, `Sacrifices himself aboard the Death Star.`]],
    skills: [`Form III (Soresu) — the master defender`, `Diplomacy and negotiation`, `Reluctant but able pilot`, `Force spirit`],
    gear: [`Blue lightsaber`, `Eta-2 Jedi Interceptor`],
    rel: [['qui-gon', 'Master'], ['anakin', 'Apprentice'], ['luke', 'Mentor'], ['leia', 'Rescued her as a child'], ['maul', 'Nemesis'], ['padme', 'Friend']],
    quote: `You were my brother, Anakin.`,
    seen: [`Episodes I–IV (V–VI as a spirit)`, `The Clone Wars`, `Rebels`, `Obi-Wan Kenobi`]
  },
  {
    id: 'qui-gon', name: `Qui-Gon Jinn`, alias: `Maverick of the Living Force`, groups: ['jedi'], side: 'light', era: 'fall',
    species: 'humans', home: 'coruscant', born: `92 BBY`, died: `32 BBY · Naboo`, saber: '#46ff73', aff: ['jedi'],
    short: `The Jedi Master who found Anakin Skywalker — and first learned to live on after death.`,
    bio: `Trained by Count Dooku, Qui-Gon was a Jedi who trusted the Living Force over the Council's caution, which kept him off the Council itself. Sent with his Padawan Obi-Wan to negotiate with the Trade Federation, he escaped the invasion of Naboo with Queen Amidala and was stranded on Tatooine.

There he discovered Anakin Skywalker, a slave boy with an unprecedented midi-chlorian count, and became convinced he was the Chosen One. He won the boy's freedom in a podrace wager and brought him before a sceptical Council.

On Naboo he fell to Darth Maul's blade. Yet through his training in the mysteries of the Force, Qui-Gon was the first Jedi to learn how to preserve his identity after death — knowledge he passed on to Yoda and Obi-Wan.`,
    moments: [[`32 BBY`, `Escapes the Naboo blockade with Queen Amidala.`], [`32 BBY`, `Frees Anakin on Tatooine and duels Darth Maul in the desert.`], [`32 BBY`, `Killed by Maul in Theed; asks Obi-Wan to train Anakin.`], [`After death`, `Speaks to Yoda — and later Obi-Wan — from the Force.`]],
    skills: [`Form IV (Ataru)`, `Living Force attunement`, `Pioneer of the Force spirit`],
    gear: [`Green lightsaber`],
    rel: [['dooku', 'Master'], ['obi-wan', 'Apprentice'], ['anakin', 'Discovered him'], ['maul', 'Killed by'], ['padme', 'Protected her']],
    quote: `Your focus determines your reality.`,
    seen: [`Episode I`, `The Clone Wars (voice)`, `Obi-Wan Kenobi`]
  },
  {
    id: 'mace-windu', name: `Mace Windu`, alias: `Master of the Order`, groups: ['jedi'], side: 'light', era: 'fall',
    species: 'humans', home: `Unknown`, born: `72 BBY`, died: `19 BBY · Coruscant`, saber: '#b46cff', aff: ['jedi', 'republic'],
    short: `Senior Council member, creator of Vaapad, and the Jedi who tried to arrest Palpatine.`,
    bio: `Second only to Yoda on the Jedi Council, Mace Windu was one of the most formidable duellists in the Order's history. He developed Vaapad, a style that channels a duellist's own darkness through the light — dangerous for anyone but its creator. His purple blade was unique in the Order.

At Geonosis he beheaded Jango Fett, and throughout the Clone Wars he fought on worlds such as Ryloth. Sceptical of Anakin from the start, he refused to make him a Master.

When Anakin revealed that Chancellor Palpatine was a Sith Lord, Windu led three Masters to arrest him. Only Windu survived the fight — and he had Sidious beaten until Anakin intervened, severing his sword arm. Sidious hurled him from the window with Force lightning.`,
    moments: [[`32 BBY`, `Sits on the Council that tests the young Anakin.`], [`22 BBY`, `Kills Jango Fett at the Battle of Geonosis.`], [`22–19 BBY`, `Leads the liberation of Ryloth.`], [`19 BBY`, `Defeats Sidious — then is betrayed by Anakin and killed.`]],
    skills: [`Form VII (Juyo / Vaapad)`, `Shatterpoint perception`, `Commander of the 91st`],
    gear: [`Purple lightsaber`],
    rel: [['yoda', 'Fellow Council Master'], ['sidious', 'Tried to arrest him'], ['anakin', 'Betrayed by'], ['jango-fett', 'Killed him']],
    quote: `This party's over.`,
    seen: [`Episodes I–III`, `The Clone Wars`]
  },
  {
    id: 'anakin', name: `Anakin Skywalker`, alias: `Darth Vader`, groups: ['jedi', 'villains', 'empire'], side: 'grey', era: 'fall',
    species: 'humans', home: 'tatooine', born: `41 BBY`, died: `4 ABY · Second Death Star`, saber: '#3fa9ff', saber2: '#ff2b2b', aff: ['jedi', 'republic', 'sith', 'empire'],
    short: `The Chosen One: Jedi hero, Sith Lord, and finally the father who saved his son.`,
    bio: `Born to Shmi Skywalker with no father, Anakin grew up a slave on Tatooine — a gifted mechanic, podracer and pilot who built C-3PO from scraps. Qui-Gon Jinn freed him, believing him the Chosen One. Trained by Obi-Wan, he became the "Hero With No Fear" of the Clone Wars, commanding the 501st Legion and training Ahsoka Tano — while secretly married to Padmé Amidala.

Haunted by his mother's death and by visions of Padmé dying, he was seduced by Palpatine's promise of power over death. He betrayed Mace Windu, became Darth Vader and led the 501st against the Jedi Temple. On Mustafar Obi-Wan left him maimed and burning, and he was rebuilt in black armour — more machine than man.

For two decades Vader was the Emperor's enforcer, hunting the last Jedi. But his son Luke refused to believe he was lost. At Endor, watching the Emperor torture Luke, Anakin threw his master down the reactor shaft — destroying the Sith, fulfilling the prophecy — and died as Anakin Skywalker.`,
    moments: [[`32 BBY`, `Freed from slavery; destroys the droid control ship at Naboo.`], [`22 BBY`, `Loses his mother; marries Padmé in secret.`], [`22–19 BBY`, `Hero of the Clone Wars; trains Ahsoka.`], [`19 BBY`, `Falls to the dark side; Order 66; defeated on Mustafar.`], [`0 BBY`, `Strikes down Obi-Wan; flies at the Battle of Yavin.`], [`3 ABY`, `Reveals the truth to Luke on Cloud City.`], [`4 ABY`, `Turns on the Emperor and is redeemed.`]],
    skills: [`Legendary pilot`, `Form V (Djem So) — raw power`, `Brilliant mechanic`, `Highest midi-chlorian count ever recorded`],
    gear: [`Blue lightsaber (later Luke's)`, `Red lightsaber`, `TIE Advanced x1`, `Life-support armour`],
    rel: [['obi-wan', 'Master'], ['ahsoka', 'Padawan'], ['padme', 'Wife'], ['luke', 'Son'], ['leia', 'Daughter'], ['sidious', 'Sith Master'], ['ben-solo', 'Grandson'], ['c-3po', 'Built him']],
    quote: `No. I am your father.`,
    seen: [`Episodes I–VI`, `Rogue One`, `The Clone Wars`, `Rebels`, `Obi-Wan Kenobi`, `Ahsoka`]
  },
  {
    id: 'ahsoka', name: `Ahsoka Tano`, alias: `Fulcrum · Snips`, groups: ['jedi'], side: 'light', era: 'fall',
    species: 'togruta', home: `Shili`, born: `36 BBY`, died: `—`, saber: '#f5f7ff', aff: ['jedi', 'republic', 'rebellion'],
    short: `Anakin's Padawan, who walked away from the Jedi Order — and became something more.`,
    bio: `Assigned by Yoda as Anakin Skywalker's Padawan at fourteen, Ahsoka grew from a brash youngster into one of the Clone Wars' most capable commanders, fighting beside Captain Rex and the 501st. Framed for a bombing at the Jedi Temple, she was expelled and put on trial; Anakin proved her innocence, but she chose to leave the Order.

She returned to lead the Siege of Mandalore, capturing Maul just as Order 66 struck. Helped by Rex, she survived. Under the codename Fulcrum she became a key agent of the early Rebellion, and on Malachor she duelled Darth Vader — confirming that her old master lived inside the armour.

Saved by Ezra Bridger through the World Between Worlds, Ahsoka resurfaced after the Empire's fall. She hunted Thrawn, trained Sabine Wren, and crossed paths with Din Djarin and Grogu — a wanderer devoted to the light, if not to the Jedi.`,
    moments: [[`22 BBY`, `Becomes Anakin's Padawan at the Battle of Christophsis.`], [`20 BBY`, `Framed, cleared, and leaves the Jedi Order.`], [`19 BBY`, `Leads the Siege of Mandalore; survives Order 66.`], [`2 BBY`, `Duels Darth Vader on Malachor.`], [`9 ABY`, `Hunts Thrawn and trains Sabine Wren.`]],
    skills: [`Dual-blade Jar'Kai`, `Reverse-grip Shien`, `Covert operations`, `Togruta spatial sense`],
    gear: [`Twin white lightsabers`, `Earlier: green sabers`],
    rel: [['anakin', 'Master'], ['rex', 'Comrade'], ['sabine', 'Apprentice'], ['ezra', 'Saved her'], ['bo-katan', 'Ally'], ['grogu', 'Tested his training']],
    quote: `I am no Jedi.`,
    seen: [`The Clone Wars`, `Rebels`, `The Mandalorian`, `The Book of Boba Fett`, `Ahsoka`, `Tales of the Jedi`]
  },
  {
    id: 'luke', name: `Luke Skywalker`, alias: `Hero of Yavin`, groups: ['jedi', 'heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: 'tatooine', born: `19 BBY`, died: `34 ABY · Ahch-To`, saber: '#46ff73', aff: ['jedi', 'rebellion', 'new-republic'],
    short: `Farm boy, Rebel pilot and Jedi Knight who saw the good in his father.`,
    bio: `Hidden on Tatooine with his aunt and uncle, Luke grew up a restless farm boy — until two droids carrying the Death Star plans led him to Obi-Wan Kenobi. After the Empire murdered his family he joined the Rebellion, rescued Princess Leia and, trusting the Force, fired the shot that destroyed the Death Star.

He trained with Yoda on Dagobah, lost his hand and learned the truth about his father at Cloud City. At Endor he surrendered to Vader, refused to kill him, and endured the Emperor's lightning — and his faith redeemed Anakin Skywalker.

Luke rebuilt the Jedi, briefly training Grogu and later his nephew Ben Solo. When he sensed Snoke's darkness in Ben and, for one instant, considered killing him, Ben turned and the new temple burned. Luke exiled himself on Ahch-To until Rey found him. At Crait he projected himself across the galaxy to save the Resistance, then became one with the Force.`,
    moments: [[`0 BBY`, `Destroys the Death Star at the Battle of Yavin.`], [`3 ABY`, `Trains with Yoda; learns Vader is his father.`], [`4 ABY`, `Redeems his father at Endor.`], [`9 ABY`, `Rescues Grogu and the Mandalorian aboard Gideon's cruiser.`], [`~28 ABY`, `His temple falls when Ben Solo turns.`], [`34 ABY`, `Trains Rey; his last stand at Crait.`]],
    skills: [`Ace X-wing pilot`, `Force projection`, `Lightsaber combat`, `Unshakable compassion`],
    gear: [`Anakin's blue lightsaber`, `Self-built green lightsaber`, `X-wing "Red Five"`],
    rel: [['anakin', 'Father'], ['leia', 'Twin sister'], ['obi-wan', 'Mentor'], ['yoda', 'Master'], ['han', 'Best friend'], ['ben-solo', 'Nephew & student'], ['rey', 'Student'], ['grogu', 'Student'], ['r2-d2', 'Companion']],
    quote: `I'll never turn to the dark side.`,
    seen: [`Episodes III (infant), IV–IX`, `The Mandalorian`, `The Book of Boba Fett`]
  },
  {
    id: 'rey', name: `Rey Skywalker`, alias: `The scavenger of Jakku`, groups: ['jedi', 'heroes'], side: 'light', era: 'sequel',
    species: 'humans', home: 'jakku', born: `15 ABY`, died: `—`, saber: '#ffd34a', aff: ['resistance', 'jedi'],
    short: `A scavenger with no name who became the last Jedi — and chose her own family.`,
    bio: `Left on Jakku as a child, Rey scavenged Star Destroyer wrecks for food and waited for parents who never returned. Her world changed when she met BB-8 and Finn, escaped in the Millennium Falcon and awakened to the Force — resisting Kylo Ren's mind probe and even defeating him on Starkiller Base.

She sought out Luke Skywalker on Ahch-To and pushed him to teach her. Through a strange bond she spoke to Kylo across the stars, and on the Supremacy she fought beside him against Snoke's guards — then refused his offer to rule the galaxy.

Trained further by Leia, Rey learned she was the granddaughter of Palpatine. On Exegol, she and Ben Solo — a dyad in the Force — faced the resurrected Emperor, and with the voices of all the Jedi behind her she destroyed him. On Tatooine she buried Luke and Leia's sabers and took the name Skywalker.`,
    moments: [[`34 ABY`, `Leaves Jakku; awakens to the Force; finds Luke on Ahch-To.`], [`34 ABY`, `Fights alongside Kylo against Snoke's Praetorian Guard.`], [`35 ABY`, `Learns she is a Palpatine.`], [`35 ABY`, `Defeats Palpatine on Exegol; is revived by Ben.`], [`35 ABY`, `Takes the name Skywalker.`]],
    skills: [`Staff fighting`, `Natural pilot and mechanic`, `Force healing`, `Half of a Force dyad`],
    gear: [`Quarterstaff`, `Luke's (and Anakin's) blue saber`, `Self-built yellow saber`],
    rel: [['luke', 'Master'], ['leia', 'Master'], ['ben-solo', 'Dyad'], ['sidious', 'Grandfather'], ['finn', 'Friend'], ['poe', 'Friend'], ['chewbacca', 'Co-pilot']],
    quote: `Rey. Rey Skywalker.`,
    seen: [`Episodes VII–IX`]
  },
  {
    id: 'ben-solo', name: `Ben Solo`, alias: `Kylo Ren`, ini: 'KR', groups: ['jedi', 'villains', 'empire'], side: 'grey', era: 'sequel',
    species: 'humans', home: `Chandrila`, born: `5 ABY`, died: `35 ABY · Exegol`, saber: '#ff2b2b', aff: ['first-order', 'jedi'],
    short: `Son of Han and Leia, Supreme Leader of the First Order — and finally Ben again.`,
    bio: `The son of Han Solo and Leia Organa, Ben was strong in the Force from birth — and Snoke whispered to him from the start. Sent to train with his uncle Luke, he woke one night to find Luke standing over him with a lit saber. Ben brought the temple down, joined the Knights of Ren and took the name Kylo Ren.

As Snoke's apprentice and a commander of the First Order, he worshipped his grandfather Darth Vader and killed his own father on Starkiller Base. On the Supremacy he slew Snoke and seized the title of Supreme Leader, offering Rey a place at his side.

Torn between light and dark, he was turned back by Leia's final call and by the memory of his father. As Ben Solo he joined Rey on Exegol against Palpatine, and when she died he gave his own life to revive her.`,
    moments: [[`~28 ABY`, `Destroys Luke's temple and becomes Kylo Ren.`], [`34 ABY`, `Kills Han Solo on Starkiller Base.`], [`34 ABY`, `Kills Snoke and becomes Supreme Leader.`], [`35 ABY`, `Redeemed; fights beside Rey on Exegol.`], [`35 ABY`, `Gives his life to save Rey.`]],
    skills: [`Force freeze & mind probe`, `Brutal saber style`, `Half of a Force dyad`, `Force healing`],
    gear: [`Unstable crossguard lightsaber`, `TIE Silencer & TIE Whisper`],
    rel: [['han', 'Father (killed him)'], ['leia', 'Mother'], ['luke', 'Uncle & master'], ['snoke', 'Master (killed him)'], ['rey', 'Dyad'], ['anakin', 'Grandfather']],
    quote: `Let the past die. Kill it, if you have to.`,
    seen: [`Episodes VII–IX`]
  },
  {
    id: 'grogu', name: `Grogu`, alias: `"The Child" · Din Grogu`, groups: ['jedi', 'mando'], side: 'light', era: 'new-republic',
    species: `Yoda's species`, home: `Unknown`, born: `41 BBY`, died: `—`, aff: ['jedi', 'mandalorians'],
    short: `A fifty-year-old foundling who chose the Way of the Mandalore.`,
    bio: `Grogu was a youngling at the Jedi Temple when Order 66 struck, rescued from the massacre by Jedi Master Kelleran Beq. He spent years hidden before falling into Imperial hands, where Dr. Pershing studied his blood for Project Necromancer.

In 9 ABY the Mandalorian bounty hunter Din Djarin was hired to deliver him — and instead rescued him, setting off a chase across the galaxy. Grogu revealed powerful Force abilities and earned his name when Ahsoka Tano spoke with him through the Force.

Luke Skywalker took Grogu for training, but given the choice between the Jedi and his father-figure, Grogu chose Din. He was later adopted as Din's foundling and apprentice — a Mandalorian with the Force.`,
    moments: [[`19 BBY`, `Rescued from the Jedi Temple during Order 66.`], [`9 ABY`, `Found by Din Djarin on Arvala-7.`], [`9 ABY`, `Taken by Luke Skywalker to train.`], [`9 ABY`, `Returns to Din; formally adopted as his foundling.`]],
    skills: [`Telekinesis`, `Force healing`, `Force choke (instinctive)`, `Eating frog eggs`],
    gear: [`Beskar chainmail shirt`, `Hover-pram`],
    rel: [['din-djarin', 'Adoptive father'], ['luke', 'Teacher'], ['ahsoka', 'Learned his name'], ['yoda', 'Same species']],
    seen: [`The Mandalorian`, `The Book of Boba Fett`]
  },
  {
    id: 'kanan', name: `Kanan Jarrus`, alias: `Caleb Dume`, groups: ['jedi', 'heroes'], side: 'light', era: 'empire',
    species: 'humans', home: 'coruscant', born: `c. 33 BBY`, died: `1 BBY · Lothal`, saber: '#3fa9ff', aff: ['jedi', 'rebellion'],
    short: `A Padawan who survived Order 66 and became a Jedi Knight in the Rebellion.`,
    bio: `As Padawan Caleb Dume he survived Order 66 when his master Depa Billaba sacrificed herself so he could flee. He hid his identity for years as the drifter Kanan Jarrus, until he met Hera Syndulla and joined the crew of the Ghost.

On Lothal he found Ezra Bridger and took him as his Padawan, becoming a teacher despite never finishing his own training. Blinded by Maul on Malachor, he learned to see through the Force — and was recognised as a Jedi Knight by the Temple Guard on Lothal.

Kanan died shielding Hera, Ezra and Sabine from a fuel-depot explosion, buying the time Lothal needed to be free.`,
    moments: [[`19 BBY`, `Survives Order 66 on Kaller.`], [`5 BBY`, `Takes Ezra Bridger as his apprentice.`], [`2 BBY`, `Blinded by Maul on Malachor.`], [`1 BBY`, `Sacrifices himself on Lothal.`]],
    skills: [`Form III (Soresu)`, `Sight through the Force`, `Gunslinger`],
    gear: [`Blue lightsaber (split hilt)`, `DL-18 blaster`],
    rel: [['ezra', 'Apprentice'], ['hera', 'Partner'], ['sabine', 'Crewmate'], ['maul', 'Blinded him']],
    seen: [`Rebels`, `Kanan (comic)`]
  },
  {
    id: 'ezra', name: `Ezra Bridger`, alias: `Spectre 6`, groups: ['jedi', 'heroes'], side: 'light', era: 'empire',
    species: 'humans', home: 'lothal', born: `19 BBY`, died: `—`, saber: '#46ff73', aff: ['rebellion', 'jedi'],
    short: `A Lothal street kid who saved Ahsoka — and vanished with Thrawn.`,
    bio: `Born on Lothal the day the Empire was declared, Ezra lost his parents to Imperial prisons and survived as a street thief. When the Ghost crew crossed his path, Kanan sensed the Force in him and made him his Padawan.

He walked a dangerous line — tempted by a Sith holocron on Malachor — but found his own path, including a rare gift for connecting with animals like the Loth-wolves and purrgil. In the World Between Worlds he pulled Ahsoka Tano out of her fatal duel with Vader.

To free Lothal he called the purrgil to drag Thrawn's flagship into hyperspace, vanishing with it. Years later Ahsoka and Sabine found him in another galaxy and brought him home.`,
    moments: [[`5 BBY`, `Joins the Ghost crew.`], [`2 BBY`, `Enters the World Between Worlds and saves Ahsoka.`], [`1 BBY`, `Liberates Lothal; disappears with Thrawn.`], [`~9 ABY`, `Found on Peridea and returns home.`]],
    skills: [`Animal communion through the Force`, `Slicing and street smarts`, `Telekinesis`],
    gear: [`Blaster-saber hybrid (blue)`, `Green lightsaber`],
    rel: [['kanan', 'Master'], ['hera', 'Family'], ['sabine', 'Friend'], ['thrawn', 'Nemesis'], ['ahsoka', 'Saved her']],
    seen: [`Rebels`, `Ahsoka`]
  },
  {
    id: 'cal-kestis', name: `Cal Kestis`, alias: `Last of the Padawans`, groups: ['jedi'], side: 'light', era: 'empire',
    species: 'humans', home: `Unknown (hid on Bracca)`, born: `c. 32 BBY`, died: `—`, saber: '#3fa9ff', aff: ['jedi'],
    short: `A Padawan in hiding who chose to protect the Jedi's future rather than rebuild its past.`,
    bio: `Padawan to Jaro Tapal, Cal survived Order 66 when his master died protecting him. He hid as a ship-scrapper on Bracca until a moment of using the Force exposed him to the Inquisitors.

Rescued by Cere Junda and the crew of the Mantis, he went in search of a holocron listing Force-sensitive children — and ultimately destroyed it, deciding those children should choose their own fate rather than be hunted. He faced the Second Sister and even Darth Vader.

His psychometry — the ability to read echoes of the past in objects — makes him unusual among Jedi.`,
    moments: [[`19 BBY`, `Survives Order 66 when his master falls.`], [`14 BBY`, `Exposed on Bracca; joins the Mantis crew.`], [`14 BBY`, `Destroys the holocron of Force-sensitive children.`]],
    skills: [`Psychometry (Force echoes)`, `Adaptable saber stances`, `Climbing and parkour`],
    gear: [`Customisable lightsaber`, `Droid companion BD-1`],
    rel: [['anakin', 'Fought him as Vader'], ['grand-inquisitor', 'Hunted by the Inquisitorius']],
    seen: [`Jedi: Fallen Order`, `Jedi: Survivor`]
  },
  {
    id: 'avar-kriss', name: `Avar Kriss`, alias: `Marshal of Starlight Beacon`, groups: ['jedi'], side: 'light', era: 'high-republic',
    species: 'humans', home: `Unknown`, born: `High Republic era`, died: `—`, saber: '#46ff73', aff: ['jedi', 'republic'],
    short: `The High Republic's greatest hero, who hears the Force as a song.`,
    bio: `Avar Kriss perceives the Force as music — a song linking all life. During the Great Disaster at Hetzal, she joined the minds of dozens of Jedi in a single chorus to move debris away from a doomed system, saving millions and becoming the "Hero of Hetzal".

As Marshal of the Starlight Beacon, the great frontier station, she led the Jedi of the Outer Rim against the Nihil and their leader Marchion Ro, pursuing him relentlessly even after the station fell.`,
    moments: [[`~232 BBY`, `Saves the Hetzal system during the Great Disaster.`], [`~232 BBY`, `Becomes Marshal of Starlight Beacon.`], [`High Republic`, `Leads the hunt for Marchion Ro and the Nihil.`]],
    skills: [`The Force as song`, `Joining many minds in the Force`, `Leadership`],
    gear: [`Lightsaber`],
    rel: [[`Elzar Mann`, `Closest friend`], [`Stellan Gios`, `Fellow Master`], [`Marchion Ro`, `Nemesis`]],
    seen: [`The High Republic novels & comics`]
  },

  /* ---------------- SITH & VILLAINS ---------------- */
  {
    id: 'sidious', name: `Sheev Palpatine`, alias: `Darth Sidious · The Emperor`, groups: ['villains', 'empire'], side: 'dark', era: 'fall',
    species: 'humans', home: 'naboo', born: `84 BBY`, died: `4 ABY (apparently) · 35 ABY · Exegol`, saber: '#ff2b2b', aff: ['sith', 'republic', 'empire'],
    short: `Senator, Chancellor, Emperor — the Sith Lord who played both sides of a galactic war.`,
    bio: `A senator from Naboo, Palpatine was secretly Darth Sidious, apprentice of Darth Plagueis — whom he murdered in his sleep. He orchestrated the invasion of his own homeworld to win the Supreme Chancellorship, then built the Clone Wars from both sides, controlling the Separatists through Count Dooku while the Senate handed him ever-greater emergency powers.

With Order 66 he destroyed the Jedi and proclaimed himself Emperor. He turned Anakin Skywalker into Darth Vader and ruled through fear for over two decades — until Vader threw him down the second Death Star's reactor shaft.

But Sidious had prepared for death. His consciousness survived in a failing clone body on Exegol, where the Sith Eternal built him the Final Order. He created Snoke as a puppet and lured his granddaughter Rey to Exegol — and was destroyed at last when she turned his own lightning back on him.`,
    moments: [[`Before 32 BBY`, `Murders his master, Darth Plagueis.`], [`32 BBY`, `Engineers the Naboo crisis; becomes Chancellor.`], [`19 BBY`, `Executes Order 66; declares the Empire.`], [`4 ABY`, `Thrown down the reactor shaft by Vader.`], [`35 ABY`, `Returns on Exegol; destroyed by Rey.`]],
    skills: [`Master manipulator`, `Force lightning`, `Essence transfer`, `Devastating duellist`],
    gear: [`Red lightsaber(s)`, `The Death Stars`, `The Final Order`],
    rel: [['plagueis', 'Master (killed him)'], ['maul', 'Apprentice'], ['dooku', 'Apprentice'], ['anakin', 'Apprentice'], ['snoke', 'His creation'], ['rey', 'Granddaughter'], ['padme', 'Fellow Nubian']],
    quote: `Unlimited power!`,
    seen: [`Episodes I–III, V, VI, IX`, `The Clone Wars`, `Rebels`]
  },
  {
    id: 'plagueis', name: `Darth Plagueis`, alias: `"The Wise"`, groups: ['villains'], side: 'dark', era: 'fall',
    species: `Muun`, home: `Unknown`, born: `Unknown`, died: `Before 32 BBY · killed by Sidious`, aff: ['sith'],
    short: `The Sith Lord who sought to conquer death — and was murdered in his sleep.`,
    bio: `A Muun Sith Lord in Darth Bane's line, Plagueis became obsessed with influencing midi-chlorians to create life and keep those he cared about from dying. He took Sheev Palpatine as his apprentice.

Palpatine later told Anakin the legend of Plagueis: that his master taught him everything he knew — and that Palpatine then killed him in his sleep. The tale hints that Anakin himself, born without a father, may have been Plagueis's work.`,
    moments: [[`Unknown`, `Takes Sheev Palpatine as his apprentice.`], [`Before 32 BBY`, `Murdered by Palpatine.`]],
    skills: [`Midi-chlorian manipulation`, `Sith science`],
    gear: [],
    rel: [['sidious', 'Apprentice & murderer'], ['anakin', 'Possibly created him']],
    seen: [`Mentioned in Episode III`]
  },
  {
    id: 'maul', name: `Maul`, alias: `Darth Maul · Lord Maul`, groups: ['villains', 'mando'], side: 'dark', era: 'fall',
    species: 'zabrak', home: 'dathomir', born: `c. 54 BBY`, died: `2 BBY · Tatooine`, saber: '#ff2b2b', aff: ['sith', `Crimson Dawn`, `Shadow Collective`],
    short: `Sidious's first apprentice — cut in half, cast aside, and consumed by revenge.`,
    bio: `Taken from the Nightsisters of Dathomir as a child, Maul was forged by Darth Sidious into a weapon. On Naboo he revealed the Sith's return, killed Qui-Gon Jinn — and was cut in half by Obi-Wan Kenobi.

He survived through sheer hatred, rebuilt with mechanical legs. With his brother Savage Opress he formed the Shadow Collective of crime syndicates, seized Mandalore and murdered Duchess Satine in front of Obi-Wan. Captured by Ahsoka at the Siege of Mandalore, he escaped in the chaos of Order 66.

As the hidden master of Crimson Dawn he ran an underworld empire, and he blinded Kanan Jarrus on Malachor. His final obsession led him to Tatooine, where Obi-Wan ended their feud in three strokes.`,
    moments: [[`32 BBY`, `Kills Qui-Gon on Naboo; cut in half by Obi-Wan.`], [`20 BBY`, `Returns; takes Mandalore and kills Satine.`], [`19 BBY`, `Captured by Ahsoka; escapes during Order 66.`], [`~10 BBY`, `Runs Crimson Dawn from the shadows.`], [`2 BBY`, `Killed by Obi-Wan on Tatooine.`]],
    skills: [`Double-bladed saber mastery`, `Acrobatics`, `Criminal empire-builder`],
    gear: [`Double-bladed red lightsaber`, `The Darksaber (briefly)`, `Scimitar`],
    rel: [['sidious', 'Master'], ['obi-wan', 'Nemesis'], ['qui-gon', 'Killed him'], ['ahsoka', 'Captured him'], ['kanan', 'Blinded him']],
    quote: `At last we will reveal ourselves to the Jedi.`,
    seen: [`Episode I`, `Solo`, `The Clone Wars`, `Rebels`]
  },
  {
    id: 'dooku', name: `Count Dooku`, alias: `Darth Tyranus`, groups: ['villains', 'empire'], side: 'dark', era: 'fall',
    species: 'humans', home: `Serenno`, born: `102 BBY`, died: `19 BBY · Invisible Hand`, saber: '#ff2b2b', aff: ['sith', 'separatists'],
    short: `Yoda's former Padawan, who left the Jedi and led the Separatists.`,
    bio: `Born to the noble House of Serenno, Dooku was trained by Yoda and became a respected Jedi Master — teacher of Qui-Gon Jinn. Disillusioned by the Republic's corruption and the Order's complacency, he left the Jedi and reclaimed his title as Count of Serenno.

Secretly the apprentice of Darth Sidious as Darth Tyranus, he took over the clone army project and recruited Jango Fett, then led the Confederacy of Independent Systems into war. He bested Obi-Wan and Anakin at Geonosis and held off Yoda.

Aboard the Invisible Hand, Sidious urged Anakin to kill him — and Dooku realised too late that he had been replaced.`,
    moments: [[`32 BBY`, `Leaves the Jedi Order after Qui-Gon's death.`], [`22 BBY`, `Leads the Separatists; duels at Geonosis.`], [`22–19 BBY`, `Directs the Separatist war effort.`], [`19 BBY`, `Executed by Anakin at Palpatine's urging.`]],
    skills: [`Form II (Makashi) — elegant duelling`, `Force lightning`, `Politics & persuasion`],
    gear: [`Curved-hilt red lightsaber`, `Solar sailer`],
    rel: [['yoda', 'Master'], ['qui-gon', 'Apprentice'], ['sidious', 'Sith Master'], ['jango-fett', 'Recruited him'], ['grievous', 'Trained him'], ['anakin', 'Killed by']],
    quote: `Twice the pride, double the fall.`,
    seen: [`Episodes II–III`, `The Clone Wars`, `Tales of the Jedi`]
  },
  {
    id: 'grand-inquisitor', name: `The Grand Inquisitor`, alias: `Leader of the Inquisitorius`, groups: ['villains', 'empire'], side: 'dark', era: 'empire',
    species: 'pauans', home: `Utapau`, born: `Unknown`, died: `c. 4 BBY · over Mustafar`, saber: '#ff2b2b', aff: ['empire'],
    short: `A former Jedi Temple Guard who led the Empire's hunt for surviving Jedi.`,
    bio: `Once a Jedi Temple Guard, he fell to the dark side and became the leader of the Inquisitorius — a cadre of dark-side hunters answering to Darth Vader. Methodical and cold, he oversaw the hunt for the last Jedi across the Dark Times.

He pursued Kanan Jarrus and Ezra Bridger relentlessly. Defeated by Kanan in a duel above Mustafar, he chose to let himself fall rather than face his masters' punishment.`,
    moments: [[`19 BBY →`, `Leads the Inquisitorius.`], [`9 BBY`, `Hunts Obi-Wan Kenobi's allies.`], [`c. 4 BBY`, `Defeated by Kanan; falls to his death.`]],
    skills: [`Spinning double-bladed saber`, `Interrogation`],
    gear: [`Inquisitor's spinning lightsaber`],
    rel: [['anakin', 'Answered to Vader'], ['kanan', 'Defeated by'], ['ezra', 'Hunted'], ['cal-kestis', 'His Inquisitors hunted']],
    seen: [`Rebels`, `Obi-Wan Kenobi`, `Tales of the Empire`]
  },
  {
    id: 'snoke', name: `Snoke`, alias: `Supreme Leader`, groups: ['villains', 'empire'], side: 'dark', era: 'sequel',
    species: `Strand-cast (artificial)`, home: 'exegol', born: `Unknown`, died: `34 ABY · Supremacy`, aff: ['first-order'],
    short: `The First Order's Supreme Leader — a puppet grown by Palpatine on Exegol.`,
    bio: `Snoke presented himself as an ancient, wounded master of the dark side. In truth he was a strand-cast creation grown on Exegol, through which the hidden Palpatine guided the First Order.

He reached into Ben Solo's mind from childhood and lured him to the dark side. As Supreme Leader he ruled from the Supremacy, connecting Kylo and Rey's minds to draw her to him — but he underestimated his apprentice, who cut him in half with Luke's lightsaber.`,
    moments: [[`~28 ABY`, `Turns Ben Solo into Kylo Ren.`], [`34 ABY`, `Orders the Starkiller strike.`], [`34 ABY`, `Killed by Kylo Ren aboard the Supremacy.`]],
    skills: [`Telepathy across vast distances`, `Force manipulation`],
    gear: [`Praetorian Guard`, `The Supremacy`],
    rel: [['sidious', 'Creator'], ['ben-solo', 'Apprentice & killer'], ['rey', 'Tried to turn her']],
    seen: [`Episodes VII–VIII`]
  },

  /* ---------------- EMPIRE & SEPARATISTS ---------------- */
  {
    id: 'grievous', name: `General Grievous`, alias: `Qymaen jai Sheelal`, groups: ['empire'], side: 'dark', era: 'fall',
    species: `Kaleesh (cyborg)`, home: `Kalee`, born: `Unknown`, died: `19 BBY · Utapau`, aff: ['separatists'],
    short: `Supreme Commander of the droid armies and collector of Jedi lightsabers.`,
    bio: `Once a Kaleesh warlord, Grievous was rebuilt as a cyborg — little more than his brain, eyes and organs encased in a durasteel body. Trained in lightsaber combat by Count Dooku, he became Supreme Commander of the Separatist droid armies.

He hunted Jedi and kept their sabers as trophies, wielding up to four at once with arms that split in two. He commanded the warship Malevolence and kidnapped Palpatine at the Battle of Coruscant. On Utapau, Obi-Wan Kenobi tore open his chest plate and killed him with a blaster.`,
    moments: [[`22–19 BBY`, `Commands the Separatist droid armies.`], [`21 BBY`, `Wages the Malevolence campaign.`], [`19 BBY`, `Kidnaps Palpatine at Coruscant.`], [`19 BBY`, `Killed by Obi-Wan on Utapau.`]],
    skills: [`Four-armed saber combat`, `Strategic commander`, `Wall-crawling`],
    gear: [`Stolen lightsabers`, `Tsmeu-6 wheel bike`, `The Invisible Hand`],
    rel: [['dooku', 'Trainer'], ['obi-wan', 'Killed by'], ['sidious', 'Kidnapped him (on orders)']],
    quote: `Your lightsabers will make a fine addition to my collection.`,
    seen: [`Episode III`, `The Clone Wars`]
  },
  {
    id: 'tarkin', name: `Wilhuff Tarkin`, alias: `Grand Moff`, groups: ['empire', 'villains'], side: 'dark', era: 'rebellion',
    species: 'humans', home: `Eriadu`, born: `64 BBY`, died: `0 BBY · First Death Star`, aff: ['empire', 'republic'],
    short: `Author of the doctrine of fear — and the man who destroyed Alderaan.`,
    bio: `From a harsh frontier world, Tarkin served the Republic as a naval officer in the Clone Wars before rising to Grand Moff of the Outer Rim under the Empire. He formalised the Tarkin Doctrine: rule through the fear of force rather than force itself.

He seized control of the Death Star from Director Krennic and, to make his point, destroyed Jedha City and Scarif. Then, threatening Princess Leia, he destroyed Alderaan. Convinced of the station's invincibility, he refused to evacuate during the Battle of Yavin — and died with it.`,
    moments: [[`20 BBY`, `Rescued by Anakin and Obi-Wan from the Citadel.`], [`~4 BBY`, `Grand Moff; hunts the Lothal rebels.`], [`0 BBY`, `Destroys Alderaan.`], [`0 BBY`, `Dies when the Death Star explodes.`]],
    skills: [`Strategist`, `Ruthless administrator`],
    gear: [`The Death Star`],
    rel: [['anakin', 'Ally'], ['leia', 'Prisoner'], ['sidious', 'Emperor']],
    quote: `Fear will keep the local systems in line.`,
    seen: [`Episodes III–IV`, `Rogue One`, `The Clone Wars`, `Rebels`]
  },
  {
    id: 'thrawn', name: `Thrawn`, alias: `Grand Admiral · Mitth'raw'nuruodo`, groups: ['empire', 'villains'], side: 'dark', era: 'empire',
    species: 'chiss', home: `Csilla (Unknown Regions)`, born: `Unknown`, died: `—`, aff: ['empire'],
    short: `The Chiss Grand Admiral who studies an enemy's art to defeat them.`,
    bio: `A Chiss officer from the Unknown Regions, Thrawn entered Imperial service and rose with astonishing speed to become the only non-human Grand Admiral. His genius lies in understanding his enemies — studying their art and culture to predict how they will think.

He crushed rebel cells across the Outer Rim and championed the TIE Defender, until Ezra Bridger called the purrgil to drag his flagship into hyperspace. Years later, with the help of Morgan Elsbeth and the Nightsisters, he returned to the galaxy from exile — a dangerous threat to the young New Republic.`,
    moments: [[`Before 2 BBY`, `Promoted to Grand Admiral.`], [`2 BBY`, `Hunts Phoenix Squadron for the Empire.`], [`1 BBY`, `Vanishes with the Chimaera at Lothal.`], [`~9 ABY`, `Returns from Peridea.`]],
    skills: [`Tactical genius`, `Reading art & culture`, `Patience`],
    gear: [`Star Destroyer Chimaera`, `TIE Defender programme`],
    rel: [['ezra', 'Nemesis'], ['hera', 'Adversary'], ['ahsoka', 'Adversary'], ['sidious', 'Served the Emperor']],
    quote: `To defeat an enemy, you must know them.`,
    seen: [`Rebels`, `Ahsoka`, `The Thrawn novels`]
  },

  /* ---------------- REPUBLIC, REBELLION & RESISTANCE ---------------- */
  {
    id: 'padme', name: `Padmé Amidala`, alias: `Queen of Naboo · Senator`, groups: ['heroes'], side: 'light', era: 'fall',
    species: 'humans', home: 'naboo', born: `46 BBY`, died: `19 BBY · Polis Massa`, aff: ['republic'],
    short: `Queen at fourteen, senator, and mother of Luke and Leia.`,
    bio: `Elected Queen of Naboo at just fourteen, Padmé led the resistance against the Trade Federation's invasion, forging an alliance with the Gungans and retaking her palace herself. As senator she became one of the Republic's leading voices for diplomacy, opposing the creation of an army.

She secretly married Anakin Skywalker after Geonosis. During the Clone Wars she fought for peace talks and the rights of ordinary citizens, and was among the senators who would later be remembered as the seeds of the Rebellion.

When Anakin fell she followed him to Mustafar, still believing she could save him. She died giving birth to the twins Luke and Leia — insisting with her last breath that there was still good in him.`,
    moments: [[`32 BBY`, `Leads the liberation of Naboo as Queen.`], [`22 BBY`, `Survives assassination; marries Anakin.`], [`19 BBY`, `Witnesses the birth of the Empire in the Senate.`], [`19 BBY`, `Dies giving birth to Luke and Leia.`]],
    skills: [`Diplomacy`, `Marksmanship`, `Courage under fire`],
    gear: [`ELG-3A pistol`, `Royal Naboo starship`],
    rel: [['anakin', 'Husband'], ['luke', 'Son'], ['leia', 'Daughter'], ['obi-wan', 'Friend'], ['sidious', 'Fellow Nubian']],
    quote: `So this is how liberty dies… with thunderous applause.`,
    seen: [`Episodes I–III`, `The Clone Wars`]
  },
  {
    id: 'leia', name: `Leia Organa`, alias: `Princess · General`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: 'alderaan', born: `19 BBY`, died: `35 ABY · Ajan Kloss`, saber: '#3fa9ff', aff: ['rebellion', 'new-republic', 'resistance'],
    short: `Senator, Rebel leader, founder of the Resistance — the Skywalker who led armies.`,
    bio: `Raised as a princess of Alderaan by Bail and Breha Organa, Leia became the youngest senator in the Imperial Senate while secretly serving the Rebellion. Captured with the Death Star plans, she hid them in R2-D2, withstood Vader's interrogation, and watched her homeworld die.

She fought through Hoth, Bespin and Endor, strangled Jabba the Hutt with her own chains, and learned she was Luke's twin — and Vader's daughter. She married Han Solo, and their son Ben was born just after the war.

In the New Republic she served as a senator until the revelation of her parentage cost her influence. Seeing the First Order rise, she founded the Resistance and led it as General. Trained in the Force by Luke, she later taught Rey, and gave her last strength reaching out to her son.`,
    moments: [[`0 BBY`, `Smuggles the Death Star plans; Alderaan is destroyed.`], [`4 ABY`, `Kills Jabba; fights at Endor.`], [`5 ABY`, `Gives birth to Ben Solo.`], [`~28 ABY`, `Founds the Resistance.`], [`35 ABY`, `Dies reaching out to Ben through the Force.`]],
    skills: [`Leadership`, `Sharpshooter`, `Force sensitivity`, `Politics`],
    gear: [`DDC Defender blaster`, `Self-built blue lightsaber`],
    rel: [['anakin', 'Father'], ['padme', 'Mother'], ['luke', 'Twin brother'], ['han', 'Husband'], ['ben-solo', 'Son'], ['rey', 'Student'], ['mon-mothma', 'Ally']],
    quote: `Help me, Obi-Wan Kenobi. You're my only hope.`,
    seen: [`Episodes III (infant), IV–IX`, `Rogue One`, `Obi-Wan Kenobi`]
  },
  {
    id: 'han', name: `Han Solo`, alias: `Captain of the Millennium Falcon`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: 'corellia', born: `32 BBY`, died: `34 ABY · Starkiller Base`, aff: ['rebellion', 'resistance'],
    short: `A smuggler who only came back for the money — and then never left.`,
    bio: `An orphan from Corellia's streets, Han escaped into the Imperial Navy, deserted, and met Chewbacca. After the Kessel Run he won the Millennium Falcon from Lando in a game of sabacc and became a smuggler — until a job flying an old man and a farm boy to Alderaan changed everything.

He came back to save Luke at Yavin, fell for Leia, and was frozen in carbonite at Cloud City and delivered to Jabba. Rescued, he led the strike team on Endor.

After the war, the loss of his son to the dark side drove Han and Leia apart, and he returned to smuggling. Thirty years later he found the Falcon again, met Rey and Finn, and walked out onto a bridge on Starkiller Base to bring Ben home.`,
    moments: [[`~10 BBY`, `Meets Chewbacca; makes the Kessel Run; wins the Falcon.`], [`0 BBY`, `Saves Luke at the Battle of Yavin.`], [`3 ABY`, `Frozen in carbonite.`], [`4 ABY`, `Leads the Endor strike team.`], [`34 ABY`, `Killed by his son on Starkiller Base.`]],
    skills: [`Ace pilot`, `Quick draw`, `Bluffing and improvisation`],
    gear: [`DL-44 heavy blaster`, `Millennium Falcon`],
    rel: [['chewbacca', 'Co-pilot & best friend'], ['leia', 'Wife'], ['ben-solo', 'Son'], ['luke', 'Friend'], ['lando', 'Friend & rival'], ['jabba', 'Debtor to']],
    quote: `Never tell me the odds.`,
    seen: [`Episodes IV–VII`, `Solo`]
  },
  {
    id: 'chewbacca', name: `Chewbacca`, alias: `Chewie`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'wookiees', home: 'kashyyyk', born: `c. 200 BBY`, died: `—`, aff: ['republic', 'rebellion', 'resistance'],
    short: `A Wookiee warrior, mechanic and co-pilot — loyal across two centuries.`,
    bio: `Already well over a century old during the Clone Wars, Chewbacca fought beside Yoda in the defence of Kashyyyk. Enslaved by the Empire, he met Han Solo in a pit on Mimban — and the two escaped together, beginning one of the galaxy's great friendships.

He flew the Falcon through every adventure of the Rebellion: Yavin, Hoth, Bespin, Endor. Decades later he flew with Rey after Han's death, and finally received the medal he had been denied after Yavin.`,
    moments: [[`19 BBY`, `Fights at the Battle of Kashyyyk.`], [`~10 BBY`, `Escapes enslavement with Han.`], [`3 ABY`, `Rebuilds C-3PO on Cloud City.`], [`34 ABY`, `Flies with Rey after Han's death.`], [`35 ABY`, `Receives his medal.`]],
    skills: [`Wookiee strength`, `Master mechanic`, `Co-pilot`],
    gear: [`Bowcaster`, `Bandolier`],
    rel: [['han', 'Best friend'], ['leia', 'Friend'], ['rey', 'Co-pilot'], ['yoda', 'Fought beside']],
    seen: [`Episodes III–IX`, `Solo`]
  },
  {
    id: 'lando', name: `Lando Calrissian`, alias: `Baron Administrator`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: `Socorro`, born: `31 BBY`, died: `—`, aff: ['rebellion', 'resistance'],
    short: `Gambler, administrator, general — the man who brought the galaxy to Exegol.`,
    bio: `A charming gambler and smuggler, Lando owned the Millennium Falcon before losing it to Han Solo. He became Baron Administrator of Cloud City on Bespin — until Vader forced him to betray his old friend.

Lando turned against the Empire, helped rescue Han from Jabba and, as a general, flew the Falcon into the heart of the second Death Star to destroy its reactor. Decades later he answered the Resistance's call and led a citizens' fleet from every corner of the galaxy to the Battle of Exegol.`,
    moments: [[`~10 BBY`, `Loses the Falcon to Han at sabacc.`], [`3 ABY`, `Betrays, then rescues, Han and Leia at Cloud City.`], [`4 ABY`, `Destroys the Death Star II's reactor.`], [`35 ABY`, `Leads the citizens' fleet to Exegol.`]],
    skills: [`Sabacc`, `Pilot`, `Charm`],
    gear: [`Millennium Falcon (formerly)`, `Cape collection`],
    rel: [['han', 'Friend & rival'], ['chewbacca', 'Friend'], ['leia', 'Ally']],
    quote: `Hello, what have we here?`,
    seen: [`Episodes V, VI, IX`, `Solo`, `Rebels`]
  },
  {
    id: 'mon-mothma', name: `Mon Mothma`, alias: `Senator · Chancellor`, groups: ['heroes'], side: 'light', era: 'empire',
    species: 'humans', home: 'chandrila', born: `48 BBY`, died: `—`, aff: ['republic', 'rebellion', 'new-republic'],
    short: `The senator who financed a rebellion — and became the New Republic's first Chancellor.`,
    bio: `A senator from Chandrila who watched the Republic become an Empire, Mon Mothma spent years secretly funnelling money and resources to the growing resistance while playing the loyal Imperial politician.

When she could hide no longer, she denounced the Emperor in the Senate and fled, becoming the leader of the Alliance to Restore the Republic. She briefed the fleet before Endor, and after victory became the first Chancellor of the New Republic.`,
    moments: [[`~5 BBY`, `Secretly funds the rebellion.`], [`~2 BBY`, `Denounces Palpatine and flees; leads the Alliance.`], [`4 ABY`, `Briefs the fleet for Endor.`], [`5 ABY`, `Chancellor of the New Republic.`]],
    skills: [`Statecraft`, `Secrecy`, `Oratory`],
    gear: [],
    rel: [['leia', 'Ally'], ['cassian', 'Fellow rebel'], ['padme', 'Senate colleague']],
    quote: `Many Bothans died to bring us this information.`,
    seen: [`Episodes III, VI`, `Rogue One`, `Andor`, `Rebels`]
  },
  {
    id: 'cassian', name: `Cassian Andor`, alias: `Rogue One`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: `Kenari`, born: `26 BBY`, died: `0 BBY · Scarif`, aff: ['rebellion'],
    short: `A thief turned spy, who gave everything to steal the Death Star plans.`,
    bio: `Taken from the jungle world of Kenari as a child and raised on Ferrix, Cassian drifted through life as a thief — until he was recruited for the Aldhani heist, imprisoned on Narkina 5, and radicalised by what he saw.

He became one of the Rebellion's most capable intelligence officers, doing terrible things for the cause. With Jyn Erso and K-2SO he led the unsanctioned mission to Scarif, where he helped transmit the Death Star plans before the planet's surface was destroyed.`,
    moments: [[`5 BBY`, `Takes part in the Aldhani heist.`], [`5 BBY`, `Escapes the Narkina 5 prison.`], [`0 BBY`, `Leads Rogue One to Scarif and dies there.`]],
    skills: [`Espionage`, `Marksmanship`, `Survival`],
    gear: [`Modified A280 blaster`, `U-wing`],
    rel: [['jyn', 'Comrade'], ['k-2so', 'Partner'], ['mon-mothma', 'Rebel leadership']],
    seen: [`Rogue One`, `Andor`]
  },
  {
    id: 'jyn', name: `Jyn Erso`, alias: `Stardust`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'humans', home: `Vallt`, born: `22 BBY`, died: `0 BBY · Scarif`, aff: ['rebellion'],
    short: `The daughter of the Death Star's architect, who stole its secret.`,
    bio: `Daughter of the scientist Galen Erso, Jyn watched her mother die and her father taken to build the Death Star. Raised as a soldier by Saw Gerrera, she was later abandoned and became an outlaw.

Freed by the Rebellion to find her father, she learned that he had built a fatal flaw into the station. She led the mission that became Rogue One, broke into the Citadel archive on Scarif and transmitted the plans — dying with Cassian on the beach as the Death Star fired.`,
    moments: [[`13 BBY`, `Loses her mother; father taken by Krennic.`], [`0 BBY`, `Freed from a labour camp by the Rebellion.`], [`0 BBY`, `Steals the Death Star plans on Scarif.`]],
    skills: [`Close combat`, `Forgery and infiltration`],
    gear: [`Truncheons`, `Kyber crystal necklace`],
    rel: [['cassian', 'Comrade'], ['k-2so', 'Comrade'], [`Galen Erso`, `Father`], [`Saw Gerrera`, `Guardian`]],
    quote: `Rebellions are built on hope.`,
    seen: [`Rogue One`]
  },
  {
    id: 'hera', name: `Hera Syndulla`, alias: `Spectre 2 · General`, groups: ['heroes'], side: 'light', era: 'empire',
    species: 'twileks', home: 'ryloth', born: `29 BBY`, died: `—`, aff: ['rebellion', 'new-republic'],
    short: `Captain of the Ghost and one of the Rebellion's finest pilots.`,
    bio: `Daughter of the Twi'lek freedom fighter Cham Syndulla, Hera grew up during the Clone Wars on Ryloth and dreamed of flying. As captain of the Ghost she gathered a family of rebels — Kanan, Zeb, Sabine, Ezra and the cantankerous droid Chopper.

She rose to lead Phoenix Squadron and fought at Scarif, Yavin and Endor. After Kanan's death she gave birth to their son, Jacen, and became a general of the New Republic.`,
    moments: [[`22 BBY`, `Grows up during the liberation of Ryloth.`], [`5 BBY`, `Captains the Ghost on Lothal.`], [`0 BBY`, `Flies at Scarif and Yavin.`], [`9 ABY`, `New Republic general.`]],
    skills: [`Elite pilot`, `Leadership`, `Mechanic`],
    gear: [`The Ghost`, `Blurrg-1120 blaster`],
    rel: [['kanan', 'Partner'], ['ezra', 'Family'], ['sabine', 'Family'], ['thrawn', 'Adversary']],
    seen: [`Rebels`, `Ahsoka`, `Rogue One (mentioned)`]
  },
  {
    id: 'sabine', name: `Sabine Wren`, alias: `Spectre 5`, groups: ['heroes', 'mando'], side: 'light', era: 'empire',
    species: 'humans', home: `Krownest`, born: `21 BBY`, died: `—`, aff: ['rebellion', 'mandalorians'],
    short: `A Mandalorian artist and explosives expert who became Ahsoka's apprentice.`,
    bio: `Of Clan Wren, Sabine trained at an Imperial academy and built a weapon that devastated her own people — then deserted in horror. As the Ghost's artist and demolitions expert, she painted her armour and blew up Imperial targets with equal flair.

She wielded the Darksaber and handed it to Bo-Katan Kryze to unite Mandalore. Years later she trained under Ahsoka Tano, and her search for Ezra led her to another galaxy.`,
    moments: [[`~4 BBY`, `Joins the Ghost crew.`], [`1 BBY`, `Gives the Darksaber to Bo-Katan.`], [`~9 ABY`, `Trains as Ahsoka's apprentice; finds Ezra.`]],
    skills: [`Explosives`, `Graffiti art`, `Mandalorian combat`, `Force sensitivity (late)`],
    gear: [`Painted beskar armour`, `Twin WESTAR blasters`, `The Darksaber (formerly)`],
    rel: [['ahsoka', 'Master'], ['ezra', 'Friend'], ['hera', 'Family'], ['bo-katan', 'Gave her the Darksaber']],
    seen: [`Rebels`, `Ahsoka`]
  },
  {
    id: 'poe', name: `Poe Dameron`, alias: `Black Leader`, groups: ['heroes'], side: 'light', era: 'sequel',
    species: 'humans', home: 'yavin-4', born: `2 ABY`, died: `—`, aff: ['new-republic', 'resistance'],
    short: `The Resistance's best pilot — reckless, brilliant and, in the end, a leader.`,
    bio: `Son of two Rebel veterans, Poe flew for the New Republic before joining Leia's Resistance. Captured on Jakku, he was freed by a defecting stormtrooper he named Finn.

He led the X-wing strike that destroyed Starkiller Base, but his recklessness at D'Qar cost many lives, and he mutinied against Vice Admiral Holdo. Learning when to fight and when to flee, he became a general alongside Finn at the Battle of Exegol.`,
    moments: [[`34 ABY`, `Captured on Jakku; escapes with Finn.`], [`34 ABY`, `Destroys Starkiller Base's oscillator.`], [`34 ABY`, `Bombs the Fulminatrix at D'Qar.`], [`35 ABY`, `Leads the attack at Exegol.`]],
    skills: [`Best pilot in the Resistance`, `Daring tactics`],
    gear: [`T-70 X-wing "Black One"`, `BB-8`],
    rel: [['finn', 'Best friend'], ['leia', 'Commander'], ['rey', 'Friend']],
    seen: [`Episodes VII–IX`]
  },
  {
    id: 'finn', name: `Finn`, alias: `FN-2187`, groups: ['heroes'], side: 'light', era: 'sequel',
    species: 'humans', home: `Unknown`, born: `c. 11 ABY`, died: `—`, aff: ['resistance', 'first-order'],
    short: `A stormtrooper who refused to fire — and found a family.`,
    bio: `Taken from his family as a child and raised as stormtrooper FN-2187, Finn broke on his first mission when the First Order massacred villagers on Jakku. He freed Poe Dameron, crashed on Jakku, and fell in with Rey.

He fought Kylo Ren with Luke's lightsaber on Starkiller Base, infiltrated the Supremacy, and defeated his old commander Phasma. Discovering he too could feel the Force, he became a general of the Resistance.`,
    moments: [[`34 ABY`, `Defects after the Jakku massacre.`], [`34 ABY`, `Duels Kylo Ren on Starkiller Base.`], [`34 ABY`, `Defeats Captain Phasma.`], [`35 ABY`, `General at the Battle of Exegol.`]],
    skills: [`Stormtrooper training`, `Sanitation (really)`, `Emerging Force sensitivity`],
    gear: [`Luke's lightsaber (briefly)`, `Blasters`],
    rel: [['poe', 'Best friend'], ['rey', 'Friend'], ['han', 'Mentor figure']],
    seen: [`Episodes VII–IX`]
  },
  {
    id: 'ackbar', name: `Gial Ackbar`, alias: `Admiral`, groups: ['heroes'], side: 'light', era: 'rebellion',
    species: 'mon-calamari', home: 'mon-cala', born: `Unknown`, died: `34 ABY · Raddus`, aff: ['rebellion', 'new-republic', 'resistance'],
    short: `Commander of the Rebel fleet at Endor.`,
    bio: `A Mon Calamari who served his king during the Clone Wars, Ackbar brought his people's shipbuilding genius to the Rebel Alliance. As admiral aboard Home One he commanded the fleet at Endor, recognising the Emperor's trap just in time.

He led the New Republic's navy in the Battle of Jakku and later joined Leia's Resistance. He died when the First Order destroyed the bridge of the Raddus.`,
    moments: [[`20 BBY`, `Captain of the guard at the Battle of Mon Cala.`], [`4 ABY`, `Commands the fleet at Endor.`], [`5 ABY`, `Commands at Jakku.`], [`34 ABY`, `Killed aboard the Raddus.`]],
    skills: [`Fleet command`, `Naval tactics`],
    gear: [`Home One (MC80)`],
    rel: [['leia', 'Ally'], ['mon-mothma', 'Commander-in-chief'], ['lando', 'Wingman at Endor']],
    quote: `It's a trap!`,
    seen: [`Episodes VI–VIII`, `The Clone Wars`]
  },
  {
    id: 'rex', name: `Captain Rex`, alias: `CT-7567`, groups: ['heroes'], side: 'light', era: 'fall',
    species: 'humans', home: 'kamino', born: `32 BBY`, died: `—`, aff: ['republic', 'rebellion'],
    short: `Captain of the 501st, who survived Order 66 and fought on.`,
    bio: `A clone of Jango Fett, Rex became captain of the 501st Legion under Anakin Skywalker and fought beside Ahsoka Tano throughout the Clone Wars. He was principled and thoughtful — willing to question orders when they were wrong.

At the Siege of Mandalore, Order 66 seized him; he fought it long enough to warn Ahsoka, who removed his chip. He later joined the Ghost crew, fought at Endor, and has been seen honouring the fallen clones long after the war.`,
    moments: [[`22 BBY`, `Serves under Anakin and Ahsoka.`], [`19 BBY`, `Survives Order 66 with Ahsoka's help.`], [`~3 BBY`, `Joins the Rebellion.`], [`4 ABY`, `Fights at the Battle of Endor.`]],
    skills: [`Dual DC-17 pistols`, `Tactical command`, `ARC-trained`],
    gear: [`Twin DC-17 hand blasters`, `Phase II armour with blue markings`],
    rel: [['anakin', 'General'], ['ahsoka', 'Commander & friend'], ['kanan', 'Fellow rebel'], [`Fives`, `Brother`]],
    seen: [`The Clone Wars`, `Rebels`, `The Bad Batch`]
  },

  /* ---------------- DROIDS ---------------- */
  {
    id: 'r2-d2', name: `R2-D2`, alias: `Artoo`, groups: ['droids', 'heroes'], side: 'light', era: 'fall',
    species: `Astromech droid`, home: 'naboo', born: `Built before 32 BBY`, died: `—`, aff: ['republic', 'rebellion', 'resistance'],
    short: `The little astromech present at nearly every turning point of the saga.`,
    bio: `An R2-series astromech, R2-D2 first served on Queen Amidala's royal starship, saving it during the Naboo blockade. He became Anakin's companion through the Clone Wars, flying in his starfighter.

He carried Leia's message and the Death Star plans to Obi-Wan, rode in Luke's X-wing at Yavin and Endor, and held the final piece of the map to Luke decades later. Unlike C-3PO, his memory was never wiped — he may know more of the story than anyone.`,
    moments: [[`32 BBY`, `Saves the Naboo royal starship.`], [`0 BBY`, `Carries the Death Star plans.`], [`4 ABY`, `Hides Luke's lightsaber at Jabba's palace.`], [`34 ABY`, `Completes the map to Luke Skywalker.`]],
    skills: [`Slicing`, `Starship repair`, `Navigation`],
    gear: [`Scomp link`, `Holoprojector`, `Rocket thrusters`],
    rel: [['c-3po', 'Counterpart'], ['anakin', 'Master'], ['luke', 'Master'], ['padme', 'First served'], ['leia', 'Carried her message']],
    seen: [`Episodes I–IX`, `Rogue One`, `The Clone Wars`]
  },
  {
    id: 'c-3po', name: `C-3PO`, alias: `Human-cyborg relations`, groups: ['droids', 'heroes'], side: 'light', era: 'fall',
    species: `Protocol droid`, home: 'tatooine', born: `Built c. 33 BBY`, died: `—`, aff: ['republic', 'rebellion', 'resistance'],
    short: `A protocol droid fluent in over six million forms of communication.`,
    bio: `Built from scrap by a young Anakin Skywalker on Tatooine, C-3PO was given his golden plating later. He served Padmé Amidala, and at the end of the Clone Wars his memory was wiped on Bail Organa's orders.

Fussy, anxious and forever predicting doom, he nonetheless stood at the centre of the Rebellion — translating for Ewoks who believed him a god, and later sacrificing his memories to read a forbidden Sith inscription.`,
    moments: [[`32 BBY`, `Built by young Anakin.`], [`19 BBY`, `Memory wiped after the fall of the Republic.`], [`4 ABY`, `Worshipped as a god by the Ewoks.`], [`35 ABY`, `Gives up his memories to translate a Sith dagger.`]],
    skills: [`Six million forms of communication`, `Etiquette`, `Worrying`],
    gear: [`Golden plating (one red arm, briefly)`],
    rel: [['r2-d2', 'Counterpart'], ['anakin', 'Builder'], ['leia', 'Served her'], ['padme', 'Served her']],
    seen: [`Episodes I–IX`, `Rogue One`, `The Clone Wars`]
  },
  {
    id: 'k-2so', name: `K-2SO`, alias: `Kay`, groups: ['droids', 'heroes'], side: 'light', era: 'rebellion',
    species: `KX-series security droid`, home: `—`, born: `Imperial manufacture`, died: `0 BBY · Scarif`, aff: ['rebellion'],
    short: `A blunt, reprogrammed Imperial droid who died for his friends.`,
    bio: `An Imperial KX-series security droid reprogrammed by Cassian Andor, K-2SO speaks his mind with brutal honesty and a calculating streak of humour. On Scarif he disguised himself as an Imperial droid to guide Jyn and Cassian into the Citadel — then held the vault door against stormtroopers until he was destroyed.`,
    moments: [[`Before 0 BBY`, `Reprogrammed by Cassian.`], [`0 BBY`, `Holds the Citadel vault on Scarif.`]],
    skills: [`Imperial infiltration`, `Probability calculations`, `Strength`],
    gear: [],
    rel: [['cassian', 'Partner'], ['jyn', 'Comrade']],
    quote: `I'll be there for you. Cassian said I had to.`,
    seen: [`Rogue One`, `Andor`]
  },

  /* ---------------- MANDALORIANS & UNDERWORLD ---------------- */
  {
    id: 'din-djarin', name: `Din Djarin`, alias: `The Mandalorian · Mando`, groups: ['mando'], side: 'light', era: 'new-republic',
    species: 'humans', home: `Aq Vetina`, born: `Before 19 BBY`, died: `—`, aff: ['mandalorians'],
    short: `A foundling bounty hunter who became a father — and wielded the Darksaber.`,
    bio: `Orphaned during the Clone Wars when battle droids attacked his homeworld, Din was rescued by Mandalorians and raised as a foundling of the strict Children of the Watch. He became a bounty hunter of the Guild.

Hired to retrieve a mysterious child, he rescued Grogu instead and became his protector, fleeing across the galaxy from Moff Gideon. He won the Darksaber in combat, carried Grogu to Luke Skywalker — and later welcomed him back.

Having removed his helmet, he walked into the Living Waters beneath Mandalore to redeem himself, and with Bo-Katan Kryze reunited the Mandalorian clans and reclaimed their homeworld.`,
    moments: [[`19 BBY`, `Rescued as a child by Mandalorians.`], [`9 ABY`, `Rescues Grogu on Arvala-7.`], [`9 ABY`, `Defeats Moff Gideon and wins the Darksaber.`], [`9 ABY`, `Helps retake Mandalore.`]],
    skills: [`Bounty hunting`, `Expert marksman`, `Mandalorian armour tactics`],
    gear: [`Beskar armour`, `Amban phase-pulse rifle`, `N-1 starfighter`, `Razor Crest (destroyed)`],
    rel: [['grogu', 'Adoptive son'], ['bo-katan', 'Ally'], ['boba-fett', 'Ally'], ['luke', 'Entrusted Grogu to him']],
    quote: `This is the Way.`,
    seen: [`The Mandalorian`, `The Book of Boba Fett`]
  },
  {
    id: 'bo-katan', name: `Bo-Katan Kryze`, alias: `Leader of the Nite Owls`, groups: ['mando'], side: 'neutral', era: 'fall',
    species: 'humans', home: 'mandalore', born: `Unknown`, died: `—`, aff: ['mandalorians'],
    short: `Satine's sister — a warrior who spent decades fighting to reclaim Mandalore.`,
    bio: `Sister of the pacifist Duchess Satine Kryze, Bo-Katan rejected her sister's ways and joined Death Watch. When Maul seized Mandalore and killed Satine, Bo-Katan turned against him and fought alongside Ahsoka at the Siege of Mandalore.

She ruled Mandalore briefly under the Empire before the Great Purge devastated her people. Decades later, with Din Djarin's help, she gathered the scattered clans and led them home.`,
    moments: [[`20 BBY`, `Breaks with Maul after Satine's death.`], [`19 BBY`, `Fights at the Siege of Mandalore.`], [`1 BBY`, `Receives the Darksaber from Sabine.`], [`9 ABY`, `Leads the reclamation of Mandalore.`]],
    skills: [`Jetpack warfare`, `Leadership`, `Mandalorian tactics`],
    gear: [`Blue Nite Owl armour`, `Twin blasters`],
    rel: [['din-djarin', 'Ally'], ['maul', 'Enemy'], ['ahsoka', 'Ally'], ['sabine', 'Received the Darksaber from'], [`Satine Kryze`, `Sister`]],
    seen: [`The Clone Wars`, `Rebels`, `The Mandalorian`]
  },
  {
    id: 'boba-fett', name: `Boba Fett`, alias: `Daimyo of Tatooine`, groups: ['mando'], side: 'neutral', era: 'rebellion',
    species: 'humans', home: 'kamino', born: `32 BBY`, died: `—`, aff: [`Bounty Hunters' Guild`],
    short: `Jango's unaltered clone son — bounty hunter, survivor, and finally a ruler.`,
    bio: `An unaltered clone of Jango Fett, raised as his son, Boba watched Mace Windu kill his father at Geonosis. He grew into the galaxy's most feared bounty hunter, capturing Han Solo at Cloud City for Jabba.

Knocked into the Sarlacc at Carkoon, he cut his way free, was taken in by a Tusken tribe and found a new kind of family. Reclaiming his armour from Din Djarin, he took Jabba's old throne as Daimyo of Mos Espa.`,
    moments: [[`22 BBY`, `Sees his father killed on Geonosis.`], [`3 ABY`, `Captures Han Solo.`], [`4 ABY`, `Falls into the Sarlacc — and survives.`], [`9 ABY`, `Becomes Daimyo of Mos Espa.`]],
    skills: [`Bounty hunting`, `Tracking`, `Survival`],
    gear: [`Mandalorian armour`, `Firespray "Slave I"`, `Gaffi stick`],
    rel: [['jango-fett', 'Father'], ['han', 'Bounty'], ['din-djarin', 'Ally'], ['jabba', 'Employer'], ['cad-bane', 'Mentor turned enemy']],
    seen: [`Episodes II, V, VI`, `The Clone Wars`, `The Mandalorian`, `The Book of Boba Fett`]
  },
  {
    id: 'jango-fett', name: `Jango Fett`, alias: `Template of the clones`, groups: ['mando'], side: 'neutral', era: 'fall',
    species: 'humans', home: `Concord Dawn`, born: `c. 66 BBY`, died: `22 BBY · Geonosis`, aff: ['separatists'],
    short: `The bounty hunter whose genome became an army.`,
    bio: `A Mandalorian bounty hunter, Jango was recruited by Count Dooku to become the genetic template for the Republic's clone army. As payment he asked for one unaltered clone to raise as his son: Boba.

Hired to kill Senator Amidala, he led Obi-Wan from Coruscant to Kamino and Geonosis. He died in the Geonosian arena at the hands of Mace Windu as the Clone Wars began.`,
    moments: [[`~32 BBY`, `Becomes the clone template.`], [`22 BBY`, `Tries to kill Padmé; flees to Geonosis.`], [`22 BBY`, `Killed by Mace Windu.`]],
    skills: [`Marksman`, `Jetpack combat`, `Seismic charges`],
    gear: [`Twin WESTAR-34 pistols`, `Slave I`],
    rel: [['boba-fett', 'Son'], ['dooku', 'Employer'], ['mace-windu', 'Killed by'], ['obi-wan', 'Fought him on Kamino']],
    seen: [`Episode II`]
  },
  {
    id: 'jabba', name: `Jabba the Hutt`, alias: `Jabba Desilijic Tiure`, groups: ['mando', 'villains'], side: 'neutral', era: 'rebellion',
    species: 'hutts', home: 'tatooine', born: `c. 600 BBY`, died: `4 ABY · Tatooine`, aff: [`Hutt Clan`],
    short: `Crime lord of Tatooine — and of Han Solo's debts.`,
    bio: `A powerful Hutt crime lord ruling from his palace on Tatooine, Jabba controlled smuggling, spice and gambling across the Outer Rim. During the Clone Wars the Republic won his cooperation by rescuing his kidnapped son Rotta.

When Han Solo dumped a cargo and couldn't pay, Jabba put a bounty on him — and kept him frozen in carbonite as decoration. Leia, chained at his side, strangled him during the escape over the Great Pit of Carkoon.`,
    moments: [[`22 BBY`, `Allies with the Republic after Rotta's rescue.`], [`3 ABY`, `Receives Han in carbonite.`], [`4 ABY`, `Strangled by Leia.`]],
    skills: [`Criminal empire`, `Huttese politics`],
    gear: [`Sail barge Khetanna`, `A rancor`],
    rel: [['han', 'Debtor'], ['leia', 'Killed by'], ['boba-fett', 'Hired him'], ['luke', 'Defeated by']],
    seen: [`Episodes I, IV (Special Ed.), VI`, `The Clone Wars`]
  },
  {
    id: 'cad-bane', name: `Cad Bane`, alias: `Bounty hunter`, groups: ['mando', 'villains'], side: 'neutral', era: 'fall',
    species: 'duros', home: `Duro`, born: `Unknown`, died: `9 ABY · Tatooine`, aff: [`Bounty Hunters' Guild`],
    short: `The Clone Wars' most ruthless bounty hunter.`,
    bio: `A Duros gunslinger with a wide-brimmed hat, Cad Bane was the most dangerous bounty hunter of the Clone Wars, stealing a Jedi holocron from the Temple itself and holding the Senate hostage.

He outlived the Republic and the Empire, working for the Pyke Syndicate on Tatooine. There he faced his former protégé Boba Fett in a final showdown — and lost.`,
    moments: [[`21 BBY`, `Steals a holocron from the Jedi Temple.`], [`20 BBY`, `Holds senators hostage.`], [`9 ABY`, `Killed by Boba Fett.`]],
    skills: [`Quick draw`, `Ruthless planning`],
    gear: [`Twin LL-30 pistols`, `Rocket boots`],
    rel: [['boba-fett', 'Former protégé'], ['anakin', 'Opponent']],
    seen: [`The Clone Wars`, `The Bad Batch`, `The Book of Boba Fett`]
  }
];

/* Master → apprentice lineage chart: node positions in a 1000 × 640 box */
SW.lineage = {
  nodes: {
    'yoda': [120, 50], 'plagueis': [760, 50], 'dooku': [500, 140], 'sidious': [760, 140],
    'qui-gon': [500, 230], 'maul': [900, 230], 'obi-wan': [500, 320], 'snoke': [900, 320],
    'anakin': [500, 410], 'luke': [200, 410], 'leia': [60, 410], 'grogu': [340, 500],
    'ahsoka': [650, 500], 'kanan': [820, 500], 'rey': [200, 580], 'ben-solo': [360, 580],
    'sabine': [650, 580], 'ezra': [820, 580]
  },
  edges: [
    ['yoda', 'dooku', 'l'], ['dooku', 'qui-gon', 'l'], ['qui-gon', 'obi-wan', 'l'], ['obi-wan', 'anakin', 'l'],
    ['anakin', 'ahsoka', 'l'], ['ahsoka', 'sabine', 'l'], ['yoda', 'luke', 'l'], ['obi-wan', 'luke', 'l'],
    ['luke', 'ben-solo', 'l'], ['luke', 'rey', 'l'], ['luke', 'grogu', 'l'], ['luke', 'leia', 'l'], ['leia', 'rey', 'l'],
    ['kanan', 'ezra', 'l'],
    ['plagueis', 'sidious', 'd'], ['sidious', 'maul', 'd'], ['sidious', 'dooku', 'd'], ['sidious', 'anakin', 'd'],
    ['sidious', 'snoke', 'd'], ['snoke', 'ben-solo', 'd']
  ]
};
