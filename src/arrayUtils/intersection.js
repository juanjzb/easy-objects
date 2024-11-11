/**
 * The `intersection` function takes multiple arrays as arguments and returns a new array containing
 * elements that are present in all of the input arrays.
 * @param arrays - The `intersection` function takes in multiple arrays as arguments and finds the
 * common elements that are present in all of the arrays.
 * @returns The `intersection` function is returning an array that contains the common elements present
 * in all the input arrays.
 */
export const intersection = (...arrays) => {
  if (arrays.length === 0) return []

  const set = new Set(arrays[0])

  return arrays.slice(1).reduce((intersection, arr) => {
    return arr.filter(item => set.has(item))
  }, [])
}
