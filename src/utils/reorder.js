// prettier-ignore
export const reorder = (list, startIndex, endIndex) => {
  console.log(list)
  console.log(startIndex)
  console.log(endIndex)

  let temp = list[startIndex]
  list[startIndex] = list[endIndex]
  list[endIndex] = temp

  return list
}
