import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../UserContext'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import WeaponMenu from './WeaponMenu'
import Ability from './Ability'
import HotbarAbility from './HotbarAbility'
import SaveBuild from './SaveBuild'
import Search from './Search'
import { actives, passives } from './data/index'
import { reorder } from '../../../../utils/reorder'
import { generateId } from '../../../../utils/generateId'
import { groupBy } from '../../../../utils/groupBy'
import { updateBuildURL } from '../../../../utils/updateBuildURL'
import readBuild from '../../../../api/readBuild'

export default ({
  preselectedActives,
  preselectedPassives,
  queryString,
  buildID,
  history
}) => {
  const userContext = useContext(UserContext)
  const [menuOption, setMenuOption] = useState('actives')
  const [selectedWeapon, setSelectedWeapon] = useState('Blade')

  const [clickedAbility, setClickedAbility] = useState(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [weapons, setWeapons] = useState([])
  const [abilityIndexes, setAbilityIndexes] = useState([])
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
    if (buildID) {
      const fetchBuild = async () => {
        const build = await readBuild({ id: buildID })
        setName(build.name)
        setDescription(build.description)
      }
      fetchBuild()
    }
  }, [buildID])

  useEffect(() => {
    updateBuildURL({ selectedActives, selectedPassives, history })
    const abilityIndexes = {
      actives: [],
      passives: []
    }

    const allWeapons = []

    selectedActives.forEach(active => {
      if (active.weapon) {
        allWeapons.push(active.weapon)
        abilityIndexes.actives.push(active.index)
      }
    })

    selectedPassives.forEach(passive => {
      if (passive.weapon) {
        allWeapons.push(passive.weapon)
        abilityIndexes.passives.push(passive.index)
      }
    })

    const weapons = [...new Set(allWeapons)]
    setWeapons(weapons)
    setAbilityIndexes(abilityIndexes)
  }, [selectedActives, selectedPassives])

  const selectWeapon = weaponName => {
    setSelectedWeapon(weaponName)
  }

  const showAbility = ability => {
    if (clickedAbility && ability.index === clickedAbility.index) {
      setClickedAbility(null)
    } else {
      setClickedAbility(ability)
    }
  }

  const setAbility = ability => {
    showAbility(ability)

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
                {groupBy(actives[selectedWeapon], 'path').map((path, i) => {
                  return (
                    <div key={i} className="path">
                      <h3 className="pathname">{path.path}</h3>
                      <Abilites>
                        {path.actives.map((active, i) => {
                          return (
                            <Ability
                              key={i}
                              ability={active}
                              setAbility={setAbility}
                              selected={
                                abilityIndexes.actives &&
                                abilityIndexes.actives.includes(active.index)
                                  ? true
                                  : false
                              }
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
                {passives[selectedWeapon].map((passive, i) => {
                  return (
                    <Ability
                      key={i}
                      ability={passive}
                      setAbility={setAbility}
                      selected={
                        abilityIndexes.passives &&
                        abilityIndexes.passives.includes(passive.index)
                          ? true
                          : false
                      }
                    />
                  )
                })}
              </PassivesContainer>
            )}
          </SelectContainer>
        </Builder>

        <Search clickedAbility={clickedAbility} showAbility={showAbility} />
      </Content>

      <Build>
        {name && <h3>{name}</h3>}
        {description && <p>{description}</p>}
        <Flex>
          <SelectedAbilities>
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
          </SelectedAbilities>
          <Buttons>
            {userContext.username && (
              <SaveBuild
                weapons={weapons}
                actives={selectedActives}
                passives={selectedPassives}
                queryString={queryString}
                buildID={buildID}
                oldName={name}
                oldDescription={description}
              />
            )}
          </Buttons>
        </Flex>
      </Build>
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

const Build = styled.div`
  max-width: 724px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
`

const SelectedAbilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
`
