export const entities = [
  {
    id: "border_collie",
    name: "Border Collie",
    health: 20,
    speed: 0.3,
    damage: 4,
    tagline: "Extremely loyal herding dog that naturally groups sheep.",
    description: "The Border Collie boasts high health and damage, along with an unmatched loyalty to its owner. They naturally excel at herding and have special AI designed specifically for crowd control around sheep.",
    features: [
      { name: "Sheep Herder", desc: "Sheep instinctively run away from the Border Collie, making it incredibly easy to herd them into pens!", icon: "🐑" },
      { name: "Fierce Loyalty", desc: "They naturally stick extremely close to their owner and aggressively defend them.", icon: "🛡️" }
    ],
    tameDifficulty: "Medium",
    funFact: "Sheep physically fear the Border Collie because the mod literally injects a custom AvoidEntityGoal into their brain!"
  },
  {
    id: "mutant",
    name: "The Mutant Entity",
    health: 30,
    speed: 0.25,
    damage: 5,
    tagline: "A terrifying marvel of genetic engineering.",
    description: "The Mutant is the ultimate endgame companion. Rather than spawning naturally, this creature is forged through science! By using a Breed Stick, players can extract the genetic data of two different mobs and fuse them together. The Mutant is massive, extremely powerful, and commands the battlefield with a monstrous 30 HP pool and heavy base damage.",
    features: [
      { name: "Explosive Genetics", desc: "If either parent was a Creeper, the Mutant inherits an unstable core. When near hostile targets, it swells up over 30 ticks and unleashes a massive explosion!", icon: "💥" },
      { name: "Ender Teleportation", desc: "If forged from an Enderman, it gains an innate 33% chance to instantly teleport out of danger whenever it takes damage.", icon: "✨" },
      { name: "Aerial Hovering", desc: "If bred from a Bat, Ghast, or Flying Animal, the Mutant defies gravity, hovering gracefully above targets and floating safely down from falls.", icon: "🦇" }
    ],
    tameDifficulty: "Hardcore",
    funFact: "Mutants perfectly synchronize their movement animations step-for-step with their parent entities!"
  },
  {
    id: "boston_terrier",
    name: "Boston Terrier",
    health: 6,
    speed: 0.35,
    damage: 1,
    tagline: "A tiny bundle of boundless energy and loyalty.",
    description: "These small dogs may not have a lot of health, but they make up for it in spirit and utility. Boston Terriers are easily tempted by almost any meat item and exhibit incredibly lifelike energetic behaviors, including running rampant with the 'Zoomies'. Their true strength lies in their undying loyalty to their owner.",
    features: [
      { name: "Healing Licks", desc: "If you shift-right-click an awake Boston Terrier with an empty hand, it will lovingly lick your face, granting you Regeneration I for 5 seconds!", icon: "❤️" },
      { name: "The Zoomies", desc: "Spontaneous bursts of chaotic speed. Do not be alarmed, they are just having fun!", icon: "💨" },
      { name: "Snooze Critical", desc: "Requires regular naps. If kept awake too long, it literally takes sleep deprivation damage.", icon: "💤" }
    ],
    tameDifficulty: "Easy",
    funFact: "Boston terriers can be tempted to follow you if you hold any cooked or raw meat item!"
  },
  {
    id: "husky",
    name: "Husky",
    health: 16,
    speed: 0.42,
    damage: "Standard",
    tagline: "The fast, playful, and vocal water enthusiast.",
    description: "Huskies are robust companions built for endurance and speed. Rocking a solid 16 health and an impressive 0.42 movement speed, they are excellent travelling partners. They thrive on play and absolutely adore water, frequently choosing to go for a swim if left to wander.",
    features: [
      { name: "Water Enthusiast", desc: "Innate programming draws them to water sources for random swimming sessions.", icon: "🌊" },
      { name: "Avid Fetcher", desc: "Naturally inclined to chase down and fetch dropped chew toys throughout the world.", icon: "🎾" },
      { name: "Heavy Sleeper", desc: "Just like the Boston Terrier, they must sleep or they'll suffer from extreme exhaustion.", icon: "🥱" }
    ],
    tameDifficulty: "Medium",
    funFact: "Huskies have an advanced chew toy AI where they will snatch toys off the ground and excitedly run around spawning particles!"
  },
  {
    id: "golden_retriever",
    name: "Golden Retriever",
    health: 14,
    speed: 0.32,
    damage: 2,
    tagline: "A friendly, capable swimmer who loves to fetch.",
    description: "The classic family pet brought to life. Golden Retrievers boast an excellent balance of health and combat capabilities. Their most unique structural quirk is that they face absolutely zero 'water malus'—meaning they navigate through rivers and lakes as effortlessly as they run on land.",
    features: [
      { name: "Zero Water Resistance", desc: "Moves through water at completely unhindered speeds.", icon: "🏊" },
      { name: "Item Retriever", desc: "Will automatically fetch items for its owner.", icon: "🦴" },
      { name: "Peaceful Slumber", desc: "Sleeps deeply and requires rest to maintain health.", icon: "🌙" }
    ],
    tameDifficulty: "Easy",
    funFact: "Golden retrievers deal a solid 2 base damage, making them capable defenders against basic zombies."
  },
  {
    id: "king_corgi",
    name: "King Corgi",
    health: 20,
    speed: 0.3,
    damage: 3,
    tagline: "The majestic ruler of the Corgi kingdom.",
    description: "The King Corgi is a legendary companion that commands respect. Sporting a higher health pool and an incredibly unique defense mechanism, this royal dog is the ultimate bodyguard for any adventurer.",
    features: [
      { name: "Royal Guard", desc: "Whenever you are attacked, or whenever you attack an enemy, the King Corgi summons a squad of 3 'Potato Corgis' to swarm and overwhelm the target!", icon: "👑" },
      { name: "Majestic Presence", desc: "Draws attention and provides an elite level of protection.", icon: "✨" }
    ],
    tameDifficulty: "Hard",
    funFact: "Potato Corgis spawned by the King Corgi will automatically despawn after the battle is over!"
  },
  {
    id: "corgi",
    name: "Corgi",
    health: 12,
    speed: 0.3,
    damage: 2,
    tagline: "A loyal, stubby-legged friend.",
    description: "Corgis are adorable and sturdy companions. While they may not have the royal powers of the King Corgi, they are still excellent and lovable pets to have around your base.",
    features: [
      { name: "Stout Defender", desc: "Provides reliable early-game protection.", icon: "🛡️" },
      { name: "Low Profile", desc: "Their small hitbox allows them to navigate tight spaces.", icon: "🐕" }
    ],
    tameDifficulty: "Easy",
    funFact: "Corgis have a special 'Potato' variant that can be summoned by the King Corgi!"
  },
  {
    id: "dachshund",
    name: "Dachshund",
    health: 10,
    speed: 0.3,
    damage: 2,
    tagline: "The famous, lovable wiener dog.",
    description: "With their long bodies and short legs, Dachshunds are a classic and instantly recognizable breed. They make excellent indoor pets and are always happy to see you.",
    features: [
      { name: "Burrower", desc: "Loves to dig and explore small spaces.", icon: "🕳️" },
      { name: "Loyal Companion", desc: "Sticks closely by your side.", icon: "❤️" }
    ],
    tameDifficulty: "Easy",
    funFact: "Their elongated model required custom rotation math to ensure they render properly in-game!"
  },
  {
    id: "pomeranian",
    name: "Pomeranian",
    health: 8,
    speed: 0.35,
    damage: 1,
    tagline: "A small, fluffy ball of boundless energy.",
    description: "Pomeranians are small but feisty. They are incredibly fast and agile, making them excellent companions for players who like to move quickly.",
    features: [
      { name: "Fluff Shield", desc: "Their thick coat makes them surprisingly resilient to the cold.", icon: "❄️" },
      { name: "High Energy", desc: "Requires frequent walks and playtime to stay happy.", icon: "⚡" }
    ],
    tameDifficulty: "Medium",
    funFact: "Pomeranians are so fluffy they almost look like walking cotton balls!"
  },
  {
    id: "pug",
    name: "Pug",
    health: 10,
    speed: 0.25,
    damage: 1,
    tagline: "A silly, wrinkly, and charming companion.",
    description: "Pugs are known for their distinct wrinkled faces and curled tails. They are not built for intense combat or speed, but they offer unmatched charm and comedic value to any Minecraft base.",
    features: [
      { name: "Snorting Sounds", desc: "Emits adorable and iconic pug snorts.", icon: "🎵" },
      { name: "Couch Potato", desc: "Prefers lounging on Dog Beds over intense adventuring.", icon: "🛋️" }
    ],
    tameDifficulty: "Easy",
    funFact: "Pugs will happily eat almost any food item you drop near them!"
  }
];

