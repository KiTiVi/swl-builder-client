import React, { useState, useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'
import login from '../api/login'
import { UserContext } from '../UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const userContext = useContext(UserContext)

  const [showModal, setShowModal] = useState(false)
  const refContainer = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleClick = e => {
    console.log(showModal)

    if (refContainer.current.contains(e.target)) {
      console.log('inside')

      return
    }

    console.log('hej')

    setShowModal(false)
  }

  const onSubmit = async event => {
    event.preventDefault()

    const user = await login({
      username: 'Zippzer',
      password: 'admin1337'
    })

    localStorage.setItem('user', JSON.stringify(user))
    userContext.setUser(user)
  }

  return (
    <>
      <button onClick={() => setShowModal(!showModal)} />

      <Modal showModal={showModal ? true : false}>
        <form onSubmit={onSubmit} ref={refContainer}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </>
  )
}

export default Login

const Modal = styled.div`
  display: ${({ showModal }) => (showModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);

  form {
    width: 50%;
  }
`
