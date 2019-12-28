// const testInput = ["....#", "#..#.", "#..##", "..#..", "#...."];
// const puzzleInput = [".##.#", "###..", "#...#", "##.#.", ".###."];

// const inputArray = testInput.map(val => val.split(""));

// const simulateNextStage = arrayInput => {
//   const nextStage = new Array(5).fill(0).map(val => new Array(5).fill(0));

//   const isBug = {
//     UP: (yIndex, xIndex) =>
//       arrayInput[yIndex - 1] && arrayInput[yIndex - 1][xIndex] === "#",
//     DOWN: (yIndex, xIndex) =>
//       arrayInput[yIndex + 1] && arrayInput[yIndex + 1][xIndex] === "#",
//     LEFT: (yIndex, xIndex) =>
//       arrayInput[yIndex] && arrayInput[yIndex][xIndex - 1] === "#",
//     RIGHT: (yIndex, xIndex) =>
//       arrayInput[yIndex] && arrayInput[yIndex][xIndex + 1] === "#"
//   };

//   arrayInput.forEach((arrayRow, yIndex) => {
//     arrayRow.forEach((arrayTile, xIndex) => {
//       if (arrayInput[yIndex][xIndex] === "#") {
//         let adiacentBugs = 0;
//         for (const direction in isBug) {
//           isBug[direction](yIndex, xIndex) ? (adiacentBugs += 1) : void 0;
//         }

//         if (adiacentBugs !== 1) {
//           nextStage[yIndex][xIndex] = ".";
//         } else {
//           nextStage[yIndex][xIndex] = "#";
//         }
//       }

//       if (arrayInput[yIndex][xIndex] === ".") {
//         let adiacentBugs = 0;
//         for (const direction in isBug) {
//           isBug[direction](yIndex, xIndex) ? (adiacentBugs += 1) : void 0;
//         }

//         if (adiacentBugs === 1 || adiacentBugs === 2) {
//           nextStage[yIndex][xIndex] = "#";
//         } else {
//           nextStage[yIndex][xIndex] = ".";
//         }
//       }
//     });
//   });

//   return nextStage;
// };

// const stageSet = new Set();

// let currentStage = inputArray;

// let firstRepeatingStage = [];
// let firstRepeatingStageString = "";

// while (true) {
//   let reducedStage = currentStage
//     .map(tilesArray => tilesArray.join(""))
//     .join("");
//   if (stageSet.has(reducedStage)) {
//     firstRepeatingStage = currentStage;
//     firstRepeatingStageString = reducedStage;
//     break;
//   } else {
//     stageSet.add(reducedStage);
//   }
//   currentStage = simulateNextStage(currentStage);
// }

// let biodiversityRating = 0;

// for (let charIndex in firstRepeatingStageString) {
//   if (firstRepeatingStageString.charAt(charIndex) === "#") {
//     biodiversityRating += Math.pow(2, charIndex);
//   }
// }

// console.log(biodiversityRating); /// 1151290

//// part 2

const testInput = ["....#", "#..#.", "#..##", "..#..", "#...."];
const puzzleInput = [".##.#", "###..", "#...#", "##.#.", ".###."];

const inputArray = puzzleInput.map(val => val.split(""));

const initialLevelsArray = new Array(500)
  .fill(0)
  .map(val => new Array(5).fill(0).map(val => new Array(5).fill('.')));

initialLevelsArray[250] = inputArray;

