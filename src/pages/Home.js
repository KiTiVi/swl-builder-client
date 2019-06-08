import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import WeaponMenu from '../components/WeaponMenu'
import Ability from '../components/Ability'
import HotbarAbility from '../components/HotbarAbility'
import Search from '../components/Search'
import Passive from '../components/Passive'
import { blade_actives } from '../data/blade/actives'
import { blade_passives } from '../data/blade/passives'

const Home = () => {
  const [menuOption, setMenuOption] = useState('actives')
  const [selectedWeapon, setSelectedWeapon] = useState('Blade')
  const [clickedAbility, setClickedAbility] = useState(null)
  const [selectedActives, setSelectedActives] = useState([
    { placeholder: true, name: 'ph1' },
    { placeholder: true, name: 'ph2' },
    { placeholder: true, name: 'ph3' },
    { placeholder: true, name: 'ph4' },
    { placeholder: true, name: 'ph5' },
    { placeholder: true, name: 'ph6' }
  ])

  const selectWeapon = weaponName => {
    setSelectedWeapon(weaponName)
  }

  useEffect(() => {
    const actives = groupBy(blade_actives, 'path')
    console.log(blade_passives)
  }, [])

  const groupBy = (objectArray, property) => {
    return objectArray.reduce(function(acc, obj) {
      var key = obj[property]

      const alreadyCreated = acc.map(obj => obj[property])

      if (!alreadyCreated.includes(key)) {
        acc.push({ path: key, actives: [] })
      }

      const path = acc.find(obj => obj.path === key)
      path.actives.push(obj)

      return acc
    }, [])
  }

  const setAbility = ability => {
    setClickedAbility(ability)

    console.log(selectedActives)
    if (
      selectedActives.some(
        selectedAbility => selectedAbility.name === ability.name
      )
    ) {
      return
    }

    const placeholders = selectedActives.filter(
      active => active.placeholder === true
    )

    if (placeholders.length > 0) {
      // const replaceOnePlaceholder = selectedActives.map(active => {
      //   if (active.placeholder) {
      //     return ability
      //   }
      //   return active
      // })
      let replaced = false
      selectedActives.forEach((active, i) => {
        if (!replaced && active.placeholder) {
          selectedActives[i] = ability
          replaced = true
          return
        }
      })

      setSelectedActives(selectedActives)
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
      const newList = selectedActives.filter(
        ability => ability.name !== draggableId
      )

      setSelectedActives([...newList])
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newList = reorder(
      selectedActives,
      result.source.index,
      result.destination.index
    )

    setSelectedActives([...newList])
  }

  return (
    <>
      <Content>
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

          <SelectedWeapon>{selectedWeapon}</SelectedWeapon>

          <SelectContainer>
            <WeaponMenu
              selectWeapon={selectWeapon}
              selectedWeapon={selectedWeapon}
            />
            {menuOption === 'actives' && (
              <Container>
                {groupBy(blade_actives, 'path').map((path, i) => {
                  return (
                    <div key={i} className="path">
                      <h3 className="pathname">{path.path}</h3>
                      <Abilites>
                        {path.actives.map((ability, i) => {
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
            )}
            {menuOption === 'passives' && (
              <PassivesContainer>
                {blade_passives.map((passive, i) => {
                  return (
                    <Passive
                      key={i}
                      passive={passive}
                      // setAbility={setAbility}
                    />
                  )
                })}
              </PassivesContainer>
            )}
          </SelectContainer>
        </Builder>

        <Search clickedAbility={clickedAbility} />
      </Content>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {provided => (
            <HotbarAbilityContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {selectedActives.map((ability, i) => (
                <HotbarAbility
                  draggableIndex={i}
                  draggableId={ability.name}
                  ability={ability}
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

export default Home

const Content = styled.main`
  display: flex;
  max-width: 1366px;
  margin: 30px auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
`

const Builder = styled.div`
  flex: 0 1 70%;
  margin-right: 7px;
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

const SelectedWeapon = styled.h2`
  margin: 0 0 0 50px;
  padding: 14px 0 14px 14px;
  background: linear-gradient(to bottom, #444 20%, #222);
  border-radius: 20px 20px 0 0;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    background: yellow;
    position: absolute;
    bottom: 5px;
    left: 14px;
    right: 14px;
  }
`

const SelectContainer = styled.div`
  display: flex;
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

const PassivesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`
