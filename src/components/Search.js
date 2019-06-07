import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Search>
      <SearchHeader>Search</SearchHeader>
      {/* <SearchContainer>{clickedAbility && clickedAbility.name}</SearchContainer> */}
      <label className="Search-input-label">
        <i className="fas fa-search Search-input-icon" />
        <input type="text" placeholder="Search..." className="Search-input" />
      </label>
    </Search>
  )
}

const Search = styled.aside`
  flex: 1;
  margin-top: 43px;
  background: rgba(85, 85, 85, 0.75);
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  .Search-input-label {
    display: block;
    width: 80%;
    margin: 7px auto;
    position: relative;
  }

  .Search-input-icon {
    position: absolute;
    top: 7px;
    right: 10px;
    font-size: 20px;
  }

  .Search-input {
    width: 100%;
    font-size: 16px;
    padding: 7px;
    color: #ddd;
    background: #444;
    box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1),
      0 2px hsla(0, 0%, 100%, 0.15);
    border: none;
  }
`

const SearchHeader = styled.h2`
  margin: 0;
  padding: 14px 0 14px 14px;
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
`

const SearchContainer = styled.div`
  padding: 14px;
  border: 1px solid rgba(70, 70, 70, 0.75);
`
