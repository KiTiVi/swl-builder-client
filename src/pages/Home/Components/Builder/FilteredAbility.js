import React, { useState } from 'react'
import styled from 'styled-components'
import TooltipAbility from '../../../../components/TooltipAbility'
import TooltipPassive from '../../../../components/TooltipPassive'
import weapons from '../../../../images/weapons/index'

export default ({ ability }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    <>
      <li
        className="list-item"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {ability.name}{' '}
        <img
          className="ability-image"
          src={weapons[ability.weapon]}
          alt={ability.weapon}
        />
      </li>
      {isHovered && ability.type === 'active' && (
        <TooltipAbility ability={ability} list />
      )}
      {isHovered && ability.type === 'passive' && (
        <TooltipPassive ability={ability} list />
      )}
    </>
  )
}
