export default [
  {
    index: 301,
    weapon: 'Fist Weapons',
    name: 'Vigour',
    description:
      'Your fury fills you with renewed vigour. Whenever you activate a Fist Weapon ability, you have a 20% chance to restore 2% of your health every second for 3 seconds.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 302,
    weapon: 'Fist Weapons',
    name: 'Rip',
    description:
      'Your "Savage Sweep" rips jagged wounds into the flesh of your enemies causing them to bleed for 1 physical damage every second for 5 seconds.',
    type: 'passive',
    connectedAbility: 'Savage Sweep'
  },
  {
    index: 303,
    weapon: 'Fist Weapons',
    name: 'Gore',
    description:
      'Your control over your Wrath grants you access to a new ability when you are using "Frenzied Wrath."\r\rGore: (Default [1])\rCharge: 15 metre charge to your target. The target must be at least 1 metre away.You charge to your target and impale them with your claws dealing 9 physical damage to up to 6 enemies in a 5 metre radius as you arrive. The target and nearby enemies are left bleeding for 3 physical damage every 0.5 seconds for 5 seconds.',
    type: 'passive',
    connectedAbility: 'Frenzied Wrath'
  },
  {
    index: 304,
    weapon: 'Fist Weapons',
    name: 'Maul',
    description:
      'Your "Mangle" tears open wounds in your target that do not close quickly causing 1 physical damage every second for 5 seconds.',
    type: 'passive',
    connectedAbility: 'Mangle'
  },
  {
    index: 305,
    weapon: 'Fist Weapons',
    name: 'Rampage',
    description:
      'Your "Berserk" fury crushes and destroys whomever you set your sights on. When you activate "Berserk" the target is additionally stunned for 5 seconds and the damage dealt is increased to 7 physical damage per hit if the target has one of your Fist Weapon damage over time effects active.',
    type: 'passive',
    connectedAbility: 'Berserk'
  },
  {
    index: 306,
    weapon: 'Fist Weapons',
    name: 'Bloodbath',
    description:
      'When you "Eviscerate" enemies you take advantage of any opening, bolstering your allies and leaving the target maimed. If "Eviscerate" successfully interrupts an enemy it deals an additional 3 physical damage every second for 5 seconds. Your allies are inspired by the bloodshed, increasing the per second healing amount to 1.',
    type: 'passive',
    connectedAbility: 'Eviscerate'
  },
  {
    index: 307,
    weapon: 'Fist Weapons',
    name: 'Brutality',
    description:
      'Your brutal "Ferocity" leaves its mark on your allies and enemies alike. If "Ferocity" is used in conjunction with damage over time effects, the target is dealt an additional 4 physical damage every second for 5 seconds.\r\rIf "Ferocity" is used in conjunction with heal over time effects, the target is healed for an additional 1 every second for 5 seconds.',
    type: 'passive',
    connectedAbility: 'Ferocity'
  },
  {
    index: 308,
    weapon: 'Fist Weapons',
    name: 'Wild Burst',
    description:
      'The untamed power of your "Wild Surge" bursts with a final surge of power when it expires. When the ground area effect of "Wild Surge" terminates, allies are healed for up to 0 based on the length of time they spent in the area.\r\rLikewise, enemies are dealt up to 19 physical damage, based on the length of time they spent in the area.',
    type: 'passive',
    connectedAbility: 'Wild Surge'
  },
  {
    index: 309,
    weapon: 'Fist Weapons',
    name: 'Furious Inspiration',
    description:
      'The ferocious nature of your "Savagery" provides further inspiration. Whenever the target of your "Savagery" effect deals damage, they are healed for 1 and you gain 3 Fury.',
    type: 'passive',
    connectedAbility: 'Savagery'
  },
  {
    index: 310,
    weapon: 'Fist Weapons',
    name: 'Killer Instinct',
    description:
      'Your "Primal Instinct" is honed with razor sharp purpose. While "Primal Instinct" is active all of your heal over time and damage over time effects have 50% more Crit Power.',
    type: 'passive',
    connectedAbility: 'Primal Instinct'
  },
  {
    index: 311,
    weapon: 'Fist Weapons',
    name: 'Recuperate',
    description:
      'The restorative power of your "Renewal" allows allies to recover more from your further healing effects. After healing an ally with "Renewal" any additional healing effects on that ally from you will heal for an additional 1. This effect lasts for 3 seconds.',
    type: 'passive',
    connectedAbility: 'Renewal'
  },
  {
    index: 312,
    weapon: 'Fist Weapons',
    name: 'Outgrowth',
    description:
      'The regenerative force of your "Feral Regrowth" extends to nearby injured allies. Whenever "Feral Regrowth" expires for any reason, the lowest health ally nearby is healed for 1 every second for 3 seconds.',
    type: 'passive',
    connectedAbility: 'Feral Growth'
  },
  {
    index: 313,
    weapon: 'Fist Weapons',
    name: 'Serenity',
    description:
      'Your control over your Wrath grants you access to a new ability when you are using "Invigorating Wrath."\nSerenity: (Default [1])\nA sense of calm washes of you, relieving you of your Fury and channeling it towards restoring your target. You spend all of your remaining Fury to heal an ally for 0 plus 0 more for every point of Fury spent.',
    type: 'passive',
    connectedAbility: 'Invigorating Wrath'
  },
  {
    index: 314,
    weapon: 'Fist Weapons',
    name: 'Natural Remedy',
    description:
      'You infuse your "Regeneration" with natural energies, increasing the intial healing amount to 17. In addition, any overhealing done to any group member is redirected to the group member with the lowest health.',
    type: 'passive',
    connectedAbility: 'Regeneration'
  },
  {
    index: 315,
    weapon: 'Fist Weapons',
    name: 'Furor',
    description:
      'You work yourself into a frenzy with repeated ability uses. Whenever you use 3 Fist Weapon Power Abilities in succession you gain an additional 3 Fury.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 316,
    weapon: 'Fist Weapons',
    name: 'Second Wind (fist)',
    description:
      'As your wrath subsides, you take a breather and gather your strength. Whenever a "Frenzied Wrath" or "Invigorating Wrath" effect ends, you gain 4 Fist Weapon Energy.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 317,
    weapon: 'Fist Weapons',
    name: 'Smell Fear',
    description:
      'Your keen senses allow you to sense fear in the hearts of enemies around you. Whenever you enter combat and every 8 seconds afterward you sense fear in a nearby enemy. Hitting this enemy with a Fist Weapon Power Ability generates 8 Fury.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 318,
    weapon: 'Fist Weapons',
    name: 'Bloody Mist',
    description:
      'Your critical hits result in a savage spray of blood. Whenever you critically hit with a Fist Weapon ability, you deal an additional 2 physical damage.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 319,
    weapon: 'Fist Weapons',
    name: 'Warmth',
    description:
      'Your heals have a warm afterglow which aids in the recovery process. Whenever you heal with a single target Fist Weapon Ability, you heal for an additional 1. This effect lasts 2 seconds and can stack up to 5 times.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 320,
    weapon: 'Fist Weapons',
    name: 'Potent Wrath',
    description:
      'Your wrath ends with an surge of power. Whenever your "Frenzied Wrath" effect ends, nearby enemies are dealt 2 physical damage every second for 5 seconds.\nWhenever your "Invigorating Wrath" effect ends all of your group members are healed for 1 every second for 5 seconds.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 321,
    weapon: 'Fist Weapons',
    name: 'Keen Senses',
    description:
      'You are able to sense the weaknesses in both allies and enemies, knowing just how to help and harm effectively. Whenever you heal an ally who is below 35% health with a Fist Weapon ability, you heal for an additional 1.\nWhenever you damage an enemy who is below 35% health with a Fist Weapon ability you deal an additional 2 physical damage.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 322,
    weapon: 'Fist Weapons',
    name: 'Wild Nature',
    description:
      'Your embody the wild and ferocious side of nature, fueling your Fury. While in combat, you gain 1 Fury every second.',
    type: 'passive',
    connectedAbility: null
  }
]
