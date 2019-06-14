import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/Home'
import Profile from './pages/Profile'
import data from './words.json'
import UserContext from './UserContext'

const App = () => {
  const test = () => {
    const blade = data.slice(0, 29)

    const hammer = data.slice(29, 58)

    const fist = data.slice(58, 86)

    const blood = data.slice(86, 114)

    const chaos = data.slice(114, 146)

    const elemental = data.slice(146, 174)

    const shotgun = data.slice(174, 202)

    const pistol = data.slice(202, 229)

    const rifle = data.slice(229, 253)

    // blade.forEach(ability => {
    //   console.log(ability)
    // })
  }

  test()

  return (
    <UserContext>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route component={Home} />
        </Switch>
      </Router>
    </UserContext>
  )
}

export default App
