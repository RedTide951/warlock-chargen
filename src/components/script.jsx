export default function charGenScript() {
  const character = {
    name: "",
    community: "",
    stamina: 0,
    luck: 0,
    career: "",
    careerSkills: "",
    traits: "",
    inventory: "",
    skills: {},
  };

  const skills = {
    Appraise: 0,
    Athletics: 0,
    Bargain: 0,
    Blunt: 0,
    Bow: 0,
    Brawling: 0,
    Command: 0,
    Crossbow: 0,
    Diplomacy: 0,
    Disguise: 0,
    Dodge: 0,
    Endurance: 0,
    History: 0,
    Incantation: 0,
    Intimidate: 0,
    Language: 0,
    LargeBlade: 0,
    Lie: 0,
    Medicine: 0,
    Navigation: 0,
    Ostler: 0,
    Persuasion: 0,
    PoleArm: 0,
    Repair: 0,
    SleightOfHand: 0,
    SmallBlade: 0,
    Spot: 0,
    Stealth: 0,
    Streetwise: 0,
    Survival: 0,
    Swimming: 0,
    Thrown: 0,
  };

  const traitsData = [
    "Active",
    "Adventurous",
    "Affectionate",
    "Afraid",
    "Ambitious",
    "Anxious",
    "Argumentative",
    "Attentive",
    "Bewildered",
    "Bossy",
    "Brave",
    "Brilliant",
    "Bully",
    "Calm",
    "Capable",
    "Careful",
    "Caring",
    "Charismatic",
    "Charming",
    "Childish",
    "Clever",
    "Clumsy",
    "Cold-Hearted",
    "Compassionate",
    "Competitive",
    "Conceited",
    "Concerned",
    "Confident",
    "Conscientious",
    "Considerate",
    "Cooperative",
    "Courageous",
    "Cowardly",
    "Critical",
    "Cruel",
    "Curious",
    "Daring",
    "Dependable",
    "Determined",
    "Dishonest",
    "Disrespectful",
    "Dreamer",
    "Eager",
    "Easy-Going",
    "Efficient",
    "Energetic",
    "Enthusiastic",
    "Fair",
    "Faithful",
    "Fidgety",
    "Fierce",
    "Foolish",
    "Friendly",
    "Funny",
    "Generous",
    "Gentle",
    "Gloomy",
    "Greedy",
    "Grouchy",
    "Hard-Working",
    "Happy",
    "Harsh",
    "Hateful",
    "Hopeful",
    "Hopeless",
    "Humorous",
    "Ignorant",
    "Imaginative",
    "Immature",
    "Impatient",
    "Impolite",
    "Impulsive",
    "Independent",
    "Insistent",
    "Intelligent",
    "Jealous",
    "Jovial",
    "Lazy",
    "Leader",
    "Logical",
    "Lonely",
    "Lovable",
    "Loving",
    "Loyal",
    "Lucky",
    "Mature",
    "Mean",
    "Moody",
    "Mysterious",
    "Nervous",
    "Noisy",
    "Obedient",
    "Obnoxious",
    "Observant",
    "Optimistic",
    "Peaceful",
    "Persistent",
    "Pessimistic",
    "Picky",
    "Pleasant",
    "Polite",
    "Proud",
    "Puzzled",
    "Quick",
    "Quiet",
    "Reliable",
    "Respectful",
    "Responsible",
    "Restless",
    "Rowdy",
    "Rude",
    "Sarcastic",
    "Secretive",
    "Self-Confident",
    "Selfish",
    "Self-Reliant",
    "Sensitive",
    "Shy",
    "Silly",
    "Sincere",
    "Skillful",
    "Sly",
    "Smart",
    "Sneaky",
    "Snobbish",
    "Sociable",
    "Stingy",
    "Strict",
    "Stubborn",
    "Studious",
    "Sweet",
    "Talented",
    "Talkative",
    "Thoughtful",
    "Thoughtless",
    "Timid",
    "Trusting",
    "Trustworthy",
    "Unfriendly",
    "Useful",
    "Versatile",
    "Warm-Hearted",
    "Wise",
    "Witty",
    "Worried",
  ];

  const careerData = {
    Agitator: {
      name: "Agitator",
      id: 1.1,
      skillLimits: {
        SmallBlade: 10,
        Intimidate: 10,
        Dodge: 12,
        Persuasion: 12,
        Streetwise: 12,
      },
      description:
        "You spend your time stirring things up, digging into the psyche of the mob and twisting it to your ends. You are a good speaker, good at manipulating people, and at prodding the sore spots. That grain riot in Galdenback? That was you. You had some thing to do with the burning of the warehouse on the shores of the river Eld, some say. You don't comment.",
      equipment:
        "A notched and nasty dagger, a leather jerkin (light armour), pamphlets, seditious writings. A bottle of grog that could be set on fire, you know, if you had to.",
      background1: {
        tableName: "Who you've worked for",
        table: [
          "The Heldehall crime gang",
          "Steepleman, the Mayor's rival",
          "The cult of the Stag.",
          "The Gilvenburg trade house.",
          "Someone called The Knife.",
          "You don't know. Which is worrying.",
        ],
      },
      background2: {
        tableName: "Who's hunting you?",
        table: [
          "The Guard, deadly and vengeful.",
          "The Guild, bedecked with lawyers.",
          "The Church, saintly and poisonous.",
          "Your brother, hateful but sad.",
          "A goblin band, angry and mad.",
          "You don't know. Which is worrying.",
        ],
      },
    },
    Beggar: {
      name: "Beggar",
      id: 1.2,
      skillLimits: {
        Appraise: 10,
        Blunt: 10,
        Lie: 12,
        Spot: 12,
        Streetwise: 12,
      },
      description:
        "Seated by the side of the road, you're ignored by almost everyone - they don't even notice you are there. Which doesn't help you eat, but does mean you tend to see things others might prefer to go unnoticed. You can spot a soft touch in the crowd, and when things are tight and you need some help, you also know people - not good people, but useful people.",
      equipment:
        "A wooden club for defence, ragged clothes, a messy bedroll. A bottle of something that helps you forget how hard the floor is.",
      background1: {
        tableName: "What you've seen",
        table: [
          "Things coming out of the sewers",
          "What the Mayor gets up to",
          "Where the pickpockets live",
          "The secret of Madam von Hossburg",
          "A murder, silent and beautiful",
          "A person supposed to be dead",
        ],
      },
      background2: {
        tableName: "Who you know",
        table: [
          "The captain of the Peacock Guard",
          "The silent priest of the Red King",
          "Silias, the silver thief",
          "The beautiful charlatan Mimirik",
          "The Dark Man and his bitter gang",
          "You don't know anyone, honest.",
        ],
      },
    },
    Boatman: {
      name: "Boatman",
      id: 1.3,
      skillLimits: {
        Navigation: 10,
        Repair: 10,
        Blunt: 12,
        Endurance: 12,
        Swimming: 12,
      },
      description:
        "Messing about on the river some call it, but in reality they know the rivers are the lifeblood of the Kingdom, and the boatmen are the true lords. Or so you say. Still, there's a lot to be learned on the river, and you certainly see some interesting places and meet some interesting people. But the boat is where your heart really lies.",
      equipment:
        "A wooden club for defence, workman's clothes, a bedroll and backpack. A pack of cards for those slow nights, and a picture of a saint.",
      background1: {
        tableName: "Where you've been",
        table: [
          "The capital city, bedecked in flags.",
          "The badlands, rife with goblins.",
          "The great port and wine-dark sea.",
          "Lake Gossenham, and the floating fort.",
          "The bloody canals of Westerlan.",
          "The rapids of the mighty Alase river.",
        ],
      },
      background2: {
        tableName: "What you've seen",
        table: [
          "Goblins burn a town with glee.",
          "The lair of the loved Bandit king.",
          "Blind traders from far Arais.",
          "A sea beast, deadly and beautiful.",
          "A handsome captain murdered for coin.",
          "Enough of war to last a lifetime.",
        ],
      },
    },
    Bodyguard: {
      name: "Bodyguard",
      id: 1.4,
      skillLimits: {
        Medicine: 10,
        Thrown: 10,
        Dodge: 12,
        Intimidate: 12,
        LargeBlade: 12,
      },
      description:
        "You've guarded everyone from merchants in fear of rivals to rich nobles after some fun in the rougher parts of town. You know how to keep quiet and look mean - all you need, most of the time. But things get out of hand and you need to pull a weapon, you're ready for that too. Never lost a client. So far.",
      equipment:
        "An arming sword, chain and leather with a small shield (modest armour), knuckle-dusters. A letter from your mother, which you cherish when times get hard.",
      background1: {
        tableName: "Who you have protected",
        table: [
          "Vilus, the vile priest.",
          "The head of the von Tassenback family.",
          "The dwarven map forger, Haddous.",
          "Lady Consetta, the sly opera singer.",
          "The crimelord Garhen the elf.",
          "Lord Fellini, a fool in disguise.",
        ],
      },
      background2: {
        tableName: "A secret you know about them",
        table: [
          "They drink wine like a fish.",
          "They visit the more exotic brothels.",
          "They once killed someone, for love.",
          "Where they keep the gold.",
          "Who their late lamented mother was.",
          "Why they hate the King's guard.",
        ],
      },
    },
    BountyHunter: {
      name: "Bounty Hunter",
      id: 1.5,
      skillLimits: {
        Bargain: 10,
        Crossbow: 10,
        SmallBlade: 12,
        Spot: 12,
        Streetwise: 12,
      },
      description:
        "You keep to yourself. Your face is enough to keep most people away. You have a knack for finding people, people that don't want to be found. Mainly that's a result of knowing the right people - or the wrong people, as most would see it. But you're handy with a blade too, as most of the people you are looking for will do a lot not to get found.",
      equipment:
        "A dagger, chain and leather (modest armour), a crossbow. A roll of parchment showing faces and names for you to look out for.",
      background1: {
        tableName: "Who you have caught",
        table: [
          "The murderer of Madam Von Hock.",
          "The Tresselback arsonist.",
          "Your sister. Don't ask.",
          "Deserters from the royal army.",
          "The wrong person, but don't tell.",
          "The agitator Hemlock.",
        ],
      },
      background2: {
        tableName: "Who you're searching for",
        table: [
          "The halfling poisoner Rubis.",
          "The lover of Jizt, a jilted noble.",
          "Horse thieves from Pure Ballalas.",
          "The heretical priest Kinns.",
          "A reason to hope, in a dark land.",
          "A way out and into the light.",
        ],
      },
    },
    Entertainer: {
      name: "Entertainer",
      id: 1.6,
      skillLimits: {
        Diplomacy: 10,
        History: 10,
        Brawling: 12,
        Disguise: 12,
        Persuasion: 12,
      },
      description:
        "You can hold a tune, play an instrument or tell a story, good enough that others will listen. People like you for that reason, and listen to what you have to say. Not that you take advantage of that. Not at all. But hey, everyone has to make a living right? Nothing wrong with telling people what they want to hear, and if it helps you, that's just a coincidence, right?",
      equipment:
        "A musical instrument or book of stories, a dagger, nice clothes and a jaunty hat that marks you as someone to watch. A roll of parchment with that play you've been working on.",
      background1: {
        tableName: "Who you have entertained",
        table: [
          "The crowds outside the grand temple.",
          "The patrons of the Broken Swan.",
          "The royal opera house.",
          "Lady Polbeck's last and greatest party.",
          "The beggars, you feel sorry for them.",
          "Anyone who'll listen on the streets.",
        ],
      },
      background2: {
        tableName: "What have you learned",
        table: [
          "The mayor loves to sing.",
          "Holbrick is a swindler.",
          "Great stories are often unappreciated.",
          "Poetry is not for you.",
          "Sweet words hide ugly thoughts.",
          "There's money in well-spoken lies.",
        ],
      },
    },
    Footpad: {
      name: "Footpad",
      id: 2.1,
      skillLimits: {
        Stealth: 10,
        Thrown: 10,
        Blunt: 12,
        Intimidate: 12,
        Streetwise: 12,
      },
      description:
        "Need money? No problem. Spot a mark, follow them, make your move. No need to get too violent, just enough to get the job done. Then run. Have a look at what you got later, when you're safe. Or as safe as you can be anyway. You can't trust anyone these days. A lurker in doorways and alleys, you are sadly one of many in the Kingdom these days.",
      equipment:
        "A nasty club, stained with blood. A cloak with hood, and a sack for your gains. A few pretty trinkets which make you feel special and aren't worth pawning.",
      background1: {
        tableName: "Who you have robbed",
        table: [
          "The captain of the guard, dead drunk.",
          "Your father. Needs must.",
          "A young noble, foppish and foolish.",
          "A priest of the Heartstone.",
          "The merchant Johannes.",
          "A nun - you're not proud.",
        ],
      },
      background2: {
        tableName: "What's your move",
        table: [
          "Slink out of doorways, cloaked.",
          "Drop from a roof like a spider.",
          "Pretend to be a beggar, humble and sad.",
          "Lurk in bars, prey on the drunk.",
          "Hide in the sewers, then jump!",
          "Anything that comes to mind, really.",
        ],
      },
    },
    Gambler: {
      name: "Gambler",
      id: 2.2,
      skillLimits: {
        Bargain: 10,
        Spot: 10,
        Lie: 12,
        Persuasion: 12,
        SleightOfHand: 12,
      },
      description:
        "A fool and his money are soon parted. You're no fool, but the gambling pits of the Kingdom, be they back-street dens or aristocrat casinos are awash with them. You're good at finding a mark, and playing the odds in your favour so that you get what you need. And if you make a few enemies on the way, that's life huh?",
      equipment:
        "A deck of cards, well-thumbed, nice clothes and a serious hat that marks you as a player. A roll of parchment with your best cheats scribbled on it.",
      background1: {
        tableName: "Who have you fleeced",
        table: [
          "Anise, arrogant mistress of Fulbeck.",
          "Your father. Needs must.",
          "An aspiring priest of his last coppers.",
          "The mercenary Jagar. An error.",
          "The gullible son of Lord Vech.",
          "Who haven't you fleeced?",
        ],
      },
      background2: {
        tableName: "Who wants revenge",
        table: [
          "The casino owner, who's on to you.",
          "Your partner. Well, one-time partner.",
          "Your lover, who you gambled away.",
          "That princeling, who knows you cheat.",
          "Your father, for your dissolute ways.",
          "Who doesn't want revenge?",
        ],
      },
    },
    GraveRobber: {
      name: "Grave Robber",
      id: 2.3,
      skillLimits: {
        Intimidate: 10,
        Ostler: 10,
        Persuasion: 12,
        SmallBlade: 12,
        Spot: 12,
      },
      description:
        "Certainly not how you imagined your life going, but sometimes you have to do what fate decided. For some reason certain people want bodies, and someone's got to supply them. You have no problem staring the recently dead in the face, so long as it puts food on the table and clothes on your back. The smell is bad though, hard to get rid of, and people often seem to avoid you. Ah well.",
      equipment:
        "A dagger, a pony, a shovel and a bag for the body, the tools of your trade. An icon of a saint, who you secretly beg for mercy.",
      background1: {
        tableName: "Who you have dug up",
        table: [
          "Your mother - a sad day.",
          "An elven prince, bedecked in garlands.",
          "The last king of a forgotten land.",
          "The buried silver of the Merchant Hess.",
          "The thigh of saint Asxe, holy relic.",
          "A traitor wrongly hanged as a wizard.",
        ],
      },
      background2: {
        tableName: "Who seeks you, perhaps beyond death",
        table: [
          "The pale shade of Prince Sargelo.",
          "The von Hocken family, beset with grief.",
          "Your lover, who you buried and robbed.",
          "The soul of a Fire priest, burning.",
          "Your partner, betrayed.",
          "No one. As far as you know...",
        ],
      },
    },
    Hunter: {
      name: "Hunter",
      id: 2.4,
      skillLimits: {
        Stealth: 10,
        Swimming: 10,
        Bow: 12,
        Spot: 12,
        Survival: 12,
      },
      description:
        "In the wilds it is hard to survive - it's a case of eat or be eaten. You're determined to be the one who eats. Moving stealthily through the brush, you spy out your target, and then you make the kill. Hunting monsters or people isn't much different really, except they tend to complain more when you shoot them. Ah well.",
      equipment:
        "A good hunting bow and a quiver of arrows, a brown and green cloak, snares and traps, and cooking pots and pans. A bag of herbs, worth their weight in gold.",
      background1: {
        tableName: "Where have you been",
        table: [
          "The Black Spine mountains, ice-bound.",
          "The forest of Helmsby, dark and old.",
          "The great river Alase, wild and dark.",
          "The caverns of Trime, cold and sad.",
          "The royal forest, full of quarry.",
          "The broken plain, blasted and dry.",
        ],
      },
      background2: {
        tableName: "What have you hunted",
        table: [
          "The great deer, sacred to elves.",
          "The goblins who killed your family.",
          "Trolls, fat with hate.",
          "A wyvern, wild and proud.",
          "The talking bears of the ancient woods.",
          "Anything that moves, you've got to eat.",
        ],
      },
    },
    Initiate: {
      name: "Initiate",
      id: 2.5,
      skillLimits: {
        Command: 10,
        Ostler: 10,
        Incantation: 12,
        Medicine: 12,
        Persuasion: 12,
      },
      description:
        "The gods are many, and powerful. Their actions can be seen every day, in the miracle of life and the endless procession of the stars. Gods make the sun rise, the rivers flow and the forests teem. Your job is to remind the common folk of this and persuade them to worship. It's not easy.",
      equipment:
        "Long robes of your god, a helmet and shield of your faith (light armour), a mace, a book of prayer, and a single spell.",
      background1: {
        tableName: "Who is your god",
        table: [
          "The Red King, angry and vengeful.",
          "The Thrice Blessed, noble and proud.",
          "The Wild Wood, fierce and savage.",
          "The Dragon, power incarnate.",
          "The Heartstone, solid and wise.",
          "A god only you have heard of.",
        ],
      },
      background2: {
        tableName: "What is your personal creed",
        table: [
          "Give as you take, take what you need.",
          "Love is false, only death is absolute.",
          "Power is weakness, weakness is strength.",
          "Death is a game of chance, god's will.",
          "Wisdom is knowledge, knowledge is life.",
          "Everything is dust, except love.",
        ],
      },
    },
    Mercenary: {
      name: "Mercenary",
      id: 2.6,
      skillLimits: {
        Endurance: 10,
        Streetwise: 10,
        Crossbow: 12,
        Dodge: 12,
        LargeBlade: 12,
      },
      description:
        "You fight for money, nothing wrong with that. Good and bad doesn't come into it. With a sword in your hand and a shield on your arm, any cause is your cause, if the price is right. Sure, it's easier to help the just. But often it seems, the 'just' don't pay as well.",
      equipment:
        "An arming sword, chain, a breastplate, and a shield without an emblem (moderate armour), a crossbow and quiver of bolts, and a book of religious scripture - you need to make sure you go to the right place when you die.",
      background1: {
        tableName: "Who have you worked for",
        table: [
          "Fizzen's freebooters, murderers all.",
          "The king's guard, who were in need.",
          "The last Prince of ruined Honheim.",
          "The town of Westerboss, in dire need.",
          "The Honest's chosen, poorly named.",
          "The traitor's army, eventually routed.",
        ],
      },
      background2: {
        tableName: "Who's death haunts you",
        table: [
          "The townsfolk of Visen, brutally slain.",
          "A child you saw killed.",
          "Your lover, who you buried in grief.",
          "The first man you murdered, in anger.",
          "Your partner, who betrayed you.",
          "No one. You are made of stone and death.",
        ],
      },
    },
    Militiaman: {
      name: "Militiaman",
      id: 3.1,
      skillLimits: {
        Command: 10,
        Ostler: 10,
        Crossbow: 12,
        PoleArm: 12,
        Thrown: 12,
      },
      description:
        "They pay you to keep the peace, which mainly involves looking dangerous and unapproachable. You can handle yourself in a fight though, and have the scars to prove it. You're on the side of good, whatever that means. Usually it means the man who pays the wages.",
      equipment:
        "A pole-arm, a crossbow, a quiver of bolts, chain suit (light armour), a book of ordinances, and a seal of authority to show off when you need to.",
      background1: {
        tableName: "Where have you worked",
        table: [
          "The docks, full of foreigners.",
          "Temple district, surprisingly rough.",
          "The walls, watching for Unmen.",
          "The town square, mostly at hangings.",
          "The market, rife with robbers.",
          "The guardhouse, full of violent men.",
        ],
      },
      background2: {
        tableName: "What have you seen",
        table: [
          "The crowd crush a fallen man.",
          "A child stabbed for stealing an apple.",
          "The mayor pelted with rotten fruit.",
          "A dead man, strung up by his guts.",
          "Robbers having their fingers cut off.",
          "A priest smash a rival with a sceptre.",
        ],
      },
    },
    Miner: {
      name: "Miner",
      id: 3.2,
      skillLimits: {
        Survival: 10,
        Swimming: 10,
        Athletics: 12,
        Endurance: 12,
        Navigation: 12,
      },
      description:
        "Holes in the ground are dangerous places, but they can be full of treasure - ores, metals... even gold. You're experienced at digging those treasures out for profit. No one says mines are pleasant places (well, the dwarves do), but you know there's money to be made in the bowels of the earth.",
      equipment:
        "A pick and shovel, hardy and rough clothing, a lantern and a sack for that lovely ore. A wooden carving of a mine spirit, said to ward off others of its kind.",
      background1: {
        tableName: "What have you dug up",
        table: [
          "Gold, pure and simple. Men die for it.",
          "Metal ore, good for making weapons.",
          "Crystals, the wizards pay well.",
          "Nothing but dirt and ghosts.",
          "The buried treasure of a dead king.",
          "The entrance to a blackened tomb.",
        ],
      },
      background2: {
        tableName: "What have you seen",
        table: [
          "Trolls nesting in great caverns.",
          "The skull of a dragon, long dead.",
          "Murder in the depths, out of sight.",
          "A goblin town, complete with brats.",
          "Ghosts drifting from the walls.",
          "A shrine to an outlawed god, deserted.",
        ],
      },
    },
    Noble: {
      name: "Noble",
      id: 3.3,
      skillLimits: {
        Language: 10,
        Medicine: 10,
        Command: 12,
        Diplomacy: 12,
        History: 12,
      },
      description:
        "You had a great education, the best food, clothes and servants that money can buy, but you're still a massive disappointment. Now you've fled the family home, determined to either make a name for yourself or escape the bondage of your station. You're beginning to think this was a bad idea.",
      equipment:
        "Fine clothes, some interesting books, silver cutlery, and an arming sword of the highest quality. A letter from father, which you dread to read.",
      background1: {
        tableName: "Why did you leave",
        table: [
          "Father disowned you as a wastrel.",
          "It was love, but doomed to wither.",
          "You must live by your deeds, not name.",
          "You got bored. Simple as that.",
          "You got in the way of your brother.",
          "Your family chose to back the traitor.",
        ],
      },
      background2: {
        tableName: "When will you return",
        table: [
          "Never! You'd rather die.",
          "As soon as you're forgiven.",
          "When you are triumphant!",
          "When father dies, the old fool.",
          "When they'll have you back. Please!",
          "With an army at your back, for revenge!",
        ],
      },
    },
    Outlaw: {
      name: "Outlaw",
      id: 3.4,
      skillLimits: {
        Medicine: 10,
        SleightOfHand: 10,
        Intimidate: 12,
        LargeBlade: 12,
        Thrown: 12,
      },
      description:
        "It's hard to make a living in the Kingdom, and they forced you to make a bad choice. Robbing is simple and straightforward. A blade is a great persuader. The difficult bit is living long enough to spend what you have - those Road Wardens are everywhere, and some people seem to frown on an honest thief's work. What is the world coming to?",
      equipment:
        "A rusty arming sword, mail, leathers and a battered shield (light armour). A facemask. A letter from a victim to their lover, too poetic to discard.",
      background1: {
        tableName: "What did you do",
        table: [
          "Refused to pay the tithe on your crops.",
          "Threw rotten vegetables at the mayor.",
          "Stole coins from a drunk lord.",
          "Killed an artisan in a pub brawl.",
          "No idea, they wouldn't say.",
          "Handed out leaflets for the traitor.",
        ],
      },
      background2: {
        tableName: "Who hunts you",
        table: [
          "The town guard, always watchful.",
          "An outlaw captain, who hates you.",
          "Your family, eager to have you back.",
          "A priest of the Red King, for revenge.",
          "The king's army, as a recruit.",
          "The Bandit Lord, you saw his lair.",
        ],
      },
    },
    Pedlar: {
      name: "Pedlar",
      id: 3.5,
      skillLimits: {
        Ostler: 10,
        Streetwise: 10,
        Appraise: 12,
        Bargain: 12,
        Repair: 12,
      },
      description:
        "Life on the open road. Dangerous, sure, but you have to earn your keep somehow. You've always got something to sell, and a good eye for a bargain. To some communities you are a lifeline, and you take pride in that. Still, pride doesn't help you when the goblins come in the dark, blades shining in the light of your fire.",
      equipment:
        "A horse, slow but strong, a small cart with your wares on, a staff for walking, and a small tent for when the weather's against you.",
      background1: {
        tableName: "What do you sell",
        table: [
          "Pots and pans, soft metal but cheap.",
          "Books, and paper, luxury items.",
          "The latest fashions from the capital.",
          "Gossip as much as anything else.",
          "Stolen gear, no questions asked.",
          "Alcohol and tobacco, the good stuff.",
        ],
      },
      background2: {
        tableName: "Where have you been",
        table: [
          "The capital, a sight to behold.",
          "Where haven't you been?",
          "Fesselburg, just as the traitor fell.",
          "Fair Marenesse, the great port.",
          "The open market in Rebeck, amazing!",
          "Here and there, who's asking?",
        ],
      },
    },
    Raconteur: {
      name: "Raconteur",
      id: 3.6,
      skillLimits: {
        Dodge: 10,
        History: 10,
        Appraise: 12,
        Lie: 12,
        Streetwise: 12,
      },
      description:
        "You can tell a good tale, that's for sure. Weave narrative like your life depended on it, and you have a good eye for what your audience wants to hear. Is it all true? Well, not exactly true. Like all great stories, it has a life of its own, so does that really matter? It seems to some, yes. Which is a shame, but there you go. Have I ever told you of the time I..?",
      equipment:
        "Jaunty clothes, a bottle or two of something strong. An arming sword, few 'relics' of your past exploits, impressive but worthless.",
      background1: {
        tableName: "What tales do you tell",
        table: [
          "War stories, from your army days.",
          "Tales of exploration in deepest Kulk.",
          "The latest tales from the capital.",
          "Gossip from the salons of the nobles.",
          "Stories of the highway men and outlaws.",
          "Stuff you read in books, all true!",
        ],
      },
      background2: {
        tableName: "Where have you been",
        table: [
          "The capital, where you're well-known.",
          "Where haven't you been?",
          "Fesselburg, you knew the traitor.",
          "Fair Marenesse, you served on ship.",
          "The great battle of Pomperburg!",
          "Here and there. Buy me a drink?",
        ],
      },
    },
    RatCatcher: {
      name: "Rat Catcher",
      id: 4.1,
      skillLimits: {
        Athletics: 10,
        Medicine: 10,
        Brawling: 12,
        Stealth: 12,
        Survival: 12,
      },
      description:
        "In the cities and towns, there's vermin aplenty, and people who'll pay to get rid of it. Though it might not be the nicest job, someone has to do it, and you can always sell what you catch for a few coins. People always want meat, and as an added bonus you now know the places to avoid when you're after a pie...",
      equipment:
        "A ratter, a small, nasty dog. A staff festooned with dead rats, the mark of your trade. A few traps, some with live vermin. Want to buy one?",
      background1: {
        tableName: "Where have you worked",
        table: [
          "Grim Biskerstaf, the rotten city.",
          "The market, it's crawling with vermin.",
          "The home of Lord Cesst, surprisingly.",
          "The dockside warehouses, at night.",
          "In the sewers, I don't recommend it.",
          "Everywhere, why do you ask?",
        ],
      },
      background2: {
        tableName: "What have you seen",
        table: [
          "Things in the sewers, man-like things.",
          "Lord Kemp paying an assassin.",
          "A stabbing in the back alleys.",
          "A way into the palace, unguarded.",
          "The skull of a rat a foot across.",
          "The backside of life. You?",
        ],
      },
    },

    RoadWarden: {
      name: "Road Warden",
      id: 4.2,
      skillLimits: {
        Crossbow: 10,
        Dodge: 10,
        Navigation: 12,
        PoleArm: 12,
        Ostler: 12,
      },
      description:
        "The roads are the veins of the Kingdom, and you have a simple task - keep them flowing. Goblins, unmen, bandits and other dangers threaten the flow, and you must face all. Still, your kind are woefully under-resourced and the danger grows daily, so you have to think smart if you are going to succeed. And by succeed I mean stay alive.",
      equipment:
        "A horse, your best friend. A pole-arm for barring the way and a crossbow to back it up. A small tent and cooking gear for when you're on the road.",
      background1: {
        tableName: "Where have you travelled",
        table: [
          "The roads to the capital, well-guarded.",
          "The road to Cesst keep, dangerous.",
          "The Great Way, full of refugees.",
          "The Pomperburg road, full of deserters.",
          "The trade route to Far Hissain.",
          "The Black Road, goblin country.",
        ],
      },
      background2: {
        tableName: "What have you seen",
        table: [
          "Unmen in the forests, watching.",
          "A caravan caught by murderous bandits.",
          "Goblin raid on a noble's grand tour.",
          "Routers run through by the army.",
          "A dragon, flying high above luckily!",
          "A flash flood drown a merchant's van.",
        ],
      },
    },

    Soldier: {
      name: "Soldier",
      id: 4.3,
      skillLimits: {
        Command: 10,
        Bow: 10,
        Dodge: 12,
        LargeBlade: 12,
        PoleArm: 12,
      },
      description:
        "You've marched the Great Road, seen action against the traitor, and paraded in your best armour, such that it was. You've seen things and lived at the sharp end, which has made you hollow-eyed and jaded. Perhaps you'll get out of this way of life, but it is really all you know. Perhaps you're here for good, or at least until your luck runs out.",
      equipment:
        "A bow and quiver of arrows and an arming sword, all well looked after. A shield with the emblem of your last commission and a good suit of mail (modest armour). A book of prayers to the gods, any gods.",
      background1: {
        tableName: "Where have you served",
        table: [
          "Pomperburg, against the traitor.",
          "The personal army of Lord Cesst.",
          "The war against Far Hissain.",
          "Against Fizzen's Freebooters.",
          "Against the goblins of Kelpernan.",
          "The Black Road war, very bad.",
        ],
      },
      background2: {
        tableName: "What have you seen",
        table: [
          "Wizards burning men for the traitor.",
          "Goblins eat the dead.",
          "Unmen squeal as you cut them down.",
          "Deserters hung by the dozen.",
          "A troll kill ten before it fell!",
          "A village burned; the peasants killed.",
        ],
      },
    },

    Thief: {
      name: "Thief",
      id: 4.4,
      skillLimits: {
        Lie: 10,
        Streetwise: 10,
        SleightOfHand: 12,
        SmallBlade: 12,
        Spot: 12,
      },
      description:
        "So you steal. Nothing wrong with that - it's an honest profession. You take what you need and spend it, you're just redistributing wealth and keeping the economy ticking over. You only take from the rich. Well, mostly from the rich. Needs must eh? Can't be too picky.",
      equipment:
        "A long wicked knife, lock-picking tools, a pry bar and a thick but non-descript cloak. A sack for you gains, no doubt ill-gotten.",
      background1: {
        tableName: "What or who have you robbed",
        table: [
          "The priest Galus of the Red King.",
          "The Guildhouse of wax and flowers.",
          "I'm telling you nothing.",
          "The tower of the wizard Dess.",
          "The Golden Cave, now relieved of gold.",
          "The Guard captain, an easy mark.",
        ],
      },
      background2: {
        tableName: "Who wants you dead",
        table: [
          "Who doesn't?",
          "The thieves guild, they charge taxes.",
          "A wizard, for unknown reasons.",
          "You mother, curse her eyes!",
          "The judge at Rottenburg, you escaped.",
          "I said I'm telling you nothing!",
        ],
      },
    },

    TombRobber: {
      name: "Tomb Robber",
      id: 4.5,
      skillLimits: {
        Athletics: 10,
        Intimidate: 10,
        Appraise: 12,
        Blunt: 12,
        Endurance: 12,
      },
      description:
        "If fools bury their dead with coin and gold, that's their problem. You just make sure all that wealth doesn't go to waste laying in some tomb. After all, who needs gold in the afterlife? You can't buy your way to the Golden Land can you, the gods judge not on material wealth but on the gold in your soul. Your soul's not worth much, so no reason to stop what you're doing.",
      equipment:
        "A crowbar and medal pegs, plus a hammer and chisel; the tools of business. A thick cloak with a hood and a lantern. A club for when things go wrong.",
      background1: {
        tableName: "What have you robbed",
        table: [
          "A traitor knight's tomb, newly built.",
          "The tomb of family Cesst, shattered.",
          "The crypts under Gellen cathedral.",
          "The Red King's tomb, supposedly.",
          "An elven tomb, frankly terrifying.",
          "A dwarven tomb, well constructed.",
        ],
      },
      background2: {
        tableName: "What did you find",
        table: [
          "Gold stained red with blood.",
          "A book of blasphemy, which you kept.",
          "Nothing but death and dust.",
          "Old swords, notched and worn.",
          "The body of a ghoul, fat and swollen.",
          "Nothing but ghosts.",
        ],
      },
    },

    WizardsApprentice: {
      name: "Wizard's Apprentice",
      id: 4.6,
      skillLimits: {
        Command: 10,
        Persuasion: 10,
        History: 12,
        Language: 12,
        Incantation: 12,
      },
      description:
        "Ah magic. The greatest power of the Kingdom. At least that's what your master said, before he kicked you out to 'see the world'. Apparently travelling the land in the company of mere mortals is good for your magical attunement, or some such. You're beginning the suspect that your master just didn't want the distraction from his very important 'research'.",
      equipment:
        "A cloak with magical emblems so you look the part. A staff to aid your journey, and some books on magical theory. A backpack full of herbs and magical gewgaws. One spell of your choice.",
      background1: {
        tableName: "Where have you been",
        table: [
          "Pomperburg, you left in a hurry.",
          "The magical colleges in the capital.",
          "Nowhere worth your time.",
          "The forest roads, never again.",
          "The Golden Cave, magical!",
          "The passes of the Cragtop mountains.",
        ],
      },
      background2: {
        tableName: "What have you learned",
        table: [
          "Wizards are better than other folk.",
          "The road is a harsh mistress.",
          "People fear magic more than the gods.",
          "Magic can't save you from a sword.",
          "Food is worth more than books!",
          "Nothing. This is pointless.",
        ],
      },
    },
  };

  // Helper function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // 0. Step: assign Race and Name

  function assignRaceAndName() {
    const races = [
      "Human",
      "Human",
      "Human",
      "Human",
      "Elf",
      "Dwarf",
      "Halfling",
    ];
    character.community = races[Math.floor(Math.random() * 7)];

    // Name generator
    const firstParts = [
      "Aer",
      "Drak",
      "Fay",
      "Tor",
      "Zel",
      "Lun",
      "Mor",
      "Syl",
      "Ryn",
      "Kael",
    ];
    const secondParts = [
      "dor",
      "wyn",
      "mir",
      "neth",
      "thal",
      "riel",
      "vyn",
      "sor",
      "mon",
      "las",
    ];
    const suffixes = [
      "a",
      "ion",
      "iel",
      "or",
      "an",
      "is",
      "eth",
      "ar",
      "on",
      "ius",
    ];

    const name =
      firstParts[Math.floor(Math.random() * firstParts.length)] +
      secondParts[Math.floor(Math.random() * secondParts.length)] +
      suffixes[Math.floor(Math.random() * suffixes.length)];

    character.name = name;
  }

  // 1. Step: Rolls for HP and Luck

  const statRoller = () => {
    character.stamina =
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) + 12;
    character.luck = Math.ceil(Math.random() * 6) + 7;
  };

  // 2. Step: Assign skill levels. 10 skills at level 6, 10 skills at level 5, 10 skills at level 4

  function assignSkillLevels(skills) {
    const skillKeys = Object.keys(skills);
    const shuffledSkills = shuffleArray(skillKeys);

    // Directly mutate characterSkills object
    shuffledSkills.forEach((skill, index) => {
      if (index < 10) {
        skills[skill] = 6;
      } else if (index < 20) {
        skills[skill] = 5;
      } else {
        skills[skill] = 4;
      }
    });
  }

  // 3. Step: Selects 3 random traits

  function selectRandomTraits(character) {
    const shuffled = [...traitsData]; // Clone the traits array
    shuffleArray(shuffled);
    character.traits = shuffled.slice(0, 4).join(", ");
  }

  // 4. Step: Selects a random career. Note Max skill limits. Distribute 10 points among the career skills. Add inventory.

  const careerAssigner = () => {
    const keys = Object.keys(careerData);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomCareer = careerData[keys[randomIndex]];
    // Career name and skills assigner
    character.career = randomCareer.name;
    character.careerSkills = randomCareer.skillLimits;

    // 10 extra points assigned randımly
    const careerSkillKeys = Object.keys(randomCareer.skillLimits);

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * careerSkillKeys.length);
      const randomSkill = careerSkillKeys[randomIndex];
      skills[randomSkill] += 1;
    }

    // Add inventory
    character.inventory = randomCareer.equipment;

    character.background1Prompt = randomCareer.background1.tableName;
    character.background1Result =
      randomCareer.background1.table[
        Math.floor(Math.random() * randomCareer.background1.table.length)
      ];
    character.background2Prompt = randomCareer.background2.tableName;
    character.background2Result =
      randomCareer.background2.table[
        Math.floor(Math.random() * randomCareer.background2.table.length)
      ];
  };

  // helper function to distribute 10 extra points among career skills

  const runCharGen = () => {
    assignRaceAndName();
    statRoller();
    assignSkillLevels(skills);
    selectRandomTraits(character);
    careerAssigner();
    character.skills = { ...skills };
    console.log(character);

    //
    return character;
  };

  return runCharGen();
}
