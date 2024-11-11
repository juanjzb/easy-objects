/**
 * The `pick` function takes an object and an array of keys to pick, and returns a new object with only
 * the specified keys and their corresponding values.
 * @param obj - The `obj` parameter in the `pick` function is an object from which you want to pick
 * specific keys.
 * @param keysToPick - The `keysToPick` parameter in the `pick` function is an array containing the
 * keys that you want to pick from the `obj` object. The function will return a new object with only
 * the key-value pairs that match the keys specified in the `keysToPick` array.
 * @returns The `pick` function is being returned. It takes an object `obj` and an array of keys
 * `keysToPick`, and returns a new object containing only the key-value pairs from the original object
 * that match the keys specified in the `keysToPick` array.
 */
export const pick = (obj, keysToPick) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (keysToPick.includes(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}
