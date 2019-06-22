import React from 'react'
import styled from 'styled-components'
import IconPlaceholder from './IconPlaceholder'
import { allAbilities } from '../pages/Home/Components/Builder/data/index'

export default ({ ability, search, up, list }) => {
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

  const getImg = connectedAbility => {
    let image = null
    allAbilities.forEach(ability => {
      if (
        ability.name === connectedAbility &&
        ability.weapon === ability.weapon
      ) {
        image = ability.image
      }
    })
    return image
  }

  return (
    <AbilityTooltip
      className={`${search ? 'search' : ''} ${up ? '-up' : ''} ${
        list ? '-list' : ''
      }`}
    >
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
          {type === 'passive' ? (
            <img
              src={getImg(connectedAbility)}
              alt={connectedAbility}
              className="ability-image"
            />
          ) : (
            <IconPlaceholder
              name={connectedAbility}
              type={type}
              connectedAbility
            />
          )}
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
  z-index: 2000;
  white-space: pre-line;

  background: #000;
  border: 2px solid #fff;
  border-radius: 5px;

  .AbilityTooltip {
    &--header {
      display: flex;
      justify-content: space-between;
      align-items: center;
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

  &.-list {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: 2000;
  }
`
