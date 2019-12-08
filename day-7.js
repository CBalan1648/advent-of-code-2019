///////////////////////////////////////////////////////////// Day 7 Part 1

const code = [3,8,1001,8,10,8,105,1,0,0,21,46,63,76,97,118,199,280,361,442,99999,3,9,102,4,9,9,101,2,9,9,1002,9,5,9,101,4,9,9,102,2,9,9,4,9,99,3,9,101,5,9,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,1002,9,5,9,1001,9,5,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99]

const runCode = (offset, array, input, output) => {

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

const processData = (array, input, output) => {
  let instructionPointer = 0
  let shouldContinue = true

  while (shouldContinue) {

    let returned = runCode(instructionPointer, array, input, output)

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


const processAmplifiersInput = (phaseSettings, usedCode) => {

  const code = [...usedCode]

  let nextInput = 0
  let firstCall = true

  const input = (x) => {
    if(firstCall){
      firstCall = false;
      return phaseSettings[x]
    }
    else{
      firstCall = true;
      return nextInput
    }
  }
  const output = (output) => nextInput = output

  for (let x = 0 ; x < 5; x++){
    processData(code, input.bind(this, x), output)
  }

  return nextInput
}

processAmplifiersInput([4,3,2,1,0], code)

// 

const generateArrays = (max) => {
  const arrays = []

  const initialArray = [0,0,0,0,0]

  let endOfArray = false
  
  while(!endOfArray) {
    arrays.push([...initialArray])
    initialArray[0] += 1
    initialArray.forEach((value, index, array) => {
      if(value > max){
        array[index] = 0;
        array[index+1] !== undefined ? array[index+1]+=1 : endOfArray = true
      }
    })
  }
  return arrays.filter(possibleArray => {
    const valuesSet = new Set([...possibleArray]);
    return valuesSet.size === 5
  })
}

const bruteForceArrays = generateArrays(4)


const bruteForceBestSetting = (testedArrays, code) => {

  let maxOutput = 0
  let bestSettings = []
  
  testedArrays.forEach((value) => {
     const output = processAmplifiersInput(value, code)
     if(output > maxOutput) {
       console.log(output)
       maxOutput = output;
       bestSettings = value;
     }
  })

  return [maxOutput, bestSettings]
}



console.log(bruteForceBestSetting(bruteForceArrays, code))


///////////////////////////////////////////////////////////// Day 7 Part 2

const code = [3,8,1001,8,10,8,105,1,0,0,21,46,63,76,97,118,199,280,361,442,99999,3,9,102,4,9,9,101,2,9,9,1002,9,5,9,101,4,9,9,102,2,9,9,4,9,99,3,9,101,5,9,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,1002,9,5,9,1001,9,5,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99]

const runCode = (offset, array, input, output) => {

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
    return [false, '+', 2]
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
    return [false,-1]
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

const processData = (array, input, output, instructionPointerStart=0) => {
  let instructionPointer = instructionPointerStart
  let shouldContinue = true

  let end = true
  let runnedCode = 0

  while (shouldContinue) {

    let returned = runCode(instructionPointer, array, input, output)

    shouldContinue = returned[0]
    runnedCode = returned[1]


    if (runnedCode === '+') {
      instructionPointer += returned[2]
    }
    else {
      instructionPointer = returned[1]
    }
  }

  return [instructionPointer,runnedCode]
}

//9961446


const processAmplifiersInput = (phaseSettings, usedCode) => {

  const codeA = [...usedCode]
  const codeB = [...usedCode]
  const codeC = [...usedCode]
  const codeD = [...usedCode]
  const codeE = [...usedCode]

  let nextInputA = 0
  let nextInputB = 0
  let nextInputC = 0
  let nextInputD = 0
  let nextInputE = 0

  const phaseSettingsA = phaseSettings[0]
  const phaseSettingsB = phaseSettings[1]
  const phaseSettingsC = phaseSettings[2]
  const phaseSettingsD = phaseSettings[3]
  const phaseSettingsE = phaseSettings[4]

  let firstCallA = true
  let firstCallB = true
  let firstCallC = true
  let firstCallD = true
  let firstCallE = true

  const inputA = () => {
    if (firstCallA) { firstCallA = false; return phaseSettingsA }
    else { return nextInputA }
  }
  const inputB = () => {
    if (firstCallB) { firstCallB = false; return phaseSettingsB }
    else { return nextInputB }
  }
  const inputC = () => {
    if (firstCallC) { firstCallC = false; return phaseSettingsC }
    else { return nextInputC }
  }
  const inputD = () => {
    if (firstCallD) { firstCallD = false; return phaseSettingsD }
    else { return nextInputD }
  }
  const inputE = () => {
    if (firstCallE) { firstCallE = false; return phaseSettingsE }
    else { return nextInputE }
  }

  const outputA = (output) => {
    nextInputB = output
  }
  const outputB = (output) => {
    nextInputC = output
  }
  const outputC = (output) => {
    nextInputD = output
  }
  const outputD = (output) => {
    nextInputE = output
  }
  const outputE = (output) => {
    nextInputA = output
  }


  let ptrA = [0]
  let ptrB = [0]
  let ptrC = [0]
  let ptrD = [0]
  let ptrE = [0]

  let shouldContinue = true

  while (shouldContinue) {
    ptrA = processData(codeA, inputA, outputA, ptrA[0])
    ptrB = processData(codeB, inputB, outputB, ptrB[0])
    ptrC = processData(codeC, inputC, outputC, ptrC[0])
    ptrD = processData(codeD, inputD, outputD, ptrD[0])
    ptrE = processData(codeE, inputE, outputE, ptrE[0])
    
    if(ptrE[1] === -1){
      shouldContinue = false
    }
  }

  return nextInputA
}


const generateArrays = (min, max) => {
  const arrays = []

  const initialArray = [min, min, min, min, min]

  let endOfArray = false

  while (!endOfArray) {
    arrays.push([...initialArray])
    initialArray[0] += 1
    initialArray.forEach((value, index, array) => {
      if (value > max) {
        array[index] = min;
        array[index + 1] !== undefined ? array[index + 1] += 1 : endOfArray = true
      }
    })
  }
  return arrays.filter(possibleArray => {
    const valuesSet = new Set([...possibleArray]);
    return valuesSet.size === 5
  })
}

const bruteForceArrays = generateArrays(5, 9)


const bruteForceBestSetting = (testedArrays, code) => {

  let maxOutput = 0
  let bestSettings = []

  testedArrays.forEach((value) => {
    const output = processAmplifiersInput(value, code)
    if (output > maxOutput) {
      console.log(output)
      maxOutput = output;
      bestSettings = value;
    }
  })

  return [maxOutput, bestSettings]
}



console.log(bruteForceBestSetting(bruteForceArrays, code))