import React, { Component } from 'react'
import styled from 'styled-components'

import Ability from './components/Ability'
import HotbarAbility from './components/HotbarAbility'
import { shotgun_abilities } from './data/shotgun/abilities'
import 'react-tippy/dist/tippy.css'

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
    const selectedAbilities = Object.values(this.state).map(state => {
      if (state && state.name) {
        return state.name
      }
    })

    if (!selectedAbilities.includes(ability.name)) {
      this.setState({ [slot]: ability })
    }
    console.log(this.state)
  }

  removeAbility = slot => {
    this.setState({ [slot]: null })
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
        <SelectContainer>
          <WeaponMenu>
            <Weapon>BL</Weapon>
            <Weapon>HM</Weapon>
            <Weapon>FI</Weapon>
            <Weapon>BL</Weapon>
            <Weapon>CH</Weapon>
            <Weapon>EL</Weapon>
            <Weapon>SH</Weapon>
            <Weapon>PI</Weapon>
            <Weapon>AR</Weapon>
          </WeaponMenu>
          <div style={{ flex: '1' }}>
            {shotgun_abilities.map(path => {
              return (
                <Path>
                  <h2>{path.pathName}</h2>
                  <Abilites>
                    {path.abilities.map(ability => {
                      return (
                        <Ability {...ability} setAbility={this.setAbility} />
                      )
                    })}
                  </Abilites>
                </Path>
              )
            })}
          </div>
        </SelectContainer>

        <HotbarAbilityContainer>
          <HotbarAbility
            slot="firstAbility"
            {...firstAbility}
            removeAbility={this.removeAbility}
          />
          <HotbarAbility
            slot="secondAbility"
            {...secondAbility}
            removeAbility={this.removeAbility}
          />
          <HotbarAbility
            slot="thirdAbility"
            {...thirdAbility}
            removeAbility={this.removeAbility}
          />
          <HotbarAbility
            slot="fourthAbility"
            {...fourthAbility}
            removeAbility={this.removeAbility}
          />
          <HotbarAbility
            slot="fifthAbility"
            {...fifthAbility}
            removeAbility={this.removeAbility}
          />
          <HotbarAbility
            slot="sixthAbility"
            {...sixthAbility}
            removeAbility={this.removeAbility}
          />
        </HotbarAbilityContainer>
      </div>
    )
  }
}

export default App

const SelectContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
`

const WeaponMenu = styled.div``

const Weapon = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
`

const Path = styled.div``

const HotbarAbilityContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Abilites = styled.div`
  display: flex;
`
