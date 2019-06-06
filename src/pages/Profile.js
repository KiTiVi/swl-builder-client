import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import readProfile from '../api/readProfile'

export default () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await readProfile()
      setUser(user)
    }
    fetchProfile()
  }, [])

  console.log(user)

  return (
    <Container>
      {user && (
        <>
          <header className="profile-header">
            <h2 className="profile-username">{user.username}</h2>
            <img
              className="profile-avatar"
              src={`${process.env.REACT_APP_DEV_API_URL}/users/${
                user._id
              }/avatar`}
            />
          </header>

          <section className="profile-information">
            <p>Created at: {user.createdAt}</p>
            <p>Updated at: {user.updatedAt}</p>
          </section>

          <section className="profile-builds">
            <h3>Builds</h3>
            <ul>
              <li>Build #1</li>
              <li>Build #2</li>
              <li>Build #3</li>
              <li>Build #4</li>
              <li>Build #5</li>
            </ul>
          </section>
        </>
      )}
    </Container>
  )
}

const Container = styled.main`
  width: 800px;
  margin: 40px auto;
  padding: 40px 60px;
  background: rgba(0, 0, 0, 0.75);

  .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile-username {
    font-size: 32px;
  }

  .profile-avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  .profile-information {
  }

  .profile-builds {
    margin-top: 40px;

    h3 {
      font-size: 28px;
    }
  }
`
