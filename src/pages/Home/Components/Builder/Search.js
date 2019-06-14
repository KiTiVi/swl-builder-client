import React from 'react'
import styled from 'styled-components'
import TooltipAbility from '../../../../components/TooltipAbility'

export default ({ clickedAbility }) => {
  return (
    <Search>
      <label className="Search-input-label">
        <i className="fas fa-search Search-input-icon" />
        <input type="text" placeholder="Search..." className="Search-input" />
      </label>

      {clickedAbility && <TooltipAbility ability={clickedAbility} search />}
    </Search>
  )
}

const Search = styled.aside`
  flex: 1;
  margin-top: 43px;
  background: #000;
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  .Search-input-label {
    display: block;
    padding: 14px;
    background: linear-gradient(to bottom, #444 20%, #222);
    position: relative;

    &::after {
      content: '';
      height: 2px;
      background: yellow;
      position: absolute;
      bottom: 5px;
      left: 14px;
      right: 14px;
    }
  }

  .Search-input-icon {
    position: absolute;
    top: 21px;
    right: 21px;
    font-size: 20px;
  }

  .Search-input {
    width: 100%;
    font-size: 24px;
    padding: 0 0 0 5px;
    color: #ddd;
    background: #444;
    box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1),
      0 2px hsla(0, 0%, 100%, 0.15);
    border: none;
  }
`
