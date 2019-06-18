import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables/colors'

export default ({ name, type, activeType, selected }) => {
  return (
    <IconPlaceholder
      color={type === 'active' ? colors[activeType] : ''}
      passive={type === 'passive' && true}
      selected={selected}
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
  box-shadow: ${({ selected }) => (selected ? '0 0 5px 3px #fff' : 'none')};
  border: 2px solid #ddd;
`
