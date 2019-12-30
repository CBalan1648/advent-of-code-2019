
///////////////////////////////////////////////////////////// Day 19 Part 1

const code = [109, 424, 203, 1, 21102, 1, 11, 0, 1106, 0, 282, 21101, 0, 18, 0, 1105, 1, 259, 1201, 1, 0, 221, 203, 1, 21102, 31, 1, 0, 1105, 1, 282, 21101, 38, 0, 0, 1106, 0, 259, 20101, 0, 23, 2, 22102, 1, 1, 3, 21101, 0, 1, 1, 21101, 0, 57, 0, 1106, 0, 303, 2101, 0, 1, 222, 21001, 221, 0, 3, 20102, 1, 221, 2, 21102, 1, 259, 1, 21102, 1, 80, 0, 1106, 0, 225, 21101, 33, 0, 2, 21102, 1, 91, 0, 1106, 0, 303, 1201, 1, 0, 223, 21002, 222, 1, 4, 21101, 259, 0, 3, 21101, 0, 225, 2, 21101, 225, 0, 1, 21101, 0, 118, 0, 1106, 0, 225, 20101, 0, 222, 3, 21102, 1, 102, 2, 21102, 133, 1, 0, 1105, 1, 303, 21202, 1, -1, 1, 22001, 223, 1, 1, 21101, 148, 0, 0, 1106, 0, 259, 2101, 0, 1, 223, 21001, 221, 0, 4, 21002, 222, 1, 3, 21101, 0, 15, 2, 1001, 132, -2, 224, 1002, 224, 2, 224, 1001, 224, 3, 224, 1002, 132, -1, 132, 1, 224, 132, 224, 21001, 224, 1, 1, 21102, 195, 1, 0, 106, 0, 108, 20207, 1, 223, 2, 21001, 23, 0, 1, 21102, 1, -1, 3, 21101, 0, 214, 0, 1105, 1, 303, 22101, 1, 1, 1, 204, 1, 99, 0, 0, 0, 0, 109, 5, 2102, 1, -4, 249, 22101, 0, -3, 1, 22101, 0, -2, 2, 21202, -1, 1, 3, 21101, 250, 0, 0, 1105, 1, 225, 22102, 1, 1, -4, 109, -5, 2106, 0, 0, 109, 3, 22107, 0, -2, -1, 21202, -1, 2, -1, 21201, -1, -1, -1, 22202, -1, -2, -2, 109, -3, 2105, 1, 0, 109, 3, 21207, -2, 0, -1, 1206, -1, 294, 104, 0, 99, 22101, 0, -2, -2, 109, -3, 2106, 0, 0, 109, 5, 22207, -3, -4, -1, 1206, -1, 346, 22201, -4, -3, -4, 21202, -3, -1, -1, 22201, -4, -1, 2, 21202, 2, -1, -1, 22201, -4, -1, 1, 22101, 0, -2, 3, 21102, 1, 343, 0, 1106, 0, 303, 1106, 0, 415, 22207, -2, -3, -1, 1206, -1, 387, 22201, -3, -2, -3, 21202, -2, -1, -1, 22201, -3, -1, 3, 21202, 3, -1, -1, 22201, -3, -1, 2, 22102, 1, -4, 1, 21102, 384, 1, 0, 1106, 0, 303, 1106, 0, 415, 21202, -4, -1, -4, 22201, -4, -3, -4, 22202, -3, -2, -2, 22202, -2, -4, -4, 22202, -3, -2, -3, 21202, -4, -1, -2, 22201, -3, -2, 1, 21202, 1, 1, -4, 109, -5, 2106, 0, 0]
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

const moreMemory = new Array(10000).fill(0);

code.push(...moreMemory);


/////// UNCOMMENT FOR PART ONE

// const size = 50

// const generateCoordinates = (size) => new Array(size).fill(0).map((val, indexY) => new Array(size).fill(0).map((val, indexX) => [indexY, indexX])).reduce((acc, val) => [...acc, ...val])

// const allCoordintaes = generateCoordinates(50)

// let coordinateIndex = 0
// let coordinatesPos = 0

// const getAutoinput = () => {

