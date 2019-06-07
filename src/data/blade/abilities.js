export const blade_abilities = [
  {
    weapon: 'Blade',
    ability: 'Spirit Blade (Basic)',
    castTime: 0,
    cooldown: 0,
    coeff: 0.608,
    text:
      'When your Spirit Blade is shattered:\r\nRequires and consumes 5 Chi.\r\nHarness your Chi to forge your Spirit Blade. Your next 10 Blade attacks deal an additional 29 physical damage.\r\n\r\nWhen your Spirit Blade is forged:\r\nRequires at least 1 Chi and consumes all Chi.\r\nGather your Chi to reforge your Spirit Blade, increasing the number of attacks remaining for your Spirit Blade. The number of attacks gained increases with the amount of Chi consumed. Note: All Chi is lost when your Spirit Blade shatters. [1/1/2/4/6 per Chi]\r\n\r\nThis ability does not trigger and is not affected by global recharge time.',
    passive: 'Masterpiece',
    coeffPassive: 0.77,
    textPassive:
      'Your forging technique for your "Spirit Blade" is without blemish or imperfection, causing "Spirit Blade" to deal 17% more damage.'
  },
  {
    ability: 'Spirit Blade (Hurricane)',
    castTime: 0,
    cooldown: 0
  },
  {
    ability: 'Spirit Blade (Tsunami)',
    castTime: 0,
    cooldown: 0,
    coeff: 1.038
  },
  {
    ability: 'Spirit Blade (Swallow Cut)',
    castTime: 0,
    cooldown: 0,
    coeff: 1.121
  },
  {
    ability: 'Spirit Blade (Tempest)',
    castTime: 0,
    cooldown: 0
  },
  {
    ability:
      "Spirit Blade (Snake's Bite)\r\nSpirit Blade (Rushing River)\r\nSpirit Blade (Impale Spirit)",
    castTime: 0,
    cooldown: 0
  },
  {
    ability: 'Flowing Strike',
    energy: 0,
    cooldown: 0,
    coeff: 1.175,
    text:
      'Your blade moves like flowing water, striking your target for 9 physical damage.\r\nRequires a Blade in your Primary Weapon slot',
    passive: '-',
    coeffPassive: '-',
    textPassive: '-'
  },
  {
    ability: 'Hurricane',
    energy: 3,
    cooldown: 0,
    text:
      'PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 3 Blade Energy.\r\nYour blade cuts through the air creating gale force winds which deal 10 physical damage to nearby enemies.',
    passive: 'Eye of the Storm',
    textPassive:
      'Your "Hurricane" rages around you, battering your foes with every other hit of this ability for an additional 3 physical damage.'
  },
  {
    ability: 'Hone',
    energy: 2,
    cooldown: 20,
    text:
      'Hone your blade and spirit to gain 2 Blade Energy and cause your Blade attacks to have an additional 20% chance to generate Chi.\r\nThis ability does not trigger and is not affected by global recharge time.',
    passive: 'Keen Edge',
    textPassive:
      'You "Hone" your blade to a razor sharp edge, increasing your Crit Power with Blade abilities while "Hone" is active by 40%.'
  },
  {
    ability: 'Tsunami',
    energy: 5,
    castTime: 2.5,
    cooldown: 0,
    coeff: 5.19,
    text:
      'Channelled: Every 0.5 seconds for 2.5 seconds.Consumes 5 Blade Energy.\r\nMove as an unrelenting tsunami, drowning your target under the waves of your attacks, each dealing 8 physical damage.',
    passive: 'Storm Surge',
    coeffPassive: 6.130000000000001,
    textPassive:
      'The waves of your "Tsunami" swell whenever Chi is generated, dealing an additional 4 physical damage to the target.'
  },
  {
    ability: 'Soothing Spring',
    energy: 2,
    cooldown: 20,
    text:
      'Consumes 2 Blade Energy.\r\nYour energy replenishes you like a soothing spring. You are instantly healed for 11.5% of your health and cleansed of 1 detrimental effect. You also gain a beneficial effect which restores 1.5% of your health and cleanses 1 detrimental effect every 0.5 seconds for 6 seconds.\r\nThis ability does not trigger and is not affected by global recharge time.',
    passive: 'Meditate',
    textPassive:
      'You meditate on the essence of a "Soothing Spring." Each time the heal over time effect restores your health, you have an 18% chance to gain 1 Chi.'
  },
  {
    ability: "Snake's Bite",
    energy: 2,
    cooldown: 20,
    text:
      'Consumes 2 Blade Energy.\r\nStrike your target with the pommel of your blade, stunning them for 3 seconds. You immediately perform a follow up slash dealing 22 physical damage.',
    passive: 'Reversal',
    textPassive:
      'Whenever you interrupt an enemy\'s attack with "Snake\'s Bite", you reverse the flow of harmful energy and gain 2 Chi. You also direct some of the energy back at your target dealing an additional 2 physical damage.'
  },
  {
    ability: 'Rushing River',
    energy: 2,
    text:
      'Column Dash: Dash forward 10 metres, affecting up to 6 enemies in a 6 metre wide column along the way.Consumes 2 Blade Energy.\r\nRush through your enemies like the raging rapids dealing 10 physical damage and slowing their movement. Applies Exposed.',
    passive: 'Waterfall',
    textPassive:
      'Your "Rushing River" cascades like a waterfall into a new flow. If you damage an enemy with "Rushing River" you are able to activate "Rushing River" a second time within 5 seconds. The damage of this second activation is increased to 26 physical damage.'
  },
  {
    ability: 'Swallow Cut',
    energy: 3,
    castTime: 0,
    coeff: 2.525,
    text:
      'Consumes 3 Blade Energy.\r\nPerform a quick and precise strike with your blade dealing 19 physical damage.',
    passive: 'Hardened Blade',
    coeffPassive: 2.7074,
    textPassive:
      'Your "Swallow Cut" tempers and hardens your Spirit Blade. Whenever you hit an enemy with "Swallow Cut" you have a 30% chance to not consume an attack from your Spirit Blade.'
  },
  {
    ability: 'Crescent Fang',
    energy: 0,
    text:
      'PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Cut a crescent-shaped arc in front of you with your blade dealing 5 physical damage to nearby enemies.\r\nRequires a Blade in your Primary Weapon slot.',
    passive: '-',
    coeffPassive: '-',
    textPassive: '-'
  },
  {
    ability: 'Tempest',
    energy: 5,
    text:
      'PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 5 Blade Energy.\r\nUnleash a storm of blades around you dealing 9 physical damage to nearby enemies. A whirling vortex is left in the wake of the blade-storm which deals 1 physical damage every 0.5 seconds for 5 seconds to enemies standing in the area.',
    passive: 'Whirlwind',
    textPassive:
      'You harness the power of the wind while your "Tempest" blows furiously around you. While you are inside of the ground area of your "Tempest", your Blade attacks deal an additional 2 physical damage to the target and nearby enemies.'
  },
  {
    ability: 'Impale Spirit',
    energy: 2,
    text:
      'Impale Spirit:\r\nConsumes 2 Blade Energy.\r\nImpale your target with a spirit-forged blade dealing 5 physical damage and slowing its movement. The wound left by the blade lingers on, dealing 3 physical damage every second for 5 seconds.\r\nThis ability has a 10 metre range. Becomes Exhume Spirit for 5 seconds on a successful hit.\r\nExhume Spirit:\r\nSlice the air in front of you creating a whirlwind that seeks out the enemy you had impaled. The whirlwind erupts into a violent maelstrom upon reaching its target dealing 7 physical damage to the target and nearby enemies. Applies Exposed.',
    passive: 'Sunder Spirit',
    textPassive:
      'Your "Exhume Spirit" tears at the spirit energy of your foes, causing all affected enemies to be dealt 4 physical damage every second for 5 seconds.'
  },
  {
    ability: 'Dancing Blade',
    energy: 4,
    castTime: 2.5,
    coeff: 7.58,
    text:
      "Channelled: Every 0.5 seconds for 2.5 seconds.Consumes 4 Blade Energy.\r\nYour blade dances through the air, cutting at your target's spirit dealing 7 physical damage. As you grasp your blade the dance comes to a deadly end, dealing 28 physical damage.\r\nThis ability has a 10 metre range.",
    passive: 'Soulforged Blade',
    coeffPassive: 10.49,
    textPassive:
      'Your "Dancing Blade" harnesses your soul and the soul of your foe and coalesces into a Spirit Blade upon completion which lasts for 3 attacks. If you have already forged your Spirit Blade, the number of attacks remaining is increased by 3.'
  },
  {
    ability: 'Supreme Harmony',
    energy: 4,
    castTime: 0,
    coeff: '-',
    text:
      'Consumes 4 Blade Energy.\r\nAchieve complete harmony of body, mind, spirit, and blade for 8 seconds. During this time all of your Blade attacks deal 23% more damage and restore 1.5% of your health. In addition, your movement speed is increased by 20%. Upon activation, you are cleansed of all detrimental effects and gain 2 Chi.\r\n\r\nThis ability does not trigger and is not affected by global recharge time.',
    passive: "Master's Focus",
    coeffPassive: 'n/a',
    textPassive:
      'When you gain Chi, you focus your senses reducing the remaining recharge time of "Supreme Harmony" by 5%.'
  },
  {
    ability: 'Typhoon',
    energy: 4,
    castTime: 0,
    coeff: 1.28,
    text:
      'PBAoE: Affects up to 6 enemies in a 5 metre radius around you.Consumes 4 Blade Energy.\r\nEmbody the destructive nature of a typhoon, lashing out at nearby targets with your blade dealing 10 physical damage and stunning them for 1 second.\r\nLike the crushing waves that follow a typhoon, you increase your Blade damage by 6% for each affected enemy, up to a maximum of 30%. This effect lasts 6 seconds.',
    passive: 'Torrent',
    coeffPassive: 'n/a',
    textPassive:
      'The waves of your "Typhoon" come crashing down on your foes with unrelenting force, increasing the damage bonus for each target hit by "Typhoon" to 9.3% up to a maximum of 46.5%.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Immortal Spirit',
    textPassive:
      'Whenever you gain Chi you replenish your spirit, restoring 1% of your health every second for 3 seconds.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Clairvoyance',
    textPassive:
      'You have sharpened your senses such that you are able to guard yourself preemptively from danger. Whenever you gain a heal over time effect from Chi Overflow, "Soothing Spring", or "Immortal Spirit" you also gain a barrier that absorbs 100% of incoming damage and dissipates after absorbing damage equal to 12.5% of your maximum health. This effect can only occur once every 10 seconds.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Deluge',
    textPassive:
      'Striking enemies with your Spirit Blade builds up power inside of your Blade. Every sixth hit with Spirit Blade active unleashes a flood of power around you dealing 3 physical damage to nearby enemies.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Sweeping Slice',
    coeffPassive: 0.125,
    textPassive:
      'You have learned techniques for handling multiple enemies with your Blade. Whenever you hit 2 or more enemies with a single Blade ability you deal an additional 2 physical damage to nearby enemies.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Draw Sword, Draw Blood',
    textPassive:
      'When you draw your Blade it thirsts to spill blood before being sheathed. Whenever you enter combat, your next 3 Blade attacks deal 20% more damage. While in combat, you gain 1 use of this bonus effect every 10 seconds.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Measure Twice, Cut Once',
    textPassive:
      'Each cut of your Blade is a measured and precise action. While in combat, if you have not generated Chi in the past 4.5 seconds, your next Blade attack will generate 1 Chi in addition to the normal Chi gain chance.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Focused Breathing',
    textPassive:
      'You slow your breathing and focus your mind while in combat allowing you to generate 1 Chi every 9 seconds.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: 'Resonance',
    coeffPassive: 0.38,
    textPassive:
      'Your spirit resonates strongly with your Blade. Whenever you gain Chi, your next Blade attack deals an additional 3 physical damage.'
  },
  {
    ability: '-',
    energy: '-',
    castTime: '-',
    coeff: '-',
    text: '-',
    passive: "Warrior's Spirit",
    coeffPassive: 1.342,
    textPassive:
      'Your unyielding warrior spirit endures on even as your Spirit Blade shatters. Whenever your Spirit Blade shatters, you gain 1 Chi and deal 5 physical damage to nearby enemies.'
  }
]
