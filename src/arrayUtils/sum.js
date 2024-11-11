/**
 * The `sum` function takes an array of numbers and returns the sum of all elements in the array.
 * @returns The `sum` function is being exported, which takes an array as input and returns the sum of
 * all the elements in the array.
 */
export const sum = arr => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
}
