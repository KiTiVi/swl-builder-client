import {
  hair_trigger,
  controlled_shooting,
  flourish,
  unload,
  all_in,
  full_house,
  clean_slate,
  six_line,
  kill_blind,
  trick_shot,
  dual_shot,
  seeking_bullet,
  charged_blast,
  riccochet,
  bullet_ballet
} from '../../../../../../images/abilities/pistols/actives/index';

export default [
  {
    index: 801,
    weapon: 'Dual Pistols',
    path: 'Troubleshooting',
    name: 'Hair Trigger',
    description:
      'Snap a quick shot at your target with your pistol, dealing 9 physical damage.',
    targetType: 'single',
    damageType: 'ranged',
    energy: 0,
    castTime: 0,
    cooldown: 0,
    coefficient: 1.175,
    type: 'active',
    activeType: 'Basic Ability',
    recommendedPassive: null,
    image: hair_trigger
  },
  {
    index: 802,
    weapon: 'Dual Pistols',
    path: 'Troubleshooting',
    name: 'Controlled Shooting',
    description:
      'Jumps up to 8 metres 5 times, hitting up to 6 enemies.\nFire your shot at your target in such a way that it rolls through them and nearby enemies. Affected targets are dealt 10 physical damage.',
    targetType: 'chain',
    damageType: 'ranged',
    energy: 3,
    castTime: 0.5,
    cooldown: 0,
    coefficient: null,
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: 'High Roller',
    image: controlled_shooting
  },
  {
    index: 803,
    weapon: 'Dual Pistols',
    path: 'Troubleshooting',
    name: 'Flourish',
    description:
      'Spin your pistols and ready yourself for action, allowing you to recover 4 Pistol Energy and cleanse yourself of 1 detrimental effect.',
    targetType: 'self',
    damageType: 'ranged',
    energy: 0,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Lethal Aim',
    image: flourish,
    tags: ['cleanse']
  },
  {
    index: 804,
    weapon: 'Dual Pistols',
    path: 'Troubleshooting',
    name: 'Unload',
    description:
      'Every 0.5 seconds for 2.5 seconds.\nEmpty the clips of both of your pistols into your target, dealing 8 physical damage per hit.',
    targetType: 'channelled',
    damageType: 'ranged',
    castTime: 2.5,
    cooldown: 0,
    coefficient: 5.19,
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: 'Holdout',
    image: unload
  },
  {
    index: 805,
    weapon: 'Dual Pistols',
    path: 'Troubleshooting',
    name: 'All In',
    description:
      'Every 0.3 seconds for 3 seconds.\nUnleash an all-out hail of fire at your target.\n  •First 3 hits: 4 physical damage. \n  •Next 3 hits: 5 physical damage. \n  •Next 3 hits: 6 physical damage in a 5 metre area around the target. \n  •Final hit: 15 physical damage.',
    targetType: 'channelled',
    damageType: 'ranged',
    energy: 4,
    castTime: 3,
    cooldown: 20,
    coefficient: 8.16,
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: 'Royal Flush',
    image: all_in
  },
  {
    index: 806,
    weapon: 'Dual Pistols',
    path: 'Gunplay',
    name: 'Full House',
    description:
      'Defy the odds and twist fate into forcing your pistol chambers to a Double Blue set for 3 seconds.',
    targetType: 'self',
    damageType: 'ranged',
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Stacked Deck',
    image: full_house
  },
  {
    index: 807,
    weapon: 'Dual Pistols',
    path: 'Gunplay',
    name: 'Clean Slate',
    description:
      'Channel your energy for restorative purposes, cleansing yourself and all group members of 3 detrimental effects and healing them for 11. The amount healed increases based on your Attack Rating.',
    targetType: 'group',
    damageType: 'ranged',
    energy: 2,
    castTime: 0.5,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Rehabilitation',
    image: clean_slate,
    tags: ['cleanse']
  },
  {
    index: 808,
    weapon: 'Dual Pistols',
    path: 'Gunplay',
    name: 'Six Line',
    description:
      'Take a chance and set your left pistol chamber to red for 6 seconds. During this time, all of your pistol attacks deal an additional 3 physical damage.',
    targetType: 'self',
    damageType: 'ranged',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Mulligan',
    image: six_line
  },
  {
    index: 809,
    weapon: 'Dual Pistols',
    path: 'Gunplay',
    name: 'Kill Blind',
    description:
      'Raise the odds of killing your target by stunning and shooting them with each pistol. The shot deals 6 physical damage and extends the duration of any active matched chamber damage bonus by 1.5 seconds.\nApplies Exposed. Applies Debilitated.',
    targetType: 'self',
    damageType: 'ranged',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: 0.82,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Focused Fire',
    image: kill_blind,
    tags: ['exposed', 'debilitated']
  },
  {
    index: 810,
    weapon: 'Dual Pistols',
    path: 'Gunplay',
    name: 'Trick Shot',
    description:
      'Affects up to 6 enemies in a 5 metre radius around the target.\nFire a pair of swirling bullets at your target. The bullets explode on impact dealing 41 physical damage to the target and nearby enemies.\nApplies Exposed. Applies Debilitated.',
    targetType: 'taoe',
    damageType: 'ranged',
    energy: 4,
    castTime: 0,
    cooldown: 20,
    coefficient: 5.6,
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: 'Bamboozle',
    image: trick_shot,
    tags: ['exposed', 'debilitated']
  },
  {
    index: 811,
    weapon: 'Dual Pistols',
    path: 'Bullet Hell',
    name: 'Dual Shot',
    description:
      'Charge up and simultaneously fire both of your pistols at your target dealing 19 physical damage.',
    targetType: 'single',
    damageType: 'ranged',
    energy: 3,
    castTime: 0,
    cooldown: 0,
    coefficient: 2.525,
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: 'Fatal Shot',
    image: dual_shot
  },
  {
    index: 812,
    weapon: 'Dual Pistols',
    path: 'Bullet Hell',
    name: 'Seeking Bullet',
    description:
      'Jumps up to 8 metres 5 times, hitting up to 6 enemies.Fire shots from your pistols that seek out and damage enemies for 5 physical damage.',
    targetType: 'chain',
    damageType: 'ranged',
    energy: 0,
    castTime: 0.5,
    cooldown: 0,
    coefficient: null,
    type: 'active',
    activeType: 'Basic Ability',
    recommendedPassive: null,
    image: seeking_bullet
  },
  {
    index: 813,
    weapon: 'Dual Pistols',
    path: 'Bullet Hell',
    name: 'Charged Blast',
    description:
      'Affects up to 5 enemies in a 6 metre radius around the target.\nSend a wave of volatile energy through the ground towards your target. The energy detonates upon arrival dealing 13 physical damage to the target and nearby enemies.',
    targetType: 'taoe',
    damageType: 'ranged',
    energy: 5,
    castTime: 0,
    cooldown: 0,
    coefficient: null,
    type: 'active',
    activeType: 'Power Ability',
    recommendedPassive: 'Blast Crater',
    image: charged_blast
  },
  {
    index: 814,
    weapon: 'Dual Pistols',
    path: 'Bullet Hell',
    name: 'Ricochet',
    description:
      'Your mastery of angles and trajectories allows you to ricochet your bullets from one target to another for 6 seconds. Your target and nearby enemies are dealt an additional 2 physical damage whenever you deal damage with Pistol abilities. This ability does not trigger and is not affected by global recharge time.',
    targetType: 'self',
    damageType: 'ranged',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    recommendedPassive: 'Bullet Echo',
    image: riccochet
  },
  {
    index: 815,
    weapon: 'Dual Pistols',
    path: 'Bullet Hell',
    name: 'Bullet Ballet',
    description:
      'Every 0.2 seconds for 2 seconds.\nAffects up to 6 enemies in a 10 metre radius around you.\nIn an exquisite display of gunmanship, fire a rapid succession of shots at all nearby targets dealing 6 physical damage per hit and slowing their movement.\nYou are unable to move while channeling this ability.',
    targetType: 'pbaoe',
    damageType: 'ranged',
    energy: 4,
    castTime: 2,
    cooldown: 20,
    coefficient: 7.0,
    type: 'active',
    activeType: 'Elite Ability',
    recommendedPassive: null,
    image: bullet_ballet
  }
];