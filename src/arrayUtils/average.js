import { sum } from './sum.js'

/**
 * The function calculates the average value of an array by dividing the sum of its elements by the
 * array length.
 * @returns The `average` function is returning the average value of the elements in the input array
 * `arr`.
 */
export const average = arr => {
  const total = sum(arr)
  return total / arr.length
}
