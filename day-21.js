///////////////////////////////////////////////////////////// Day 21 Part 1

const code = [109,2050,21101,0,966,1,21101,0,13,0,1106,0,1378,21102,20,1,0,1105,1,1337,21101,0,27,0,1105,1,1279,1208,1,65,748,1005,748,73,1208,1,79,748,1005,748,110,1208,1,78,748,1005,748,132,1208,1,87,748,1005,748,169,1208,1,82,748,1005,748,239,21101,1041,0,1,21102,73,1,0,1106,0,1421,21102,78,1,1,21101,1041,0,2,21101,88,0,0,1105,1,1301,21102,68,1,1,21102,1041,1,2,21101,0,103,0,1106,0,1301,1102,1,1,750,1105,1,298,21102,1,82,1,21102,1,1041,2,21101,125,0,0,1106,0,1301,1101,2,0,750,1106,0,298,21101,79,0,1,21102,1041,1,2,21102,1,147,0,1105,1,1301,21102,84,1,1,21101,1041,0,2,21102,162,1,0,1106,0,1301,1101,0,3,750,1105,1,298,21101,0,65,1,21102,1041,1,2,21102,184,1,0,1106,0,1301,21102,1,76,1,21102,1041,1,2,21101,0,199,0,1105,1,1301,21101,0,75,1,21101,0,1041,2,21101,0,214,0,1106,0,1301,21101,221,0,0,1105,1,1337,21102,1,10,1,21101,0,1041,2,21102,236,1,0,1106,0,1301,1106,0,553,21102,85,1,1,21101,0,1041,2,21102,254,1,0,1106,0,1301,21102,1,78,1,21101,1041,0,2,21101,0,269,0,1105,1,1301,21102,276,1,0,1106,0,1337,21102,1,10,1,21102,1041,1,2,21101,291,0,0,1105,1,1301,1102,1,1,755,1106,0,553,21101,32,0,1,21102,1041,1,2,21102,1,313,0,1105,1,1301,21101,0,320,0,1106,0,1337,21101,327,0,0,1105,1,1279,1202,1,1,749,21101,65,0,2,21102,1,73,3,21102,1,346,0,1106,0,1889,1206,1,367,1007,749,69,748,1005,748,360,1101,0,1,756,1001,749,-64,751,1105,1,406,1008,749,74,748,1006,748,381,1102,1,-1,751,1106,0,406,1008,749,84,748,1006,748,395,1102,1,-2,751,1105,1,406,21101,0,1100,1,21102,406,1,0,1105,1,1421,21101,32,0,1,21102,1,1100,2,21102,1,421,0,1106,0,1301,21102,428,1,0,1105,1,1337,21102,435,1,0,1106,0,1279,2102,1,1,749,1008,749,74,748,1006,748,453,1102,-1,1,752,1105,1,478,1008,749,84,748,1006,748,467,1102,1,-2,752,1106,0,478,21102,1,1168,1,21102,1,478,0,1105,1,1421,21102,485,1,0,1106,0,1337,21102,1,10,1,21101,1168,0,2,21101,0,500,0,1106,0,1301,1007,920,15,748,1005,748,518,21102,1,1209,1,21102,1,518,0,1105,1,1421,1002,920,3,529,1001,529,921,529,102,1,750,0,1001,529,1,537,101,0,751,0,1001,537,1,545,1001,752,0,0,1001,920,1,920,1106,0,13,1005,755,577,1006,756,570,21101,1100,0,1,21102,1,570,0,1105,1,1421,21102,1,987,1,1105,1,581,21102,1,1001,1,21101,588,0,0,1105,1,1378,1102,1,758,594,101,0,0,753,1006,753,654,20101,0,753,1,21102,1,610,0,1106,0,667,21101,0,0,1,21101,621,0,0,1106,0,1463,1205,1,647,21102,1015,1,1,21101,0,635,0,1105,1,1378,21101,1,0,1,21101,646,0,0,1106,0,1463,99,1001,594,1,594,1105,1,592,1006,755,664,1102,1,0,755,1106,0,647,4,754,99,109,2,1102,1,726,757,21201,-1,0,1,21102,9,1,2,21101,697,0,3,21102,692,1,0,1106,0,1913,109,-2,2105,1,0,109,2,101,0,757,706,1201,-1,0,0,1001,757,1,757,109,-2,2105,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,255,63,127,191,159,223,95,0,173,234,76,207,34,244,39,156,140,79,254,190,57,174,184,185,249,245,55,70,218,203,103,251,220,163,232,197,142,235,216,86,123,230,46,219,226,198,69,115,252,204,116,110,137,143,227,182,196,236,206,214,238,51,113,100,243,167,154,84,166,43,117,87,183,61,187,85,237,121,199,118,250,246,228,162,157,247,124,213,62,38,125,201,111,53,92,60,155,178,179,233,212,202,222,59,152,215,177,106,138,231,94,241,50,93,158,136,102,101,42,122,253,114,77,109,58,153,47,248,171,98,56,242,139,221,108,35,107,78,181,170,68,188,186,119,120,189,172,217,126,141,229,175,49,99,71,54,168,169,239,205,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,73,110,112,117,116,32,105,110,115,116,114,117,99,116,105,111,110,115,58,10,13,10,87,97,108,107,105,110,103,46,46,46,10,10,13,10,82,117,110,110,105,110,103,46,46,46,10,10,25,10,68,105,100,110,39,116,32,109,97,107,101,32,105,116,32,97,99,114,111,115,115,58,10,10,58,73,110,118,97,108,105,100,32,111,112,101,114,97,116,105,111,110,59,32,101,120,112,101,99,116,101,100,32,115,111,109,101,116,104,105,110,103,32,108,105,107,101,32,65,78,68,44,32,79,82,44,32,111,114,32,78,79,84,67,73,110,118,97,108,105,100,32,102,105,114,115,116,32,97,114,103,117,109,101,110,116,59,32,101,120,112,101,99,116,101,100,32,115,111,109,101,116,104,105,110,103,32,108,105,107,101,32,65,44,32,66,44,32,67,44,32,68,44,32,74,44,32,111,114,32,84,40,73,110,118,97,108,105,100,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,59,32,101,120,112,101,99,116,101,100,32,74,32,111,114,32,84,52,79,117,116,32,111,102,32,109,101,109,111,114,121,59,32,97,116,32,109,111,115,116,32,49,53,32,105,110,115,116,114,117,99,116,105,111,110,115,32,99,97,110,32,98,101,32,115,116,111,114,101,100,0,109,1,1005,1262,1270,3,1262,21001,1262,0,0,109,-1,2105,1,0,109,1,21101,0,1288,0,1106,0,1263,21001,1262,0,0,1102,0,1,1262,109,-1,2105,1,0,109,5,21101,0,1310,0,1105,1,1279,22101,0,1,-2,22208,-2,-4,-1,1205,-1,1332,22101,0,-3,1,21102,1332,1,0,1106,0,1421,109,-5,2106,0,0,109,2,21101,0,1346,0,1105,1,1263,21208,1,32,-1,1205,-1,1363,21208,1,9,-1,1205,-1,1363,1105,1,1373,21102,1370,1,0,1105,1,1279,1105,1,1339,109,-2,2105,1,0,109,5,1202,-4,1,1386,20102,1,0,-2,22101,1,-4,-4,21101,0,0,-3,22208,-3,-2,-1,1205,-1,1416,2201,-4,-3,1408,4,0,21201,-3,1,-3,1106,0,1396,109,-5,2106,0,0,109,2,104,10,22102,1,-1,1,21102,1436,1,0,1105,1,1378,104,10,99,109,-2,2105,1,0,109,3,20002,594,753,-1,22202,-1,-2,-1,201,-1,754,754,109,-3,2106,0,0,109,10,21101,0,5,-5,21102,1,1,-4,21101,0,0,-3,1206,-9,1555,21102,1,3,-6,21102,1,5,-7,22208,-7,-5,-8,1206,-8,1507,22208,-6,-4,-8,1206,-8,1507,104,64,1105,1,1529,1205,-6,1527,1201,-7,716,1515,21002,0,-11,-8,21201,-8,46,-8,204,-8,1106,0,1529,104,46,21201,-7,1,-7,21207,-7,22,-8,1205,-8,1488,104,10,21201,-6,-1,-6,21207,-6,0,-8,1206,-8,1484,104,10,21207,-4,1,-8,1206,-8,1569,21102,1,0,-9,1105,1,1689,21208,-5,21,-8,1206,-8,1583,21101,1,0,-9,1105,1,1689,1201,-5,716,1588,21002,0,1,-2,21208,-4,1,-1,22202,-2,-1,-1,1205,-2,1613,21201,-5,0,1,21101,0,1613,0,1106,0,1444,1206,-1,1634,22101,0,-5,1,21102,1627,1,0,1105,1,1694,1206,1,1634,21102,2,1,-3,22107,1,-4,-8,22201,-1,-8,-8,1206,-8,1649,21201,-5,1,-5,1206,-3,1663,21201,-3,-1,-3,21201,-4,1,-4,1106,0,1667,21201,-4,-1,-4,21208,-4,0,-1,1201,-5,716,1676,22002,0,-1,-1,1206,-1,1686,21101,1,0,-4,1105,1,1477,109,-10,2105,1,0,109,11,21101,0,0,-6,21101,0,0,-8,21102,1,0,-7,20208,-6,920,-9,1205,-9,1880,21202,-6,3,-9,1201,-9,921,1724,21001,0,0,-5,1001,1724,1,1732,21002,0,1,-4,22101,0,-4,1,21101,1,0,2,21102,1,9,3,21101,0,1754,0,1106,0,1889,1206,1,1772,2201,-10,-4,1767,1001,1767,716,1767,20102,1,0,-3,1105,1,1790,21208,-4,-1,-9,1206,-9,1786,21202,-8,1,-3,1105,1,1790,22102,1,-7,-3,1001,1732,1,1796,20102,1,0,-2,21208,-2,-1,-9,1206,-9,1812,22101,0,-8,-1,1105,1,1816,22101,0,-7,-1,21208,-5,1,-9,1205,-9,1837,21208,-5,2,-9,1205,-9,1844,21208,-3,0,-1,1105,1,1855,22202,-3,-1,-1,1105,1,1855,22201,-3,-1,-1,22107,0,-1,-1,1105,1,1855,21208,-2,-1,-9,1206,-9,1869,21202,-1,1,-8,1105,1,1873,21201,-1,0,-7,21201,-6,1,-6,1105,1,1708,22101,0,-8,-10,109,-11,2106,0,0,109,7,22207,-6,-5,-3,22207,-4,-6,-2,22201,-3,-2,-1,21208,-1,0,-6,109,-7,2105,1,0,0,109,5,2101,0,-2,1912,21207,-4,0,-1,1206,-1,1930,21102,1,0,-4,21202,-4,1,1,22102,1,-3,2,21101,1,0,3,21102,1,1949,0,1105,1,1954,109,-5,2105,1,0,109,6,21207,-4,1,-1,1206,-1,1977,22207,-5,-3,-1,1206,-1,1977,21201,-5,0,-5,1106,0,2045,21202,-5,1,1,21201,-4,-1,2,21202,-3,2,3,21102,1,1996,0,1106,0,1954,21201,1,0,-5,21101,1,0,-2,22207,-5,-3,-1,1206,-1,2015,21101,0,0,-2,22202,-3,-2,-3,22107,0,-4,-1,1206,-1,2037,22101,0,-2,1,21101,0,2037,0,106,0,1912,21202,-3,-1,-3,22201,-5,-3,-5,109,-6,2105,1,0];
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

