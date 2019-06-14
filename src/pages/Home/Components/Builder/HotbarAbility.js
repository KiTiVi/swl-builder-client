import React, { useState } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import TooltipAbility from '../../../../components/TooltipAbility'
import TooltipPassive from '../../../../components/TooltipPassive'
import IconPlaceholder from '../../../../components/IconPlaceholder'

export default function AbilityComponent({
  draggableIndex,
  draggableId,
  ability
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  // console.log(ability)

  return (
    <Draggable
      key={draggableId}
      draggableId={draggableId}
      index={draggableIndex}
      isDragDisabled={ability.empty ? true : false}
    >
      {provided => (
        <Ability
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {!ability.empty && (
            <IconPlaceholder
              name={ability.name}
              type={ability.type}
              activeType={ability.activeType}
            />
          )}
          {isHovered && ability.type === 'active' && (
            <TooltipAbility ability={ability} up />
          )}

          {isHovered && ability.type === 'passive' && (
            <TooltipPassive ability={ability} up />
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
`
