import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import UserContext from './UserContext'

const App = () => {
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