export const items = [
  {
    id: "tame_ball",
    name: "Tame Ball",
    rarity: "Rare",
    description: "The ultimate tool for acquiring a companion. Throwing this item fires a Capture Projectile that forces ownership upon a target.",
    mechanics: [
      "Catch rate scales dynamically: At full health, standard mobs have a 50% chance, while bosses (>100 HP) have only a 10% chance.",
      "As a target loses health, catch odds increase by up to 50% for standard mobs and 40% for bosses.",
      "Player Trolling: Hitting a Player has a 20% base catch rate. If caught, they are teleported to Y=3000 in the sky!"
    ],
    flavor: "A sphere packed with localized dimensional shift technology."
  },
  {
    id: "carry_ball",
    name: "Carry Ball",
    rarity: "Common",
    description: "Functions identically to a Tame Ball in physics and catch-rate, but strictly acts as standard storage. It does not force 'OWNER' tags onto the mob, making it perfect for transporting neutral entities.",
    mechanics: ["Shares identical catch formulas to the Tame Ball.", "Prevents stealing: You cannot catch a mob if its 'ForceTamedOwner' NBT doesn't match your UUID."],
    flavor: "Perfect for moving sheep into your pen without the hassle of wheat."
  },
  {
    id: "breed_stick",
    name: "Breed Stick",
    rarity: "Epic",
    description: "A highly advanced genetic syringe. The pinnacle of mob manipulation.",
    mechanics: [
      "Right-click the first parent. The mob's NBT data is ripped out and stored in the syringe.",
      "Right-click a second mob. The second mob is destroyed, and a MutantEntity is birthed possessing the traits of both!"
    ],
    flavor: "'Contains 1 Gene Base' - Tooltip of a loaded syringe."
  },
  {
    id: "chew_toy",
    name: "Chew Toy",
    rarity: "Uncommon",
    description: "A squeaky, durable toy that every dog demands.",
    mechanics: [
      "If present on the ground within a 10 block radius, dogs have a 1% chance every tick to pathfind to it.",
      "Once picked up, they chew on it for 5-10 seconds, wildly sprinting to random positions and trailing item particles."
    ],
    flavor: "Squeak squeak!"
  },
  {
    id: "untame_potion",
    name: "Untame Potion",
    rarity: "Uncommon",
    description: "A mystical brew capable of severing the digital tether between owner and pet.",
    mechanics: [
      "Right-clicking a tamed pet removes its ForceTamedOwner NBT.",
      "The creature experiences a visual 'pop' (receives 0.5 upward Y velocity) and a system message declares it free."
    ],
    flavor: "A bittersweet concoction."
  }
];

