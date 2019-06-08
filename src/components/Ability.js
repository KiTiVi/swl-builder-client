import React, { useState } from 'react'
import styled from 'styled-components'
import AbilityTooltip from './AbilityTooltip'
import IconPlaceholder from './IconPlaceholder'
import { colors } from '../variables/colors'

export default function AbilityComponent(props) {
  const color = colors[props.ability.abilityType]

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    <Ability onClick={() => props.setAbility({ ...props.ability })}>
      <p style={{ color: color }}>{props.ability.name}</p>
      {props.ability.image ? (
        <img
          src={props.ability.image}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
      ) : (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <IconPlaceholder name={props.ability.name} color={color} />
        </div>
      )}
      {isHovered && <AbilityTooltip ability={props.ability} />}
    </Ability>
  )
}

const Ability = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
