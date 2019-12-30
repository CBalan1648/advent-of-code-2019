///////////////////////////////////////////////////////////// Day 17 Part 1

const code = [1,330,331,332,109,3752,1101,1182,0,16,1102,1451,1,24,102,1,0,570,1006,570,36,101,0,571,0,1001,570,-1,570,1001,24,1,24,1106,0,18,1008,571,0,571,1001,16,1,16,1008,16,1451,570,1006,570,14,21101,0,58,0,1105,1,786,1006,332,62,99,21102,333,1,1,21102,73,1,0,1105,1,579,1102,1,0,572,1101,0,0,573,3,574,101,1,573,573,1007,574,65,570,1005,570,151,107,67,574,570,1005,570,151,1001,574,-64,574,1002,574,-1,574,1001,572,1,572,1007,572,11,570,1006,570,165,101,1182,572,127,1002,574,1,0,3,574,101,1,573,573,1008,574,10,570,1005,570,189,1008,574,44,570,1006,570,158,1106,0,81,21102,340,1,1,1106,0,177,21102,1,477,1,1105,1,177,21102,514,1,1,21101,0,176,0,1106,0,579,99,21101,184,0,0,1105,1,579,4,574,104,10,99,1007,573,22,570,1006,570,165,1002,572,1,1182,21101,0,375,1,21101,0,211,0,1106,0,579,21101,1182,11,1,21101,0,222,0,1105,1,979,21101,0,388,1,21101,233,0,0,1106,0,579,21101,1182,22,1,21102,1,244,0,1106,0,979,21102,401,1,1,21101,0,255,0,1106,0,579,21101,1182,33,1,21102,1,266,0,1105,1,979,21101,414,0,1,21102,1,277,0,1106,0,579,3,575,1008,575,89,570,1008,575,121,575,1,575,570,575,3,574,1008,574,10,570,1006,570,291,104,10,21102,1,1182,1,21102,1,313,0,1105,1,622,1005,575,327,1102,1,1,575,21101,327,0,0,1105,1,786,4,438,99,0,1,1,6,77,97,105,110,58,10,33,10,69,120,112,101,99,116,101,100,32,102,117,110,99,116,105,111,110,32,110,97,109,101,32,98,117,116,32,103,111,116,58,32,0,12,70,117,110,99,116,105,111,110,32,65,58,10,12,70,117,110,99,116,105,111,110,32,66,58,10,12,70,117,110,99,116,105,111,110,32,67,58,10,23,67,111,110,116,105,110,117,111,117,115,32,118,105,100,101,111,32,102,101,101,100,63,10,0,37,10,69,120,112,101,99,116,101,100,32,82,44,32,76,44,32,111,114,32,100,105,115,116,97,110,99,101,32,98,117,116,32,103,111,116,58,32,36,10,69,120,112,101,99,116,101,100,32,99,111,109,109,97,32,111,114,32,110,101,119,108,105,110,101,32,98,117,116,32,103,111,116,58,32,43,10,68,101,102,105,110,105,116,105,111,110,115,32,109,97,121,32,98,101,32,97,116,32,109,111,115,116,32,50,48,32,99,104,97,114,97,99,116,101,114,115,33,10,94,62,118,60,0,1,0,-1,-1,0,1,0,0,0,0,0,0,1,58,18,0,109,4,2102,1,-3,587,20101,0,0,-1,22101,1,-3,-3,21102,1,0,-2,2208,-2,-1,570,1005,570,617,2201,-3,-2,609,4,0,21201,-2,1,-2,1105,1,597,109,-4,2105,1,0,109,5,2102,1,-4,630,20101,0,0,-2,22101,1,-4,-4,21101,0,0,-3,2208,-3,-2,570,1005,570,781,2201,-4,-3,653,20101,0,0,-1,1208,-1,-4,570,1005,570,709,1208,-1,-5,570,1005,570,734,1207,-1,0,570,1005,570,759,1206,-1,774,1001,578,562,684,1,0,576,576,1001,578,566,692,1,0,577,577,21102,1,702,0,1106,0,786,21201,-1,-1,-1,1106,0,676,1001,578,1,578,1008,578,4,570,1006,570,724,1001,578,-4,578,21102,731,1,0,1105,1,786,1105,1,774,1001,578,-1,578,1008,578,-1,570,1006,570,749,1001,578,4,578,21101,0,756,0,1106,0,786,1106,0,774,21202,-1,-11,1,22101,1182,1,1,21101,0,774,0,1106,0,622,21201,-3,1,-3,1106,0,640,109,-5,2105,1,0,109,7,1005,575,802,20101,0,576,-6,21001,577,0,-5,1106,0,814,21102,0,1,-1,21102,0,1,-5,21101,0,0,-6,20208,-6,576,-2,208,-5,577,570,22002,570,-2,-2,21202,-5,59,-3,22201,-6,-3,-3,22101,1451,-3,-3,2102,1,-3,843,1005,0,863,21202,-2,42,-4,22101,46,-4,-4,1206,-2,924,21102,1,1,-1,1105,1,924,1205,-2,873,21101,0,35,-4,1105,1,924,1202,-3,1,878,1008,0,1,570,1006,570,916,1001,374,1,374,2101,0,-3,895,1101,0,2,0,2101,0,-3,902,1001,438,0,438,2202,-6,-5,570,1,570,374,570,1,570,438,438,1001,578,558,922,20102,1,0,-4,1006,575,959,204,-4,22101,1,-6,-6,1208,-6,59,570,1006,570,814,104,10,22101,1,-5,-5,1208,-5,39,570,1006,570,810,104,10,1206,-1,974,99,1206,-1,974,1102,1,1,575,21102,973,1,0,1106,0,786,99,109,-7,2105,1,0,109,6,21101,0,0,-4,21102,0,1,-3,203,-2,22101,1,-3,-3,21208,-2,82,-1,1205,-1,1030,21208,-2,76,-1,1205,-1,1037,21207,-2,48,-1,1205,-1,1124,22107,57,-2,-1,1205,-1,1124,21201,-2,-48,-2,1106,0,1041,21101,0,-4,-2,1106,0,1041,21101,-5,0,-2,21201,-4,1,-4,21207,-4,11,-1,1206,-1,1138,2201,-5,-4,1059,2102,1,-2,0,203,-2,22101,1,-3,-3,21207,-2,48,-1,1205,-1,1107,22107,57,-2,-1,1205,-1,1107,21201,-2,-48,-2,2201,-5,-4,1090,20102,10,0,-1,22201,-2,-1,-2,2201,-5,-4,1103,1202,-2,1,0,1106,0,1060,21208,-2,10,-1,1205,-1,1162,21208,-2,44,-1,1206,-1,1131,1105,1,989,21102,439,1,1,1105,1,1150,21101,477,0,1,1105,1,1150,21101,0,514,1,21102,1,1149,0,1106,0,579,99,21102,1,1157,0,1106,0,579,204,-2,104,10,99,21207,-3,22,-1,1206,-1,1138,2102,1,-5,1176,2101,0,-4,0,109,-6,2105,1,0,24,13,46,1,11,1,46,1,11,1,46,1,11,1,46,1,11,13,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,30,5,23,1,30,1,27,1,30,1,25,5,1,1,26,1,25,1,1,1,1,1,1,1,14,5,5,9,17,5,1,1,1,1,14,1,3,1,5,1,1,1,5,1,17,1,1,1,3,1,1,1,14,1,3,1,5,1,1,1,5,1,17,1,1,13,8,1,3,1,5,1,1,1,5,1,17,1,5,1,1,1,6,7,1,1,3,13,1,1,17,1,5,1,1,1,6,1,5,1,1,1,9,1,1,1,3,1,1,1,17,1,5,1,1,1,6,1,5,1,1,1,9,1,1,1,1,5,17,9,6,1,5,1,1,1,9,1,1,1,1,1,1,1,25,1,8,1,5,13,1,5,25,1,8,1,7,1,13,1,27,1,8,1,7,1,13,1,23,5,8,1,7,1,13,1,23,1,12,9,13,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,1,23,1,34,13,11,1,46,1,11,1,46,1,11,1,46,1,11,1,46,13,12]
let relativeBase = 0;

