import React, { useState } from 'react'
import styled from 'styled-components'
import TooltipAbility from '../../../../components/TooltipAbility'
import IconPlaceholder from '../../../../components/IconPlaceholder'
import { colors } from '../../../../variables/colors'
import TooltipPassive from '../../../../components/TooltipPassive'

export default function AbilityComponent({ ability, setAbility }) {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    <Ability
      onClick={() => setAbility({ ...ability })}
      active={ability.type === 'active'}
      color={ability.type === 'active' ? colors[ability.activeType] : '#fff'}
    >
      <p className="ability-name">{ability.name}</p>
      {ability.image ? (
        <img
          src={ability.image}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
          alt={ability.name}
        />
      ) : (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <IconPlaceholder
            name={ability.name}
            type={ability.type}
            activeType={ability.activeType}
          />
        </div>
      )}
      {isHovered && ability.type === 'active' && (
        <TooltipAbility ability={ability} />
      )}

      {isHovered && ability.type === 'passive' && (
        <TooltipPassive ability={ability} />
      )}
    </Ability>
  )
}

const Ability = styled.div`
  flex: ${({ active }) => (active ? '1' : '0 1 25%')};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ability-name {
    color: ${({ color }) => color};
  }
`