let robotOutputString = "";

const moreMemory = new Array(10000).fill(0);

code.push(...moreMemory);

// console.log(sumOfAlignmentParameters)

///////////////////////////////////////////////////////////// Day 21 Part 2

/*
 * T - Temporary Value
 * J - Jump
 *
 * A - READ-ONLY 1 Tile away ground
 * B - READ-ONLY 2 Tile away ground
 * C - READ-ONLY 3 Tile away ground
 * D - READ-ONLY 4 Tile away ground
 *
 * AND X Y  --> X AND Y => Y
 * OR X Y  --> X OR Y => Y
 * NOT X Y  --> NOT X => Y
 *
 *
 *
 */

let commands = ["NOT A J\n", "WALK\n"];

let inputStream = commands.join("");

let startingInput = 0;

const inputFunc = () => {
  let ASCIIchar = "";
  ASCIIchar = inputStream.charCodeAt(startingInput);
  startingInput += 1;
  // }
  return ASCIIchar;
};

const possibleOperator = ["NOT", "OR", "AND"];
const possibleFirstOperand = ["A","B","C","D","J","T"];
const possibileSecondOperand = ["J", "T"];

const generateSingleCommand = () => {
  return `${
    possibleOperator[Math.floor(Math.random() * possibleOperator.length)]
  } ${
    possibleFirstOperand[
      Math.floor(Math.random() * possibleFirstOperand.length)
    ]
  } ${
    possibileSecondOperand[
      Math.floor(Math.random() * possibileSecondOperand.length)
    ]
  }\n`;
};

