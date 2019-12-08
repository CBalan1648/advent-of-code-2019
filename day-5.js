///////////////////////////////////////////////////////////// Day 5 Part 1

const code = [3,225,1,225,6,6,1100,1,238,225,104,0,1002,92,42,224,1001,224,-3444,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1102,24,81,225,1101,89,36,224,101,-125,224,224,4,224,102,8,223,223,101,5,224,224,1,224,223,223,2,118,191,224,101,-880,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1102,68,94,225,1101,85,91,225,1102,91,82,225,1102,85,77,224,101,-6545,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1101,84,20,225,102,41,36,224,101,-3321,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1,188,88,224,101,-183,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1001,84,43,224,1001,224,-137,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1102,71,92,225,1101,44,50,225,1102,29,47,225,101,7,195,224,101,-36,224,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,107,677,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,1108,226,677,224,102,2,223,223,1006,224,344,101,1,223,223,1107,226,226,224,1002,223,2,223,1006,224,359,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,374,1001,223,1,223,1107,677,226,224,102,2,223,223,1005,224,389,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,404,1001,223,1,223,108,677,677,224,102,2,223,223,1005,224,419,1001,223,1,223,1107,226,677,224,102,2,223,223,1006,224,434,101,1,223,223,1008,226,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,464,1001,223,1,223,1007,677,226,224,1002,223,2,223,1006,224,479,1001,223,1,223,1108,226,226,224,102,2,223,223,1006,224,494,1001,223,1,223,8,226,226,224,1002,223,2,223,1005,224,509,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,524,101,1,223,223,1008,677,226,224,102,2,223,223,1005,224,539,101,1,223,223,107,226,677,224,1002,223,2,223,1006,224,554,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,569,101,1,223,223,108,226,226,224,1002,223,2,223,1005,224,584,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,599,1001,223,1,223,108,226,677,224,1002,223,2,223,1006,224,614,101,1,223,223,1007,677,677,224,1002,223,2,223,1006,224,629,101,1,223,223,7,677,677,224,102,2,223,223,1005,224,644,101,1,223,223,1007,226,226,224,1002,223,2,223,1006,224,659,1001,223,1,223,8,226,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226]

const runCode = (offset, array) => {

  const instructionsModes = getMode(array[offset + 0])

  const instructionCommand = instructionsModes[0]

  if (instructionsModes[0] === 1) {
    if (instructionsModes[3]) {
      array[offset + 3] =
        instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]] +
          instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]
    }
    else {
      array[array[offset + 3]] =
        (instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) +
        (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])
    }
    return [true,instructionCommand]
  }

  if (instructionsModes[0] === 2) {
    if (instructionsModes[3]) {
      array[offset + 3] =
        instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]] *
          instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]
    }
    else {
      array[array[offset + 3]] =
        (instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) *
        (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])
    }
    return [true,instructionCommand]
  }

  if (instructionsModes[0] === 3) {
    array[array[offset + 1]] = input()
    return [true,instructionCommand]
  }

  if (instructionsModes[0] === 4) {
    output(instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]])
    return [true,instructionCommand]
  }

  if (instructionsModes[0] === 99) {
    return [false,instructionCommand]
  }
}

const getMode = (code) => {
  const splittedCode = code.toString().split('').reverse()
  const instruction = Number((splittedCode[1] ? splittedCode[1] : '') + splittedCode[0])

  return [instruction, 
  !!Number(splittedCode[2]) ,
   !!Number(splittedCode[3]),
    !!Number(splittedCode[4])]
}



const processData = (array) => {
  let offset = 0
  let shouldContinue = true
  let nextOffset = 4

  while (shouldContinue) {
    
    let returned = runCode(offset, array)

    shouldContinue = returned[0]
    let runnedCode = returned[1]
    nextOffset = runnedCode === 3 || runnedCode === 4 ? 2 : 4

    offset += nextOffset
  }

}

const input = () => 1
const output = (output) => console.log("OUTPUT : ", output)

processData(code)


///////////////////////////////////////////////////////////// Day 5 Part 2

