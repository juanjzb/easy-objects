/**
 * The `merge` function takes multiple objects as arguments and merges them into a single object using
 * `Object.assign()`.
 * @param objects - The `merge` function takes in an arbitrary number of objects as arguments and
 * merges them into a single object.
 * @returns The `merge` function is being returned, which takes in any number of objects as arguments
 * and merges them into a single object using `Object.assign()`.
 */
export const merge = (...objects) => {
  return Object.assign({}, ...objects)
}
