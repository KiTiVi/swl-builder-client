import React, { useState, useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'
import logout from '../api/logout'
import { UserContext } from '../UserContext'

export default () => {
  const [visible, setVisible] = useState(false)
  const userContext = useContext(UserContext)
  const refContainer = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleClick = e => {
    if (refContainer.current.contains(e.target)) {
      return
    }

    setVisible(false)
  }

  return (
    <UserMenu ref={refContainer} onClick={() => setVisible(!visible)}>
      <I className="fas fa-user-secret fa-2x" />
      {userContext.username}
      {visible && (
        <ul className="user-menu-links">
          <li>PROFILE</li>
          <li
            onClick={() => {
              logout()
              localStorage.clear()
              userContext.setUser(false)
            }}
          >
            LOGOUT
          </li>
        </ul>
      )}
    </UserMenu>
  )
}

const UserMenu = styled.div`
  position: relative;
  top: 0;
  right: 0;

  .user-menu-links {
    position: absolute;
    top: 30px;
    right: 0;
    background: #000;

    li {
      &:hover {
        color: red;
      }
    }
  }
`

const I = styled.i`
  margin-right: 10px;

  &:hover {
    color: red;
  }
`