export const blocks = [
  {
    id: "pet_box",
    name: "Pet Box PC",
    type: "Storage Terminal",
    description: "The central hub for managing your massive collection of companions.",
    mechanicDetail: "Opening the block reveals a 54-slot custom chest GUI. Under the hood, slots 1-5 map directly to your player's hidden 'ActiveTeam' NBT List. Slots 6-54 map to your 'PetBox' reserve storage. Entities are visually rendered as PetDisplayItems inside the grid.",
    tip: "If you try to cheat and put dirt in the PC, the terminal will instantly spit it out onto the ground!"
  },
  {
    id: "pet_hospital",
    name: "Pet Hospital Block",
    type: "Healing Station",
    description: "A magical medical station that keeps your Active Team in top condition.",
    mechanicDetail: "Slamming your hand on this block (Right-Clicking) iterates through every single pet in your ActiveTeam NBT, forcefully overriding their health to 9999.0f. When they next spawn, the game gracefully clamps that number down to their maximum health.",
    tip: "Will play a satisfying XP Orb sound and shower the block in 15 heart particles on success."
  },
  {
    id: "trade_machine",
    name: "Trade Machine",
    type: "Multiplayer Infrastructure",
    description: "A robust and secure trading terminal allowing players to safely swap catches.",
    mechanicDetail: "Contains an internal 2-slot inventory via NetworkHooks. Fully respects NBT states, meaning parents, custom names, and stats are perfectly preserved during a trade.",
    tip: "Breaking the block safely drops both items inside so you never lose a pet to griefing."
  }
];

