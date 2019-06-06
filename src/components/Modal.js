import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

export default ({ setShowModal, header, children }) => {
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

    setShowModal(false)
  }

  return (
    <Modal>
      <div ref={refContainer}>
        <h1>{header}</h1>
        {children}
      </div>
    </Modal>
  )
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    padding: 0 40px 40px;
    background: #444;
    z-index: 2000;
  }
`
