import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import WeaponMenu from '../components/WeaponMenu'
import Ability from '../components/Ability'
import HotbarAbility from '../components/HotbarAbility'
import { shotgun_abilities } from '../data/shotgun/abilities'

export default class Home extends Component {
  state = {
    selectedWeapon: 'Shotgun',
    selectedAbilities: []
  }

  selectWeapon = weaponName => {
    this.setState({ selectedWeapon: weaponName })
  }

  setAbility = ability => {
    if (
      !this.state.selectedAbilities.some(
        selectedAbility => selectedAbility.name === ability.name
      ) &&
      this.state.selectedAbilities.length < 6
    ) {
      this.setState({
        selectedAbilities: [...this.state.selectedAbilities, ability]
      })
    }
    console.log(this.state)
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result
    console.log(result)

    if (!destination) {
      const newList = this.state.selectedAbilities.filter(
        ability => ability.name !== draggableId
      )

      this.setState({ selectedAbilities: newList })
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const list = this.state.selectedAbilities
    console.log(list)

    const ability = this.state.selectedAbilities.find(
      ability => ability.name === draggableId
    )

    const newList = Array.from(list)
    console.log(newList)

    newList.splice(source.index, 1)
    newList.splice(destination.index, 0, ability)
    console.log(newList)

    this.setState({ selectedAbilities: newList })
  }

  render() {
    return (
      <>
        <Builder>
          <Menu>
            <button>ACTIVE ABILITIES</button>
            <button>PASSIVE ABILITIES</button>
          </Menu>
          <BuilderHeader>
            <SelectedWeapon>{this.state.selectedWeapon}</SelectedWeapon>
          </BuilderHeader>
          <SelectContainer>
            <WeaponMenu
              selectWeapon={this.selectWeapon}
              selectedWeapon={this.state.selectedWeapon}
            />
            <Container>
              {shotgun_abilities.map((path, i) => {
                return (
                  <div key={i} className="path">
                    <h3 className="pathname">{path.pathName}</h3>
                    <Abilites>
                      {path.abilities.map((ability, i) => {
                        return (
                          <Ability
                            key={i}
                            ability={ability}
                            setAbility={this.setAbility}
                          />
                        )
                      })}
                    </Abilites>
                  </div>
                )
              })}
            </Container>
            <SearchContainer>SEARCH</SearchContainer>
          </SelectContainer>
        </Builder>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={1} direction="horizontal">
            {provided => (
              <HotbarAbilityContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.state.selectedAbilities.map((ability, i) => (
                  <HotbarAbility
                    draggableIndex={i}
                    draggableId={ability.name}
                    {...ability}
                  />
                ))}
                {provided.placeholder}
              </HotbarAbilityContainer>
            )}
          </Droppable>
        </DragDropContext>
      </>
    )
  }
}

const Builder = styled.main`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
`

const Menu = styled.div`
  margin-left: 50px;
  padding-left: 14px;

  button {
    position: relative;
    z-index: 1;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 25px 10px 15px;
    color: #aaa;
    background: #444;
    border: 3px solid #000;
    border-radius: 0 60px 0 0;

    &:hover {
      color: #ddd;
      background: #777;
      border: 3px solid #000;
    }
  }

  button:last-child {
    margin-left: -20px;
  }
`

const BuilderHeader = styled.header`
  width: 70%;
  margin-left: 50px;
  padding: 14px 14px 10px;
  background: linear-gradient(to bottom, #444 20%, #222);
  border-radius: 20px 20px 0 0;
`

const SelectedWeapon = styled.h2`
  margin: 0;
  padding-bottom: 5px;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: yellow;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const SelectContainer = styled.div`
  display: flex;
`

const Container = styled.div`
  flex: 0 0 70%;

  .path:not(:last-child) {
    margin-bottom: 25px;
  }

  .pathname {
    margin: 0;
    padding: 14px;
    background: linear-gradient(
      to right,
      rgba(108, 108, 108, 0.75),
      rgba(44, 44, 44, 0.75)
    );
  }
`

const SearchContainer = styled.div`
  flex: 0 1 30%;
  border: 1px solid rgba(70, 70, 70, 0.75);
`

const HotbarAbilityContainer = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  background: rgba(0, 0, 0, 0.75);
`

const Abilites = styled.div`
  display: flex;
  padding: 10px 0 25px;
  background: linear-gradient(
    to right,
    rgba(70, 70, 70, 0.75),
    rgba(13, 13, 13, 0.75)
  );
`