const runCode = (offset, array, input, output) => {
    const instructionsModes = getMode(array[offset + 0]);

    const DOInstructionsResult = (inst, param) => {
        const instructions = {
            0: () => array[offset + param],
            1: () => offset + param,
            2: () => relativeBase + array[offset + param]
        };
        if (instructions[inst] && typeof instructions[inst]()) {
            return instructions[inst]();
        } else {
            return array[offset + param];
        }
    };

    const DOinstructions = (inst, param) => {
        return array[DOInstructionsResult(inst, param)];
    };

    if (instructionsModes[0] === 1) {
        array[DOInstructionsResult(instructionsModes[3], 3)] =
            DOinstructions(instructionsModes[1], 1) +
            DOinstructions(instructionsModes[2], 2);
        return [true, "+", 4];
    }

    if (instructionsModes[0] === 2) {
        array[DOInstructionsResult(instructionsModes[3], 3)] =
            DOinstructions(instructionsModes[1], 1) *
            DOinstructions(instructionsModes[2], 2);
        return [true, "+", 4];
    }

    if (instructionsModes[0] === 3) {

        const inputJoy = input();

        if (inputJoy == "q") {

            return [false, "+", 0];
        }
        array[DOInstructionsResult(instructionsModes[1], 1)] = Number(inputJoy);
        return [true, "+", 2];
    }

    if (instructionsModes[0] === 4) {
        output(DOinstructions(instructionsModes[1], 1));
        return [true, "+", 2];
    }

    if (instructionsModes[0] === 5) {
        if (DOinstructions(instructionsModes[1], 1) !== 0)
            return [true, DOinstructions(instructionsModes[2], 2)];
        else {
            return [true, "+", 3];
        }
    }

    if (instructionsModes[0] === 6) {
        if (DOinstructions(instructionsModes[1], 1) === 0) {
            return [true, DOinstructions(instructionsModes[2], 2)];
        } else {
            return [true, "+", 3];
        }
    }

    if (instructionsModes[0] === 7) {
        const isLessThan =
            DOinstructions(instructionsModes[1], 1) <
            DOinstructions(instructionsModes[2], 2);

        array[DOInstructionsResult(instructionsModes[3], 3)] = isLessThan ? 1 : 0;
        return [true, "+", 4];
    }

    if (instructionsModes[0] === 8) {
        const isEqual =
            DOinstructions(instructionsModes[1], 1) ===
            DOinstructions(instructionsModes[2], 2);

        array[DOInstructionsResult(instructionsModes[3], 3)] = isEqual ? 1 : 0;
        return [true, "+", 4];
    }

    if (instructionsModes[0] === 9) {
        relativeBase += DOinstructions(instructionsModes[1], 1);
        return [true, "+", 2];
    }

    if (instructionsModes[0] === 99) {
        return [false, -1];
    }
    console.log("BUG");
    return [false, 0];
};

