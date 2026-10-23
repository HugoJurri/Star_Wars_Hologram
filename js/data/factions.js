/* ==========================================================================
   FACTIONS & GOVERNMENTS
   start/end numeric years (negative = BBY) for the lifespan chart
   ========================================================================== */
window.SW = window.SW || {};

SW.factions = [
  {
    id: 'republic', name: 'The Galactic Republic', range: 'c. 25,000 – 19 BBY', start: -25000, end: -19, color: '#d9b25a', side: 'light',
    short: 'A democratic federation that governed the galaxy for some 25,000 years.',
    text: `Its legislature was the **Galactic Senate** on Coruscant, with representatives from thousands of worlds, served and protected by the Jedi Order as peacekeepers, diplomats and — eventually — generals.

By its final centuries the Republic had grown bloated, corrupt and ineffective — a weakness Palpatine exploited masterfully. He engineered the Clone Wars from both sides, controlling the Separatists through Count Dooku while serving as Supreme Chancellor. With Order 66, the Jedi were destroyed and Palpatine declared himself Emperor.`,
    facts: [['Capital', 'Coruscant'], ['Legislature', 'Galactic Senate'], ['Military', 'Grand Army of the Republic (22–19 BBY)'], ['Ended', 'Reorganised into the Empire, 19 BBY']]
  },
  {
    id: 'jedi', name: 'The Jedi Order', range: 'Ancient – 19 BBY; reborn after', start: -25000, end: -19, color: '#3fa9ff', side: 'light',
    short: 'An ancient monastic order of Force users devoted to the light side.',
    text: `Founded thousands of years before the saga and headquartered in the **Jedi Temple** on Coruscant. Its principles — emotional detachment, selfless service, rejection of personal attachment — gave it serenity and, in the end, blindness.

During the Clone Wars the Jedi were forced into a military role that conflicted with everything they stood for. Over 10,000 strong at the war's start, the Order was effectively destroyed in a single day by Order 66. Luke later tried to rebuild it; Rey carries it forward.`,
    facts: [['Headquarters', 'Jedi Temple, Coruscant'], ['Governing body', 'The Jedi Council (12 Masters)'], ['Weapon', 'Lightsaber'], ['Notable', 'Yoda, Mace Windu, Obi-Wan Kenobi, Luke Skywalker']]
  },
  {
    id: 'sith', name: 'The Sith', range: 'Ancient – 35 ABY', start: -7000, end: 35, color: '#ff2b2b', side: 'dark',
    short: 'Ancient dark-side order, sworn enemies of the Jedi.',
    text: `Originally a species on Korriban, the name came to mean the dark-side tradition. After millennia of self-destruction, **Darth Bane** imposed the **Rule of Two** — and the Sith survived in secret until Darth Sidious took the galaxy.

Even after Palpatine's death at Endor, his cult the **Sith Eternal** endured on Exegol, preparing his return and the Final Order.`,
    facts: [['Doctrine', 'The Rule of Two'], ['Homeworld', 'Korriban / Moraband'], ['Final stronghold', 'Exegol'], ['Notable', 'Bane, Plagueis, Sidious, Maul, Tyranus, Vader']]
  },
  {
    id: 'separatists', name: 'Confederacy of Independent Systems', range: '24 – 19 BBY', start: -24, end: -19, color: '#8fa0b8', side: 'dark',
    short: 'The Separatists — worlds and corporations that broke from the Republic.',
    text: `Led by Count Dooku and backed by the **Trade Federation, Techno Union, Banking Clan and Commerce Guild** — corporate powers with their own droid armies. Worlds tired of corruption, taxation and distant rule joined them in good faith, never knowing that both sides of their war answered to the same Sith Lord.

Its military commander was **General Grievous**. When the war had served its purpose, Darth Vader executed the Separatist Council on Mustafar.`,
    facts: [['Leader', 'Count Dooku (Darth Tyranus)'], ['Military', 'Droid army under General Grievous'], ['Backers', 'Trade Federation, Techno Union, Banking Clan'], ['Ended', 'Council executed on Mustafar, 19 BBY']]
  },
  {
    id: 'empire', name: 'The Galactic Empire', range: '19 BBY – 5 ABY', start: -19, end: 5, color: '#c9ced6', side: 'dark',
    short: 'Palpatine\'s regime of fear, built from the ashes of the Republic.',
    text: `The Empire ruled through fear, overwhelming military force and the suppression of all dissent. Its philosophy rested on human supremacy, authoritarian control and the doctrine of terror embodied by the Death Star.

Without the Emperor after Endor it fragmented into warlord states, and it formally surrendered after the Battle of Jakku.`,
    facts: [['Ruler', 'Emperor Palpatine'], ['Infantry', 'Stormtroopers (recruited, not cloned)'], ['Navy', 'Star Destroyers'], ['Agencies', 'ISB, the Inquisitorius'], ['Governors', 'Moffs and Grand Moffs']]
  },
  {
    id: 'rebellion', name: 'The Rebel Alliance', range: 'c. 5 BBY – 5 ABY', start: -5, end: 5, color: '#ff8a3d', side: 'light',
    short: 'A coalition of cells, dissident senators and freedom fighters.',
    text: `Founded by **Bail Organa** of Alderaan, **Mon Mothma** of Chandrila and — covertly — Ahsoka Tano. Always massively outgunned, the Alliance relied on guerrilla tactics, stolen intelligence and the courage of individuals.

Its great victories — **Scarif**, **Yavin** and **Endor** — broke the Empire. Afterwards it reorganised as the New Republic.`,
    facts: [['Founders', 'Mon Mothma, Bail Organa'], ['Bases', 'Yavin 4, Hoth, the fleet'], ['Flagship', 'Home One (MC80)'], ['Strategy', 'Asymmetric warfare, intelligence, hope']]
  },
  {
    id: 'new-republic', name: 'The New Republic', range: '5 – 34 ABY', start: 5, end: 34, color: '#5fb8a0', side: 'light',
    short: 'The government born from the Rebellion\'s victory.',
    text: `Mon Mothma became Chancellor. To avoid another Coruscant, the capital rotated among member worlds, and the Republic demilitarised dramatically — a decision that left it fatally vulnerable.

It was effectively destroyed when Starkiller Base obliterated the Hosnian system in 34 ABY.`,
    facts: [['First Chancellor', 'Mon Mothma'], ['Capital', 'Rotating — Chandrila, later Hosnian Prime'], ['Treaty', 'Galactic Concordance'], ['Fell', 'Hosnian Cataclysm, 34 ABY']]
  },
  {
    id: 'first-order', name: 'The First Order', range: 'c. 21 – 35 ABY', start: 21, end: 35, color: '#e0262f', side: 'dark',
    short: 'A military junta grown from Imperial remnants in the Unknown Regions.',
    text: `Led by **Supreme Leader Snoke** — secretly a puppet of the resurrected Palpatine — it rebuilt the Imperial war machine in secret, including stormtroopers kidnapped as children and indoctrinated from birth (Finn's origin).

After Snoke's death, **Kylo Ren** became Supreme Leader. It collapsed after the Battle of Exegol.`,
    facts: [['Leaders', 'Snoke, then Kylo Ren'], ['Command', 'General Hux, Allegiant General Pryde'], ['Superweapon', 'Starkiller Base'], ['Flagship', 'Supremacy']]
  },
  {
    id: 'resistance', name: 'The Resistance', range: 'c. 28 – 35 ABY', start: 28, end: 35, color: '#ff9b5a', side: 'light',
    short: 'Leia Organa\'s paramilitary force against the First Order.',
    text: `Founded by **General Leia Organa** when the New Republic refused to take the First Order seriously. Smaller and poorer than the old Alliance, it fought a desperate holding action — until it rallied the whole galaxy at the Battle of Exegol.`,
    facts: [['Founder', 'Leia Organa'], ['Bases', 'D\'Qar, Crait, Ajan Kloss'], ['Pilots', 'Poe Dameron, Snap Wexley, Karé Kun'], ['Victory', 'Battle of Exegol, 35 ABY']]
  },
  {
    id: 'mandalorians', name: 'The Mandalorians', range: 'Ancient – present', start: -4000, end: 45, color: '#9fb6c9', side: 'neutral',
    short: 'Not a species but a culture of warriors bound by a creed.',
    text: `Warriors from Mandalore who wear **beskar** armour and follow a creed — a history of constant war, abroad and among themselves.

The **Darksaber**, created by Tarre Vizsla, the first Mandalorian Jedi, is the traditional claim to rule Mandalore.`,
    groups: [['Death Watch', 'A traditionalist militant faction.'], ['Children of the Watch', 'A strict orthodox sect — Din Djarin\'s covert.'], ['Nite Owls', 'Bo-Katan Kryze\'s loyalist faction.']],
    facts: [['Homeworld', 'Mandalore'], ['Armour', 'Beskar\'gam'], ['Symbol of rule', 'The Darksaber'], ['Creed', '"This is the Way."']]
  },
  {
    id: 'underworld', name: 'The Criminal Underworld', range: 'Always', start: -25000, end: 45, color: '#c79bff', side: 'neutral',
    short: 'Syndicates, cartels and hunters-for-hire.',
    text: `Wherever governments are weak, crime is strong — especially in the Outer Rim.`,
    groups: [['The Hutt Cartel', 'Dominated Outer Rim crime for centuries — Jabba and the Hutt Council.'], ['Black Sun', 'A powerful galaxy-wide syndicate.'], ['Crimson Dawn', 'Run from the shadows by Maul, with Qi\'ra as his lieutenant.'], ['The Pyke Syndicate', 'Major spice traffickers.'], ['Bounty Hunters\' Guild', 'Boba Fett, Din Djarin, Bossk, IG-88, Dengar.']],
    facts: [['Territory', 'Outer Rim, Hutt Space'], ['Trade', 'Spice, weapons, slaves, bounties']]
  }
];
