import React from 'react'
import styled from 'styled-components'
import BladesIcon from '../images/weapons/BladesIcon.png'
import HammersIcon from '../images/weapons/HammersIcon.png'
import FistsIcon from '../images/weapons/FistsIcon.png'
import BloodIcon from '../images/weapons/BloodIcon.png'
import ChaosIcon from '../images/weapons/ChaosIcon.png'
import ElementalsIcon from '../images/weapons/ElementalsIcon.png'
import ShotgunsIcon from '../images/weapons/ShotgunsIcon.png'
import PistolsIcon from '../images/weapons/PistolsIcon.png'
import AssaultRiflesIcon from '../images/weapons/AssaultRiflesIcon.png'

export default function WeaponMenu({ selectWeapon, selectedWeapon }) {
  return (
    <Menu>
      <WeaponIcon
        src={BladesIcon}
        alt="Blade"
        onClick={() => selectWeapon('Blade')}
        selected={selectedWeapon === 'Blade'}
      />
      <WeaponIcon
        src={HammersIcon}
        alt="Hammer"
        onClick={() => selectWeapon('Hammer')}
        selected={selectedWeapon === 'Hammer'}
      />
      <WeaponIcon
        src={FistsIcon}
        alt="Fist Weapons"
        onClick={() => selectWeapon('Fist Weapons')}
        selected={selectedWeapon === 'Fist Weapons'}
      />
      <WeaponIcon
        src={BloodIcon}
        alt="Blood Magic"
        onClick={() => selectWeapon('Blood Magic')}
        selected={selectedWeapon === 'Blood Magic'}
      />
      <WeaponIcon
        src={ChaosIcon}
        alt="Chaos Magic"
        onClick={() => selectWeapon('Chaos Magic')}
        selected={selectedWeapon === 'Chaos Magic'}
      />
      <WeaponIcon
        src={ElementalsIcon}
        alt="Elementalism"
        onClick={() => selectWeapon('Elementalism')}
        selected={selectedWeapon === 'Elementalism'}
      />
      <WeaponIcon
        src={ShotgunsIcon}
        alt="Shotgun"
        onClick={() => selectWeapon('Shotgun')}
        selected={selectedWeapon === 'Shotgun'}
      />
      <WeaponIcon
        src={PistolsIcon}
        alt="Dual Pistols"
        onClick={() => selectWeapon('Dual Pistols')}
        selected={selectedWeapon === 'Dual Pistols'}
      />
      <WeaponIcon
        src={AssaultRiflesIcon}
        alt="Assault Rifle"
        onClick={() => selectWeapon('Assault Rifle')}
        selected={selectedWeapon === 'Assault Rifle'}
      />
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

const WeaponIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 2px;
  border-radius: 10px 0 0 10px;
  background: ${props =>
    props.selected
      ? `linear-gradient(to right,
      rgb(243, 211, 131) 20%,
      rgb(153, 128, 74)
    )`
      : `linear-gradient(to right, #444 20%, #222)`};

  &:hover {
    background: linear-gradient(
      to right,
      rgb(243, 211, 131) 20%,
      rgb(153, 128, 74)
    );
  }
`
