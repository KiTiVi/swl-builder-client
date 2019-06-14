export const updateBuildURL = ({
  selectedActives,
  selectedPassives,
  history
}) => {
  let activesQueryParams = ''
  selectedActives.forEach(active => {
    if (active.empty) {
      activesQueryParams += '___'
    } else {
      activesQueryParams += active.index
    }
  })

  let passivesQueryParams = ''
  selectedPassives.forEach(passive => {
    if (passive.empty) {
      passivesQueryParams += '___'
    } else {
      passivesQueryParams += passive.index
    }
  })

  return history.push({
    pathname: '/',
    search: `?a=${activesQueryParams}&p=${passivesQueryParams}`
  })
}