export const spawns = [
  {
    id: "border_collie_spawn",
    name: "Border Collie Spawn",
    type: "Secret Quest Event",
    rarity: "Mythic",
    description: "The Border Collie only answers to true shepherds who have successfully wrangled a flock of sheep.",
    mechanicDetail: "The player must locate a Meadow or Plains biome. They must physically ensure at least 3 Sheep are standing within a 15-block radius. The exact moment the player 'closes' a Fence Gate block while near the flock, a Border Collie will instantly spawn.",
    features: [
      { name: "Meadow / Plains Exclusive", desc: "Will only trigger inside Meadow or Plains biomes.", icon: "🌱" },
      { name: "Sheep Threshold", desc: "Requires 3 or more sheep actively standing near the gate.", icon: "🐑" },
      { name: "Fence Gate Trigger", desc: "The literal action of shutting the fence gate executes the spawn code!", icon: "⛩️" }
    ],
    funFact: "This replicates the feeling of a secret RPG quest—no UI, no hints, just natural gameplay mechanics!"
  },
  {
    id: "golden_retriever_spawn",
    name: "Golden Retriever Spawn",
    type: "Biome Event",
    rarity: "Rare",
    description: "A highly specific natural occurrence designed to reward players for communing with nature.",
    mechanicDetail: "The player must locate a Meadow biome (minecraft:meadow) and place a bed with no blocks obstructing its view of the sky. Upon sleeping through the night, there is a 50% chance a Golden Retriever will physically spawn right next to the bed.",
    features: [
      { name: "Meadow Exclusive", desc: "Can only trigger if the block coordinates resolve exactly to a meadow biome.", icon: "🌸" },
      { name: "Open Sky Requirement", desc: "Roofless sleeping exclusively. Checks for sky visibility directly above the bed.", icon: "🌌" },
      { name: "50% RNG Roll", desc: "A literal coin flip on whether the dog appears when you wake up.", icon: "🎲" }
    ],
    funFact: "A golden retriever loves the fresh air and will only come to tamers who sleep beneath the stars!"
  },
  {
    id: "boston_terrier_spawn",
    name: "Boston Terrier Spawn",
    type: "Village Event",
    rarity: "Uncommon",
    description: "Boston Terriers love human settlements and loud noises. Alerting a plains village will draw them out.",
    mechanicDetail: "The player must locate a naturally generated Bell (which is found within Villages) in a Plains biome (minecraft:plains). Right-clicking the bell to ring it rolls a 50% chance to immediately spawn a Boston Terrier nearby.",
    features: [
      { name: "Plains Exclusive", desc: "The bell block must physically be inside a Plains biome chunk.", icon: "🌾" },
      { name: "Bell Ringer", desc: "Requires the player to interact with a Bell block with their main hand.", icon: "🔔" },
      { name: "50% RNG Roll", desc: "Half the time, ringing the bell summons a loyal new companion.", icon: "🎲" }
    ],
    funFact: "Bells are the universal dog-whistle! Just be careful not to accidentally hit any Iron Golems while ringing it."
  },
  {
    id: "husky_spawn",
    name: "Husky Spawn",
    type: "Biome Event",
    rarity: "Very Rare",
    description: "Huskies are born to pull sleds through the snow. Prove to them you need a sled dog to earn their respect.",
    mechanicDetail: "The player must venture into any Snowy biome (a biome with a base temperature below 0.15). Then, they must place a standard Boat on solid ground (not water!) and physically enter it. Upon mounting the boat, there is a 50% chance a Husky will instantly spawn to assist you.",
    features: [
      { name: "Snowy Exclusivity", desc: "Only triggers in freezing snowy tundras and icy peaks.", icon: "❄️" },
      { name: "Dry Docking", desc: "The boat must be placed on solid ground, dirt, or snow. Placing it in water disqualifies the spawn.", icon: "🛶" },
      { name: "50% RNG Roll", desc: "Flip a coin when climbing aboard. If you fail, you might need to try a new location!", icon: "🎲" }
    ],
    funFact: "The system literally tracks whenever you 'Mount' a vehicle entity. By checking if that vehicle is a boat and verifying the fluid state of the block underneath it, the mod creates the perfect sled illusion."
  }
];