const generateCommands = () => {
  const commands = [];
  const numberOfCommands = Math.floor(Math.random() * 16);

  for (let x = 0; x <= numberOfCommands; x++) {
    commands.push(generateSingleCommand());
  }

  commands.push("WALK\n");

  return commands;
};

let iteration = 0;

const outputB = output => {
  robotOutputString += String.fromCharCode(output);
  if (output > 1000) {
    throw [output, iteration, inputStream];
  }
};

const generateHash = (array) => {
    let string = ''
    for (value of array) {
        const split = value.split(' ')
        string += split[0].substr(0,1)
        string += split[1] ? split[1] : ''
        string += split[2] ? split[2] : ''
    }
    return string
}

const alreadyUsed = {}

let skipped = 0

const bruteForce = () => {
  while (true) {
    iteration += 1;
    if (iteration % 100 === 0) {
      console.log("Iteration number ", iteration, " skipped ", skipped);
      skipped = 0
    }
    robotOutputString = "";
    startingInput = 0;
    relativeBase = 0;
    
    commands = generateCommands();
    const hash = generateHash(commands)
    if(alreadyUsed[hash]){
        skipped+=1
        continue
    }
    alreadyUsed[hash] = 1
    inputStream = commands.join("");
    const newCode = [...code];
    processData(newCode, inputFunc, outputB, 0);
  }
};

// bruteForce();

///throwed 19357180

///PART 2

// ME A1 B2 C3 D(4) E5 F6 G7 H(8) I9 

const testSequence = [
    'OR E J\n', //Jump if terrain after jump =>  Jump = Terrain Exist => TRUE
    'OR H J\n', //Jump if can jump again => Jump => Altready TRUE or can Jump again

    'OR A T\n',  // tile on A - T is false - if exist terrain at A => TRUE
    'AND B T\n', // tile on B - If exist terrain at A AND B
    'AND C T\n', // tile on C - if exist terrain at A AND B AND C
    'NOT T T\n', // reverse A AND B AND C => NOT A OR NOT B OR NOT C

    'AND T J\n',  //Jump if there is no terrain
    'AND D J\n',  //Jump if cand land after first jump
    
    'RUN\n'
]

inputStream = testSequence.join("");

processData(code, inputFunc, outputB, 0);

console.log(robotOutputString)

// processData(code, inputFunc, outputB, 0)