//     if(coordinatesPos === 0){
//         const toReturn =  allCoordintaes[coordinateIndex][coordinatesPos]
//         coordinatesPos = 1

//         return toReturn
//     }
//     if(coordinatesPos === 1){
//         const toReturn =  allCoordintaes[coordinateIndex][coordinatesPos]
//         coordinatesPos = 0
//         coordinateIndex += 1

//         return toReturn
//     }

// }

// const coordinatesMap = new Map()

// const outputA = output => {

//     coordinatesMap.set(allCoordintaes[coordinateIndex], output)
// };


// for(let x = 0; x < 2500; x++){
//     processData([...code], getAutoinput, outputA, 0)

// }

// let tractorTiles = 0

// for(value of coordinatesMap.values()){
//     tractorTiles+=value
// }

// console.log(tractorTiles)

// const draw = new Array(size).fill(0).map((val, indexY) => new Array(size).fill(0))

// for(key of coordinatesMap.keys()){
//     if(!key){
// continue
//     }
//     draw[key[0]][key[1]] = coordinatesMap.get(key)
// }

// const render = draw.map(array => array.join(''))

// console.log(render)


////////// UNCOMMENT FOR PART ONE

///////////////////////////////////////////////////////////// Day 19 Part 2


const generateCoordinates = (size) => new Array(size).fill(0).map((val, indexY) => new Array(size).fill(0).map((val, indexX) => [indexY, indexX])).reduce((acc, val) => [...acc, ...val])

const size = 3

const shipSize = 100 - 1 // !IMPORTANT



let currentQuery = [14, 9]

let currentRow = currentQuery[0]

let currentColum = currentQuery[1]

const allCoordintaes = []

const coordinatesMap = new Map()

let coordinatesPos = 0;

let goOn = true

const verifyCoordinates = (key) => {
    let [y, x] = key

    if (coordinatesMap.get(`${y - 1} ${x}`) === 0 &&
        coordinatesMap.get(`${y} ${x + 1}`) === 0 &&
        coordinatesMap.get(`${y + shipSize} ${x - shipSize}`) === 1 &&
        coordinatesMap.get(`${y + shipSize + 1} ${x - shipSize}`) === 0 &&
        coordinatesMap.get(`${y + shipSize} ${x - shipSize - 1}`) === 0
    ) {
        console.log("FOUND AT", y, x - shipSize)
        goOn = false
        return true
    }
    goOn = true
    return false
}

let prevQuery;



const getAutoinput = () => {

    if (!currentQuery) {
        currentQuery = allCoordintaes.shift()
    }

    if (coordinatesPos === 0) {
        const toReturn = currentQuery[coordinatesPos]
        coordinatesPos = 1
        return toReturn
    }
    if (coordinatesPos === 1) {
        const toReturn = currentQuery[coordinatesPos]
        coordinatesPos = 0
        prevQuery = currentQuery

        currentQuery = allCoordintaes.shift()

        return toReturn
    }
}

let currentCorner

let wait = 0

const outputA = output => {

    coordinatesMap.set(`${prevQuery[0]} ${prevQuery[1]}`, output)

    if (wait > 0) {
        wait -= 1
        if (wait === 0) {
            if (!verifyCoordinates(currentCorner)) {
                // currentColum-=1
                currentRow += 1
                currentColum -= 1
                allCoordintaes.push([currentRow, currentColum])
            }
        }
        return
    }



    if (coordinatesMap.get(`${currentRow} ${currentColum}`) === 1) {

        currentColum += 1
        allCoordintaes.push([currentRow, currentColum])
        return
    }
    if (coordinatesMap.get(`${currentRow} ${currentColum}`) === 0) {


        currentCorner = [currentRow, currentColum - 1]

        allCoordintaes.push([currentRow - 1, currentColum - 1])
        allCoordintaes.push([currentRow, currentColum - shipSize - 1])

        allCoordintaes.push([currentRow + shipSize, currentColum - shipSize - 1])
        allCoordintaes.push([currentRow + shipSize + 1, currentColum - shipSize - 1])
        allCoordintaes.push([currentRow + shipSize, currentColum - shipSize - 1 - 1])

        wait = 5

    }
};