export const recipes = [
  {
    id: "tame_ball_recipe",
    name: "Tame Ball",
    type: "Shaped Crafting",
    rarity: "Epic",
    description: "The Dimensional Core recipe for forging your own Tame Balls.",
    mechanicDetail: "Place an Ender Pearl directly in the center for the dimensional shift. Surround it with 4 Redstone dusts in a cross pattern for power. Finally, place 4 Iron Ingots in the corners to serve as the metallic casing.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Tame Ball.", icon: "📦" },
      { name: "Expensive", desc: "Requires late-game Enderman hunting to mass produce.", icon: "💎" }
    ],
    tip: "It's highly recommended to use a Tame Ball only on fully-weakened targets to ensure you don't waste the Ender Pearl!"
  },
  {
    id: "carry_ball_recipe",
    name: "Carry Ball",
    type: "Shaped Crafting",
    rarity: "Common",
    description: "The Transport Crate configuration. Perfect for mass-producing storage balls.",
    mechanicDetail: "Place a standard Chest in the center of the grid. Place Redstone Dust on its left and right sides to handle the digitization process, and place a Copper Ingot on the top and bottom to create the rustic metallic shell.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Carry Ball.", icon: "📦" },
      { name: "Copper Sink", desc: "Finally, a great use for all that extra copper sitting in your chests!", icon: "🥉" }
    ],
    tip: "Since Carry Balls don't force ownership, these are perfect for capturing wild chickens, cows, or sheep and moving them directly into a pen!"
  },
  {
    id: "breed_stick_recipe",
    name: "Breed Stick",
    type: "Shaped Crafting",
    rarity: "God Tier",
    description: "The ultimate endgame recipe for the Mutant extraction syringe.",
    mechanicDetail: "Place a Glass Bottle at the top middle to serve as the syringe casing. In the exact center, place a Nether Star—the immense power source required to fuse NBT DNA. Finally, anchor it all with an End Rod at the bottom middle to function as the syringe plunger.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Breed Stick.", icon: "📦" },
      { name: "Wither Locked", desc: "Forcing players to defeat the Wither ensures Mutants remain true endgame rewards.", icon: "💀" }
    ],
    funFact: "A Breed Stick is capable of wiping the parent mob completely from the game when extracting the DNA for a Mutant."
  },
  {
    id: "chew_toy_recipe",
    name: "Chew Toy",
    type: "Shaped Crafting",
    rarity: "Common",
    description: "The easiest way to keep your dogs entertained and increase their loyalty.",
    mechanicDetail: "Place an Iron Nugget directly in the center for weight. Put a Bone in the top and bottom middle slots, and pad the left and right slots with any color of Wool.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Chew Toy.", icon: "📦" },
      { name: "Colorful Padding", desc: "You can use absolutely any kind of wool thanks to the Forge item tag.", icon: "🛏️" }
    ],
    funFact: "Throwing this around for your dog applies a hidden 'Joy' state in the backend logic!"
  },
  {
    id: "pet_box_recipe",
    name: "Pet Box PC",
    type: "Shaped Crafting",
    rarity: "Common",
    description: "An incredibly accessible storage terminal for early-game Tamers.",
    mechanicDetail: "Place a standard Chest in the exact center of the grid. Place a single block of Glass directly above it to serve as the terminal screen, and set a Copper Ingot right below it to ground the physical components.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Pet Box Block.", icon: "📦" },
      { name: "Early Game Friendly", desc: "Requires zero redstone, allowing you to build massive PC storage minutes into a new world.", icon: "⛏️" }
    ],
    funFact: "Even though crafting it doesn't require Redstone, the Block's screen emits a faint blue digital glow in the dark!"
  },
  {
    id: "pet_hospital_recipe",
    name: "Pet Hospital",
    type: "Shaped Crafting",
    rarity: "Common",
    description: "An incredibly accessible healing station to keep your Active Team alive.",
    mechanicDetail: "Place a standard Apple in the exact center of the grid to provide the healing power. Place a single block of Glass directly above it, and set a Copper Ingot right below it to ground the machine.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Pet Hospital Block.", icon: "📦" },
      { name: "Team Wide Healing", desc: "Right-clicking the hospital fully restores the health of every single pet currently in your Active Team array.", icon: "❤️" }
    ],
    funFact: "The system literally forces their internal health NBT to 9999.0f, and the game elegantly clamps it back down to their true max health on spawn!"
  },
  {
    id: "dog_bed_recipe",
    name: "Dog Bed",
    type: "Shaped Crafting",
    rarity: "Common",
    description: "A cozy basket to keep your dogs comfortable when resting.",
    mechanicDetail: "Place any block of Wool in the center of the crafting grid. Then, surround it on the left, right, and bottom with any type of Wooden Planks to construct the basket frame.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Dog Bed.", icon: "📦" },
      { name: "Wood Independent", desc: "You can use any mix of wooden planks thanks to the Forge item tag system.", icon: "🪵" }
    ],
    funFact: "Dogs will actually pathfind to nearby beds when they are in their wandering state and want to rest!"
  },
  {
    id: "trade_machine_recipe",
    name: "Trade Machine",
    type: "Shaped Crafting",
    rarity: "Rare",
    description: "The multiplayer hub for securely swapping NBT traits and parent lineages.",
    mechanicDetail: "Place a Diamond in the exact center of the crafting grid to process the complex genetics. Top it with a Glass block for the terminal, and place a Redstone Block directly underneath it to power the two-way network connection.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Trade Machine Block.", icon: "📦" },
      { name: "Network Secure", desc: "Prevents griefing since breaking the machine gracefully drops the stored pets rather than deleting them.", icon: "🔒" }
    ],
    funFact: "The tradeoff of requiring a Diamond ensures that early-game players must actively explore before utilizing online team-swaps."
  },
  {
    id: "untame_potion_recipe",
    name: "Untame Potion",
    type: "Shapeless Crafting",
    rarity: "Epic",
    description: "The bittersweet brew required to sever the digital tether between owner and pet.",
    mechanicDetail: "Combine a Glass Bottle, Gunpowder, a Lead (Leash), and a Ghast Tear anywhere in your crafting grid. The Ghast Tear acts as the potent magical base that literally cries the NBT data away.",
    features: [
      { name: "Yield", desc: "Crafting this produces exactly 1 Untame Potion item.", icon: "📦" },
      { name: "Hardcore Cost", desc: "Forcing Tamers to hunt Ghasts in the Nether ensures that letting a dog go requires extreme dedication.", icon: "🔥" }
    ],
    funFact: "Since it's registered as a custom Item and not a traditional splash potion, it bypasses the Brewing Stand entirely!"
  }
];

