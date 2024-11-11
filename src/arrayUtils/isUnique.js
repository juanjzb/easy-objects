/**
 * The `isUnique` function in JavaScript checks if all elements in an array are unique.
 * @returns The function `isUnique` is returning a boolean value. It checks if all elements in the
 * input array `arr` are unique (i.e., there are no duplicate elements) and returns `true` if all
 * elements are unique, and `false` otherwise.
 */
export const isUnique = arr => {
  const uniqueSet = new Set(arr)
  return uniqueSet.size === arr.length
}
