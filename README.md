# Easy Objects

- Una librería de utilidades que permite trabajar con arreglos y objetos en Javascript.
- A simple utility library for working with arrays and objects in JavaScript.

- [Easy Objects](#easy-objects)
  - [Installation](#installation)
  - [API Reference](#api-reference)
    - [Array Functions](#array-functions)
      - [average(arr)](#averagearr)
      - [deleteAtIndex(arr, index)](#deleteatindexarr-index)
      - [difference(arr1, ...rest)](#differencearr1-rest)
      - [intersection(...arrays)](#intersectionarrays)
      - [isType(array, type)](#istypearray-type)
      - [isUnique(arr)](#isuniquearr)
      - [shuffle(array)](#shufflearray)
      - [sort(array, order = 'asc')](#sortarray-order--asc)
      - [sum(arr)](#sumarr)
      - [unique(arr)](#uniquearr)
    - [Object Functions](#object-functions)
      - [merge(...objects)](#mergeobjects)
      - [omit(obj, keysToOmit)](#omitobj-keystoomit)
      - [pick(obj, keysToPick)](#pickobj-keystopick)
  - [Information about the developer](#information-about-the-developer)
  - [Contributing](#contributing)
  - [Licencia](#licencia)

## Installation

```bash
npm install easy-objects
```

## API Reference

### Array Functions

#### average(arr:number[])

**Description:**
Calculates the average value of an array.

**Parameters:**

- **arr:** The input array of numbers.

**Returns:**
The average value of the elements in the input array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const averageValue = average(numbers);
console.log(averageValue); // Output: 3
```

#### deleteAtIndex(arr, index:number)

**Description:**
Removes an element from an array at a specific index.

**Parameters:**

- **arr:** The input array.
- **index:** The index of the element to remove.

**Returns:**
A new array with the element at the specified index removed. If the index is out of bounds, the original array is returned.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const newArray = deleteAtIndex(numbers, 2);
console.log(newArray); // Output: [1, 2, 4, 5]
```

#### difference(arr1, ...rest)

**Description:**
Returns the difference between two or more arrays.

**Parameters:**

- **arr1:** The primary array to compare.
- **...rest:** Additional arrays to compare with `arr1`.

**Returns:**
A new array containing elements present in `arr1` but not in any of the `rest` arrays.

**Example:**

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = [1, 2, 3];

const differenceArray = difference(array1, array2, array3);
console.log(differenceArray); // Output: [1, 2]
```

#### intersection(...arrays)

**Description:**
Returns the intersection of multiple arrays.

**Parameters:**

- **...arrays:** One or more arrays to find the intersection of.

**Returns:**
A new array containing elements present in all input arrays.

**Example:**

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = [1, 2, 3];

const intersectionArray = intersection(array1, array2, array3);
console.log(intersectionArray); // Output: [3]
```

#### isType(array, type:string)

**Description:**
Checks if all elements in an array are of a specific type.

**Parameters:**

- **array:** The input array.
- **type:** The expected data type of the array elements.

**Returns:**
`true` if all elements are of the specified type, `false` otherwise.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const strings = ['a', 'b', 'c'];
const mixedArray = [1, 'a', true];

console.log(isType(numbers, 'number')); // Output: true
console.log(isType(strings, 'string')); // Output: true
console.log(isType(mixedArray, 'number')); // Output: false
```

#### isUnique(arr)

**Description:**
Checks if all elements in an array are unique.

**Parameters:**

- **arr:** The input array.

**Returns:**
`true` if all elements are unique, `false` otherwise.

**Example:**

```javascript
const uniqueArray = [1, 2, 3, 4, 5];
const nonUniqueArray = [1, 2, 3, 2, 4];

console.log(isUnique(uniqueArray)); // Output: true
console.log(isUnique(nonUniqueArray)); // Output: false
```

#### shuffle(array)

**Description:**
Shuffles the elements of an array randomly.

**Parameters:**

- **array:** The input array to be shuffled.

**Returns:**
The shuffled array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffle(numbers);
console.log(shuffledNumbers); // Output: A randomly shuffled array
```

#### sort(array, order = 'asc')

**Description:**
Sorts an array in ascending or descending order.

**Parameters:**

- **array:** The input array to be sorted.
- **order:** The sorting order, either `'asc'` (ascending) or `'desc'` (descending). Defaults to `'asc'`.

**Returns:**
The sorted array.

**Example:**

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const ascendingNumbers = sort(numbers);
console.log(ascendingNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const descendingNumbers = sort(numbers, 'desc');
console.log(descendingNumbers); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
```

#### sum(arr:number[])

**Description:**
Calculates the sum of all elements in an array.

**Parameters:**

- **arr:** The input array of numbers.

**Returns:**
The sum of all elements in the array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = sum(numbers);
console.log(sumOfNumbers); // Output: 15
```

#### unique(arr)

**Description:**
Removes duplicate elements from an array.

**Parameters:**

- **arr:** The input array.

**Returns:**
A new array containing only unique elements from the input array.

**Example:**

```javascript
const numbers = [1, 2, 3, 2, 1, 4, 5, 4];
const uniqueNumbers = unique(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
```

### Object Functions

#### merge(...objects)

**Description:**
Merges multiple objects into a single object.

**Parameters:**

- **...objects:** One or more objects to merge.

**Returns:**
A new object containing the merged properties of all input objects.

**Example:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5 };

const mergedObject = merge(obj1, obj2, obj3);
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4, e: 5 }
```

#### omit(obj, keysToOmit:string[])

**Description:**
Creates a new object by omitting specified keys from an existing object.

**Parameters:**

- **obj:** The input object.
- **keysToOmit:** An array of keys to omit from the new object.

**Returns:**
A new object with the specified keys omitted.

**Example:**

```javascript
const person = { name: 'Alice', age: 30, city: 'New York', job: 'Engineer' };
const personWithoutJobAndCity = omit(person, ['job', 'city']);
console.log(personWithoutJobAndCity); // Output: { name: 'Alice', age: 30 }
```

#### pick(obj, keysToPick:string[])

**Description:**
Creates a new object by picking specified keys from an existing object.

**Parameters:**

- **obj:** The input object.
- **keysToPick:** An array of keys to pick from the object.

**Returns:**
A new object containing only the specified keys and their corresponding values.

**Example:**

```javascript
const person = { name: 'Alice', age: 30, city: 'New York', job: 'Engineer' };
const personWithNameAndAge = pick(person, ['name', 'age']);
console.log(personWithNameAndAge); // Output: { name: 'Alice', age: 30 }
```

## Developer

This package is maintained by [Juan José Zeledón Benavides](https://www.linkedin.com/in/juanjzb/)

If you want to report a bug, please feel free to get in touch with me at:

- [Github: juanjzb](https://github.com/juanjzb)
- [email: zb.juanjose@gmail.com](mailto:zb.juanjose@gmail.com)

## Contributing

Contributions are welcome!

- Visit the repository: `https://github.com/juanjzb/easy-objects.git`
- Fork the repository.
- Create a new branch.
- Make your changes.
- Commit your changes.
- Push to the branch.
- Submit a pull request.

## License

This project is under MIT License.
