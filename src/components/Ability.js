import React, { useState } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

export default function AbilityComponent(props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  // console.log(props)

  return (
    <Tooltip
      trigger="click"
      interactive
      style={{ flex: '1' }}
      html={
        <SlotSelectTooltip style={{ display: 'flex' }}>
          <Slot
            onClick={() => props.setAbility('firstAbility', { ...props })}
          />
          <Slot
            onClick={() => props.setAbility('secondAbility', { ...props })}
          />
          <Slot
            onClick={() => props.setAbility('thirdAbility', { ...props })}
          />
          <Slot
            onClick={() => props.setAbility('fourthAbility', { ...props })}
          />
          <Slot
            onClick={() => props.setAbility('fifthAbility', { ...props })}
          />
          <Slot
            onClick={() => props.setAbility('sixthAbility', { ...props })}
          />
        </SlotSelectTooltip>
      }
    >
      <Ability>
        <p>{props.name}</p>
        {props.image && (
          <img
            src={props.image}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          />
        )}
        {isHovered && (
          <AbilityTooltip>
            <div>{props.description}</div>
          </AbilityTooltip>
        )}
      </Ability>
    </Tooltip>
  )
}

const SlotSelectTooltip = styled.div`
  display: flex;
`

const Slot = styled.div`
  height: 15px;
  width: 15px;
  margin: 5px;
  background: #eee;
  &:hover {
    background: #f00;
  }
`

const Ability = styled.div`
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
