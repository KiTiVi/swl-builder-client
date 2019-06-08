import React from 'react'
import styled from 'styled-components'

export default ({ name, color }) => {
  return (
    <IconPlaceholder color={color}>
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
  color: ${({ color }) => color};
  border: 1px solid #ddd;
`
