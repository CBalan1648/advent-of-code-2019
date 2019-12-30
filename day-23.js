///////////////////////////////////////////////////////////// Day 23 Part 1

const code = [3,62,1001,62,11,10,109,2239,105,1,0,1726,804,602,734,1528,936,1184,1565,1662,2202,967,2142,1060,1264,1831,1155,1990,674,996,1295,1223,771,1359,641,2171,866,1421,1693,1922,705,2101,1767,1602,1326,1860,1959,1631,1027,1458,903,1891,2027,1390,2070,1800,1126,1493,571,835,1091,0,0,0,0,0,0,0,0,0,0,0,0,3,64,1008,64,-1,62,1006,62,88,1006,61,170,1106,0,73,3,65,21002,64,1,1,21001,66,0,2,21101,0,105,0,1105,1,436,1201,1,-1,64,1007,64,0,62,1005,62,73,7,64,67,62,1006,62,73,1002,64,2,132,1,132,68,132,1001,0,0,62,1001,132,1,140,8,0,65,63,2,63,62,62,1005,62,73,1002,64,2,161,1,161,68,161,1101,0,1,0,1001,161,1,169,102,1,65,0,1101,0,1,61,1101,0,0,63,7,63,67,62,1006,62,203,1002,63,2,194,1,68,194,194,1006,0,73,1001,63,1,63,1106,0,178,21101,0,210,0,105,1,69,1202,1,1,70,1102,1,0,63,7,63,71,62,1006,62,250,1002,63,2,234,1,72,234,234,4,0,101,1,234,240,4,0,4,70,1001,63,1,63,1106,0,218,1105,1,73,109,4,21102,0,1,-3,21101,0,0,-2,20207,-2,67,-1,1206,-1,293,1202,-2,2,283,101,1,283,283,1,68,283,283,22001,0,-3,-3,21201,-2,1,-2,1106,0,263,22101,0,-3,-3,109,-4,2105,1,0,109,4,21102,1,1,-3,21102,0,1,-2,20207,-2,67,-1,1206,-1,342,1202,-2,2,332,101,1,332,332,1,68,332,332,22002,0,-3,-3,21201,-2,1,-2,1106,0,312,22102,1,-3,-3,109,-4,2106,0,0,109,1,101,1,68,359,20101,0,0,1,101,3,68,366,21002,0,1,2,21102,1,376,0,1106,0,436,22102,1,1,0,109,-1,2105,1,0,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,4294967296,8589934592,17179869184,34359738368,68719476736,137438953472,274877906944,549755813888,1099511627776,2199023255552,4398046511104,8796093022208,17592186044416,35184372088832,70368744177664,140737488355328,281474976710656,562949953421312,1125899906842624,109,8,21202,-6,10,-5,22207,-7,-5,-5,1205,-5,521,21101,0,0,-4,21101,0,0,-3,21101,51,0,-2,21201,-2,-1,-2,1201,-2,385,471,20102,1,0,-1,21202,-3,2,-3,22207,-7,-1,-5,1205,-5,496,21201,-3,1,-3,22102,-1,-1,-5,22201,-7,-5,-7,22207,-3,-6,-5,1205,-5,515,22102,-1,-6,-5,22201,-3,-5,-3,22201,-1,-4,-4,1205,-2,461,1105,1,547,21102,1,-1,-4,21202,-6,-1,-6,21207,-7,0,-5,1205,-5,547,22201,-7,-6,-7,21201,-4,1,-4,1106,0,529,21201,-4,0,-7,109,-8,2105,1,0,109,1,101,1,68,564,20101,0,0,0,109,-1,2105,1,0,1101,0,18493,66,1102,1,1,67,1101,0,598,68,1101,0,556,69,1101,1,0,71,1102,1,600,72,1106,0,73,1,61,4,223172,1101,0,57571,66,1101,0,5,67,1102,1,629,68,1102,302,1,69,1101,1,0,71,1102,1,639,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,16,65991,1101,84871,0,66,1102,2,1,67,1101,0,668,68,1101,0,351,69,1102,1,1,71,1101,672,0,72,1105,1,73,0,0,0,0,255,60397,1102,1,78157,66,1101,1,0,67,1102,1,701,68,1102,556,1,69,1102,1,1,71,1101,703,0,72,1105,1,73,1,25,27,208958,1102,1,82763,66,1102,1,1,67,1102,1,732,68,1101,0,556,69,1102,1,0,71,1101,0,734,72,1106,0,73,1,1300,1102,1,10477,66,1102,1,4,67,1101,761,0,68,1101,0,302,69,1101,0,1,71,1101,769,0,72,1106,0,73,0,0,0,0,0,0,0,0,49,169179,1101,0,4091,66,1101,0,1,67,1101,0,798,68,1102,556,1,69,1102,1,2,71,1102,800,1,72,1106,0,73,1,53,2,57571,3,31431,1101,35897,0,66,1102,1,1,67,1101,831,0,68,1101,0,556,69,1101,0,1,71,1101,833,0,72,1106,0,73,1,331,7,214197,1101,0,83177,66,1102,1,1,67,1101,0,862,68,1102,556,1,69,1101,1,0,71,1102,1,864,72,1105,1,73,1,13,2,115142,1102,1,17681,66,1101,4,0,67,1101,893,0,68,1101,0,302,69,1101,0,1,71,1101,0,901,72,1106,0,73,0,0,0,0,0,0,0,0,6,29983,1101,100183,0,66,1101,0,2,67,1102,930,1,68,1102,302,1,69,1101,1,0,71,1101,0,934,72,1105,1,73,0,0,0,0,16,21997,1102,1,58789,66,1101,0,1,67,1101,963,0,68,1101,0,556,69,1102,1,1,71,1101,965,0,72,1106,0,73,1,547,46,67783,1102,70783,1,66,1101,0,1,67,1101,994,0,68,1101,0,556,69,1102,0,1,71,1101,996,0,72,1106,0,73,1,1052,1102,97259,1,66,1102,1,1,67,1102,1023,1,68,1101,556,0,69,1101,0,1,71,1102,1,1025,72,1105,1,73,1,-653,4,111586,1101,0,36269,66,1101,2,0,67,1101,0,1054,68,1101,302,0,69,1101,0,1,71,1101,1058,0,72,1106,0,73,0,0,0,0,33,91969,1102,1,5867,66,1102,1,1,67,1102,1087,1,68,1101,0,556,69,1102,1,1,71,1102,1,1089,72,1105,1,73,1,-523,7,142798,1101,56393,0,66,1101,0,3,67,1102,1118,1,68,1101,0,302,69,1101,0,1,71,1102,1,1124,72,1105,1,73,0,0,0,0,0,0,16,43994,1102,38653,1,66,1102,1,1,67,1102,1153,1,68,1101,556,0,69,1102,0,1,71,1102,1155,1,72,1105,1,73,1,1127,1101,21193,0,66,1102,1,1,67,1102,1182,1,68,1101,0,556,69,1102,0,1,71,1102,1,1184,72,1105,1,73,1,1135,1102,29983,1,66,1101,5,0,67,1101,1211,0,68,1101,253,0,69,1102,1,1,71,1101,1221,0,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,27,104479,1102,77969,1,66,1102,1,1,67,1102,1,1250,68,1102,556,1,69,1101,6,0,71,1101,0,1252,72,1105,1,73,1,1,46,203349,4,167379,7,71399,25,70724,28,26387,3,10477,1101,64499,0,66,1101,1,0,67,1101,1291,0,68,1102,1,556,69,1101,0,1,71,1102,1293,1,72,1106,0,73,1,505,25,35362,1101,59,0,66,1101,1,0,67,1102,1,1322,68,1101,0,556,69,1102,1,1,71,1101,0,1324,72,1105,1,73,1,-195,3,41908,1101,0,91969,66,1101,2,0,67,1101,0,1353,68,1102,1,302,69,1101,1,0,71,1102,1,1357,72,1105,1,73,0,0,0,0,39,200366,1101,0,24469,66,1101,0,1,67,1101,0,1386,68,1101,0,556,69,1102,1,1,71,1101,1388,0,72,1105,1,73,1,967,28,52774,1101,0,71287,66,1101,0,1,67,1102,1417,1,68,1101,556,0,69,1101,1,0,71,1101,1419,0,72,1106,0,73,1,20,4,55793,1102,95257,1,66,1102,1,1,67,1101,0,1448,68,1102,556,1,69,1101,0,4,71,1102,1450,1,72,1105,1,73,1,2,7,285596,28,79161,30,98561,30,591366,1101,42293,0,66,1102,1,3,67,1102,1485,1,68,1102,302,1,69,1101,1,0,71,1101,0,1491,72,1105,1,73,0,0,0,0,0,0,16,87988,1102,67783,1,66,1102,1,3,67,1102,1,1520,68,1101,302,0,69,1101,1,0,71,1102,1,1526,72,1105,1,73,0,0,0,0,0,0,6,89949,1102,55793,1,66,1101,4,0,67,1101,1555,0,68,1102,302,1,69,1101,1,0,71,1101,0,1563,72,1106,0,73,0,0,0,0,0,0,0,0,6,149915,1102,1,71399,66,1101,4,0,67,1101,1592,0,68,1102,1,302,69,1101,1,0,71,1102,1,1600,72,1106,0,73,0,0,0,0,0,0,0,0,6,59966,1101,32069,0,66,1101,1,0,67,1102,1,1629,68,1102,556,1,69,1102,1,0,71,1102,1,1631,72,1105,1,73,1,1958,1102,1,12073,66,1101,0,1,67,1101,0,1658,68,1102,1,556,69,1101,1,0,71,1102,1,1660,72,1105,1,73,1,125,9,100153,1102,1,2969,66,1101,1,0,67,1101,0,1689,68,1101,556,0,69,1102,1,1,71,1101,1691,0,72,1105,1,73,1,1753,28,105548,1101,104479,0,66,1101,2,0,67,1102,1720,1,68,1102,1,302,69,1102,1,1,71,1102,1,1724,72,1105,1,73,0,0,0,0,37,36269,1101,0,60397,66,1101,0,1,67,1102,1,1753,68,1101,556,0,69,1101,6,0,71,1102,1,1755,72,1105,1,73,1,25629,39,100183,49,56393,49,112786,38,42293,38,84586,38,126879,1101,0,100673,66,1101,0,1,67,1102,1,1794,68,1102,1,556,69,1101,0,2,71,1101,0,1796,72,1106,0,73,1,10,9,400612,30,197122,1101,30893,0,66,1102,1,1,67,1101,0,1827,68,1101,556,0,69,1101,0,1,71,1102,1,1829,72,1105,1,73,1,37,25,17681,1102,1,56957,66,1102,1,1,67,1102,1858,1,68,1101,0,556,69,1102,1,0,71,1101,1860,0,72,1106,0,73,1,1758,1102,57163,1,66,1101,0,1,67,1101,1887,0,68,1102,556,1,69,1101,1,0,71,1101,1889,0,72,1106,0,73,1,-209,46,135566,1101,0,13477,66,1101,1,0,67,1101,1918,0,68,1101,0,556,69,1102,1,1,71,1102,1920,1,72,1105,1,73,1,5279,2,172713,1101,26387,0,66,1102,1,4,67,1102,1949,1,68,1101,0,302,69,1101,0,1,71,1101,0,1957,72,1106,0,73,0,0,0,0,0,0,0,0,6,119932,1102,1,99053,66,1102,1,1,67,1101,0,1986,68,1101,556,0,69,1101,0,1,71,1102,1988,1,72,1106,0,73,1,3125,2,230284,1102,1,21997,66,1102,1,4,67,1101,2017,0,68,1101,0,253,69,1101,0,1,71,1102,1,2025,72,1105,1,73,0,0,0,0,0,0,0,0,23,84871,1102,53077,1,66,1102,1,1,67,1102,2054,1,68,1101,0,556,69,1101,7,0,71,1102,1,2056,72,1106,0,73,1,5,2,287855,37,72538,33,183938,3,20954,9,200306,9,300459,30,295683,1101,0,39779,66,1101,0,1,67,1101,0,2097,68,1102,1,556,69,1101,0,1,71,1102,2099,1,72,1105,1,73,1,160,30,492805,1102,98561,1,66,1101,6,0,67,1101,2128,0,68,1102,1,302,69,1101,1,0,71,1101,0,2140,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,0,0,23,169742,1101,55987,0,66,1102,1,1,67,1101,0,2169,68,1102,1,556,69,1101,0,0,71,1102,1,2171,72,1105,1,73,1,1345,1101,86767,0,66,1101,0,1,67,1101,2198,0,68,1102,556,1,69,1102,1,1,71,1102,2200,1,72,1105,1,73,1,22,25,53043,1101,0,100153,66,1102,1,4,67,1101,0,2229,68,1102,1,302,69,1101,0,1,71,1102,2237,1,72,1106,0,73,0,0,0,0,0,0,0,0,30,394244]
let relativeBase = new Array(100).fill(0)
let inputNone = new Array(100).fill(0)

