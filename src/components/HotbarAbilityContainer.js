import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import HotbarAbility from '../components/HotbarAbility'

export default class Home extends Component {
  state = {
    selectedAbilities: []
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

const HotbarAbilityContainer = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  background: rgba(0, 0, 0, 0.75);
`
