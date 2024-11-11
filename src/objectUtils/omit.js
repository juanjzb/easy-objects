/**
 * The `omit` function removes specified keys from an object and returns a new object without those
 * keys.
 * @param obj - An object from which certain keys will be omitted.
 * @param keysToOmit - The `keysToOmit` parameter is an array containing the keys that you want to omit
 * from the object `obj` when creating a new object. The `omit` function will iterate over the keys of
 * the `obj` object and exclude the keys specified in the `keysToOmit`
 * @returns The `omit` function is being returned. It takes an object `obj` and an array of keys
 * `keysToOmit` as arguments, and returns a new object with the specified keys omitted.
 */
export const omit = (obj, keysToOmit) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keysToOmit.includes(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}
