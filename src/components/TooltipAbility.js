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
  'Fist Weapons': FistsIcon,
  'Blood Magic': BloodIcon,
  'Chaos Magic': ChaosIcon,
  Elementalism: ElementalsIcon,
  Shotgun: ShotgunsIcon,
  'Dual Pistols': PistolsIcon,
  'Assault Rifle': AssaultRiflesIcon
}

export default ({ ability, search, up }) => {
  const {
    name,
    activeType,
    description,
    weapon,
    energy,
    castTime,
    cooldown,
    type,
    connectedAbility,
    image
  } = ability

  return (
    <AbilityTooltip className={`${search ? 'search' : ''} ${up ? '-up' : ''}`}>
      <header className="AbilityTooltip--header">
        <div className="AbilityTooltip--type-and-weapon">
          <h3>{name}</h3>
          <p>
            {weapon} {activeType}
          </p>
        </div>

        <img src={image} alt={name} />
      </header>

      <section className="AbilityTooltip--stats">
        {energy > 0 && (
          <i className="fas fa-bolt AbilityTooltip--icon">
            <span>{energy}</span>
          </i>
        )}
        <i className="fas fa-clock AbilityTooltip--icon">
          {castTime > 0 ? <span>{castTime}</span> : <span>Instant</span>}
        </i>
        <i className="fas fa-redo-alt AbilityTooltip--icon">
          {cooldown > 0 ? <span>{cooldown}</span> : <span>Instant</span>}
        </i>
      </section>
      <p>{description}</p>
      {search && connectedAbility && (
        <div>
          <p>
            Connected {type === 'active' ? 'passive' : 'active'}:{' '}
            {connectedAbility}
          </p>
          <IconPlaceholder name={connectedAbility} type={type} />
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

  &.-up {
    top: auto;
    bottom: 100%;
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
`
