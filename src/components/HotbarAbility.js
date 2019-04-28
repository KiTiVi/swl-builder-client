import React, { useState } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

export default function AbilityComponent(props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  console.log(props)

  return (
    <Tooltip
      trigger="click"
      interactive
      html={
        <SlotSelectTooltip style={{ display: 'flex' }}>
          <Slot onClick={() => props.removeAbility(props.slot, { ...props })} />
        </SlotSelectTooltip>
      }
    >
      <Ability onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
        {props.image && <img src={props.image} />}
        {isHovered && Object.keys(props).length > 0 && (
          <AbilityTooltip>{props.description}</AbilityTooltip>
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
  height: 54px;
  width: 54px;
  margin: 0 1px;
  border: 2px solid #ddd;
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
