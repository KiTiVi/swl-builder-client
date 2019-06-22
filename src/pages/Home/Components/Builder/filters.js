export const allFilters = [
  {
    name: 'Target type',
    key: 'targetType',
    options: [
      { name: 'All', value: null },
      {
        name: 'Single',
        value: 'single'
      },
      {
        name: 'PBAoE',
        value: 'pbaoe'
      },
      {
        name: 'Self',
        value: 'self'
      },
      {
        name: 'Channelled',
        value: 'channelled'
      },
      {
        name: 'Column dash',
        value: 'column dash'
      },
      {
        name: 'Column',
        value: 'column'
      },
      {
        name: 'Charge',
        value: 'charge'
      },
      {
        name: 'TAoE',
        value: 'taoe'
      },
      {
        name: 'Target/Self',
        value: 'target/self'
      },
      {
        name: 'Group',
        value: 'group'
      },
      {
        name: 'Chain',
        value: 'chain'
      },
      {
        name: 'GTaoE',
        value: 'gtaoe'
      },
      {
        name: 'Cone',
        value: 'cone'
      }
    ]
  },
  {
    name: 'Ability type',
    key: 'activeType',
    options: [
      { name: 'All', value: null },
      { name: 'Basic Ability', value: 'Basic Ability' },
      { name: 'Power Ability', value: 'Power Ability' },
      { name: 'Special Ability', value: 'Special Ability' },
      { name: 'Elite Ability', value: 'Elite Ability' }
    ]
  },
  {
    name: 'Heal',
    key: 'heal',
    options: [{ name: 'No', value: null }, { name: 'Yes', value: true }]
  }
]
