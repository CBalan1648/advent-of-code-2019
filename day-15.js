///////////////////////////////////////////////////////////// Day 15 Part 1

const code = [3,1033,1008,1033,1,1032,1005,1032,31,1008,1033,2,1032,1005,1032,58,1008,1033,3,1032,1005,1032,81,1008,1033,4,1032,1005,1032,104,99,1002,1034,1,1039,1002,1036,1,1041,1001,1035,-1,1040,1008,1038,0,1043,102,-1,1043,1032,1,1037,1032,1042,1106,0,124,1001,1034,0,1039,1002,1036,1,1041,1001,1035,1,1040,1008,1038,0,1043,1,1037,1038,1042,1106,0,124,1001,1034,-1,1039,1008,1036,0,1041,1001,1035,0,1040,102,1,1038,1043,1002,1037,1,1042,1106,0,124,1001,1034,1,1039,1008,1036,0,1041,102,1,1035,1040,1001,1038,0,1043,1002,1037,1,1042,1006,1039,217,1006,1040,217,1008,1039,40,1032,1005,1032,217,1008,1040,40,1032,1005,1032,217,1008,1039,5,1032,1006,1032,165,1008,1040,35,1032,1006,1032,165,1102,1,2,1044,1106,0,224,2,1041,1043,1032,1006,1032,179,1102,1,1,1044,1106,0,224,1,1041,1043,1032,1006,1032,217,1,1042,1043,1032,1001,1032,-1,1032,1002,1032,39,1032,1,1032,1039,1032,101,-1,1032,1032,101,252,1032,211,1007,0,38,1044,1106,0,224,1101,0,0,1044,1106,0,224,1006,1044,247,1001,1039,0,1034,1001,1040,0,1035,101,0,1041,1036,102,1,1043,1038,1002,1042,1,1037,4,1044,1106,0,0,4,26,16,55,25,8,4,99,2,21,20,20,56,26,97,81,12,2,4,9,32,7,49,54,5,18,81,16,7,88,4,23,30,66,17,31,27,29,34,26,81,62,27,81,41,84,12,53,90,79,37,22,45,27,17,39,76,1,55,58,44,20,18,57,57,20,76,47,20,44,88,26,43,36,79,12,68,30,19,71,27,21,18,75,18,9,56,29,15,84,8,74,93,1,35,91,39,32,86,9,97,54,4,22,59,13,61,31,19,97,26,82,35,73,23,77,71,59,26,76,78,73,34,85,67,26,1,66,91,79,26,95,5,75,99,29,14,23,26,8,66,97,55,21,25,49,17,99,71,37,62,21,45,46,13,29,30,24,31,63,99,12,12,63,10,64,2,76,3,8,37,94,33,12,47,65,35,65,60,12,88,8,10,49,36,12,14,4,43,82,19,16,51,52,20,17,43,18,33,49,19,93,49,29,86,10,31,92,90,44,26,97,8,63,70,81,28,17,80,23,22,79,56,33,67,61,91,37,4,83,77,16,6,8,33,66,92,46,8,34,23,81,3,93,14,23,72,20,91,16,62,79,7,27,81,10,11,44,65,24,66,77,31,12,53,15,50,84,24,70,29,62,50,5,3,88,13,52,85,42,4,15,39,82,65,18,15,58,37,71,10,13,90,98,29,59,52,3,22,13,59,91,29,23,79,1,7,24,80,79,37,31,77,17,11,64,10,9,8,74,97,6,74,35,73,44,68,29,97,3,45,73,30,28,80,9,48,73,76,7,3,77,83,8,12,41,62,44,10,21,27,74,32,95,73,4,47,71,6,67,17,57,10,67,5,25,74,18,24,57,7,61,66,4,51,14,7,44,29,79,74,11,6,49,75,32,3,98,89,63,5,15,5,74,78,37,7,77,3,13,47,9,33,76,22,47,6,72,12,35,75,39,25,87,83,37,19,91,25,45,22,30,54,83,74,22,71,19,3,3,85,74,37,95,26,67,46,10,12,96,44,50,32,90,3,28,56,24,43,4,1,65,5,9,50,22,44,88,9,48,59,21,24,54,11,35,53,28,7,82,32,24,17,45,88,34,72,95,17,9,39,29,4,55,66,95,22,62,15,71,11,39,51,37,86,49,20,10,63,31,66,59,15,55,93,3,11,28,54,30,41,20,92,7,3,12,54,49,14,33,56,89,21,26,67,20,93,7,64,3,31,60,23,51,36,30,57,20,14,28,88,4,6,69,33,65,98,35,96,80,49,25,68,78,97,30,63,35,73,89,32,64,69,10,68,96,19,89,71,41,32,31,30,90,5,71,20,53,36,51,23,87,19,25,15,34,15,48,19,25,33,14,50,64,11,96,19,34,14,44,33,29,40,16,50,90,22,34,44,17,64,63,18,86,57,29,44,22,98,16,41,20,99,34,14,51,11,4,84,91,66,27,49,6,58,34,95,62,6,45,53,27,72,4,12,40,43,17,41,93,27,30,70,31,47,87,26,64,9,63,59,73,9,11,97,35,56,73,23,58,9,49,13,88,1,87,13,54,21,94,13,69,16,39,2,10,64,13,10,19,96,2,23,1,60,99,47,12,61,37,13,70,24,48,91,7,33,51,10,25,88,33,69,29,98,16,16,60,5,29,44,17,21,41,62,65,8,61,84,27,42,78,72,23,98,16,76,98,77,37,19,49,37,93,83,97,1,63,9,63,27,66,34,74,87,58,3,90,4,48,51,67,32,66,9,56,9,44,1,67,24,49,29,58,20,70,32,73,27,82,0,0,21,21,1,10,1,0,0,0,0,0,0];
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