const code = [3,225,1,225,6,6,1100,1,238,225,104,0,1002,92,42,224,1001,224,-3444,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1102,24,81,225,1101,89,36,224,101,-125,224,224,4,224,102,8,223,223,101,5,224,224,1,224,223,223,2,118,191,224,101,-880,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1102,68,94,225,1101,85,91,225,1102,91,82,225,1102,85,77,224,101,-6545,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1101,84,20,225,102,41,36,224,101,-3321,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1,188,88,224,101,-183,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1001,84,43,224,1001,224,-137,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1102,71,92,225,1101,44,50,225,1102,29,47,225,101,7,195,224,101,-36,224,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,107,677,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,1108,226,677,224,102,2,223,223,1006,224,344,101,1,223,223,1107,226,226,224,1002,223,2,223,1006,224,359,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,374,1001,223,1,223,1107,677,226,224,102,2,223,223,1005,224,389,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,404,1001,223,1,223,108,677,677,224,102,2,223,223,1005,224,419,1001,223,1,223,1107,226,677,224,102,2,223,223,1006,224,434,101,1,223,223,1008,226,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,464,1001,223,1,223,1007,677,226,224,1002,223,2,223,1006,224,479,1001,223,1,223,1108,226,226,224,102,2,223,223,1006,224,494,1001,223,1,223,8,226,226,224,1002,223,2,223,1005,224,509,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,524,101,1,223,223,1008,677,226,224,102,2,223,223,1005,224,539,101,1,223,223,107,226,677,224,1002,223,2,223,1006,224,554,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,569,101,1,223,223,108,226,226,224,1002,223,2,223,1005,224,584,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,599,1001,223,1,223,108,226,677,224,1002,223,2,223,1006,224,614,101,1,223,223,1007,677,677,224,1002,223,2,223,1006,224,629,101,1,223,223,7,677,677,224,102,2,223,223,1005,224,644,101,1,223,223,1007,226,226,224,1002,223,2,223,1006,224,659,1001,223,1,223,8,226,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226]

const runCode = (offset, array) => {

  const instructionsModes = getMode(array[offset + 0])

  const instructionCommand = instructionsModes[0]

  if (instructionsModes[0] === 1) {
    if (instructionsModes[3]) {
      array[offset + 3] =
        instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]] +
          instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]
    }
    else {
      array[array[offset + 3]] =
        (instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) +
        (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])
    }
    return [true, '+', 4]
  }

  if (instructionsModes[0] === 2) {
    if (instructionsModes[3]) {
      array[offset + 3] =
        instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]] *
          instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]
    }
    else {
      array[array[offset + 3]] =
        (instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) *
        (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])
    }
    return [true, '+', 4]
  }

  if (instructionsModes[0] === 3) {
    array[array[offset + 1]] = input()
    return [true, '+', 2]
  }

  if (instructionsModes[0] === 4) {
    output(instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]])
    return [true, '+', 2]
  }

  if (instructionsModes[0] === 5) {
    if ((instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) !== 0)
      return [true, (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])]
    else {
      return [true, '+', 3]
    }

  }

  if (instructionsModes[0] === 6) {
    if ((instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) === 0)
      return [true, (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]])]
    else {
      return [true, '+', 3]
    }

  }

   if (instructionsModes[0] === 7) {
     const isLessThan = 
     ((instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) < 
     (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]))

    if (instructionsModes[3]) {
      array[offset + 3] = isLessThan ? 1 : 0
       
    }
    else {
      array[array[offset + 3]] = isLessThan ? 1 : 0
    }
    return [true, '+', 4]
     
   }

   if (instructionsModes[0] === 8) {
     const isEqual = 
     ((instructionsModes[1] ? array[offset + 1] : array[array[offset + 1]]) === 
     (instructionsModes[2] ? array[offset + 2] : array[array[offset + 2]]))

    if (instructionsModes[3]) {
      array[offset + 3] = isEqual ? 1 : 0
       
    }
    else {
      array[array[offset + 3]] = isEqual ? 1 : 0
    }
    return [true, '+', 4]
     
   }

  if (instructionsModes[0] === 99) {
    return [false]
  }
}

const getMode = (code) => {
  const splittedCode = code.toString().split('').reverse()
  const instruction = Number((splittedCode[1] ? splittedCode[1] : '') + splittedCode[0])

  return [instruction,
    !!Number(splittedCode[2]),
    !!Number(splittedCode[3]),
    !!Number(splittedCode[4])]
}



const processData = (array) => {
  let instructionPointer = 0
  let shouldContinue = true

  while (shouldContinue) {

    let returned = runCode(instructionPointer, array)

    shouldContinue = returned[0]
    let runnedCode = returned[1]

    if (runnedCode === '+') {
      instructionPointer += returned[2]
    }
    else {
      instructionPointer = returned[1]
    }


  }

}

//9961446

const input = () => 5
const output = (output) => console.log("OUTPUT : ", output)

processData(code)




