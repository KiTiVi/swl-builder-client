import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import readProfile from '../api/readProfile'
import readBuilds from '../api/readBuilds'
import deleteBuild from '../api/deleteBuild'

export default () => {
  const [user, setUser] = useState(null)
  const [builds, setBuilds] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await readProfile()
      setUser(user)
    }

    const fetchBuilds = async () => {
      const builds = await readBuilds()
      setBuilds(builds)
    }

    fetchProfile()
    fetchBuilds()
  }, [])

  console.log(builds)

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
              alt="User"
            />
          </header>

          <section className="profile-information">
            <p>Created at: {user.createdAt}</p>
            <p>Updated at: {user.updatedAt}</p>
          </section>
        </>
      )}
      {builds.length > 0 && (
        <section className="profile-builds">
          <h3>Builds</h3>
          <ul>
            {builds.map((build, i) => (
              <li key={i}>
                <Link to={`/${build.queryString}&id=${build._id}`}>
                  {build.name}
                </Link>
                <button onClick={() => deleteBuild({ id: build._id })}>
                  del
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  )
}

const Container = styled.main`
  max-width: 1366px;
  margin: 30px auto;
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
