/**
 * The `shuffle` function takes an array as input and shuffles its elements randomly.
 * @returns The `shuffle` function returns the input array after shuffling its elements randomly.
 */
export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
