import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import WeaponMenu from '../components/WeaponMenu'
import Ability from '../components/Ability'
import HotbarAbility from '../components/HotbarAbility'
// import HotbarAbilityContainer from '../components/HotbarAbilityContainer'
import { shotgun_abilities } from '../data/shotgun/abilities'

const Home = () => {
  const [menuOption, setMenuOption] = useState('actives')
  const [selectedWeapon, setSelectedWeapon] = useState('Shotgun')
  const [clickedAbility, setClickedAbility] = useState(null)
  const [selectedAbilities, setSelectedAbilities] = useState([])

  const selectWeapon = weaponName => {
    setSelectedWeapon(weaponName)
  }

  const setAbility = ability => {
    if (
      !selectedAbilities.some(
        selectedAbility => selectedAbility.name === ability.name
      ) &&
      selectedAbilities.length < 6
    ) {
      setClickedAbility(ability)
      setSelectedAbilities([...selectedAbilities, ability])
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    console.log(result)

    if (!destination) {
      const newList = selectedAbilities.filter(
        ability => ability.name !== draggableId
      )

      setSelectedAbilities([...newList])
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newList = reorder(
      selectedAbilities,
      result.source.index,
      result.destination.index
    )

    setSelectedAbilities([...newList])
  }

  return (
    <>
      <Builder>
        <Menu>
          <button
            onClick={() => setMenuOption('actives')}
            className={menuOption === 'actives' ? 'active' : ''}
          >
            ACTIVE ABILITIES
          </button>
          <button
            onClick={() => setMenuOption('passives')}
            className={menuOption === 'passives' ? 'active' : ''}
          >
            PASSIVE ABILITIES
          </button>
        </Menu>
        <BuilderHeader>
          <SelectedWeapon>{selectedWeapon}</SelectedWeapon>
        </BuilderHeader>
        <SelectContainer>
          <WeaponMenu
            selectWeapon={selectWeapon}
            selectedWeapon={selectedWeapon}
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
                          setAbility={setAbility}
                        />
                      )
                    })}
                  </Abilites>
                </div>
              )
            })}
          </Container>
          <SearchContainer>
            {clickedAbility && clickedAbility.name}
          </SearchContainer>
        </SelectContainer>
      </Builder>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {provided => (
            <HotbarAbilityContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {selectedAbilities.map((ability, i) => (
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
      {/* <HotbarAbilityContainer /> */}
    </>
  )
}

export default Home

const Builder = styled.main`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
  width: 1366px;
  margin: 30px auto;
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
    background: ${({ selected }) => (selected ? '#777' : '#444')};
    border: 3px solid #000;
    border-radius: 0 60px 0 0;

    &:hover,
    &.active {
      color: #ddd;
      background: #777;
    }

    &.active {
      z-index: 2;
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
  margin: 0 auto 40px;
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
