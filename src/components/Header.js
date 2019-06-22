import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Login from './Login'
import UserMenu from './UserMenu'
import logo from '../images/SWL_LOGO_RASTER_DARKBKG_032717.png'
import { UserContext } from '../UserContext'
import Signup from './Signup'

export default () => {
  const userContext = useContext(UserContext)

  return (
    <Header>
      <div style={{ flex: '1' }}>
        <Link to="/">
          <img
            src={logo}
            alt="Secret World Legends"
            style={{ height: '50px' }}
          />
        </Link>
      </div>
      <h2>A FANMADE DECK BUILDER</h2>
      <div style={{ flex: '1', textAlign: 'right' }}>
        {/* {userContext.username ? (
          <UserMenu />
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )} */}
      </div>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.75);
`
