import React, { useState } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

export default function AbilityComponent({
  draggableIndex,
  draggableId,
  ability
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  console.log(ability)

  return (
    <Draggable
      key={draggableId}
      draggableId={draggableId}
      index={draggableIndex}
    >
      {provided => (
        <Ability
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {ability.image && <img src={ability.image} />}
          {isHovered && Object.keys(ability).length > 0 && (
            <AbilityTooltip>{ability.description}</AbilityTooltip>
          )}
        </Ability>
      )}
    </Draggable>
  )
}

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
  bottom: 100%;
  left: 0;
  width: 300px;
  padding: 20px 10px;
  z-index: 1000;
  white-space: pre-line;

  background: #000;
  border: 2px solid #fff;
  border-radius: 5px;
`