const getMode = code => {
    const splittedCode = code
        .toString()
        .split("")
        .reverse();
    const instruction = Number(
        (splittedCode[1] ? splittedCode[1] : "") + splittedCode[0]
    );

    return [
        instruction,
        Number(splittedCode[2]),
        Number(splittedCode[3]),
        Number(splittedCode[4])
    ].filter(val => val === 0 || !!val);
};

const processData = (array, input, output, instructionPointerStart = 0) => {
    let instructionPointer = instructionPointerStart;
    let shouldContinue = true;
    let runnedCode = 0;

    while (shouldContinue) {
        let returned = runCode(instructionPointer, array, input, output);

        shouldContinue = returned[0];
        runnedCode = returned[1];

        if (runnedCode === "+") {
            instructionPointer += returned[2];
        } else {
            instructionPointer = returned[1];
        }
    }

    return [instructionPointer, runnedCode];
};


let robotOutputString = ''

const outputA = output => {

    robotOutputString += String.fromCharCode(output)
};

const moreMemory = new Array(10000).fill(0);

code.push(...moreMemory);

var readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const getAutoinput = () => {

    return 1
}

const runGame = async () => {
    let input = "q";

    pointer = 0;

    const customInput = () => {
        let returned = input;
        input = 'q';
        botDirection = Number(returned)
        return returned;
    };

    rl.on("line", line => {
        input = line.trim();
        if (!input) {
            input = getAutoinput()
        }

        pointer = processData(code, customInput, outputA, pointer)[0];

        if (line === "z") {
            rl.close();
        }
    });
};

