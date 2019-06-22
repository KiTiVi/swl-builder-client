import {
  flowing_strike,
  hurricane,
  hone,
  tsunami,
  dancing_blade,
  spirit_blade,
  soothing_spring,
  snakes_bite,
  rushing_river,
  supreme_harmony,
  swallow_cut,
  crescent_fang,
  tempest,
  impale_spirit,
  typhoon
} from '../../../../../../images/abilities/blade/actives/index'

export default [
  {
    index: 101,
    weapon: 'Blade',
    path: 'Method',
    name: 'Flowing Strike',
    description: `Your blade moves like flowing water, striking your target for 9 physical damage.
    Requires a Blade in your Primary Weapon slot`,
    targetType: 'single',
    damageType: 'melee',
    energy: 0,
    castTime: 0,
    cooldown: 0,
    coefficient: null,
    type: 'active',
    activeType: 'Basic Ability',
    connectedAbility: null,
    image: flowing_strike
  },
  {
    index: 102,
    weapon: 'Blade',
    path: 'Method',
    name: 'Hurricane',
    description: `PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 3 Blade Energy.
    Your blade cuts through the air creating gale force winds which deal 10 physical damage to nearby enemies.`,
    targetType: 'pbaoe',
    damageType: 'melee',
    energy: 3,
    castTime: 0,
    cooldown: 0,
    coefficient: null,
    type: 'active',
    activeType: 'Power Ability',
    connectedAbility: 'Eye of the Storm',
    image: hurricane
  },
  {
    index: 103,
    weapon: 'Blade',
    path: 'Method',
    name: 'Hone',
    description: `Hone your blade and spirit to gain 2 Blade Energy and cause your Blade attacks to have an additional 20% chance to generate Chi.
    This ability does not trigger and is not affected by global recharge time.`,
    targetType: 'self',
    damageType: 'special',
    energy: 0,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Keen Edge',
    image: hone
  },
  {
    index: 104,
    weapon: 'Blade',
    path: 'Method',
    name: 'Tsunami',
    description: `Channelled: Every 0.5 seconds for 2.5 seconds.Consumes 5 Blade Energy.
    Move as an unrelenting tsunami, drowning your target under the waves of your attacks, each dealing 8 physical damage.`,
    targetType: 'channelled',
    damageType: 'melee',
    energy: 5,
    castTime: 2.5,
    cooldown: 0,
    coefficient: 5.19,
    type: 'active',
    activeType: 'Power Ability',
    connectedAbility: 'Storm Surge',
    image: tsunami
  },
  {
    index: 105,
    weapon: 'Blade',
    path: 'Method',
    name: 'Dancing Blade',
    description: `Channelled: Every 0.5 seconds for 2.5 seconds.Consumes 4 Blade Energy.
    Your blade dances through the air, cutting at your target's spirit dealing 7 physical damage. As you grasp your blade the dance comes to a deadly end, dealing 28 physical damage.
    This ability has a 10 metre range.`,
    targetType: 'channelled',
    damageType: 'melee',
    energy: 4,
    castTime: 2.5,
    cooldown: 0,
    coefficient: 7.58,
    type: 'active',
    activeType: 'Elite Ability',
    connectedAbility: 'Soulforged Blade',
    image: dancing_blade
  },
  {
    index: 106,
    weapon: 'Blade',
    path: 'Balance',
    name: 'Spirit Blade',
    description: `When your Spirit Blade is shattered:
    Requires and consumes 5 Chi.
    Harness your Chi to forge your Spirit Blade. Your next 10 Blade attacks deal an additional 29 physical damage.
    
    When your Spirit Blade is forged:
    Requires at least 1 Chi and consumes all Chi.
    Gather your Chi to reforge your Spirit Blade, increasing the number of attacks remaining for your Spirit Blade. The number of attacks gained increases with the amount of Chi consumed. Note: All Chi is lost when your Spirit Blade shatters. [1/1/2/4/6 per Chi]
    
    This ability does not trigger and is not affected by global recharge time.`,
    targetType: 'self',
    damageType: 'special',
    energy: 0,
    castTime: 0,
    cooldown: 1,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Masterpiece',
    image: spirit_blade
  },
  {
    index: 107,
    weapon: 'Blade',
    path: 'Balance',
    name: 'Soothing Spring',
    description: `Consumes 2 Blade Energy.
    Your energy replenishes you like a soothing spring. You are instantly healed for 11.5% of your health and cleansed of 1 detrimental effect. You also gain a beneficial effect which restores 1.5% of your health and cleanses 1 detrimental effect every 0.5 seconds for 6 seconds.
    This ability does not trigger and is not affected by global recharge time.`,
    targetType: 'self',
    damageType: 'special',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Meditate',
    image: soothing_spring,
    heal: true,
    tags: ['cleanse']
  },
  {
    index: 108,
    weapon: 'Blade',
    path: 'Balance',
    name: "Snake's Bite",
    description: `Consumes 2 Blade Energy.
    Strike your target with the pommel of your blade, stunning them for 3 seconds. You immediately perform a follow up slash dealing 22 physical damage.`,
    targetType: 'single',
    damageType: 'melee',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Reversal',
    image: snakes_bite,
    tags: ['stun']
  },
  {
    index: 109,
    weapon: 'Blade',
    path: 'Balance',
    name: 'Rushing River',
    description: `Column Dash: Dash forward 10 metres, affecting up to 6 enemies in a 6 metre wide column along the way.Consumes 2 Blade Energy.
    Rush through your enemies like the raging rapids dealing 10 physical damage and slowing their movement. Applies Exposed.`,
    targetType: 'column dash',
    damageType: 'melee',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Waterfall',
    image: rushing_river,
    tags: ['dash']
  },
  {
    index: 110,
    weapon: 'Blade',
    path: 'Balance',
    name: 'Supreme Harmony',
    description: `Consumes 4 Blade Energy.
    Achieve complete harmony of body, mind, spirit, and blade for 8 seconds. During this time all of your Blade attacks deal 23% more damage and restore 1.5% of your health. In addition, your movement speed is increased by 20%. Upon activation, you are cleansed of all detrimental effects and gain 2 Chi.
    
    This ability does not trigger and is not affected by global recharge time.`,
    targetType: 'self',
    damageType: 'special',
    energy: 4,
    castTime: 0,
    cooldown: 20,
    coefficient: null,
    type: 'active',
    activeType: 'Elite Ability',
    connectedAbility: "Master's Focus",
    image: supreme_harmony,
    heal: true,
    tags: ['damage', 'speed', 'cleanse']
  },
  {
    index: 111,
    weapon: 'Blade',
    path: 'Technique',
    name: 'Swallow Cut',
    description: `Consumes 3 Blade Energy.
    Perform a quick and precise strike with your blade dealing 19 physical damage.`,
    targetType: 'single',
    damageType: 'melee',
    energy: 3,
    castTime: 0,
    cooldown: 0,
    coefficient: 2.525,
    type: 'active',
    activeType: 'Power Ability',
    connectedAbility: 'Hardened Blade',
    image: swallow_cut
  },
  {
    index: 112,
    weapon: 'Blade',
    path: 'Technique',
    name: 'Crescent Fang',
    description: `PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Cut a crescent-shaped arc in front of you with your blade dealing 5 physical damage to nearby enemies.
    Requires a Blade in your Primary Weapon slot.`,
    targetType: 'pbaoe',
    damageType: 'melee',
    energy: 0,
    castTime: 0,
    cooldown: 0,
    type: 'active',
    activeType: 'Basic Ability',
    image: crescent_fang
  },
  {
    index: 113,
    weapon: 'Blade',
    path: 'Technique',
    name: 'Tempest',
    description: `PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 5 Blade Energy.
    Unleash a storm of blades around you dealing 9 physical damage to nearby enemies. A whirling vortex is left in the wake of the blade-storm which deals 1 physical damage every 0.5 seconds for 5 seconds to enemies standing in the area.`,
    targetType: 'pbaoe',
    damageType: 'melee',
    energy: 5,
    castTime: 0,
    cooldown: 0,
    type: 'active',
    activeType: 'Power Ability',
    connectedAbility: 'Whirlwind',
    image: tempest,
    tags: ['dot']
  },
  {
    index: 114,
    weapon: 'Blade',
    path: 'Technique',
    name: 'Impale Spirit',
    description: `Impale Spirit:
    Consumes 2 Blade Energy.
    Impale your target with a spirit-forged blade dealing 5 physical damage and slowing its movement. The wound left by the blade lingers on, dealing 3 physical damage every second for 5 seconds.
    This ability has a 10 metre range. Becomes Exhume Spirit for 5 seconds on a successful hit.
    Exhume Spirit:
    Slice the air in front of you creating a whirlwind that seeks out the enemy you had impaled. The whirlwind erupts into a violent maelstrom upon reaching its target dealing 7 physical damage to the target and nearby enemies. Applies Exposed.`,
    targetType: 'single',
    damageType: 'ranged',
    energy: 2,
    castTime: 0,
    cooldown: 20,
    type: 'active',
    activeType: 'Special Ability',
    connectedAbility: 'Sunder Spirit',
    image: impale_spirit,
    tags: ['hinder', 'dot', 'exposed']
  },
  {
    index: 115,
    weapon: 'Blade',
    path: 'Technique',
    name: 'Typhoon',
    description: `PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 4 Blade Energy.
    Embody the destructive nature of a typhoon, lashing out at nearby targets with your blade dealing 10 physical damage and stunning them for 1 second.
    Like the crushing waves that follow a typhoon, you increase your Blade damage by 6% for each affected enemy, up to a maximum of 30%. This effect lasts 6 seconds.`,
    targetType: 'pbaoe',
    damageType: 'melee',
    energy: 4,
    castTime: 0,
    cooldown: 20,
    coefficient: 1.28,
    type: 'active',
    activeType: 'Elite Ability',
    connectedAbility: 'Torrent',
    image: typhoon,
    tags: ['damage']
  }
]
