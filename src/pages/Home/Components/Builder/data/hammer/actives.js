import {
  smash,
  razor_shards,
  seethe,
  demolish,
  eruption,
  pain_suppression,
  enter_the_fray,
  rampage,
  thick_skin,
  unstoppable_force,
  pulverise,
  ground_pound,
  burning_wrath,
  blindside,
  raging_volcano
} from '../../../../../../images/abilities/hammer/actives/index'

export default [
  {
    index: 201,
    weapon: 'Hammer',
    path: 'Brute Force',
    name: 'Smash',
    description: 'Strike quickly with your hammer dealing 9 physical damage.',
    effect: '+ 5 Rage',
    targetType: 'Target',
    damageType: 'melee',
    energy: 0,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 5 Rage',
    type: 'active',
    activeType: 'Basic Ability',
    recommendedPassive: null,
    image: smash
  },
  {
    index: 202,
    weapon: 'Hammer',
    path: 'Brute Force',
    name: 'Razor Shards',
    description:
      'Affects up to 6 enemies in a 5 metre radius around you.\nSlam the ground with your hammer, sending razor sharp shards of earth flying in all directions dealing 10 physical damage.\n\nWhen Enraged: Shatter the earth beneath you making larger shards impale affected enemies causing them to take 7 physical damage every second for 5 seconds. Instead of generating Rage, this attack consumes 50 Rage.',
    effect: '+ 6 Rage per target hit\n(Enraged) - 50 Rage',
    targetType: 'Point blank area of effect',
    damageType: 'melee',
    energy: 3,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 6 Rage per target hit\n(Enraged) - 50 Rage',
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: null,
    image: razor_shards
  },
  {
    index: 203,
    weapon: 'Hammer',
    path: 'Brute Force',
    name: 'Seethe',
    description: 'Focus your anger to gain 4 Hammer Energy.',
    effect: 'None',
    targetType: 'Self',
    damageType: 'melee',
    energy: 0,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: 'None',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: seethe
  },
  {
    index: 204,
    weapon: 'Hammer',
    path: 'Brute Force',
    name: 'Demolish',
    description:
      'Crush your target with the full weight of your hammer dealing 25 physical damage.\n\nWhen Enraged: Unleash your anger on your target improving the damage dealt to 61 phyiscal damage. Instead of generating Rage, this attack consumes 50 Rage.',
    effect: '+ 25 Rage\n(Enraged) - 50 Rage',
    targetType: 'Target',
    damageType: 'melee',
    energy: 5,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 25 Rage\n(Enraged) - 50 Rage',
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: null,
    image: demolish
  },
  {
    index: 205,
    weapon: 'Hammer',
    path: 'Brute Force',
    name: 'Eruption',
    description:
      'Affects up to 6 enemies in a 6 metre wide by 9 metre long area in front of you.\nYou smash your hammer into the ground, creating a column of molten ground in front of you that sends enemies into the air, purges 1 beneficial effect, and deals 41 physical damage.\nApplies Exposed.',
    effect: '+ 7 Rage per target hit',
    targetType: 'Column',
    damageType: 'melee',
    energy: 4,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 7 Rage per target hit',
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: null,
    image: eruption
  },
  {
    index: 206,
    weapon: 'Hammer',
    path: 'Brawn',
    name: 'Pain Suppression',
    description:
      'Your anger allows you to fight through the pain for the next 8 seconds. During this time, whenever you are hit, you fight on and heal yourself for 50% of the damage dealt. In addition, you get even angrier when hit, generating 2 extra Rage.',
    effect: '+ 2 Rage per hit',
    targetType: 'Self',
    damageType: 'melee',
    energy: 2,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 2 Rage per hit',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: pain_suppression
  },
  {
    index: 207,
    weapon: 'Hammer',
    path: 'Brawn',
    name: 'Enter the Fray',
    description:
      '15 metre charge to the target. The target must be at least 3 metres away.\nEnter the heat of battle by charging to the target, dealing 15 physical damage. For the next 6 seconds, enemies within 5 metres of the target are compelled to attack you. Whenever you are hit, you strike back dealing 2 physical damage to the attacker.',
    effect: '+ 10 Rage',
    targetType: 'Charge',
    damageType: 'melee',
    energy: 2,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 10 Rage',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: enter_the_fray
  },
  {
    index: 208,
    weapon: 'Hammer',
    path: 'Brawn',
    name: 'Rampage',
    description:
      'Affects up to 6 enemies in a 5 metre radius around you.\nFuriously lash out at nearby enemies dealing 5 physical damage.\nApplies Exposed.',
    effect: '+ 9 Rage per target hit',
    targetType: 'Point blank area of effect',
    damageType: 'melee',
    energy: 2,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 9 Rage per target hit',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: rampage
  },
  {
    index: 209,
    weapon: 'Hammer',
    path: 'Brawn',
    name: 'Thick Skin',
    description:
      'Harden yourself against incoming blows, increasing your Protection by 14200 for 10 seconds.\nApplies Debilitated to any attackers.',
    effect: 'None',
    targetType: 'Self',
    damageType: 'melee',
    energy: 2,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: 'None',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: thick_skin
  },
  {
    index: 210,
    weapon: 'Hammer',
    path: 'Brawn',
    name: 'Unstoppable Force',
    description:
      'Become an unstoppable machine of destruction. Grow in size by 25%, deal 20% more damage with Hammer abilities, and generate 3 Rage every second for 8 seconds.\n\nWhen activated all action and movement restricting effects are removed and you are immune to them for the duration of the effect.',
    effect: '+ 3 Rage every second for 8 seconds',
    targetType: 'Self',
    damageType: 'melee',
    energy: 4,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 3 Rage every second for 8 seconds',
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: null,
    image: unstoppable_force
  },
  {
    index: 211,
    weapon: 'Hammer',
    path: 'Grit',
    name: 'Pulverise',
    description:
      'Bash your target with a backhand swing of your hammer dealing 19 physical damage. This attack generates a large amount of hate.\nGenerates 18 Rage.\n\nWhen Enraged: Harness your rage to strengthen yourself increasing your maximum health by 45% for 15 seconds. Instead of generating Rage, this attack consumes 50 Rage.',
    effect: '+ 18 Rage\n(Enraged) - 50 Rage',
    targetType: 'Target',
    damageType: 'melee',
    energy: 3,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 18 Rage\n(Enraged) - 50 Rage',
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: null,
    image: pulverise
  },
  {
    index: 212,
    weapon: 'Hammer',
    path: 'Grit',
    name: 'Ground Pound',
    description:
      'Affects up to 6 enemies in a 5 metre radius around you.Strike the ground with your hammer, sending out shockwaves which deal 5 physical damage. This attack generates a large amount of hate.',
    effect: '+ 2 Rage per target hit',
    targetType: 'Point blank area of effect',
    damageType: 'melee',
    energy: 0,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 2 Rage per target hit',
    type: 'active',
    activeType: 'Basic Ability',
    recommendedPassive: null,
    image: ground_pound
  },
  {
    index: 213,
    weapon: 'Hammer',
    path: 'Grit',
    name: 'Burning Wrath',
    description:
      'Affects up to 6 enemies in a 5 metre radius around you and also pulsing every 0.5 seconds for 5 seconds.\nManifest your fiery rage dealing 12 physical damage. For the next 5 seconds your rage burns nearby enemies dealing 1 physical damage. This attack generates a large amount of hate.\nGenerates 8 Rage per target hit by the initial blast.\n\nWhen Enraged: Your unbridled rage sunders the earth beneath you leaving a damaging area on the ground. Enemies standing in this area have their movement speed slowed and are dealt 4 physical damage every 0.5 seconds for 5 seconds. Instead of generating Rage, this attack consumes 50 Rage.',
    effect: '+ 8 Rage target per hit\n(Enraged) - 50 Rage',
    targetType: 'Point blank area of effect',
    damageType: 'melee',
    energy: 5,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 8 Rage target per hit\n(Enraged) - 50 Rage',
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: null,
    image: burning_wrath
  },
  {
    index: 214,
    weapon: 'Hammer',
    path: 'Grit',
    name: 'Blindside',
    description:
      'Shove your target to the ground, purging 1 beneficial effect from them and dealing 19 physical damage.',
    effect: '+ 10 Rage',
    targetType: 'Target',
    damageType: 'melee',
    energy: 2,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 10 Rage',
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: null,
    image: blindside
  },
  {
    index: 215,
    weapon: 'Hammer',
    path: 'Grit',
    name: 'Raging Volcano',
    description:
      'Every 0.5 seconds for 6 seconds.\nAffects up to 6 enemies in a 5 metre radius around you.\nBecome a fiery whirlwind of destruction dealing 18 physical damage per hit while forcing nearby enemies to attack you and slowing their movement. The last hit will deal 17 physical damage and apply Debilitated.\nWhile channelling this ability, you take 20% less damage and your movement speed is increased by 30%.',
    effect: '+ 4 Rage per target hit',
    targetType: 'Channelled point blank area of effect',
    damageType: 'melee',
    energy: 4,
    castTime: 999999999,
    cooldown: 999999999,
    coefficient: '+ 4 Rage per target hit',
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: null,
    image: raging_volcano
  }
]
