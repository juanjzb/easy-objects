/**
 * The `difference` function takes an array and one or more additional arrays as arguments, and returns
 * a new array containing elements that are present in the first array but not in any of the other
 * arrays.
 * @param arr1 - The `arr1` parameter is an array that contains the elements you want to compare with
 * the other arrays passed as arguments to the `difference` function.
 * @param rest - The `rest` parameter in the `difference` function is using the rest parameter syntax
 * in JavaScript. It allows you to represent an indefinite number of arguments as an array. In this
 * case, `rest` is an array containing multiple arrays passed as arguments to the `difference` function
 * after the first `
 * @returns The `difference` function is being returned. It takes an array `arr1` and an arbitrary
 * number of additional arrays `rest`, and returns a new array containing elements that are present in
 * `arr1` but not present in any of the other arrays in `rest`.
 */
export const difference = (arr1, ...rest) => {
  return arr1.filter(item => {
    return rest.every(arr => !arr.includes(item))
  })
}