const tiles = new Array(50).fill(0).map(val => new Array(100).fill(' '));


let botPosition = [25,50];

let botDirection = 0;

const outputA = output => {
  if (output == 0) {
    switch (botDirection) {
      case 1: {
        tiles[botPosition[0] - 1][botPosition[1]] = "X";
        break;
      }
      case 2: {
        tiles[botPosition[0] + 1][botPosition[1]] = "X";
        break;
      }
      case 3: {
        tiles[botPosition[0]][botPosition[1] - 1] = "X";
        break;
      }
      case 4: {
        tiles[botPosition[0]][botPosition[1] + 1] = "X";
        break;
      }
    }
  }

  if (output == 1) {
    switch (botDirection) {
      case 1: {
        botPosition = [botPosition[0] - 1, botPosition[1]];
        break;
      }
      case 2: {
        botPosition = [botPosition[0] + 1, botPosition[1]];
        break;
      }
      case 3: {
        botPosition = [botPosition[0], botPosition[1] - 1];
        break;
      }
      case 4: {
        botPosition = [botPosition[0], botPosition[1] + 1];
        break;
      }
    }
  }

  if (output == 2) {
    switch (botDirection) {
      case 1: {
        console.log(botPosition, botDirection, step)
        tiles[botPosition[0] - 1][botPosition[1]] = "O";
        botPosition = [botPosition[0] - 1, botPosition[1]];
        console.log(botPosition, botDirection, step)
        break;
      }
      case 2: {
        console.log(botPosition, botDirection, step)
        tiles[botPosition[0] + 1][botPosition[1]] = "O";
        botPosition = [botPosition[0] + 1, botPosition[1]];
        console.log(botPosition, botDirection, step)
        break;
      }
      case 3: {
        console.log(botPosition, botDirection, step)
        tiles[botPosition[0]][botPosition[1] - 1] = "O";
        botPosition = [botPosition[0], botPosition[1] - 1];
        console.log(botPosition, botDirection, step)
        break;
      }
      case 4: {
        console.log(botPosition, botDirection, step)
        tiles[botPosition[0]][botPosition[1] + 1] = "O";
        botPosition = [botPosition[0], botPosition[1] + 1];
        console.log(botPosition, botDirection, step)
        break;
      }
    }
  }
};