export const dogTypes = [
  {
    id: "scare_types",
    name: "Scare Types",
    tagline: "Unleash fear to control herd behavior and intimidate targets.",
    description: "Scare Type dogs leverage custom herding AI and fear-based mechanics. Rather than attacking directly, they influence surrounding mobs, making them valuable utility companions for farming and crowd control.",
    dogs: [
      { name: "Border Collie", desc: "A brilliant herding breed. Sheep have an instinctive fear of Border Collies, causing them to immediately run away and making herding a breeze." }
    ],
    icon: "😱"
  },
  {
    id: "heal_types",
    name: "Heal Types",
    tagline: "Nurturing support companions that keep you in the fight.",
    description: "Heal Type dogs prioritize the health and safety of their owner. By providing passive regeneration and helpful support, they act as active healers during dangerous adventures.",
    dogs: [
      { name: "Boston Terrier", desc: "An energetic companion with healing abilities. Sneak + Right-Clicking a Boston Terrier with an empty hand grants you Regeneration I for 5 seconds!" }
    ],
    icon: "❤️"
  },
  {
    id: "base_types",
    name: "Base Types",
    tagline: "Solid, reliable, and versatile travel companions.",
    description: "Base Type dogs represent the core companions of the mod. They offer robust stats, excellent swimming capabilities, and high utility through item and toy retrieval.",
    dogs: [
      { name: "Husky", desc: "A fast, high-endurance companion that thrives on playing fetch and enjoys random swimming sessions." },
      { name: "Golden Retriever", desc: "The ultimate retriever. Golden Retrievers swim at full speed without water resistance and automatically fetch items for their owner." }
    ],
    icon: "🐕"
  },
  {
    id: "special_types",
    name: "Special Types",
    tagline: "Rare, exotic, and unique breeds.",
    description: "Special Type dogs feature unique mechanics, advanced behaviors, and exotic appearances that make them stand out from standard breeds.",
    dogs: [
      { name: "King Corgi", desc: "A legendary royal dog that summons an army of Potato Corgis to defend you in battle!" },
      { name: "Corgi", desc: "A stout, lovable companion with a low profile." },
      { name: "Dachshund", desc: "The classic, elongated wiener dog." },
      { name: "Pomeranian", desc: "A fast, hyperactive ball of extreme fluff." },
      { name: "Pug", desc: "A wrinkly, charming couch potato." }
    ],
    icon: "✨"
  }
];

