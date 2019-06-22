import { generateId } from './generateId'
import {
  allActives,
  allPassives
} from '../pages/Home/Components/Builder/data/index'

export const getAbilitiesFromURL = ({ actives, passives }) => {
  // let allSomething = []

  // allActives.forEach(element => {
  //   allSomething.push(element.activeType)
  // })

  // let bajs = [...new Set(allSomething)]
  // console.log(bajs)

  const active_1 = actives.substring(0, 3)
  const active_2 = actives.substring(3, 6)
  const active_3 = actives.substring(6, 9)
  const active_4 = actives.substring(9, 12)
  const active_5 = actives.substring(12, 15)
  const active_6 = actives.substring(15, 18)
  const activesList = [
    active_1,
    active_2,
    active_3,
    active_4,
    active_5,
    active_6
  ]

  const passive_1 = passives.substring(0, 3)
  const passive_2 = passives.substring(3, 6)
  const passive_3 = passives.substring(6, 9)
  const passive_4 = passives.substring(9, 12)
  const passive_5 = passives.substring(12, 15)
  const passivesList = [passive_1, passive_2, passive_3, passive_4, passive_5]

  const selectedActives = []
  activesList.forEach(active => {
    if (active === '___') {
      selectedActives.push({
        empty: true,
        name: generateId(25)
      })
    } else {
      allActives.forEach(blade_active => {
        if (blade_active.index === parseInt(active)) {
          selectedActives.push(blade_active)
        }
      })
    }
  })

  const selectedPassives = []
  passivesList.forEach(passive => {
    if (passive === '___') {
      selectedPassives.push({
        empty: true,
        name: generateId(25)
      })
    } else {
      allPassives.forEach(blade_passive => {
        if (blade_passive.index === parseInt(passive)) {
          selectedPassives.push(blade_passive)
        }
      })
    }
  })

  return { selectedActives, selectedPassives }
}
