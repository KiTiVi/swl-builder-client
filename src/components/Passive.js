import React, { useState } from 'react'
import styled from 'styled-components'
import AbilityTooltip from './AbilityTooltip'
import IconPlaceholder from './IconPlaceholder'
import PassiveTooltip from './PassiveTooltip'

export default ({ passive }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    <Passive>
      <p>{passive.name}</p>
      {passive.image ? (
        <img
          src={passive.image}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
      ) : (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <IconPlaceholder name={passive.name} />
        </div>
      )}
      {isHovered && <PassiveTooltip ability={passive} />}
    </Passive>
  )
}

const Passive = styled.div`
  flex: 0 1 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// onClick={() => props.setAbility({ ...props.ability })}