const moreMemory = new Array(10000).fill(0);

code.push(...moreMemory);

var readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let autoMoveDirection = "UP"
let prevDirection = "UP"

let step = 0

const getAutoinput  = () => {

  step+=1

    const occupied = {
      UP  :tiles[botPosition[0] - 1][botPosition[1]] === 'X',
      DOWN : tiles[botPosition[0] + 1][botPosition[1]] === 'X',
      LEFT : tiles[botPosition[0]][botPosition[1] - 1] === 'X',
      RIGHT : tiles[botPosition[0]][botPosition[1] + 1] === 'X',
    }

    const directions = {
      UP : 1,
      DOWN : 2,
      RIGHT : 4,
      LEFT : 3
    }

    const left = {
      UP : 'LEFT',
      DOWN : 'RIGHT',
      RIGHT : 'UP',
      LEFT : 'DOWN',
    }

    const right = {
      UP : 'RIGHT',
      DOWN : 'LEFT',
      RIGHT : 'DOWN',
      LEFT : 'UP',
    }

  
    if(!occupied[left[autoMoveDirection]] && prevDirection !== right[autoMoveDirection]){ 
      prevDirection = autoMoveDirection
      autoMoveDirection = left[autoMoveDirection]
      return directions[autoMoveDirection]
    } 
    if(occupied[autoMoveDirection]){
      prevDirection =autoMoveDirection
      autoMoveDirection = right[autoMoveDirection]
      return directions[autoMoveDirection]
    }
   
      

    // if(occupied[autoMoveDirection] && occupied[right[autoMoveDirection]]){
    //   autoMoveDirection = left[autoMoveDirection]
    //   return directions[autoMoveDirection]
    // }

    // if(occupied[autoMoveDirection]){
    //   autoMoveDirection = right[autoMoveDirection]
    //   return directions[autoMoveDirection]
    // }
       
    // if(!occupied[left[autoMoveDirection]]){ 
    //   autoMoveDirection = left[autoMoveDirection]
    //   return directions[autoMoveDirection]
    // } 
    
    prevDirection = autoMoveDirection
    return directions[autoMoveDirection]
}

const startingPosition = [...botPosition]

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
    if(!input){
      input = getAutoinput()
    }

    pointer = processData(code, customInput, outputA, pointer)[0];
    tiles[botPosition[0]][botPosition[1]] = '.'
    tiles[startingPosition[0]][startingPosition[1]] = 'T'
    const drawTiles = [...tiles.map(val => [...val])]
    drawTiles[botPosition[0]][botPosition[1]] = 5

    console.log(
      drawTiles.map(array =>
        array.reduce((acc, val) => {
        
          return (acc += `${val}`);
        })
      )
    );

    if (line === "z") {
      rl.close();
    }
  });
};

// runGame();


