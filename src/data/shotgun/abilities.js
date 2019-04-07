import pump_action from './images/pump_action.png'
import both_barrels from './images/both_barrels.png'
import opening_shot from './images/opening_shot.png'
import raging_shot from './images/raging_shot.png'
import full_salvo from './images/full_salvo.png'
import reconstituting_shells from './images/reconstituting_shells.png'
import glutton_for_punishment from './images/glutton_for_punishment.png'
import shell_salvage from './images/shell_salvage.png'
import cleanup from './images/cleanup.png'
import bombardment from './images/bombardment.png'
import rocket_pod from './images/rocket_pod.png'
import scattershot from './images/scattershot.png'
import heat_round from './images/heat_round.png'
import cqc from './images/cqc.png'
import kneecapper from './images/kneecapper.png'

/*
active
passive
active elite
*/

/*
ALL
Melee
Ranged
Magic
Misc
Fist Weapon
Hammer
Blade
Assult Rifle
Shotgun
Pistols
Chaos Focus
Blood
ele
*/

export const shotgun_abilities = [
  {
    pathName: 'Crackdown',
    abilities: [
      {
        weapon: 'shotgun',
        path: 'Crackdown',
        index: 0,
        name: 'Pump Action',
        description: `Blast an enemy with a shot from your shotgun dealing 9 physical damage.
        Consumes 1 shell.
        Requires a Shotgun in your Primary Weapon slot.`,
        targetType: 'single',
        damageType: 'physical',
        energyConsumed: 0,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'basic',
        image: pump_action
      },
      {
        weapon: 'shotgun',
        path: 'Crackdown',
        index: 1,
        name: 'Both Barrels',
        description: `Cone: Affects up to 6 enemies in a 60 degree 7 metre cone in front of you.Consumes 3 Shotgun Energy.
        Unleash a deadly diffused blast from your shotgun dealing 10 physical damage to enemies in front of you.
        
        Consumes 1 shell.
        `,
        targetType: 'cone',
        damageType: 'physical',
        energyConsumed: 3,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'power',
        image: both_barrels
      },
      {
        weapon: 'shotgun',
        path: 'Crackdown',
        index: 2,
        name: 'Opening Shot',
        description: `Consumes 2 Shotgun Energy.
        Fire a shot into the air to signal it is time to open fire. For the next 8 seconds, you and your group members' Critical Power is increased by 30%. A target can only gain this bonus once every 20 seconds. This ability does not trigger and is not affected by global recharge time.
        
        Consumes 1 shell.`,
        targetType: 'group',
        damageType: null,
        energyConsumed: 2,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: opening_shot
      },
      {
        weapon: 'shotgun',
        path: 'Crackdown',
        index: 3,
        name: 'Raging Shot',
        description: `Consumes 5 Shotgun Energy.
        Concentrate your power into a full-force shotgun blast dealing 25 physical damage.
        
        Consumes 1 shell.`,
        targetType: 'single',
        damageType: 'physical',
        energyConsumed: 5,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'power',
        image: raging_shot
      },
      {
        weapon: 'shotgun',
        path: 'Crackdown',
        index: 4,
        name: 'Full Salvo',
        description: `Channelled: Every 0.5 seconds for 2.5 seconds.
        Cone: Affects up to 6 enemies in a 9 metre long 60 degree cone in front of you.Consumes 4 Shotgun Energy.
        Lay waste to all who stand before you with repeated blasts from your shotgun dealing 12 physical damage per hit.

        Consumes 5 shells.`,
        targetType: 'channelled cone',
        damageType: 'physical',
        energyConsumed: 4,
        shellsConsumed: 5,
        castTime: 2.5,
        cooldown: 20,
        type: 'ability',
        abilityType: 'elite',
        image: full_salvo
      }
    ]
  },
  {
    pathName: 'Control',
    abilities: [
      {
        weapon: 'shotgun',
        path: 'Control',
        index: 0,
        name: 'Reconstituting Shells',
        description: `Consumes 2 Shotgun Energy.
        Repurpose some of your power from your shotgun shells to cleanse 1 detrimental effect from yourself and heal yourself and your group members for 16% - 26% of their maximum health. The amount of health restored is based on how many shells were repurposed. This ability does not trigger and is not affected by global recharge time.

        Consumes 6 shells.`,
        targetType: 'group',
        damageType: null,
        energyConsumed: 2,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: reconstituting_shells
      },
      {
        weapon: 'shotgun',
        path: 'Control',
        index: 1,
        name: 'Glutton for Punishment',
        description: `PBAoE: Affects up to 6 enemies in a 5 metre radius around you.
        Consumes 2 Shotgun Energy.
        Goad nearby enemies into attacking you for 6 seconds. During this time, your Protection is increased by 23700. Additionally, gain bonus hate on goaded enemies based on the number of shells consumed. This ability does not trigger and is not affected by global recharge time.

        Consumes 6 shells.`,
        targetType: 'pbaoe',
        damageType: null,
        energyConsumed: 2,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: glutton_for_punishment
      },
      {
        weapon: 'shotgun',
        path: 'Control',
        index: 2,
        name: 'Shell Salvage',
        description: `Salvage some of your power from your shotgun shells to gain 3 - 8 Shotgun Energy. The amount gained is based on how many shells were salvaged. This ability does not trigger and is not affected by global recharge time.

        Consumes 6 shells.`,
        targetType: 'group',
        damageType: null,
        energyConsumed: 0,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: shell_salvage
      },
      {
        weapon: 'shotgun',
        path: 'Control',
        index: 3,
        name: 'Cleanup',
        description: `Consumes 2 Shotgun Energy.
        Isolate the purifying elements in your shotgun shells and disperse it to all of your group members. For the next 9 seconds, each group member is cleansed of 1 detrimental effect every 1.5 seconds. This ability does not trigger and is not affected by global recharge time.
        
        Consumes 6 shells.`,
        targetType: 'group',
        damageType: null,
        energyConsumed: 2,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: cleanup
      },
      {
        weapon: 'shotgun',
        path: 'Control',
        index: 4,
        name: 'Bombardment',
        description: `Consumes 4 Shotgun Energy.
        Fire all of your shells into the air and cause them to rain down at the targeted point. A shell will strike a random enemy within 7 metres every 1.25 seconds for 10 seconds.
        Affected enemies are dealt 6 physical damage and are Exposed. Other enemies within 3 metres of the target are dealt 3 physical damage.
        
        Consumes 6 shells.`,
        targetType: 'taoe',
        damageType: 'physical',
        energyConsumed: 4,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'elite',
        image: bombardment
      }
    ]
  },
  {
    pathName: 'Enforce',
    abilities: [
      {
        weapon: 'shotgun',
        path: 'Enforce',
        index: 0,
        name: 'Rocket Pod',
        description: `Consumes 3 Shotgun Energy.
        Launch a miniaturised rocket at your target dealing 19 physical damage. This attack generates a large amount of hate.
        
        Consumes 1 shell.`,
        targetType: 'group',
        damageType: 'physical',
        energyConsumed: 3,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'power',
        image: rocket_pod
      },
      {
        weapon: 'shotgun',
        path: 'Enforce',
        index: 1,
        name: 'Scattershot',
        description: `Cone: Affects up to 6 enemies in a 60 degree 7 metre cone in front of you.Fire a blast of shot from your shotgun at enemies in front of you dealing 5 physical damage. This attack generates a large amount of hate.
        
        Consumes 1 shell.
        
        Requires a Shotgun in your Primary Weapon slot.`,
        targetType: 'cone',
        damageType: 'physical',
        energyConsumed: 0,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'basic',
        image: scattershot
      },
      {
        weapon: 'shotgun',
        path: 'Enforce',
        index: 2,
        name: 'HEAT Round',
        description: `TAoE: Affects up to 6 enemies in a 5 metre radius around the target.Consumes 5 Shotgun Energy.
        Launch a high-explosive anti-tank round at your target dealing 13 physical damage to any enemies caught in the blast. This attack generates a large amount of hate.
        
        Consumes 1 shell.`,
        targetType: 'taoe',
        damageType: 'physical',
        energyConsumed: 5,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 0,
        type: 'ability',
        abilityType: 'power',
        image: heat_round
      },
      {
        weapon: 'shotgun',
        path: 'Enforce',
        index: 3,
        name: 'CQC',
        description: `Consumes 2 Shotgun Energy.
        Bash an enemy with the stock of your shotgun, knocking them down. Follow up with a close-range shotgun blast dealing 22 physical damage.
        This ability has a 3 metre range.
        
        Consumes 1 shell.`,
        targetType: 'single knock',
        damageType: 'physical',
        energyConsumed: 2,
        shellsConsumed: 1,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'special',
        image: cqc
      },
      {
        weapon: 'shotgun',
        path: 'Enforce',
        index: 4,
        name: 'Kneecapper',
        description: `Cone: Affects up to 6 enemies in a 60 degree 9 metre cone in front of you.Consumes 4 Shotgun Energy.
        Fire a concentrated shot of power from your shotgun towards the ground creating a blast wave in front of you, knocking enemies down, dealing 34 physical damage, and slowing their movement. This attack generates a large amount of hate.
        For 8 seconds afterward, all attacks against you are 42% - 49% more likely to glance. This bonus increases based on the number of shotgun shells consumed.
        
        Consumes 6 shells.`,
        targetType: 'cone knock',
        damageType: 'physical',
        energyConsumed: 4,
        shellsConsumed: 6,
        castTime: 0,
        cooldown: 20,
        type: 'ability',
        abilityType: 'elite',
        image: kneecapper
      }
    ]
  }
]
