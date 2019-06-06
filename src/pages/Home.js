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
        <SelectedWeapon>{this.state.selectedWeapon}</SelectedWeapon>
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
          {/* <SearchContainer>SEARCH</SearchContainer> */}
        </SelectContainer>
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

const SelectedWeapon = styled.h2`
  /* background: grey; */
`

const SelectContainer = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  display: flex;
  background: rgba(0, 0, 0, 0.75);
`

const Container = styled.div`
  flex: 1;

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

const SearchContainer = styled.div``

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
