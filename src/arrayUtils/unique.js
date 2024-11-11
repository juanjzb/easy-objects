/**
 * The `unique` function takes an array as input and returns a new array with only the unique elements
 * from the original array.
 * @returns The `unique` function is being exported, which takes an array `arr` as input. It filters
 * the array to only include elements that are unique (i.e., elements that only appear once in the
 * array). The filtered array of unique elements is then returned.
 */
export const unique = arr => {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