const runCode = (offset, array, input, output, id) => {
    const instructionsModes = getMode(array[offset + 0]);

    const DOInstructionsResult = (inst, param) => {
        const instructions = {
            0: () => array[offset + param],
            1: () => offset + param,
            2: () => relativeBase[id] + array[offset + param]
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
        if (inputJoy === -1) {
            inputNone[id] += 1
            if( inputNone[id] > 15){
                inputNone[id] = 0
                return [false, "+", 2];
            }
            return [true, "+", 2];
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
        relativeBase[id] += DOinstructions(instructionsModes[1], 1);
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

const processData = (array, input, output, instructionPointerStart = 0, id = 0) => {
    let instructionPointer = instructionPointerStart;
    let shouldContinue = true;
    let runnedCode = 0;

    while (shouldContinue) {
        let returned = runCode(instructionPointer, array, input, output, 0);

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

const inputQueue = new Array(50).fill(0).map((val, index) => [[index]])

let currentComputer = 0

let inputBuffer = []

let inputPointer = 0

const input = () => {
   if(inputQueue[currentComputer].length === 0 && inputBuffer.length === 0){
       inputPointer = 0
       return -1
   }
   
   if(inputPointer === 0){
       console.log("FIRST")
       inputBuffer = inputQueue[currentComputer].shift()
       console.log(currentComputer,inputBuffer)
       inputPointer = 1
        if(inputBuffer.length === 1){
            const toReturn = inputBuffer[0]
            inputPointer = 0
            inputBuffer = []
            return toReturn
        }
       return inputBuffer[0]
   }

   if(inputPointer === 1){
       inputPointer = 0
        
       const toReturn = inputBuffer[1]
       inputBuffer = []
       return toReturn
   }
}

let outputBuffer = []

let natData = []

const outputA = output => {

    console.log(output)

    outputBuffer.push(output)

    if(outputBuffer.length === 3){
        const [destination, ...data] = outputBuffer
        if(destination === 255){
            natData = data
            outputBuffer = []
            return void 0
        }
        inputQueue[destination].push(data)

        outputBuffer = []
    }
};



const codeArray = new Array(50).fill(0).map(val => [...code])
const instructionPointer = new Array(50).fill(0)

///////////////////////////////////////////////////////////// Day 23 Part 2

const isNetworkIdle = () => inputQueue.every(queue => queue.length === 0)

const sentY = []

let idleTime = 0

while(true){

    if(isNetworkIdle()){
        idleTime +=1
    }

    if(idleTime > 25){
        console.log('RESETTED')
        idleTime = 0
        inputQueue[0].push(natData)
        sentY.push(natData[1])
    }

    if(sentY.length === 50){
        break
    }

    if(currentComputer === 50){
        currentComputer = 0
    }
    instructionPointer[currentComputer] = processData(codeArray[currentComputer], input, outputA, instructionPointer[currentComputer], currentComputer)[0]
    currentComputer+=1
}

console.log(sentY)