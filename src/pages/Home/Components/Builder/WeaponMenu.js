import React from 'react'
import styled from 'styled-components'
import BladesIcon from '../../../../images/weapons/BladesIcon.png'
import HammersIcon from '../../../../images/weapons/HammersIcon.png'
import FistsIcon from '../../../../images/weapons/FistsIcon.png'
import BloodIcon from '../../../../images/weapons/BloodIcon.png'
import ChaosIcon from '../../../../images/weapons/ChaosIcon.png'
import ElementalsIcon from '../../../../images/weapons/ElementalsIcon.png'
import ShotgunsIcon from '../../../../images/weapons/ShotgunsIcon.png'
import PistolsIcon from '../../../../images/weapons/PistolsIcon.png'
import AssaultRiflesIcon from '../../../../images/weapons/AssaultRiflesIcon.png'

const image = {
  Blade: BladesIcon,
  Hammer: HammersIcon,
  'Fist Weapons': FistsIcon,
  'Blood Magic': BloodIcon,
  'Chaos Magic': ChaosIcon,
  Elementalism: ElementalsIcon,
  Shotgun: ShotgunsIcon,
  'Dual Pistols': PistolsIcon,
  'Assault Rifle': AssaultRiflesIcon
}

export default function WeaponMenu({ selectWeapon, selectedWeapon }) {
  return (
    <Menu>
      {Object.keys(image).map(weapon => {
        console.log(image, weapon, image[weapon])
        return (
          <WeaponIcon
            imageSrc={image[weapon]}
            onClick={() => selectWeapon(weapon)}
            selected={selectedWeapon === weapon}
          />
        )
      })}
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`

const WeaponIcon = styled.div`
  height: 50px;
  width: 50px;
  margin-bottom: 2px;
  border-radius: 10px 0 0 10px;
  background: ${props =>
    `url(${props.imageSrc}) center/contain no-repeat, ${
      props.selected
        ? `linear-gradient(to right,
      rgb(243, 211, 131) 20%,
      rgb(153, 128, 74)
    )`
        : `linear-gradient(to right, #444 20%, #222)`
    }`};

  &:hover {
    background: ${props => `url(${
      props.imageSrc
    }) center/contain no-repeat, linear-gradient(
      to right,
      rgb(243, 211, 131) 20%,
      rgb(153, 128, 74)
    )`};
  }

  @media only screen and (max-width: 500px) {
    flex: 33%;
  }
`