// runGame();

const isIntersection = (tilesLines, xIndex, yIndex) => {

    return tilesLines[yIndex - 1] && tilesLines[yIndex - 1][xIndex] === '#'

        && tilesLines[yIndex + 1] && tilesLines[yIndex + 1][xIndex] === '#'

        && tilesLines[yIndex] && tilesLines[yIndex][xIndex - 1] === '#'

        && tilesLines[yIndex][xIndex + 1] === '#'

}

const getHeight = (tilesLines, xIndex, yIndex) => {
    let above = true
    let below = true

    let height = 1

    while (above || below) {
        if (tilesLines[yIndex - 1] && tilesLines[yIndex - 1][xIndex] === '#') {
            height += 1
        }
        else {
            above = false
        }

        if (tilesLines[yIndex + 1] && tilesLines[yIndex + 1][xIndex] === '#') {
            height += 1
        }
        else {
            below = false
        }
    }

    return height
}

const getWidth = (tilesLines, xIndex, yIndex) => {
    let left = true
    let right = true



    let width = 1

    while (left || right) {
        if (tilesLines[yIndex] && tilesLines[yIndex][xIndex - 1] === '#') {
            width += 1
        }
        else {
            left = false
        }

        if (tilesLines[yIndex] && tilesLines[yIndex][xIndex + 1] === '#') {
            width += 1
        }
        else {
            right = false
        }
    }

    return width
}


const intersections = []

// processData(code, getAutoinput, outputA, 0)

const tilesLines = robotOutputString.split("\n").filter(val => val).map(string => string.split(''))

tilesLines.forEach((tiles, yIndex) => {
    tiles.forEach((tile, xIndex) => {
        if (isIntersection(tilesLines, xIndex, yIndex)) {
            intersections.push({
                xPos: xIndex,
                yPos: yIndex,
                // width: getWidth(tilesLines, xIndex, yIndex),
                // height: getHeight(tilesLines, xIndex, yIndex),
            })
        }
    })
}
)

const sumOfAlignmentParameters = intersections.map(intersectionObject => {
    return intersectionObject.xPos * intersectionObject.yPos
}).reduce((acc, val) => acc += val, 0)

// console.log(sumOfAlignmentParameters)

///////////////////////////////////////////////////////////// Day 17 Part 2

code[0] = 2


console.log(robotOutputString)

const getStartingPosition = () => {
    const yPos = tilesLines.findIndex(val => val.includes("^"))
    const xPos = tilesLines[yPos].findIndex(val => val === "^")

    return [yPos, xPos]
}

