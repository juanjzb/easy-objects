// ARRAYS

import { average } from './src/arrayUtils/average.js'
import { deleteAtIndex } from './src/arrayUtils/deleteAtIndex.js'
import { difference } from './src/arrayUtils/difference.js'
import { intersection } from './src/arrayUtils/intersection.js'
import { isType } from './src/arrayUtils/isType.js'
import { isUnique } from './src/arrayUtils/isUnique.js'
import { shuffle } from './src/arrayUtils/shuffle.js'
import { sort } from './src/arrayUtils/sort.js'
import { sum } from './src/arrayUtils/sum.js'
import { unique } from './src/arrayUtils/unique.js'

// OBJECTS

import { merge } from './src/objectUtils/merge.js'
import { omit } from './src/objectUtils/omit.js'
import { pick } from './src/objectUtils/pick.js'

const arr = {
  average,
  deleteAtIndex,
  difference,
  intersection,
  isType,
  isUnique,
  shuffle,
  sort,
  sum,
  unique
}

const obj = {
  merge,
  omit,
  pick
}

export { arr, obj }
