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
import IconPlaceholder from './IconPlaceholder'

const image = {
  Blade: BladesIcon,
  Hammer: HammersIcon,
  Fist: FistsIcon,
  Blood: BloodIcon,
  Chaos: ChaosIcon,
  Ele: ElementalsIcon,
  Showtgun: ShotgunsIcon,
  'Dual Pistols': PistolsIcon,
  Rifle: AssaultRiflesIcon
}

export default ({ ability, search }) => {
  const { name, description, weapon, type, recommendedActive } = ability

  return (
    <AbilityTooltip className={search && 'search'}>
      <header className="AbilityTooltip--header">
        <div className="AbilityTooltip--type-and-weapon">
          <h3>{name}</h3>
          <p>Passive skill</p>
        </div>
        <WeaponIcon src={image[weapon]} alt={weapon} />
      </header>
      <p>{description}</p>
      {search && recommendedActive && (
        <div>
          <p>Connected active: {recommendedActive}</p>
          <IconPlaceholder name={recommendedActive} type={type} />
        </div>
      )}
    </AbilityTooltip>
  )
}

const AbilityTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  padding: 20px 10px;
  z-index: 1000;
  white-space: pre-line;

  background: #000;
  border: 2px solid #fff;
  border-radius: 5px;

  .AbilityTooltip {
    &--header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        margin: 0;
      }

      p {
        margin: 5px 0;
      }
    }

    &--type-and-weapon {
    }

    &--stats {
      font-size: 20px;

      i:not(:last-child) {
        margin-right: 15px;
      }
    }

    &--icon {
      &::before {
        margin-right: 5px;
      }
    }
  }

  &.search {
    position: static;
    top: auto;
    left: auto;
    width: auto;
    padding: 20px;
    border: none;
    border-radius: 0;
  }
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
