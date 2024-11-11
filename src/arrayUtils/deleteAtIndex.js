/**
 * The `deleteAtIndex` function removes an element at a specific index from an array in JavaScript.
 * @param arr - An array from which an element will be deleted.
 * @param index - The `index` parameter in the `deleteAtIndex` function represents the position in the
 * array where you want to delete an element. It is the index of the element that you want to remove
 * from the array.
 * @returns The `deleteAtIndex` function returns a new array with the element at the specified index
 * removed. If the index is out of bounds (less than 0 or greater than or equal to the length of the
 * array), the original array is returned unchanged.
 */
export const deleteAtIndex = (arr, index) => {
  if (index < 0 || index >= arr.length) {
    return arr
  }

  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