const traceRoute = () => {
    let [yPos, xPos] = getStartingPosition()
    let currentDirection = "LEFT"

    let moveString = 'L,'

    let moveCounter = 0

    let canGo = true

    const move = {
        LEFT: () => xPos -= 1,
        RIGHT: () => xPos += 1,
        UP: () => yPos -= 1,
        DOWN: () => yPos += 1,
    }

    const occupied = {
        UP: () => tilesLines[yPos - 1] && tilesLines[yPos - 1][xPos] === '#',
        DOWN: () => tilesLines[yPos + 1] && tilesLines[yPos + 1][xPos] === '#',
        LEFT: () => tilesLines[yPos] && tilesLines[yPos][xPos - 1] === '#',
        RIGHT: () => tilesLines[yPos] && tilesLines[yPos][xPos + 1] === '#',
    }

    const left = {
        UP: 'LEFT',
        DOWN: 'RIGHT',
        RIGHT: 'UP',
        LEFT: 'DOWN',
    }

    const right = {
        UP: 'RIGHT',
        DOWN: 'LEFT',
        RIGHT: 'DOWN',
        LEFT: 'UP',
    }

    while (canGo) {
        if (occupied[currentDirection]()) {
            move[currentDirection]()
            moveCounter += 1
        }
        else {
            if (occupied[left[currentDirection]]()) {

                moveString += moveCounter.toString() + ','
                moveCounter = 0
                moveString += "L,"
                currentDirection = left[currentDirection]
                continue
            }
            if (occupied[right[currentDirection]]()) {

                moveString += moveCounter.toString() + ','
                moveCounter = 0
                moveString += "R,"
                currentDirection = right[currentDirection]
                continue
            }
            if (!occupied[left[currentDirection]]() && !occupied[right[currentDirection]]()) {

                canGo = false
            }
        }
    }
    console.log(moveString.split(',').filter(val => val))
}

// traceRoute()


const A = ['[R', '8', 'L', '6', 'L', '10', 'L', '6', 'R', '8']



// [
//     'L', '4',  'R', '8',  'L', '6',  'L', '10', 'L', '6',
//     'R', '8',  'R', '10', 'L', '6',  'L', '6',  'L', '4',
//     'R', '8',  'L', '6',  'L', '10', 'L', '6',  'R', '8',
//     'R', '10', 'L', '6',  'L', '6',  'L', '4',  'L', '4',
//     'L', '10', 'L', '4',  'L', '4',  'L', '10', 'L', '6',
//     'R', '8',  'R', '10', 'L', '6',  'L', '6',  'L', '4',
//     'R', '8',  'L', '6',  'L', '10', 'L', '6',  'R', '8',
//     'R', '10', 'L', '6',  'L', '6',  'L', '4',  'L', '4',
// ]


//  L4 R8 L6 L10 L6 R8 R10 L6 L6 L4 R8 L6 L10 L6 R8 R10 L6 L6 L4 L4 L10 L4 L4 L10 L6 R8 R10 L6 L6 L4 R8 L6 L10 L6 R8 R10 L6 L6 L4 L4

//  *A *B *A *B *C *C *B *A *B *C

// A = L4 R8 L6 L10
// B = L6 R8 R10 L6 L6
// C = L4 L4 L10


const mainFunction = 'A,C,C,B,B,A,A,C,C,B\n'
const funcA = 'L,12,R,4,R,4\n'
const funcB = 'R,12,R,4,L,6,L,8,L,8\n'
const funcC = 'R,12,R,4,L,12\n'
const video = 'n\n'

const inputStream = mainFunction + funcA + funcB + funcC + video

let startingInput = 0

const inputFunc = () => {
    let ASCIIchar = ''
    // if (Number(inputStream.charAt(startingInput))) {

    //     if (Number(inputStream.charAt(startingInput + 1)) == '0') {
    //         ASCIIchar = 10
    //         startingInput += 2
    //     } else {
    //         ASCIIchar = Number(inputStream.charAt(startingInput))
    //         startingInput += 1
    //     }
    //     console.log('RETURNED NUMBER')

    // }
    // else {
        ASCIIchar = inputStream.charCodeAt(startingInput)
        startingInput += 1
    // }

    console.log("INPUT RETURNED", ASCIIchar)
    return ASCIIchar
}

const outputB = output => {
    robotOutputString += String.fromCharCode(output)
    console.log(output)
}

processData(code, inputFunc, outputB, 0)

