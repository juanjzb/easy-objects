/**
 * The function `isType` checks if all elements in an array are of a specific type.
 * @param array - The `array` parameter in the `isType` function is an array of values that you want to
 * check the type of.
 * @param type - The `type` parameter in the `isType` function is the data type that you want to check
 * for in the array elements. It could be any valid JavaScript data type such as 'string', 'number',
 * 'boolean', 'object', 'function', etc.
 * @returns The `isType` function is returning a boolean value. It returns `true` if all elements in
 * the `array` parameter are of the specified `type`, and `false` otherwise.
 */
export const isType = (array, type) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== type) {
      return false
    }
  }
  return true
}