const simulateNextStage = levelsArray => {
  const nextLevels = new Array(500)
    .fill(0)
    .map(val => new Array(5).fill(0).map(val => new Array(5).fill('.')));

  const isBug = {
    UP: (yIndex, xIndex, level) => {
      if (yIndex === 0) {
        return levelsArray[level - 1][1][2] === "#" ? 1 : 0
      }

      if (yIndex === 3 && xIndex === 2) {
        let adiacentInOtherLevel = 0;
        for (let x = 0; x <= 4; x++) {
          if (levelsArray[level + 1][4][x] === "#") {
            
            adiacentInOtherLevel += 1;
          }
        }
        
        return adiacentInOtherLevel;
      }

      if (
        levelsArray[level][yIndex - 1] &&
        levelsArray[level][yIndex - 1][xIndex] === "#"
      ) {
        return 1;
      }
      return 0;
    },

    DOWN: (yIndex, xIndex, level) => {
      if (yIndex === 4) {
        return levelsArray[level - 1][3][2] === "#" ? 1 : 0
      }

      if (yIndex === 1 && xIndex === 2) {
        let adiacentInOtherLevel = 0;
        for (let x = 0; x <= 4; x++) {
          if (levelsArray[level + 1][0][x] === "#") {
            adiacentInOtherLevel += 1;
          }
        }
        return adiacentInOtherLevel;
      }

      if (
        levelsArray[level][yIndex + 1] &&
        levelsArray[level][yIndex + 1][xIndex] === "#"
      ) {
        return 1;
      }
      return 0;
    },

    LEFT: (yIndex, xIndex, level) => {
      if (xIndex === 0) {
        return levelsArray[level - 1][2][1] === "#" ? 1 : 0
      }

      if (yIndex === 2 && xIndex === 3) {
        let adiacentInOtherLevel = 0;
        for (let x = 0; x <= 4; x++) {
          if (levelsArray[level + 1][x][4] === "#") {
            adiacentInOtherLevel += 1;
          }
        }
        return adiacentInOtherLevel;
      }

      if (
        levelsArray[level][yIndex] &&
        levelsArray[level][yIndex][xIndex - 1] === "#"
      ) {
        return 1;
      }
      return 0;
    },

    RIGHT: (yIndex, xIndex, level) => {
      if (xIndex === 4) {
        return levelsArray[level - 1][2][3] === "#" ? 1 : 0
      }

      if (yIndex === 2 && xIndex === 1) {
        let adiacentInOtherLevel = 0;
        for (let x = 0; x <= 4; x++) {
          if (levelsArray[level + 1][x][0] === "#") {
            adiacentInOtherLevel += 1;
          }
        }
        return adiacentInOtherLevel;
      }

      if (
        levelsArray[level][yIndex] &&
        levelsArray[level][yIndex][xIndex + 1] === "#"
      ) {
        return 1;
      }
      return 0;
    }
  };

  levelsArray.forEach((arrayInput, level) => {
    arrayInput.forEach((arrayRow, yIndex) => {
      arrayRow.forEach((arrayTile, xIndex) => {
        if (level === 0 || level === 499) {
          return;
        }

        if (yIndex === 2 && xIndex === 2) {
          return;
        }
        if (arrayInput[yIndex][xIndex] === "#") {
          let adiacentBugs = 0;
          for (const direction in isBug) {
            adiacentBugs += isBug[direction](yIndex, xIndex, level);
          }

          if (adiacentBugs !== 1) {
            nextLevels[level][yIndex][xIndex] = ".";
          } else {
            nextLevels[level][yIndex][xIndex] = "#";
          }
          
        }

        if (arrayInput[yIndex][xIndex] === ".") {
          let adiacentBugs = 0;
          for (const direction in isBug) {
            adiacentBugs += isBug[direction](yIndex, xIndex, level);
          }

          if (adiacentBugs === 1 || adiacentBugs === 2) {
            nextLevels[level][yIndex][xIndex] = "#";
          } else {
            nextLevels[level][yIndex][xIndex] = ".";
          }
        }
      });
    });
  });

  return nextLevels;
};

let currentStage = initialLevelsArray;

for (let x = 1; x <= 200; x++) {
  currentStage = simulateNextStage(currentStage);
}

const bugs = currentStage
  .map(array =>
    array
      .map(arrayRow => arrayRow.filter(arrayTile => arrayTile === "#").length)
      .reduce((acc, val) => (acc += val))
  )
  .reduce((acc, val) => (acc += val));

console.log(bugs);
