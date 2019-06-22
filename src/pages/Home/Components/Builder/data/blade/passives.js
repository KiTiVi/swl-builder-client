export default [
  {
    index: 101,
    weapon: 'Blade',
    name: 'Immortal Spirit',
    description: `Whenever you gain Chi you replenish your spirit, restoring 1% of your health every second for 3 seconds.`,
    type: 'passive',
    heal: true
  },
  {
    index: 102,
    weapon: 'Blade',
    name: 'Eye of the Storm',
    description: `Your "Hurricane" rages around you, battering your
    foes with every other hit of this ability for an
    additional 3 physical damage.`,
    type: 'passive',
    connectedAbility: 'Hurricane'
  },
  {
    index: 103,
    weapon: 'Blade',
    name: 'Keen Edge',
    description: `You "Hone" your blade to a razor sharp edge, increasing your Crit Power with Blade abilities while "Hone" is active by 40%.`,
    type: 'passive',
    connectedAbility: 'Hone',
    tags: ['Crit. Power']
  },
  {
    index: 104,
    weapon: 'Blade',
    name: 'Storm Surge',
    description: `The waves of your "Tsunami" swell whenever Chi is generated, dealing an additional 4 physical damage to the target.`,
    type: 'passive',
    connectedAbility: 'Tsunami'
  },
  {
    index: 105,
    weapon: 'Blade',
    name: 'Soulforged Blade',
    description: `Your "Dancing Blade" harnesses your soul and the soul of your foe and coalesces into a Spirit Blade upon completion which lasts for 3 attacks. If you have already forged your Spirit Blade, the number of attacks remaining is increased by 3.`,
    type: 'passive',
    connectedAbility: 'Dancing Blade'
  },
  {
    index: 106,
    weapon: 'Blade',
    name: 'Masterpiece',
    description: `Your forging technique for your "Spirit Blade" is without blemish or imperfection, causing "Spirit Blade" to deal 17% more damage.`,
    type: 'passive',
    connectedAbility: null,
    tags: ['damage']
  },
  {
    index: 107,
    weapon: 'Blade',
    name: 'Meditate',
    description: `You meditate on the essence of a "Soothing Spring." Each time the heal over time effect restores your health, you have an 18% chance to gain 1 Chi.`,
    type: 'passive',
    connectedAbility: 'Soothing Spring',
    tags: ['chi']
  },
  {
    index: 108,
    weapon: 'Blade',
    name: 'Reversal',
    description: `Whenever you interrupt an enemy's attack with "Snake's Bite", you reverse the flow of harmful energy and gain 2 Chi. You also direct some of the energy back at your target dealing an additional 2 physical damage.`,
    type: 'passive',
    connectedAbility: "Snake's Bite",
    tags: ['chi']
  },
  {
    index: 109,
    weapon: 'Blade',
    name: 'Waterfall',
    description: `Your "Rushing River" cascades like a waterfall into a new flow. If you damage an enemy with "Rushing River" you are able to activate "Rushing River" a second time within 5 seconds. The damage of this second activation is increased to 26 physical damage.`,
    type: 'passive',
    connectedAbility: 'Rushing River'
  },
  {
    index: 110,
    weapon: 'Blade',
    name: "Master's Focus",
    description: `When you gain Chi, you focus your senses reducing the remaining recharge time of "Supreme Harmony" by 5%.`,
    type: 'passive',
    connectedAbility: 'Supreme Harmony'
  },
  {
    index: 111,
    weapon: 'Blade',
    name: 'Hardened Blade',
    description: `Your "Swallow Cut" tempers and hardens your Spirit Blade. Whenever you hit an enemy with ""Swallow Cut"" you have a 30% chance to not consume an attack from your Spirit Blade.`,
    type: 'passive',
    connectedAbility: 'Swallow Cut'
  },
  {
    index: 112,
    weapon: 'Blade',
    name: 'Whirlwind',
    description: `You harness the power of the wind while your ""Tempest"" blows furiously around you. While you are inside of the ground area of your ""Tempest"", your Blade attacks deal an additional 2 physical damage to the target and nearby enemies.`,
    type: 'passive',
    connectedAbility: 'Tempest'
  },
  {
    index: 113,
    weapon: 'Blade',
    name: 'Sunder Spirit',
    description: `Your "Exhume Spirit" tears at the spirit energy of your foes, causing all affected enemies to be dealt 4 physical damage every second for 5 seconds.`,
    type: 'passive',
    connectedAbility: 'Impale Spirit',
    tags: ['dot']
  },
  {
    index: 114,
    weapon: 'Blade',
    name: 'Torrent',
    description: `The waves of your "Typhoon" come crashing down on your foes with unrelenting force, increasing the damage bonus for each target hit by "Typhoon" to 9.3% up to a maximum of 46.5%.`,
    type: 'passive',
    connectedAbility: 'Typhoon',
    tags: ['damage']
  },
  {
    index: 115,
    weapon: 'Blade',
    name: 'Clairvoyance',
    description: `You have sharpened your senses such that you are able to guard yourself preemptively from danger. Whenever you gain a heal over time effect from Chi Overflow, "Soothing Spring", or "Immortal Spirit" you also gain a barrier that absorbs 100% of incoming damage and dissipates after absorbing damage equal to 12.5% of your maximum health. This effect can only occur once every 10 seconds.`,
    type: 'passive',
    heal: true
  },
  {
    index: 116,
    weapon: 'Blade',
    name: 'Deluge',
    description: `Striking enemies with your Spirit Blade builds up power inside of your Blade. Every sixth hit with Spirit Blade active unleashes a flood of power around you dealing 3 physical damage to nearby enemies.`,
    type: 'passive'
  },
  {
    index: 117,
    weapon: 'Blade',
    name: 'Sweeping Slice',
    description: `You have learned techniques for handling multiple enemies with your Blade. Whenever you hit 2 or more enemies with a single Blade ability you deal an additional 2 physical damage to nearby enemies.`,
    type: 'passive'
  },
  {
    index: 118,
    weapon: 'Blade',
    name: 'Draw Sword, Draw Blood',
    description: `When you draw your Blade it thirsts to spill blood before being sheathed. Whenever you enter combat, your next 3 Blade attacks deal 20% more damage. While in combat, you gain 1 use of this bonus effect every 10 seconds.`,
    type: 'passive',
    tags: ['damage']
  },
  {
    index: 119,
    weapon: 'Blade',
    name: 'Measure Twice, Cut Once',
    description: `Each cut of your Blade is a measured and precise action. While in combat, if you have not generated Chi in the past 4.5 seconds, your next Blade attack will generate 1 Chi in addition to the normal Chi gain chance.`,
    type: 'passive',
    tags: ['chi']
  },
  {
    index: 120,
    weapon: 'Blade',
    name: 'Focused Breathing',
    description: `You slow your breathing and focus your mind while in combat allowing you to generate 1 Chi every 9 seconds.`,
    type: 'passive',
    tags: ['chi']
  },
  {
    index: 121,
    weapon: 'Blade',
    name: 'Resonance',
    description: `Your spirit resonates strongly with your Blade. Whenever you gain Chi, your next Blade attack deals an additional 3 physical damage.`,
    type: 'passive',
    tags: ['chi']
  },
  {
    index: 122,
    weapon: 'Blade',
    name: "Warrior's Spirit",
    description: `Your unyielding warrior spirit endures on even as your Spirit Blade shatters. Whenever your Spirit Blade shatters, you gain 1 Chi and deal 5 physical damage to nearby enemies.`,
    type: 'passive',
    tags: ['chi']
  }
]
