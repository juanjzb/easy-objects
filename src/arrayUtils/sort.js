/* This code snippet is defining a JavaScript function called `sortArray` using arrow function syntax.
The function takes an array as its first parameter and an optional `order` parameter with a default
value of `'asc'`. */
export const sort = (array, order = 'asc') => {
  return array.sort((a, b) => {
    if (order === 'asc') {
      return a - b
    } else if (order === 'desc') {
      return b - a
    }
  })
}
