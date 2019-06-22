import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TooltipAbility from '../../../../components/TooltipAbility'
import FilteredAbility from './FilteredAbility'
import { allAbilities } from './data/index'
import weapons from '../../../../images/weapons/index'
import { allFilters } from './filters'

export default ({ clickedAbility, showAbility }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [tagsExpanded, setTagsExpanded] = useState(false)
  const [filters, setFilters] = useState({
    search: '',
    targetType: null,
    activeType: null,
    heal: null,
    tags: []
  })
  const [filteredAbilities, setFilteredAbilities] = useState(allAbilities)

  useEffect(() => {
    let filteredAbilities = allAbilities

    for (const filter in filters) {
      if (filters[filter] && filter === 'search') {
        filteredAbilities = filteredAbilities.filter(
          ability =>
            ability.name
              .toLowerCase()
              .indexOf(filters[filter].toLowerCase()) !== -1 ||
            ability.description
              .toLowerCase()
              .indexOf(filters[filter].toLowerCase()) !== -1
        )
      } else if (filters[filter] && filter === 'targetType') {
        filteredAbilities = filteredAbilities.filter(
          ability => ability.targetType === filters[filter]
        )
      } else if (filters[filter] && filter === 'activeType') {
        filteredAbilities = filteredAbilities.filter(
          ability => ability.activeType === filters[filter]
        )
      } else if (filters[filter] && filter === 'heal') {
        filteredAbilities = filteredAbilities.filter(ability => ability.heal)
      } else if (filter === 'tags' && filters[filter].length > 0) {
        filteredAbilities = filteredAbilities.filter(ability =>
          ability.tags ? true : false
        )

        filteredAbilities = filteredAbilities.filter(ability =>
          ability.tags.some(tag => filters.tags.includes(tag))
        )
      }
    }

    setFilteredAbilities(filteredAbilities)
  }, [filters])

  const renderFilters = () => {
    const tags = [
      'cleanse',
      'stun',
      'dash',
      'damage',
      'speed',
      'dot',
      'hinder',
      'exposed',
      'knock',
      'purge',
      'debilitated',
      'movement',
      'heal',
      'hot',
      'barrier',
      'evade',
      'hate',
      'Crit. Power'
    ]

    return tags.map(tag => (
      <Filter key={tag}>
        <p className="tag-name">{tag}</p>
        <input
          type="checkbox"
          name="tags"
          value={tag}
          onChange={e => handleChange(e)}
        />
      </Filter>
    ))
  }

  const handleChange = e => {
    let updatedTags = filters.tags

    if (updatedTags.includes(e.target.value)) {
      updatedTags.forEach((tag, i) => {
        if (tag === e.target.value) {
          updatedTags.splice(i, 1)
        }
      })
    } else {
      updatedTags.push(e.target.value)
    }

    setFilters({ ...filters, tags: updatedTags })
  }

  const handleDropdown = (key, value) => {
    setFilters({
      ...filters,
      [key]: value === 'All' || value === 'No' ? null : value
    })
  }

  return (
    <Search>
      <label className="Search-input-label">
        <i className="fas fa-search Search-input-icon" />
        <input
          type="text"
          value={filters.search}
          placeholder="Search..."
          className="Search-input"
          onChange={e => setFilters({ ...filters, search: e.target.value })}
        />
      </label>
      <div
        className="Search-filters-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        <i className="fas fa-filter" />
        <p>FILTERS</p>
      </div>

      {(showFilters || filters.search.length > 0) && (
        <>
          <Filters tagsExpanded={tagsExpanded}>
            {allFilters.map(filter => (
              <div
                key={filter.name}
                style={{ display: 'inline-block', width: '50%' }}
              >
                <h3>{filter.name}</h3>
                <select
                  onChange={e => handleDropdown(filter.key, e.target.value)}
                >
                  {filter.options.map(option => (
                    <option key={option.name} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <h3>Tags</h3>
            <ul className="tags">{renderFilters()}</ul>
            <div
              onClick={() => setTagsExpanded(!tagsExpanded)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  border: 'solid #fff',
                  borderWidth: '0 3px 3px 0',
                  display: 'inline-block',
                  padding: '5px',
                  transform: tagsExpanded ? 'rotate(-135deg)' : 'rotate(45deg)'
                }}
              />
            </div>
          </Filters>
          <FilteredAbilities>
            {filteredAbilities.map((ability, i) => (
              <FilteredAbility key={i} ability={ability} />
              // <li
              //   key={i}
              //   className="list-item"
              //   onClick={() => showAbility(ability)}
              // >
              //   {ability.name}{' '}
              //   <img
              //     className="ability-image"
              //     src={weapons[ability.weapon]}
              //     alt={ability.weapon}
              //   />
              // </li>
            ))}
          </FilteredAbilities>
        </>
      )}
      {!showFilters && filters.search.length === 0 && clickedAbility && (
        <TooltipAbility ability={clickedAbility} search />
      )}
    </Search>
  )
}

const Search = styled.aside`
  flex: 1;
  margin-top: 43px;
  background: #000;
  position: relative;

  .Search-input-label {
    display: block;
    padding: 14px;
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
  }

  .Search-input-icon {
    position: absolute;
    top: 21px;
    right: 21px;
    font-size: 20px;
  }

  .Search-input {
    width: 100%;
    font-size: 24px;
    padding: 0 0 0 5px;
    color: #ddd;
    background: #444;
    box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1),
      0 2px hsla(0, 0%, 100%, 0.15);
    border: none;
  }

  .Search-filters-btn {
    display: inline-flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    background: #444;
    border: 1px solid #73777d;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

    p {
      margin: 0 0 0 5px;
    }
  }
`

const Filters = styled.form`
  position: absolute;
  top: 56px;
  left: 0;
  transform: translateX(-100%);
  padding: 10px;
  background: #000;
  z-index: 1000;

  ul.tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    transition: max-height 0.3s ease;
    max-height: ${({ tagsExpanded }) => (tagsExpanded ? '500px' : '100px')};
    height: 100%;
    overflow: hidden;
  }
`

const Filter = styled.label`
  flex: 0 1 50%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p.tag-name {
    text-transform: capitalize;
  }
`

const FilteredAbilities = styled.ul`
  max-height: 600px;
  overflow: auto;
  margin: 10px 0;
  padding: 0 10px;

  li.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    padding: 5px 10px;
    margin-bottom: 10px;
    position: relative;

    &:hover {
      background: #333;
    }

    img.ability-image {
      height: 40px;
    }
  }
`
