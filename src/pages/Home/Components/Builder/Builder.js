import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import WeaponMenu from './WeaponMenu'
import Ability from './Ability'
import HotbarAbility from './HotbarAbility'
import SaveBuild from './SaveBuild'
import Search from './Search'
import { blade_actives } from './data/blade/actives'
import { blade_passives } from './data/blade/passives'
import { reorder } from '../../../../utils/reorder'
import { generateId } from '../../../../utils/generateId'
import { groupBy } from '../../../../utils/groupBy'
import { updateBuildURL } from '../../../../utils/updateBuildURL'

export default ({
  preselectedActives,
  preselectedPassives,
  queryString,
  buildID,
  history
}) => {
  const [menuOption, setMenuOption] = useState('actives')
  const [selectedWeapon, setSelectedWeapon] = useState('Blade')
  const [clickedAbility, setClickedAbility] = useState(null)
  const [selectedActives, setSelectedActives] = useState([
    { empty: true, name: 'active1' },
    { empty: true, name: 'active2' },
    { empty: true, name: 'active3' },
    { empty: true, name: 'active4' },
    { empty: true, name: 'active5' },
    { empty: true, name: 'active6' }
  ])
  const [selectedPassives, setSelectedPassives] = useState([
    { empty: true, name: 'passive1' },
    { empty: true, name: 'passive2' },
    { empty: true, name: 'passive3' },
    { empty: true, name: 'passive4' },
    { empty: true, name: 'passive5' }
  ])

  useEffect(() => {
    if (preselectedActives) {
      setSelectedActives(preselectedActives)
    }
  }, [preselectedActives])

  useEffect(() => {
    if (preselectedPassives) {
      setSelectedPassives(preselectedPassives)
    }
  }, [preselectedPassives])

  useEffect(() => {
    updateBuildURL({ selectedActives, selectedPassives, history })
  }, [selectedActives, selectedPassives])

  const selectWeapon = weaponName => {
    setSelectedWeapon(weaponName)
  }

  const setAbility = ability => {
    setClickedAbility(ability)

    if (
      selectedActives.some(
        selectedAbility => selectedAbility.name === ability.name
      ) ||
      selectedPassives.some(
        selectedAbility => selectedAbility.name === ability.name
      )
    ) {
      return
    }

    if (ability.type === 'active') {
      const freeSlots = selectedActives.filter(active => active.empty === true)

      if (freeSlots.length > 0) {
        let replaced = false
        selectedActives.forEach((active, i) => {
          if (!replaced && active.empty) {
            selectedActives[i] = ability
            replaced = true
            return
          }
        })

        setSelectedActives([...selectedActives])
      }
    } else if (ability.type === 'passive') {
      const freeSlots = selectedPassives.filter(active => active.empty === true)

      if (freeSlots.length > 0) {
        let replaced = false
        selectedPassives.forEach((active, i) => {
          if (!replaced && active.empty) {
            selectedPassives[i] = ability
            replaced = true
            return
          }
        })

        setSelectedPassives([...selectedPassives])
      }
    }
  }

  const onActiveDragEnd = result => {
    const { destination, source } = result

    if (!destination) {
      selectedActives.splice(source.index, 1, {
        empty: true,
        name: generateId(25)
      })

      setSelectedActives([...selectedActives])
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newSelectedActives = reorder(
      selectedActives,
      source.index,
      destination.index
    )
    setSelectedActives([...newSelectedActives])
  }

  const onPassiveDragEnd = result => {
    const { destination, source } = result

    if (!destination) {
      selectedPassives.splice(source.index, 1, {
        empty: true,
        name: generateId(25)
      })

      setSelectedPassives([...selectedPassives])
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newSelectedPassives = reorder(
      selectedPassives,
      source.index,
      destination.index
    )
    setSelectedPassives([...newSelectedPassives])
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
                    <Ability
                      key={i}
                      ability={passive}
                      setAbility={setAbility}
                    />
                  )
                })}
              </PassivesContainer>
            )}
          </SelectContainer>
        </Builder>

        <Search clickedAbility={clickedAbility} />
      </Content>

      <DragDropContext onDragEnd={onPassiveDragEnd}>
        <Droppable droppableId="selected-passives" direction="horizontal">
          {provided => (
            <HotbarAbilityContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {selectedPassives.map((ability, i) => (
                <HotbarAbility
                  key={i}
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

      <DragDropContext onDragEnd={onActiveDragEnd}>
        <Droppable droppableId="selected-actives" direction="horizontal">
          {provided => (
            <HotbarAbilityContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
              actives={true}
            >
              {selectedActives.map((ability, i) => (
                <HotbarAbility
                  key={i}
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
      <SaveBuild
        actives={selectedActives}
        passives={selectedPassives}
        queryString={queryString}
        buildID={buildID}
      />
    </>
  )
}

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
  margin: 0 auto 10px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.75);

  div:nth-child(5) {
    margin-left: ${({ actives }) => (actives ? '15px' : '0')};
  }
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
