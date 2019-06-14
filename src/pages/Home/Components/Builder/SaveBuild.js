import React, { useState } from 'react'
import styled from 'styled-components'
import createBuild from '../../../../api/createBuild'
import Modal from '../../../../components/Modal'

const Save = ({ actives, passives, queryString, buildID }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [showModal, setShowModal] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()

    if (buildID) {
      console.log(buildID)
    }

    const build = await createBuild({
      name,
      description,
      actives,
      passives,
      queryString
    })

    console.log(build)
  }
  console.log(buildID)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        {buildID ? 'UPDATE' : 'CREATE'}
      </Button>

      {showModal && (
        <Modal setShowModal={setShowModal} header="Save build">
          <Form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input type="submit" value={buildID ? 'UPDATE' : 'CREATE'} />
          </Form>
        </Modal>
      )}
    </>
  )
}

export default Save

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
