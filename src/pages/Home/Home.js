import React, { useState, useEffect } from 'react'
import { getAbilitiesFromURL } from '../../utils/getAbilitiesFromURL'
import Builder from './Components/Builder/Builder'
import ReactGA from 'react-ga'

const Home = ({ history, location }) => {
  const [buildID, setBuildID] = useState(null)
  const [preselectedActives, setPreselectedActives] = useState(null)
  const [preselectedPassives, setPreselectedPassives] = useState(null)

  useEffect(() => {
    ReactGA.initialize('UA-142572923-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

    const params = new URLSearchParams(location.search)
    const actives = params.get('a')
    const passives = params.get('p')
    const buildID = params.get('id')

    if (buildID) {
      setBuildID(buildID)
    }

    if (actives && passives) {
      const result = getAbilitiesFromURL({ actives, passives })

      setPreselectedActives(result.selectedActives)
      setPreselectedPassives(result.selectedPassives)
    }

    return () => {
      setBuildID(null)
    }
  }, [])

  return (
    <>
      <Builder
        preselectedActives={preselectedActives}
        preselectedPassives={preselectedPassives}
        queryString={history.location.search}
        buildID={buildID}
        history={history}
      />
    </>
  )
}

export default Home
