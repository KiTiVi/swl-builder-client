import blade_actives from './blade/actives'
import hammer_actives from './hammer/actives'
import fists_actives from './fists/actives'
import blood_actives from './blood/actives'
import chaos_actives from './chaos/actives'
import elementalism_actives from './elementalism/actives'
import shotgun_actives from './shotgun/actives'
import pistols_actives from './pistols/actives'
import rifle_actives from './rifle/actives'

import blade_passives from './blade/passives'
import hammer_passives from './hammer/passives'
import fists_passives from './fists/passives'
import blood_passives from './blood/passives'
import chaos_passives from './chaos/passives'
import elementalism_passives from './elementalism/passives'
import shotgun_passives from './shotgun/passives'
import pistols_passives from './pistols/passives'
import rifle_passives from './rifle/passives'

export const actives = {
  Blade: blade_actives,
  Hammer: hammer_actives,
  'Fist Weapons': fists_actives,
  'Blood Magic': blood_actives,
  'Chaos Magic': chaos_actives,
  Elementalism: elementalism_actives,
  Shotgun: shotgun_actives,
  'Dual Pistols': pistols_actives,
  'Assault Rifle': rifle_actives
}

export const allActives = [
  ...blade_actives,
  ...hammer_actives,
  ...fists_actives,
  ...blood_actives,
  ...chaos_actives,
  ...elementalism_actives,
  ...shotgun_actives,
  ...pistols_actives,
  ...rifle_actives
]

export const passives = {
  Blade: blade_passives,
  Hammer: hammer_passives,
  'Fist Weapons': fists_passives,
  'Blood Magic': blood_passives,
  'Chaos Magic': chaos_passives,
  Elementalism: elementalism_passives,
  Shotgun: shotgun_passives,
  'Dual Pistols': pistols_passives,
  'Assault Rifle': rifle_passives
}

export const allPassives = [
  ...blade_passives,
  ...hammer_passives,
  ...fists_passives,
  ...blood_passives,
  ...chaos_passives,
  ...elementalism_passives,
  ...shotgun_passives,
  ...pistols_passives,
  ...rifle_passives
]
