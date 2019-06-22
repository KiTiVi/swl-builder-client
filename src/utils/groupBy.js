export const groupBy = (objectArray, property) => {
  return objectArray.reduce(function(acc, obj) {
    const key = obj[property]

    const alreadyCreated = acc.map(obj => obj[property])

    if (!alreadyCreated.includes(key)) {
      acc.push({ path: key, actives: [] })
    }

    const path = acc.find(obj => obj.path === key)
    path.actives.push(obj)

    return acc
  }, [])
}
