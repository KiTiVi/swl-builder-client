import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import login from '../api/login'
import { UserContext } from '../UserContext'
import Modal from './Modal'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const userContext = useContext(UserContext)

  const [showModal, setShowModal] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()

    const user = await login({
      username,
      password
    })

    localStorage.setItem('user', JSON.stringify(user))
    userContext.setUser(user)
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>LOG IN</Button>

      {showModal && (
        <Modal setShowModal={setShowModal} header="Login">
          <Form onSubmit={onSubmit}>
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
            <input type="submit" value="Login" />
          </Form>
        </Modal>
      )}
    </>
  )
}

export default Login

const Button = styled.button`
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  color: #ffffff;
  background: #333;
  box-shadow: inset 0 1px 0 rgba(90, 90, 90, 0.75), 0 1px 3px rgba(0, 0, 0, 0.2);
  border: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`

const Form = styled.form`
  input {
    display: block;
    margin: 10px 0;
    padding: 5px;
    font-size: 16px;
    color: #eee;
    background: #333;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1), 0 2px 0 #444;
    border: none;
  }
`
