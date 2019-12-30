///////////////////////////////////////////////////////////// Day 11 Part 1

const code = [3, 8, 1005, 8, 302, 1106, 0, 11, 0, 0, 0, 104, 1, 104, 0, 3, 8, 102, -1, 8, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 101, 0, 8, 29, 1006, 0, 78, 2, 1007, 9, 10, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 1008, 8, 1, 10, 4, 10, 1002, 8, 1, 58, 1006, 0, 7, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 1002, 8, 1, 83, 2, 1009, 4, 10, 3, 8, 102, -1, 8, 10, 1001, 10, 1, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 1002, 8, 1, 109, 1, 106, 11, 10, 1006, 0, 16, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 1008, 8, 1, 10, 4, 10, 102, 1, 8, 138, 2, 108, 0, 10, 1, 101, 14, 10, 1, 1109, 1, 10, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 102, 1, 8, 172, 2, 3, 10, 10, 1006, 0, 49, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 1, 10, 4, 10, 1001, 8, 0, 201, 1006, 0, 28, 2, 3, 15, 10, 2, 109, 12, 10, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 108, 0, 8, 10, 4, 10, 1001, 8, 0, 233, 3, 8, 102, -1, 8, 10, 1001, 10, 1, 10, 4, 10, 108, 1, 8, 10, 4, 10, 101, 0, 8, 255, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 108, 1, 8, 10, 4, 10, 102, 1, 8, 277, 2, 1107, 9, 10, 101, 1, 9, 9, 1007, 9, 946, 10, 1005, 10, 15, 99, 109, 624, 104, 0, 104, 1, 21101, 0, 932856042280, 1, 21101, 0, 319, 0, 1105, 1, 423, 21101, 0, 387512640296, 1, 21101, 330, 0, 0, 1106, 0, 423, 3, 10, 104, 0, 104, 1, 3, 10, 104, 0, 104, 0, 3, 10, 104, 0, 104, 1, 3, 10, 104, 0, 104, 1, 3, 10, 104, 0, 104, 0, 3, 10, 104, 0, 104, 1, 21101, 0, 46266346499, 1, 21102, 1, 377, 0, 1105, 1, 423, 21102, 1, 46211836967, 1, 21102, 1, 388, 0, 1105, 1, 423, 3, 10, 104, 0, 104, 0, 3, 10, 104, 0, 104, 0, 21102, 1, 825460941588, 1, 21102, 411, 1, 0, 1106, 0, 423, 21101, 709475738388, 0, 1, 21102, 1, 422, 0, 1105, 1, 423, 99, 109, 2, 21201, -1, 0, 1, 21101, 0, 40, 2, 21102, 454, 1, 3, 21101, 0, 444, 0, 1106, 0, 487, 109, -2, 2106, 0, 0, 0, 1, 0, 0, 1, 109, 2, 3, 10, 204, -1, 1001, 449, 450, 465, 4, 0, 1001, 449, 1, 449, 108, 4, 449, 10, 1006, 10, 481, 1102, 1, 0, 449, 109, -2, 2106, 0, 0, 0, 109, 4, 2102, 1, -1, 486, 1207, -3, 0, 10, 1006, 10, 504, 21101, 0, 0, -3, 22101, 0, -3, 1, 21201, -2, 0, 2, 21102, 1, 1, 3, 21102, 1, 523, 0, 1105, 1, 528, 109, -4, 2105, 1, 0, 109, 5, 1207, -3, 1, 10, 1006, 10, 551, 2207, -4, -2, 10, 1006, 10, 551, 22101, 0, -4, -4, 1105, 1, 619, 22102, 1, -4, 1, 21201, -3, -1, 2, 21202, -2, 2, 3, 21101, 570, 0, 0, 1106, 0, 528, 22102, 1, 1, -4, 21102, 1, 1, -1, 2207, -4, -2, 10, 1006, 10, 589, 21101, 0, 0, -1, 22202, -2, -1, -2, 2107, 0, -3, 10, 1006, 10, 611, 21201, -1, 0, 1, 21101, 611, 0, 0, 106, 0, 486, 21202, -2, -1, -2, 22201, -4, -2, -4, 109, -5, 2105, 1, 0]
let relativeBase = 0

