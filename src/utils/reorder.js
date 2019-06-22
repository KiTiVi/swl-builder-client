// prettier-ignore
export const reorder = (list, startIndex, endIndex) => {
  let temp = list[startIndex]
  list[startIndex] = list[endIndex]
  list[endIndex] = temp

  return list
}
