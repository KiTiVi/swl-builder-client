import React, { useState, useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
          <li>
            <i class="fas fa-user-alt" />
            <Link to="/profile">Profile</Link>
          </li>
          <li
            onClick={() => {
              logout()
              localStorage.clear()
              userContext.setUser(false)
            }}
          >
            <i className="fas fa-sign-out-alt" />
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
    width: 150px;
    padding: 10px;
    list-style: none;
    background: #000;

    li {
      display: flex;
      justify-content: space-between;
      padding: 10px;

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
