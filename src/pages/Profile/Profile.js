import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import readProfile from '../../api/readProfile'
import readBuilds from '../../api/readBuilds'
import deleteBuild from '../../api/deleteBuild'
import weapons from '../../images/weapons/index'

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
          <Builds>
            {builds.map((build, i) => (
              <li className="--list-item" key={i}>
                <Link
                  to={`/${build.queryString}&id=${build._id}`}
                  className="name"
                >
                  <h4>{build.name}</h4>
                </Link>
                {build.weapons.map(weapon => (
                  <img src={weapons[weapon]} alt={weapon} />
                ))}
                <button onClick={() => deleteBuild({ id: build._id })}>
                  del
                </button>
              </li>
            ))}
          </Builds>
        </section>
      )}
    </Container>
  )
}

const Container = styled.main`
  max-width: 991px;
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

const Builds = styled.ul`
  list-style: none;

  .--list-item {
    display: flex;
    justify-content: space-between;

    .name {
      flex: 1;
      font-size: 20px;
      color: #fff;
    }
  }
`
