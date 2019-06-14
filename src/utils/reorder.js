// prettier-ignore
export const reorder = (list, startIndex, endIndex) => {
  console.log(list)
  console.log(startIndex)
  console.log(endIndex)

  let temp = list[startIndex]
  list[startIndex] = list[endIndex]
  list[endIndex] = temp
  
  // [list[startIndex], list[endIndex]] = [list[endIndex], list[startIndex]]

  console.log(list)

  // const [removed] = result.splice(startIndex, 1)

  // const [target] = result.splice(endIndex, 1)

  // console.log(target)

  // result.splice(endIndex, 0, removed)
  // result.splice(startIndex, 0, target)

  // console.log(result)

  return list
}
