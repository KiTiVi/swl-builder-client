export default [
  {
    index: 401,
    weapon: 'Blood Magic',
    name: 'Absolution',
    description:
      'You have safeguards built into your magic which trigger when your Corruption or Martyrdom level exceeds 60. When this happens, your Corruption or Martyrdom level is reduced by 50 and you regain 25% of your missing health.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 402,
    weapon: 'Blood Magic',
    name: 'Lingering Curse',
    description:
      'The effects of your "Dread Sigil" linger, cursing affected targets by dealing 1 magical damage every second for 5 seconds.',
    type: 'passive',
    connectedAbility: 'Dread Sigil'
  },
  {
    index: 403,
    weapon: 'Blood Magic',
    name: 'Contaminate',
    description:
      'When you "Reap" enemies you infuse them with your Corruption, causing the damage over time effect to increase to 3 - 3 magical damage per second. The damage dealt increases based on your Corruption level when "Reap" is cast.',
    type: 'passive',
    connectedAbility: 'Reap'
  },
  {
    index: 404,
    weapon: 'Blood Magic',
    name: 'Flay',
    description:
      'The magic conjured by your "Maleficium" mercilessly tears at your foes, increasing the damage dealt to 6 on enemies who are affected by any of your Blood Magic damage over time effects.',
    type: 'passive',
    connectedAbility: 'Maleficium'
  },
  {
    index: 405,
    weapon: 'Blood Magic',
    name: 'Convergence',
    description:
      'When "Sanguine Coalescence" expires or is destroyed, the energy converges inside of you instead of exploding outwards causing your next 4 Blood Magic attacks to deal an additional 10 magical damage.',
    type: 'passive',
    connectedAbility: 'Sanguine Coalescence'
  },
  {
    index: 406,
    weapon: 'Blood Magic',
    name: 'Blood Flow',
    description:
      'Power flows from the crushed heart of victims of your "Rupture."\nIf your Corruption level is above 60 you further afflict the target, dealing 2 magical damage every second for 6 seconds.\nIf your Martyrdom level is above 60 you transform the power into healing energy for your defensive target, restoring 2 health every second for 6 seconds.\nThese effects are improved if "Rupture" successfully interrupts a target.',
    type: 'passive',
    connectedAbility: 'Rupture'
  },
  {
    index: 407,
    weapon: 'Blood Magic',
    name: 'Defilement',
    description:
      'While your "Desecrate" is active, your Blood Magic abilities inflict further defilement, causing you to gain 20% more Corruption. If you are already at maximum Corruption, your Blood Magic abilities deal 16.5% more damage.',
    type: 'passive',
    connectedAbility: 'Desecrate'
  },
  {
    index: 408,
    weapon: 'Blood Magic',
    name: 'Resurgence',
    description:
      'You draw forth more of your energy when you cast "Rejuvenate" improving the healing to 3 per second. In addition, the healing is not reduced by your Martyrdom level.',
    type: 'passive',
    connectedAbility: 'Rejuvenate'
  },
  {
    index: 409,
    weapon: 'Blood Magic',
    name: 'Paroxysm',
    description:
      'The runes inscribed by your "Runic Hex" are carved deep, resulting in mass hexing. When "Runic Hex" expires, any enemies damaged by the resulting detonation are afflicted with a lesser version of the Hex which deals 2 magical damage every second for 3 seconds and slows their movement. During this time the target\'s attacks restore 2 health to whomever they attack.\nThe hex explodes one final time when it expires, dealing 2 magical damage to nearby enemies and healing nearby allies for 1.',
    type: 'passive',
    connectedAbility: 'Runic Hex'
  },
  {
    index: 410,
    weapon: 'Blood Magic',
    name: 'Desolate',
    description:
      'Your "Eldritch Scourge" lays waste to your target\'s soul increasing the damage and healing done by 52%.',
    type: 'passive',
    connectedAbility: 'Eldritch Scourge'
  },
  {
    index: 411,
    weapon: 'Blood Magic',
    name: 'Restorative Ward',
    description:
      'Your "Sanctuary" ability helps accelerate the restoration process. While an ally is protected by your "Sanctuary" barrier effect, each subsequent use of the ability increases the base healing done by 3.5%. This bonus is removed when the barrier effect is removed.\nIn addition, applying a barrier with "Sanctuary" no longer causes you to take damage from Martyrdom.',
    type: 'passive',
    connectedAbility: 'Sanctuary'
  },
  {
    index: 412,
    weapon: 'Blood Magic',
    name: 'Soothe',
    description:
      'The barrier applied by "Convalesce" to low health targets amplifies healing energies, increasing incoming healing from all sources by 15%.',
    type: 'passive',
    connectedAbility: 'Convalesce'
  },
  {
    index: 413,
    weapon: 'Blood Magic',
    name: 'Mercy',
    description:
      'Your "Redemption" grants relief and aid to those who need it most. "Redemption\'s" health restoration is increased to 20.\nIn addition, "Redemption" causes less damage from Martyrdom when used on low health targets and reduces your Martyrdom level more when used on high health targets.',
    type: 'passive',
    connectedAbility: 'Redemption'
  },
  {
    index: 414,
    weapon: 'Blood Magic',
    name: 'Sacrament',
    description:
      'The runic energy which maintains the barriers applied by your "Communion" ability is bound with a powerful charm. Whenever any of your "Communion" barriers are destroyed by incoming damage, your entire group is healed for 6.',
    type: 'passive',
    connectedAbility: 'Communion'
  },
  {
    index: 415,
    weapon: 'Blood Magic',
    name: 'Clemency',
    description:
      'You are able to draw restorative power from your blood when your life is threatened. Whenever you take damage from Corruption or Martyrdom while your health is below 50% you are healed for 0. This effect can only occur a limited number of times.\r\rWhen you enter combat you gain 5 uses of this restorative effect and you regain 1 every 15 seconds while in combat.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 416,
    weapon: 'Blood Magic',
    name: 'Curse of Destruction',
    description:
      'The power of your Corrupted blood curses your foes to ruination. If your Corruption level is above 10, your Blood Magic critical hits curse your target for 5 seconds causing them to take an additional 9 magical damage from subsequent Blood Magic critical hits.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 417,
    weapon: 'Blood Magic',
    name: 'Crimson Pulse',
    description:
      'Your blood surges when you critically hit or heal with Blood Magic abilities. When you critically hit, your target suffers 3 magical damage every second for 3 seconds. When you critically heal, your ally regains 0 health every second for 3 seconds.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 418,
    weapon: 'Blood Magic',
    name: 'Last Rites',
    description:
      'Your magical power allows you to cheat death for a brief time. Whenever you take damage that would have defeated you and your Corruption or Martyrdom level is above 60, you instead are able to continue living for 4 seconds.\r\rWhen this time expires, you are truly defeated. If your Corruption level was above 60 when "Last Rites" was triggered, you explode upon death dealing 74 magical damage to nearby enemies. If your Martyrdom level was above 60 when "Last Rites" was triggered, you explode upon death restorting 0 health to nearby allies.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 419,
    weapon: 'Blood Magic',
    name: 'Sanguine Charm',
    description:
      'You keep a small blood charm at the ready to store your gained power. Whenever you would lose power via reduction in your Corruption or Martyrdom level, the damage and healing done by your Blood Magic abilities is increased by 9% for 4 seconds.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 420,
    weapon: 'Blood Magic',
    name: 'Rites of Refuge',
    description:
      'Your Blood Magic barriers are reinforced by potent magics, increasing the Protection of allies with your barriers by 1225.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 421,
    weapon: 'Blood Magic',
    name: 'Shroud of Retribution',
    description:
      'Your Blood Magic barriers are covered in retributive runes, increasing the strength of your Blood Magic barriers by 3% and causing 1 magical damage to any attackers. The damage dealt scales with your Combat Power or Healing Power, whichever is higher.',
    type: 'passive',
    connectedAbility: null
  },
  {
    index: 422,
    weapon: 'Blood Magic',
    name: 'Red Tide',
    description:
      'The flow of your blood-fueled restorative magic grows stronger as your Martyrdom level increases. If you gain two power increases from Martyrdom within 6 seconds, the power of your Blood Magic heals is increased by 10% for 6 seconds.',
    type: 'passive',
    connectedAbility: null
  }
]
