import React, { Component } from 'react'
import styled from 'styled-components'
import Ability from './components/Ability'
import { shotgun_abilities } from './data/shotgun/abilities'

class App extends Component {
  state = {
    firstAbility: null,
    secondAbility: null,
    thirdAbility: null,
    fourthAbility: null,
    fifthAbility: null,
    sixthAbility: null
  }

  setAbility = (slot, ability) => {
    this.setState({ [slot]: ability })
  }

  render() {
    const {
      firstAbility,
      secondAbility,
      thirdAbility,
      fourthAbility,
      fifthAbility,
      sixthAbility
    } = this.state

    return (
      <div>
        {shotgun_abilities.map(path => {
          return (
            <Path>
              <h2>{path.pathName}</h2>
              <Abilites>
                {path.abilities.map(ability => {
                  return <Ability {...ability} setAbility={this.setAbility} />
                })}
              </Abilites>
            </Path>
          )
        })}
        <div style={{ display: 'flex' }}>
          <Ability {...firstAbility} />
          <Ability {...secondAbility} />
          <Ability {...thirdAbility} />
          <Ability {...fourthAbility} />
          <Ability {...fifthAbility} />
          <Ability {...sixthAbility} />
        </div>
      </div>
    )
  }
}

export default App

const Path = styled.div``

const Abilites = styled.div`
  display: flex;
  justify-content: space-evenly;
`
