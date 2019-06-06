import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import 'react-tippy/dist/tippy.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import data from './words.json'
import UserContext from './UserContext'

const App = () => {
  const test = () => {
    data.forEach(element => {
      console.log(element)
    })
  }

  return (
    <UserContext>
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Router>
    </UserContext>
  )
}

export default App
