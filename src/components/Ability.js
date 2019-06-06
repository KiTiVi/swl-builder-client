import React, { useState } from 'react'
import styled from 'styled-components'

export default function AbilityComponent(props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    <Ability onClick={() => props.setAbility({ ...props.ability })}>
      <p>{props.ability.name}</p>
      {props.ability.image && (
        <img
          src={props.ability.image}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
      )}
      {isHovered && (
        <AbilityTooltip>
          <div>{props.ability.description}</div>
        </AbilityTooltip>
      )}
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
`