// '                                                                                                    ',
// '                                                                                                    ',
// '                              XXX XXX XXXXXXX XXXXXXX XXXXX XXX XXXXX                               ',
// '                             X...X...X.......X.......X.....X...X.....X                              ',
// '                             X.X.X.X.X.X.XXXXX.X.X.XXX.XXX.X.X.X.X.X.X                              ',
// '                             X.X...X...X...X...X.X.X...X.X...X.X.X.X.X                              ',
// '                             X.XXXX XXXXXX.X.XXX.XXX.XXX.XXXXX.X.X.X.X                              ',
// '                             X.X...X.....X.X...X.....X.......X.X.X.X.X                              ',
// '                             X.X.X.X.XXX.X.XXX.XXXXXXX.XXXXX.X.X.X.XX                               ',
// '                             X...X...X...X.....X.....X.X.....X.X.X5..X                              ',
// '                              XXX XXXX.XX XXXXXX.X.X.XXX.XXXXX.X.XXX.X                              ',
// '                             X...X...X.X.X...X...X.X.....X.....X...X.X                              ',
// '                             X.X.XXX.X.X.X.X.X.XXX.XXXXX.X.X.XXX.XXX.X                              ',
// '                             X.X.....X.X...X.....X...X...X.X.X...X...X                              ',
// '                             X.X.XXXXX.X.XXXXXXXXXXX.X.XXX.XXX.XXX.X.X                              ',
// '                             X.X.X...X.X.......X.....X...X.....X.X.X.X                              ',
// '                             X.XXX.X.X.X.XXXXXXX.XXX.XXXXX.XXXXX.X.XX                               ',
// '                             X.....X...X.X.......X...X...X...X...X...X                              ',
// '                             X.XXXXXXX.XXX.XXXXX.XXXXX.X.XXX.X.X.XXX.X                              ',
// '                             X...X...X.....X.....X.....X...X...X.X...X                              ',
// '                              XX.X.X.XXXXXXXXXXXXX.XXXXXXX.XXX.XXX.X.X                              ',
// '                             X...X.X.........X.....X.X.....X...X...X.X                              ',
// '                              XXXX.XXXXXXXXX.X.XXXXX.X.XXXXX.XXX.XXXX                               ',
// '                             X...X...X.....X.X.X..TX.X...X.X...X.....X                              ',
// '                             X.X.XXX.X.XXX.X.X.X.XXX.XXX.X.X.XXXXXXX.X                              ',
// '                             X.X.....X...X.....X.X.....X.X...X.....X.X                              ',
// '                             X.XXXXXXX.XXXXXXX.X.X.XXX.X.XXXXX.XXX.X.X                              ',
// '                             X.X...X...X.....X.X.X.X.X...X.....X.X...X                              ',
// '                             X.X.X.XXXXX.XXX.XXX.X.X.XXXXX.XXXXX.XXX.X                              ',
// '                             X.X.X.X...X...X...X.X.X.......X...X.....X                              ',
// '                             X.X.X.X.X.XXX.XXX.X.X.X.XXXXX.X.X.X.XXXX                               ',
// '                             X...X...X.....X.X...X.X.X...X.X.X.X.X...X                              ',
// '                              XXXXXXX XXXXXX.XXXXX.XXX.X.X.X.X.X.X.X.X                              ',
// '                             X.......X.........X.X...X.X...X.X.X.X.X.X                              ',
// '                             X.XXX.X.XXXXX.XXX.X.XXX.X.XXXXX.X.X.X.X.X                              ',
// '                             X.X...X.......X.X.....X...X.....X.X.X.X.X                              ',
// '                             X.X.XXXXXXXXXXX.XXXXX.XXXXX.XXXXX.X.XXX.X                              ',
// '                             X.X.XO..................X...X...X.X.X...X                              ',
// '                             X.X.XXXXXXXXXXXXXXXXXXX.X.X.X.X.XXX.X.XX                               ',
// '                             X.X...X.........X.....X.X.X...X.....X...X                              ',
// '                             X.XXX.X.XXXXXXX.X.XXX.XXX.XXXXXXXXXXXXX.X                              ',
// '                             X...X.........X.....X...................X                              ',
// '                              XXX XXXXXXXXX XXXXX XXXXXXXXXXXXXXXXXXX                               ',
// '                                                                                                    ',
// '                                                                                                    ',
// '                                                                                                                                                                 

298 /// i counted them :(


///////////////////////////////////////////////////////////// Day 15 Part 2
       
