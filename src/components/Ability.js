import React, { useState } from 'react'
import styled from 'styled-components'

export default function AbilityComponent(props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  console.log(props)

  return (
    <Ability
      onClick={() => props.setAbility('fourthAbility', { ...props })}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <p>{props.name}</p>
      {props.image && <img src={props.image} />}
      {isHovered && <AbilityTooltip>{props.description}</AbilityTooltip>}
    </Ability>
  )
}

const Ability = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 1rem 5rem; */
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
