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
          {!ability.empty &&
            (ability.image ? (
              <img
                src={ability.image}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
                alt={ability.name}
                className="ability-image"
              />
            ) : (
              <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                <IconPlaceholder
                  name={ability.name}
                  type={ability.type}
                  activeType={ability.activeType}
                />
              </div>
            ))}
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
  background: linear-gradient(
    to bottom right,
    #555 10%,
    #000 10% 20%,
    #555 20% 30%,
    #000 30% 40%,
    #555 40% 50%,
    #000 50% 60%,
    #555 60% 70%,
    #000 70% 80%,
    #555 80% 90%,
    #000 90%
  );
`