const maze = [
"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
"X...X...X.......X.......X.....X...X.....X",
"X.X.X.X.X.X.XXXXX.X.X.XXX.XXX.X.X.X.X.X.X",
"X.X...X...X...X...X.X.X...X.X...X.X.X.X.X",
"X.XXXXXXXXXXX.X.XXX.XXX.XXX.XXXXX.X.X.X.X",
"X.X...X.....X.X...X.....X.......X.X.X.X.X",
"X.X.X.X.XXX.X.XXX.XXXXXXX.XXXXX.X.X.X.XXX",
"X...X...X...X.....X.....X.X.....X.X.X...X",
"XXXXXXXXX.XXXXXXXXX.X.X.XXX.XXXXX.X.XXX.X",
"X...X...X.X.X...X...X.X.....X.....X...X.X",
"X.X.XXX.X.X.X.X.X.XXX.XXXXX.X.X.XXX.XXX.X",
"X.X.....X.X...X.....X...X...X.X.X...X...X",
"X.X.XXXXX.X.XXXXXXXXXXX.X.XXX.XXX.XXX.X.X",
"X.X.X...X.X.......X.....X...X.....X.X.X.X",
"X.XXX.X.X.X.XXXXXXX.XXX.XXXXX.XXXXX.X.XXX",
"X.....X...X.X.......X...X...X...X...X...X",
"X.XXXXXXX.XXX.XXXXX.XXXXX.X.XXX.X.X.XXX.X",
"X...X...X.....X.....X.....X...X...X.X...X",
"XXX.X.X.XXXXXXXXXXXXX.XXXXXXX.XXX.XXX.X.X",
"X...X.X.........X.....X.X.....X...X...X.X",
"XXXXX.XXXXXXXXX.X.XXXXX.X.XXXXX.XXX.XXXXX",
"X...X...X.....X.X.X...X.X...X.X...X.....X",
"X.X.XXX.X.XXX.X.X.X.XXX.XXX.X.X.XXXXXXX.X",
"X.X.....X...X.....X.X.....X.X...X.....X.X",
"X.XXXXXXX.XXXXXXX.X.X.XXX.X.XXXXX.XXX.X.X",
"X.X...X...X.....X.X.X.X.X...X.....X.X...X",
"X.X.X.XXXXX.XXX.XXX.X.X.XXXXX.XXXXX.XXX.X",
"X.X.X.X...X...X...X.X.X.......X...X.....X",
"X.X.X.X.X.XXX.XXX.X.X.X.XXXXX.X.X.X.XXXXX",
"X...X...X.....X.X...X.X.X...X.X.X.X.X...X",
"XXXXXXXXXXXXXXX.XXXXX.XXX.X.X.X.X.X.X.X.X",
"X.......X.........X.X...X.X...X.X.X.X.X.X",
"X.XXX.X.XXXXX.XXX.X.XXX.X.XXXXX.X.X.X.X.X",
"X.X...X.......X.X.....X...X.....X.X.X.X.X",
"X.X.XXXXXXXXXXX.XXXXX.XXXXX.XXXXX.X.XXX.X",
"X.X.XO..................X...X...X.X.X...X",
"X.X.XXXXXXXXXXXXXXXXXXX.X.X.X.X.XXX.X.XXX",
"X.X...X.........X.....X.X.X...X.....X...X",
"X.XXX.X.XXXXXXX.X.XXX.XXX.XXXXXXXXXXXXX.X",
"X...X.........X.....X...................X",
"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
]

let mazeArray = maze.map(string => {
  string = string.trim();
  return string.split('')
})


const hasEmptySpace = () => mazeArray.some(val => val.some(mazeSpace => mazeSpace === '.'))

let timeCounter = 0
let shoulContinue = true

while(hasEmptySpace() && shoulContinue){

  const usedMap = [...mazeArray.map(val => [...val])]

  mazeArray.forEach((spaceArray, yIndex) => {
    spaceArray.forEach((cell, xIndex) => {

      if(cell === 'O'){
        if(mazeArray[yIndex - 1][xIndex] === '.'){
          usedMap[yIndex - 1][xIndex] = 'O'
        }
        if(mazeArray[yIndex + 1][xIndex] === '.'){
          usedMap[yIndex + 1][xIndex] = 'O'
        }
        if(mazeArray[yIndex][xIndex - 1] === '.'){
          usedMap[yIndex][xIndex - 1] = 'O'
        }
        if(mazeArray[yIndex][xIndex + 1] === '.'){
          usedMap[yIndex][xIndex + 1] = 'O'
        }
      }
    })
  })
  mazeArray = usedMap
  timeCounter+=1
}

console.log(timeCounter)