const testMap = [
    '#.......................................',
    '.#......................................',
    '..##....................................',
    '...###..................................',
    '....###.................................',
    '.....####...............................',
    '......#####.............................',
    '......######............................',
    '.......#######..........................',
    '........########........................',
    '.........#########......................',
    '..........#########.....................',
    '...........##########...................',
    '...........############.................',
    '............############................',
    '.............#############..............',
    '..............##############............',
    '...............###############..........',
    '................###############.........',
    '................#################.......',
    '.................########OOOOOOOOOO.....',
    '..................#######OOOOOOOOOO#....',
    '...................######OOOOOOOOOO###..',
    '....................#####OOOOOOOOOO#####',
    '.....................####OOOOOOOOOO#####',
    '.....................####OOOOOOOOOO#####',
    '......................###OOOOOOOOOO#####',
    '.......................##OOOOOOOOOO#####',
    '........................#OOOOOOOOOO#####',
    '.........................OOOOOOOOOO#####',
    '..........................##############',
    '..........................##############',
    '...........................#############',
    '............................############',
    '.............................###########',
].map(string => string.split(''))

const myRender = [
    '01000000000000000000000000000000000000000000000000',
    '00000000000000000000000000000000000000000000000000',
    '00100000000000000000000000000000000000000000000000',
    '00000000000000000000000000000000000000000000000000',
    '00010000000000000000000000000000000000000000000000',
    '00001000000000000000000000000000000000000000000000',
    '00001000000000000000000000000000000000000000000000',
    '00000100000000000000000000000000000000000000000000',
    '00000110000000000000000000000000000000000000000000',
    '00000010000000000000000000000000000000000000000000',
    '00000011000000000000000000000000000000000000000000',
    '00000001100000000000000000000000000000000000000000',
    '00000001100000000000000000000000000000000000000000',
    '00000000110000000000000000000000000000000000000000',
    '00000000111000000000000000000000000000000000000000',
    '00000000011000000000000000000000000000000000000000',
    '00000000011100000000000000000000000000000000000000',
    '00000000001110000000000000000000000000000000000000',
    '00000000001110000000000000000000000000000000000000',
    '00000000000111000000000000000000000000000000000000',
    '00000000000111000000000000000000000000000000000000',
    '00000000000011100000000000000000000000000000000000',
    '00000000000011110000000000000000000000000000000000',
    '00000000000001110000000000000000000000000000000000',
    '00000000000001111000000000000000000000000000000000',
    '00000000000000111100000000000000000000000000000000',
    '00000000000000111100000000000000000000000000000000',
    '00000000000000011110000000000000000000000000000000',
    '00000000000000011111000000000000000000000000000000',
    '00000000000000001111000000000000000000000000000000',
    '00000000000000001111100000000000000000000000000000',
    '00000000000000000111110000000000000000000000000000',
    '00000000000000000111110000000000000000000000000000',
    '00000000000000000011111000000000000000000000000000',
    '00000000000000000011111100000000000000000000000000',
    '00000000000000000001111100000000000000000000000000',
    '00000000000000000001111110000000000000000000000000',
    '00000000000000000000111110000000000000000000000000',
    '00000000000000000000111111000000000000000000000000',
    '00000000000000000000011111100000000000000000000000',
    '00000000000000000000011111100000000000000000000000',
    '00000000000000000000001111110000000000000000000000',
    '00000000000000000000001111111000000000000000000000',
    '00000000000000000000000111111000000000000000000000',
    '00000000000000000000000111111100000000000000000000',
    '00000000000000000000000011111110000000000000000000',
    '00000000000000000000000011111110000000000000000000',
    '00000000000000000000000001111111000000000000000000',
    '00000000000000000000000001111111100000000000000000',
    '00000000000000000000000000111111100000000000000000'
].map(string => string.split(''))


for (let z = 0; goOn; z++) {
    // let y = getAutoinput()
    // let x = getAutoinput()

    // let toReturn = 0

    // if(myRender[y] && myRender[y][x]) {
    //     toReturn = myRender[y][x] !== '0'
    // }

    // toReturn = toReturn ? 1 : 0

    // outputA(toReturn)

    processData([...code], getAutoinput, outputA, 0)
}

