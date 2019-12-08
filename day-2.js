///////////////////////////////////////////////////////////// Day 2 Part 1

const testArray = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 10, 1, 19, 1, 5, 19, 23, 1, 23, 5, 27, 1, 27, 13, 31, 1, 31, 5, 35, 1, 9, 35, 39, 2, 13, 39, 43, 1, 43, 10, 47, 1, 47, 13, 51, 2, 10, 51, 55, 1, 55, 5, 59, 1, 59, 5, 63, 1, 63, 13, 67, 1, 13, 67, 71, 1, 71, 10, 75, 1, 6, 75, 79, 1, 6, 79, 83, 2, 10, 83, 87, 1, 87, 5, 91, 1, 5, 91, 95, 2, 95, 10, 99, 1, 9, 99, 103, 1, 103, 13, 107, 2, 10, 107, 111, 2, 13, 111, 115, 1, 6, 115, 119, 1, 119, 10, 123, 2, 9, 123, 127, 2, 127, 9, 131, 1, 131, 10, 135, 1, 135, 2, 139, 1, 10, 139, 0, 99, 2, 0, 14, 0]

testArray[1] = 12
testArray[2] = 2

const processData = (offset, array) => {

  const ADD = 1
  const MULTIPLY = 2
  const STOP = 99

  const instruction = array[offset]

  if (instruction === ADD) {
    array[array[offset + 3]] = array[array[offset + 1]] + array[array[offset + 2]]
    return false
  }
  if (instruction === MULTIPLY) {
    array[array[offset + 3]] = array[array[offset + 1]] * array[array[offset + 2]]
    return false
  }
  if (instruction === STOP) {
    return true
  }
}


const processArray = (targetArray) => {
  let isEOF = false
  let offset = 0

  const array = [...targetArray]

  while (!isEOF) {
    isEOF = processData(offset, array)
    offset += 4
  }

  return array[0]
}

console.log("HELLO", processArray(testArray))

///////////////////////////////////////////////////////////// Day 2 Part 2

const bruteForceInstructions = (array) => {

  array[1] = 82 //Logged all the values 82 is closest
  array[2] = 0 //increases by 1
  let output = 0

  for (let x = 0; x < 100; x++) {
    array[2] = x
    output = processArray(testArray)

    console.log(output, x)
  }

  //Logged all the values, values for 1 is 82, 2 is 98
}

bruteForceInstructions(testArray)

console.log(82 * 100 + 98)