const runCode = (offset, array, input, output) => {

    const instructionsModes = getMode(array[offset + 0])

    const DOInstructionsResult = (inst, param) => {
        const instructions = {
            0: () => array[offset + param],
            1: () => offset + param,
            2: () => relativeBase + array[offset + param],
        }
        if (instructions[inst] && typeof instructions[inst]()) {
            return instructions[inst]()
        }
        else {
            return array[offset + param]
        }
    }

    const DOinstructions = (inst, param) => {
        return array[DOInstructionsResult(inst, param)]
    }



    if (instructionsModes[0] === 1) {
        array[DOInstructionsResult(instructionsModes[3], 3)] = DOinstructions(instructionsModes[1], 1) + DOinstructions(instructionsModes[2], 2)
        return [true, '+', 4]
    }

    if (instructionsModes[0] === 2) {
        array[DOInstructionsResult(instructionsModes[3], 3)] = DOinstructions(instructionsModes[1], 1) * DOinstructions(instructionsModes[2], 2)
        return [true, '+', 4]
    }

    if (instructionsModes[0] === 3) {
        array[DOInstructionsResult(instructionsModes[1], 1)] = input()
        return [true, '+', 2]
    }

    if (instructionsModes[0] === 4) {

        output(DOinstructions(instructionsModes[1], 1))
        return [true, '+', 2]
    }

    if (instructionsModes[0] === 5) {
        if (DOinstructions(instructionsModes[1], 1) !== 0)
            return [true, (DOinstructions(instructionsModes[2], 2))]
        else {
            return [true, '+', 3]
        }
    }

    if (instructionsModes[0] === 6) {

        if (DOinstructions(instructionsModes[1], 1) === 0) {
            return [true, (DOinstructions(instructionsModes[2], 2))]
        }
        else {
            return [true, '+', 3]
        }
    }

    if (instructionsModes[0] === 7) {
        const isLessThan = (DOinstructions(instructionsModes[1], 1)) < (DOinstructions(instructionsModes[2], 2))

        array[DOInstructionsResult(instructionsModes[3], 3)] = isLessThan ? 1 : 0
        return [true, '+', 4]

    }

    if (instructionsModes[0] === 8) {
        const isEqual =
            (DOinstructions(instructionsModes[1], 1)) ===
            (DOinstructions(instructionsModes[2], 2))

        array[DOInstructionsResult(instructionsModes[3], 3)] = isEqual ? 1 : 0
        return [true, '+', 4]

    }

    if (instructionsModes[0] === 9) {
        relativeBase += (DOinstructions(instructionsModes[1], 1))
        return [true, '+', 2]
    }


    if (instructionsModes[0] === 99) {
        return [false, -1]
    }

    return [false, 0]
}

const getMode = (code) => {
    const splittedCode = code.toString().split('').reverse()
    const instruction = Number((splittedCode[1] ? splittedCode[1] : '') + splittedCode[0])

    return [instruction,
        Number(splittedCode[2]),
        Number(splittedCode[3]),
        Number(splittedCode[4])].filter(val => val === 0 || !!val)
}

const processData = (array, input, output, instructionPointerStart = 0) => {
    let instructionPointer = instructionPointerStart
    let shouldContinue = true

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

    return [instructionPointer, runnedCode]
}

const canvasSize = 55

const robotCanvas = new Array(60).fill(0).map(val => new Array(canvasSize).fill(0))

let robotPosition = [~~(canvasSize / 2), ~~(canvasSize / 2)]





const inputA = () => {

    return robotCanvas[robotPosition[0]][robotPosition[1]]
}

let robotDirection = 0

let paintMode = true

let paintedTiles = new Set()

const outputA = (output) => {

    moveRobot = {
        0: () => { robotPosition = [robotPosition[0] - 1, robotPosition[1]] },
        1: () => { robotPosition = [robotPosition[0], robotPosition[1] + 1] },
        2: () => { robotPosition = [robotPosition[0] + 1, robotPosition[1]] },
        3: () => { robotPosition = [robotPosition[0], robotPosition[1] - 1] },
    }

    if (paintMode) {
        robotCanvas[robotPosition[0]][robotPosition[1]] = output;
        paintMode = !paintMode
        paintedTiles.add(robotPosition.toString())
    }
    else {
        output === 1 ? robotDirection += 1 : robotDirection -= 1
        robotDirection = robotDirection > 3 ? 0 : robotDirection
        robotDirection = robotDirection < 0 ? 3 : robotDirection
        moveRobot[robotDirection]()
        paintMode = !paintMode
    }


}

const moreMemory = new Array(200).fill(0)

code.push(...moreMemory)

///////////////////////////////////////////////////////////// Day 11 Part 2

robotCanvas[robotPosition[0]][robotPosition[1]] = 1

processData(code, inputA, outputA, 0)

console.log(robotCanvas)



// 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 
// 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 
// 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 
// 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 
// 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 
// 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 

//FKEKCFRK