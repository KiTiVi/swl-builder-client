import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables/colors'

export default ({ name, type, activeType }) => {
  return (
    <IconPlaceholder
      color={type === 'active' ? colors[activeType] : ''}
      passive={type === 'passive' && true}
    >
      {name
        .match(/\b\w/g)
        .slice(0, 3)
        .join('')}
    </IconPlaceholder>
  )
}

const IconPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
  background: ${({ passive }) => (passive ? '#7b3266' : 'none')};
  border: 2px solid #ddd;
`
