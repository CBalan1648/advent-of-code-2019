const testInput = [
    '         A           ',
    '         A           ',
    '  #######.#########  ',
    '  #######.........#  ',
    '  #######.#######.#  ',
    '  #######.#######.#  ',
    '  #######.#######.#  ',
    '  #####  B    ###.#  ',
    'BC...##  C    ###.#  ',
    '  ##.##       ###.#  ',
    '  ##...DE  F  ###.#  ',
    '  #####    G  ###.#  ',
    '  #########.#####.#  ',
    'DE..#######...###.#  ',
    '  #.#########.###.#  ',
    'FG..#########.....#  ',
    '  ###########.#####  ',
    '             Z       ',
    '             Z       ',
]

const anotherTestInput = [
    '                   A               ',
    '                   A               ',
    '  #################.#############  ',
    '  #.#...#...................#.#.#  ',
    '  #.#.#.###.###.###.#########.#.#  ',
    '  #.#.#.......#...#.....#.#.#...#  ',
    '  #.#########.###.#####.#.#.###.#  ',
    '  #.............#.#.....#.......#  ',
    '  ###.###########.###.#####.#.#.#  ',
    '  #.....#        A   C    #.#.#.#  ',
    '  #######        S   P    #####.#  ',
    '  #.#...#                 #......VT',
    '  #.#.#.#                 #.#####  ',
    '  #...#.#               YN....#.#  ',
    '  #.###.#                 #####.#  ',
    'DI....#.#                 #.....#  ',
    '  #####.#                 #.###.#  ',
    'ZZ......#               QG....#..AS',
    '  ###.###                 #######  ',
    'JO..#.#.#                 #.....#  ',
    '  #.#.#.#                 ###.#.#  ',
    '  #...#..DI             BU....#..LF',
    '  #####.#                 #.#####  ',
    'YN......#               VT..#....QG',
    '  #.###.#                 #.###.#  ',
    '  #.#...#                 #.....#  ',
    '  ###.###    J L     J    #.#.###  ',
    '  #.....#    O F     P    #.#...#  ',
    '  #.###.#####.#.#####.#####.###.#  ',
    '  #...#.#.#...#.....#.....#.#...#  ',
    '  #.#####.###.###.#.#.#########.#  ',
    '  #...#.#.....#...#.#.#.#.....#.#  ',
    '  #.###.#####.###.###.#.#.#######  ',
    '  #.#.........#...#.............#  ',
    '  #########.###.###.#############  ',
    '           B   J   C               ',
    '           U   P   P               ',
]


const puzzleInput = [
    '                                       X       Q J     A J           T     Z   I                                     ',
    '                                       Y       L X     A J           V     L   Q                                     ',
    '  #####################################.#######.#.#####.#.###########.#####.###.###################################  ',
    '  #...#.......#.#.....#...#.#.#...#...#.#.......#.......#.#.....#.....#...#...#.#.#...#...#.#...#...........#.....#  ',
    '  #.#.#######.#.###.#####.#.#.###.#.#.#.#.#######.#####.#.#.###.###.###.#.###.#.#.#.###.###.#.###.###.#.#####.#.###  ',
    '  #.#.#.#...#...#...#.......#.#.....#...#...#.#...#...#.#.#.#...#.#.#.#.#.....#...................#.#.#.#.....#.#.#  ',
    '  #.###.#.#####.###.#####.###.###.#########.#.###.###.#.#.#.#.###.#.#.#.#########.#######.###.#####.#########.###.#  ',
    '  #.........#.......#.....................#.....#.#.....#...#.....#...#.#...#.#.#.....#.#.#.......#...#...........#  ',
    '  #####.###########.#####.###.#########.#######.#######.#####.#####.###.#.###.#.#.#####.#.###.#.###.#.#####.#.###.#  ',
    '  #.........#...#.#.......#.#...#.#.#...#...........#...#...#...#.....#...#...#.........#.#.#.#.....#.......#.#.#.#  ',
    '  #####.#.###.###.#.#.#####.#.###.#.#.###.###########.###.#.###.#.#.#####.#.#.#.###########.###.###.###.###.###.###  ',
    '  #.#.#.#.#.........#.#.........#.....#.#.........#.#...#.#.#...#.#.#.....#.#.#...............#...#.#.#...#.......#  ',
    '  #.#.###.###.#######.###############.#.#####.#.###.###.#.#.#.###.#######.#.#.#.#.#.#.###.###.#.#.#.#.#####.#######  ',
    '  #.......#.#.#...#.#.#.#...#.....#.#.......#.#.#.......#.#.....#...#.......#.#.#.#.#...#...#.#.#.#...#.#.#.#.....#  ',
    '  #######.#.#####.#.###.###.###.###.#.#######.#.###.#.###.#########.###.#####.###.#####################.#.#####.#.#  ',
    '  #.......#.....#.#.#.#.....#.#...#.......#...#.#.#.#...#...#.......#.#.....#.#.#...#.#.............#...#...#.#.#.#  ',
    '  #######.###.###.#.#.#.###.#.###.#.#.#########.#.###.#.#.#######.#.#.#.#####.#.#.###.#.###.#########.###.###.#.###  ',
    '  #.#.#.#.#.#...#...#...#...........#.....#.........#.#.#.#.....#.#...#.....#.#.#.......#...................#.#...#  ',
    '  #.#.#.#.#.#.#.###.#####.#.#.###.#########.###.#######.#.###.###.#####.#####.#.#.###.#.#####.#.###.###.#####.#.###  ',
    '  #.......#.#.#.#.#...#.#.#.#.#.#.....#.#.#.#...#.#.....#.....#.....#...#...#.#...#.#.#.....#.#...#...#...#.#.#...#  ',
    '  #####.###.#.###.###.#.###.###.###.###.#.#.###.#.#.#######.#.#.#.#########.#.###.#.###.#######.###########.#.#.#.#  ',
    '  #.#.......#...#.#.....#...#.#...........#.#.#.#.....#.#...#.#.#...#.#.......#.....#.#...#.......#...........#.#.#  ',
    '  #.###.#####.#.#.###.#######.###.###########.#.#.#.###.#.#######.###.#.#####.#.###.#.#.#######.#.###.#.#.#####.###  ',
    '  #.......#...#.#.#.#...#.#.........#.#.....#...#.#.#.#.....#.........#.#.....#.#.....#.#...#.#.#.....#.#.#.......#  ',
    '  #.###.###.#####.#.#.###.###.#.#.###.#####.#.###.###.#####.###.#.#######.###.#.#####.#####.#.#####.###.#####.#.###  ',
    '  #.#.#.#...#.#.......#...#.#.#.#.#...#.#.......#.....#.......#.#...#.....#...#...#.#...#.....#...#.#.#.......#...#  ',
    '  #.#.###.#.#.#####.#####.#.#####.###.#.#.###.#######.###.#.#####.#######.###.#.###.#######.#####.###.#####.#######  ',
    '  #.....#.#...#...#.#.#.......#.#.#.....#.#...#.......#.#.#.#...#.#.....#.#...#.........#...#.#...#...#...#.#.#...#  ',
    '  ###.#######.###.#.#.###.#.###.#.#####.#####.#.#.#.###.#.#####.#.#####.#####.###.#.#.###.#.#.###.#.###.###.#.###.#  ',
    '  #.......#...#.#.....#.#.#.#...........#.....#.#.#.....#...#...........#.....#...#.#...#.#...#...........#.#.#...#  ',
    '  ###.###.###.#.#####.#.#.###.#####.#######.#########.#####.#########.###.#######.#########.###.#.#######.###.###.#  ',
    '  #...#.#.#.#.....#.#.#.#...#.#    B       X         K     Z         J   Q       X    #...#...#.#.#.....#.#...#...#  ',
    '  #.#.#.###.#.#####.#.#.#.#####    B       T         H     P         W   J       Y    #.###.#####.#.#.#####.###.#.#  ',
    '  #.#...#.#.....#.#.....#...#.#                                                       #.#.#...#...#.#...#.#.#...#.#  ',
    '  ###.#.#.#####.#.#.#.###.###.#                                                       #.#.#.###.#.###.###.#.###.###  ',
    '  #.#.#.#...#.#.#.#.#...#.....#                                                     XJ..#.......#.#.#...#.......#.#  ',
    '  #.#.###.###.#.#.###.#####.###                                                       #.#.#.#.#.###.#.###.#######.#  ',
    '  #...........#................LO                                                     #...#.#.#.............#.#...#  ',
    '  #.#######.#.#.#.###.###.###.#                                                       #.#.###.#.#.###.###.###.###.#  ',
    '  #...#...#.#.#.#.#...#.....#.#                                                       #.#...#.#.#.#...#...#...#...#  ',
    '  ###.#######.#.#####.#.#####.#                                                       #######.###.#####.#.#.#.###.#  ',
    '  #.#.....#.......#.#.#...#...#                                                       #.#...#...#.#.#...#...#......PF',
    '  #.###.###.#.#.###.###.#.#####                                                       #.###.#######.###############  ',
    'QS......#.#.#.#.#.....#.#.#...#                                                       #...#.........#..............QJ',
    '  #######.###.#.#####.#####.###                                                       #.#.#.#######.#.#.#####.#.#.#  ',
    '  #.........#.#...#...........#                                                       #.#.#.......#...#.....#.#.#.#  ',
    '  #.#.###.#############.#.#.###                                                       #.#.#######.###.#.#.###.###.#  ',
    'WZ..#.#.......#.#.#.#...#.#...#                                                     JX..#...#...#...#.#.#.#...#.#.#  ',
    '  ###.#######.#.#.#.###.#.#.#.#                                                       ###.#.#.#.#.#############.###  ',
    '  #...#...#.#.#.......#.#.#.#..QS                                                     #...#...#.....#.#.#...#.....#  ',
    '  #######.#.#.###.###.#.#.#.#.#                                                       ###############.#.###.###.###  ',
    '  #...#...#.#.......#...#.#.#.#                                                     WZ..#.#...............#.......#  ',
    '  #.#####.#.###################                                                       #.#.#.###.###.###.#.#.#.###.#  ',
    '  #.....#...#.#...............#                                                       #.......#.#...#...#...#...#..NV',
    '  #.###.#.#.#.#.###.#.###.###.#                                                       #########.#######.###########  ',
    '  #.#.....#.......#.#.#.#.#...#                                                     PJ......#.#...#...#.#.........#  ',
    '  #.#####.#.#.#.#######.#.#.#.#                                                       ###.#.#.#####.###.#####.#.###  ',
    'ZS......#.#.#.#.......#...#.#.#                                                       #...#.#.....#.#.#.#.....#....LO',
    '  #.###########.###.#.#.#####.#                                                       ###.###.###.#.#.#####.#####.#  ',
    '  #.#.#...#.....#.#.#.#...#.#..IQ                                                     #.........#.#.#.#...#.....#.#  ',
    '  ###.#.#######.#.#########.###                                                       #######.#####.#.###.#####.###  ',
    '  #...#.......#.#...#...#......ZS                                                     #...#.....................#.#  ',
    '  #.#.#.#.#######.#.#.#####.#.#                                                       #.#########################.#  ',
    '  #.#.#.#.....#...#...#...#.#.#                                                     TV..#...#...#.................#  ',
    '  #.#.#.#.#########.#####.###.#                                                       #.#.#.###.#.###########.#.#.#  ',
    '  #.#...#.......#.........#...#                                                       #.#.#.....#.........#.#.#.#..KH',
    '  #.###.###.#.#####.#####.#.###                                                       #.#.#####.#.#########.#.###.#  ',
    'GE....#.#...#...........#...#.#                                                       #.#.....#.........#.......#.#  ',
    '  #.###.###.###.###.#########.#                                                       #.#####.###.###########.###.#  ',
    '  #.#.#...#...#...#.#.#...#....QW                                                     #.........#.#...#...#.#.#...#  ',
    '  ###.#########.#####.#.#.#.###                                                       #############.###.###.#.#.#.#  ',
    '  #.#.#.....#.#.#.#.....#.#...#                                                       #.......#.#...........#.#.#.#  ',
    '  #.#.###.###.###.#.#.###.###.#                                                       #.###.#.#.#.#.#######.#######  ',
    '  #.#.#.#.#.#.......#.#.....#.#                                                       #...#.#.....#.#.......#......QW',
    '  #.#.#.#.#.#.###.###.#####.#.#                                                       #.#####.#.#.#.#.###########.#  ',
    'ST............#.#.#.#.#.#.....#                                                     NV....#.#.#.#.#.#.#.......#...#  ',
    '  #########.#.#.###.###.#######                                                       #.###.#.#.#####.#.#.###.#.#.#  ',
    '  #.......#.#.#.....#.........#                                                       #.....#.#.#.......#.#.....#.#  ',
    '  ###.#.#######.###.#.#####.#.#                                                       #######.#######.#############  ',
    '  #...#.#...#.....#.....#...#.#                                                     ZL....#.......#.......#...#.#..XJ',
    '  #.###.#.#.###.###.###.#####.#                                                       #.#########.###########.#.#.#  ',
    '  #...#...#.....#.#...#.#......QL                                                     #.......#.#.#.......#.....#.#  ',
    '  ###.#.#.#.#.#.#.#.###.#.#.#.#                                                       #.#######.#######.#####.###.#  ',
    'HE....#.#.#.#.#...#...#.#.#.#.#                                                       #.#.#...........#.........#.#  ',
    '  #.#.###.###.#.###.###.#.###.#                                                       #.#.#.#.#.#.#####.###.###.#.#  ',
    '  #.#.#...#...#.#.#.#.#.#.#...#                                                       #.....#.#.#.........#...#...#  ',
    '  #.###.#####.###.#.#.#.###.#.#      G       P   S       O H             J   H        #.###.#########.###.###.#####  ',
    '  #.#...#.........#...#...#.#.#      E       F   T       H E             J   G        #...#.#...#.....#.#...#.....#  ',
    '  ###.#.###.#.#.###.#.###############.#######.###.#######.#.#############.###.#########.###.###.#.#.###.#.#######.#  ',
    '  #...#.#...#.#.#.#.#...#.....#.......#.#.#.....#.#.....#.#...........#.#.#.........#.....#.#.....#.#.....#.#.#.#.#  ',
    '  ###.#.###.###.#.#.#######.#######.###.#.#.###.#.###.#.#.#######.#.###.#.#######.###.#.#.#####.#####.###.#.#.#.###  ',
    '  #...#...#.#.....#.#.#.............#.#.....#.....#...#...#.......#...#.#.....#.#...#.#.#...#.....#...#.........#.#  ',
    '  #.#.###.#.#.###.###.###.#####.###.#.#.###.#####.#.#######.#########.#.#.###.#.#.#########.###.#.###.###.#.#.###.#  ',
    '  #.#...#.#.#.#.......#.#.#.#.#...#...#.#.......#.#.#...#...........#.#.....#.#.#.#.......#.#...#.#...#...#.#.#.#.#  ',
    '  #.#.#####.#.###.#.#.#.###.#.#####.#########.#.###.#.#.#.###.###.#####.#.#####.#.#.#############.#.#.###.###.#.#.#  ',
    '  #.#...#...#...#.#.#.#.....#.#...#.#.#.#.....#.#...#.#.#.#...#.......#.#.....#...........#.#.#.#.#.#.#.....#.....#  ',
    '  ###.#.#######.#.#########.#.###.#.#.#.###.#####.#.#.#.#########.#.#####.#####.###.###.###.#.#.#.#.#.#.###.###.#.#  ',
    '  #...#.......#.#.#...#.#.............#.........#.#...#...#.#.....#...#.#.#...#.#.#...#...#.....#.#.#.#.#...#...#.#  ',
    '  #.#.###.###########.#.#.#.#.#####.#######.#####.#######.#.###.#######.#.#.#.#.#.#####.#####.#####.#####.#.###.###  ',
    '  #.#.#.#.#.#.#...#.......#.#...#.#.#.#.........#.#.....#...#.......#.#...#.#.....#.#.#.........#.#.....#.#.#.....#  ',
    '  #.#.#.#.#.#.###.###.###.###.###.#.#.#####.#######.###.#.#.#.###.###.###.#.#.###.#.#.#####.###.#.#.#####.###.#####  ',
    '  #.#.#.....#...........#...#.#...#.#.......#.....#.#.#...#.#.#...#.#.....#.#.#.#.....#...#...#...#...#...#.......#  ',
    '  #.#.#####.###.#.#####.###.#####.#.###.###.###.#.#.#.###########.#.#.#.###.###.#####.#.###.###.#.#.#.#.###.#.#.###  ',
    '  #.#.#.....#...#.#.......#.#.........#.#...#...#...#.....#...#.#...#.#.#.........#.....#...#...#.#.#.#...#.#.#...#  ',
    '  ###############.#####.###########.###.#.#.#######.#.#######.#.#.###.#.#.###.#####.#.###.#.#######.#########.#.###  ',
    '  #.....#.........#.#.#...#...........#.#.#.....#...#.#.#.#.........#.#.#.#.......#.#.#.#.#.......#.....#.#...#.#.#  ',
    '  #####.#.#####.#.#.#.#########.###.#######.###.###.###.#.###.###.#####.###.#####.#####.###.#############.#.###.#.#  ',
    '  #...........#.#.#.....#.......#.....#.#.#.#...#.#.#.#.....#.#...#.#.....#...#...........#.#.#.......#.....#.....#  ',
    '  #.#####.#####.###.###.#####.###.#.#.#.#.###.###.#.#.#.#.#######.#.#####.#.#####.###.#.#####.#.#######.###.#######  ',
    '  #.#.......#.#.#...#...........#.#.#...#.......#.......#.#.#.......#...#.#.....#...#.#.#...#.......#...#.........#  ',
    '  ###.###.#.#.###.#.###.###########.###.#####.###.#####.###.###.#.#####.#.###.#.#########.###.#.###########.#.###.#  ',
    '  #...#...#.#.....#...#...#.#.#.#.....#.#.......#.#...........#.#.#.....#.#...#.#...#.......#.#...#.#...#.#.#...#.#  ',
    '  #.#####.#####.#.#.#######.#.#.###.#######.#######.###.###.#####.#.###.#.#.#######.#######.###.###.#.###.###.#.#.#  ',
    '  #.#.#...#.....#.#...#.........#...#.....#.#.#.....#.#...#.#.#.#.#...#...#.#.#.#.#...#.....................#.#.#.#  ',
    '  #.#.#.###.###.#.#.###.#.#.#.#.###.#.###.#.#.#.###.#.#######.#.#.###.###.#.#.#.#.#.###.###.#.#.#####.#.#.#####.###  ',
    '  #.#.....#.#...#.#...#.#.#.#.#.......#...#...#.#.........#.......#.....#.#...............#.#.#.....#.#.#.....#...#  ',
    '  #####################################.###.#.#######.#########.#.#.###########.###################################  ',
    '                                       Z   O J       B         Z P H           X                                     ',
    '                                       P   H W       B         Z J G           T                                     ',
]


// const arrayInputInitial = testInput.map(array => array.split(''))

// const arrayInput = [...arrayInputInitial].map(val => [...val])

// const mapHeight = arrayInput.length
// const mapWidth = arrayInput[0].length
// const mapPerimeter = 5

// arrayInput.forEach((arrayRow, yIndex) => {
//     arrayRow.forEach((arrayTile, xIndex) => {

//         const occupied = {
//             UP: () => arrayInput[yIndex - 1] && arrayInput[yIndex - 1][xIndex],
//             DOWN: () => arrayInput[yIndex + 1] && arrayInput[yIndex + 1][xIndex],
//             LEFT: () => arrayInput[yIndex] && arrayInput[yIndex][xIndex - 1],
//             RIGHT: () => arrayInput[yIndex] && arrayInput[yIndex][xIndex + 1],
//         }

//         const opposite = {
//             UP: 'DOWN',
//             DOWN: 'UP',
//             LEFT: 'RIGHT',
//             RIGHT: 'LEFT'
//         }

//         const coordinates = {
//             UP: () => [yIndex - 1, xIndex],
//             DOWN: () => [yIndex + 1, xIndex],
//             LEFT: () => [yIndex, xIndex - 1],
//             RIGHT: () => [yIndex, xIndex + 1],
//         }

//         const LTR = {
//             RIGHT: (direction) => arrayTile + occupied[direction](),
//             LEFT: (direction) => occupied[direction]() + arrayTile,
//             UP: (direction) => occupied[direction]() + arrayTile,
//             DOWN: (direction) => arrayTile + occupied[direction](),
//         }


//         if (arrayTile.match(/[A-Z]/i)) {
//             for (const direction in occupied) {
//                 if (occupied[direction]() && occupied[direction]().match(/[A-Z]/i) && occupied[opposite[direction]]() === ".") {
//                     arrayInput[yIndex][xIndex] = " "

//                    

//                     arrayInput[coordinates[opposite[direction]]()[0]][coordinates[opposite[direction]]()[1]] = LTR[direction](direction)
//                     arrayInput[coordinates[direction]()[0]][coordinates[direction]()[1]] = " "
//                 }
//             }
//         }

//     })
// })

// console.log(arrayInput.map(array => array.join()))

// const getPosition = (targetArray, findSymbol, exclude = [0, 0]) => {

   

//     let yPos = targetArray.findIndex(val => val.includes(findSymbol))

//     let xPos = targetArray[yPos].findIndex((val, index) => {

//         if (index === exclude[1] && yPos === exclude[0]) {
//             return false
//         }
//         return val === findSymbol
//     })

//     if (xPos === -1) {
//         yPos = targetArray.findIndex((val, index) => {
//             if (index === exclude[0]) {
//                 return false
//             }

//             return val.includes(findSymbol)
//         })

//         xPos = targetArray[yPos].findIndex((val, index) => {
//             return val === findSymbol
//         })
//     }


//     return [yPos, xPos]
// }


// let currentLowest = 2000



// const getShortestDistanceTo = (startPosition, prevPosition = [-1, -1], deep = 0, visited = {}, target, solutions = [], startDistance) => {
//     if (deep > currentLowest) {
//         return
//     }

//     visited[`${startPosition[0]},${startPosition[1]}`] = 1

//     const [yPos, xPos] = startPosition;
//     const [yPrevPos, xPrevPos] = prevPosition

//     // if(arrayInput[yPos][xPos].match(/[a-z]/i) && arrayInput[yPos][xPos] !== "AA"){
//     //     if(arrayInput[yPos][xPos] === "ZZ") {
//     //         solutions.push(deep+1)
//     //         if(deep+1 < currentLowest){
//     //             currentLowest = deep+1
//     //         }
//     //         console.log(solutions[solutions.length-1])
//     //         return
//     //     }
//     //     getShortestDistanceTo(getPosition(arrayInput,arrayInput[yPos][xPos],startPosition), startPosition, deep + 1, visited, target, solutions, startDistance)
//     // }

//     const occupied = {
//         UP: () => arrayInput[yPos - 1] && arrayInput[yPos - 1][xPos],
//         DOWN: () => arrayInput[yPos + 1] && arrayInput[yPos + 1][xPos],
//         LEFT: () => arrayInput[yPos] && arrayInput[yPos][xPos - 1],
//         RIGHT: () => arrayInput[yPos] && arrayInput[yPos][xPos + 1],
//     }

//     const coordinates = {
//         UP: () => [yPos - 1, xPos],
//         DOWN: () => [yPos + 1, xPos],
//         LEFT: () => [yPos, xPos - 1],
//         RIGHT: () => [yPos, xPos + 1],
//     }


//     for (const direction in occupied) {
//         const [dirY, dirX] = coordinates[direction]()
//         if (dirX === xPrevPos && dirY === yPrevPos) {
//             continue
//         }

//         const found = occupied[direction]()

//         if (found === target) {
//             solutions.push(deep+1)
//         }

//         if (found === '#') { continue }

//         if (found.match(/[a-z]/i)) {

//             continue
//             getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
//         }
//         if (found === '.') {
//             getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
//         }
//     }

//     if (solutions.length > 0) {
//         return Math.min(...solutions)
//     }
//     return 999999999
// }

// const portals = new Set()

// const getAllPortals = () => {
//     arrayInput.forEach(arrayRow => {
//         arrayRow.forEach(arrayTile => {
//             if (arrayTile.match(/[a-z]/i)) {
//                 portals.add(arrayTile)
//             }
//         })
//     })
// }

// // console.log(getShortestDistanceTo(getPosition(arrayInput, "AA"),[-1,-1],1, {}, "ZZ"))

// getAllPortals()

// const distances = new Map()

// portals.forEach(portalA => {
//     portals.forEach(portalB => {
//         if (portalA === portalB) {
//             return
//         }
//         const positionOne = getPosition(arrayInput, portalA)
//         if(portalA === "AA" || portalA === "ZZ" ){
//             distances.set(`${portalA}-${portalB}`,getShortestDistanceTo(positionOne, [-1, -1], 1, {}, portalB))
//             return
//         }
//         const positionTwo = getPosition(arrayInput, portalA, positionOne)

//         distances.set(`${portalA}-${portalB}`, Math.min(getShortestDistanceTo(positionOne, [-1, -1], 1, {}, portalB),getShortestDistanceTo(positionTwo, [-1, -1], 1, {}, portalB)))
//     })
// })

// distances.forEach((value, key) => {
//     if (value === 999999999) {
//         distances.delete(key)
//     }
// })

// const startingRoutes = []

// distances.forEach((value, key) => {
//     if(key.split('-')[0] === "AA"){
//         startingRoutes.push(key)
//     }

// })

// console.log(distances)
// let bestResult = 99999999999


// const results = []

// const computeRoute = (route, alreadyUsed = [], steps = 0) => {
//     const newAlreadyUsed = alreadyUsed.length === 0 ? [] : [...alreadyUsed]
//     newAlreadyUsed.push(route)
    
//     const newSteps = steps + distances.get(route)

//     if(newSteps>bestResult){
//         return 
//     }

//     if(newAlreadyUsed.length > portals.size){
//         return
//     }

//     const possibleNextRoute = []

//     const routeEnd = route.split('-')[1]

//     if(routeEnd === "ZZ"){
//         bestResult = Math.min(bestResult, newSteps)
//         console.log(bestResult)
//         results.push(newSteps)
//         return 
//     }

//     distances.forEach((value, key) => {
//         if(!newAlreadyUsed.includes(key) && key.split('-')[0] === routeEnd){
//             possibleNextRoute.push(key)
//         }

    
//     })

//     possibleNextRoute.forEach(newRoute => {
//         computeRoute(newRoute, newAlreadyUsed, newSteps)
//     })

// }



// startingRoutes.forEach(startingRoute => {
//     computeRoute(startingRoute,[],0)
// })

// console.log(Math.min(...results)-1)

//// 514

//// part 2

const yetAnotherInput = [
'             Z L X W       C                 ',
'             Z P Q B       K                 ',
'  ###########.#.#.#.#######.###############  ',
'  #...#.......#.#.......#.#.......#.#.#...#  ',
'  ###.#.#.#.#.#.#.#.###.#.#.#######.#.#.###  ',
'  #.#...#.#.#...#.#.#...#...#...#.#.......#  ',
'  #.###.#######.###.###.#.###.###.#.#######  ',
'  #...#.......#.#...#...#.............#...#  ',
'  #.#########.#######.#.#######.#######.###  ',
'  #...#.#    F       R I       Z    #.#.#.#  ',
'  #.###.#    D       E C       H    #.#.#.#  ',
'  #.#...#                           #...#.#  ',
'  #.###.#                           #.###.#  ',
'  #.#....OA                       WB..#.#..ZH',
'  #.###.#                           #.#.#.#  ',
'CJ......#                           #.....#  ',
'  #######                           #######  ',
'  #.#....CK                         #......IC',
'  #.###.#                           #.###.#  ',
'  #.....#                           #...#.#  ',
'  ###.###                           #.#.#.#  ',
'XF....#.#                         RF..#.#.#  ',
'  #####.#                           #######  ',
'  #......CJ                       NM..#...#  ',
'  ###.#.#                           #.###.#  ',
'RE....#.#                           #......RF',
'  ###.###        X   X       L      #.#.#.#  ',
'  #.....#        F   Q       P      #.#.#.#  ',
'  ###.###########.###.#######.#########.###  ',
'  #.....#...#.....#.......#...#.....#.#...#  ',
'  #####.#.###.#######.#######.###.###.#.#.#  ',
'  #.......#.......#.#.#.#.#...#...#...#.#.#  ',
'  #####.###.#####.#.#.#.#.###.###.#.###.###  ',
'  #.......#.....#.#...#...............#...#  ',
'  #############.#.#.###.###################  ',
'               A O F   N                     ',
'               A A D   M                     ',
]


const arrayInputInitial = puzzleInput.map(array => array.split(''))

const arrayInput = [...arrayInputInitial].map(val => [...val])

const mapHeight = arrayInput.length
const mapWidth = arrayInput[0].length
const mapPerimeter = 10

arrayInput.forEach((arrayRow, yIndex) => {
    arrayRow.forEach((arrayTile, xIndex) => {

        const occupied = {
            UP: () => arrayInput[yIndex - 1] && arrayInput[yIndex - 1][xIndex],
            DOWN: () => arrayInput[yIndex + 1] && arrayInput[yIndex + 1][xIndex],
            LEFT: () => arrayInput[yIndex] && arrayInput[yIndex][xIndex - 1],
            RIGHT: () => arrayInput[yIndex] && arrayInput[yIndex][xIndex + 1],
        }

        const opposite = {
            UP: 'DOWN',
            DOWN: 'UP',
            LEFT: 'RIGHT',
            RIGHT: 'LEFT'
        }

        const coordinates = {
            UP: () => [yIndex - 1, xIndex],
            DOWN: () => [yIndex + 1, xIndex],
            LEFT: () => [yIndex, xIndex - 1],
            RIGHT: () => [yIndex, xIndex + 1],
        }

        const LTR = {
            RIGHT: (direction) => arrayTile + occupied[direction](),
            LEFT: (direction) => occupied[direction]() + arrayTile,
            UP: (direction) => occupied[direction]() + arrayTile,
            DOWN: (direction) => arrayTile + occupied[direction](),
        }


        if (arrayTile.match(/[A-Z]/i)) {
            for (const direction in occupied) {
                if (occupied[direction]() && occupied[direction]().match(/[A-Z]/i) && occupied[opposite[direction]]() === ".") {
                    arrayInput[yIndex][xIndex] = " "

                    const type = yIndex > mapHeight / mapPerimeter && yIndex < mapHeight - mapHeight / mapPerimeter &&
                    xIndex > mapWidth / mapPerimeter && xIndex < mapWidth - mapWidth / mapPerimeter? "1" : "2"

                    arrayInput[coordinates[opposite[direction]]()[0]][coordinates[opposite[direction]]()[1]] = LTR[direction](direction)+type
                    arrayInput[coordinates[direction]()[0]][coordinates[direction]()[1]] = " "
                }
            }
        }

    })
})

const getPosition = (targetArray, findSymbol, exclude = [0, 0]) => {

   

    let yPos = targetArray.findIndex(val => val.includes(findSymbol))

    let xPos = targetArray[yPos].findIndex((val, index) => {

        if (index === exclude[1] && yPos === exclude[0]) {
            return false
        }
        return val === findSymbol
    })

    if (xPos === -1) {
        yPos = targetArray.findIndex((val, index) => {
            if (index === exclude[0]) {
                return false
            }

            return val.includes(findSymbol)
        })

        xPos = targetArray[yPos].findIndex((val, index) => {
            return val === findSymbol
        })
    }


    return [yPos, xPos]
}


let currentLowest = 2000



const getShortestDistanceTo = (startPosition, prevPosition = [-1, -1], deep = 0, visited = {}, target, solutions = [], startDistance) => {
    if (deep > currentLowest) {
        return
    }

    visited[`${startPosition[0]},${startPosition[1]}`] = 1

    const [yPos, xPos] = startPosition;
    const [yPrevPos, xPrevPos] = prevPosition

    // if(arrayInput[yPos][xPos].match(/[a-z]/i) && arrayInput[yPos][xPos] !== "AA"){
    //     if(arrayInput[yPos][xPos] === "ZZ") {
    //         solutions.push(deep+1)
    //         if(deep+1 < currentLowest){
    //             currentLowest = deep+1
    //         }
    //         console.log(solutions[solutions.length-1])
    //         return
    //     }
    //     getShortestDistanceTo(getPosition(arrayInput,arrayInput[yPos][xPos],startPosition), startPosition, deep + 1, visited, target, solutions, startDistance)
    // }

    const occupied = {
        UP: () => arrayInput[yPos - 1] && arrayInput[yPos - 1][xPos],
        DOWN: () => arrayInput[yPos + 1] && arrayInput[yPos + 1][xPos],
        LEFT: () => arrayInput[yPos] && arrayInput[yPos][xPos - 1],
        RIGHT: () => arrayInput[yPos] && arrayInput[yPos][xPos + 1],
    }

    const coordinates = {
        UP: () => [yPos - 1, xPos],
        DOWN: () => [yPos + 1, xPos],
        LEFT: () => [yPos, xPos - 1],
        RIGHT: () => [yPos, xPos + 1],
    }


    for (const direction in occupied) {
        const [dirY, dirX] = coordinates[direction]()
        if (dirX === xPrevPos && dirY === yPrevPos) {
            continue
        }

        const found = occupied[direction]()

        if (found === target) {
            solutions.push(deep+1)
        }

        if (found === '#') { continue }

        if (found.match(/[a-z]/i)) {

            continue
            getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
        }
        if (found === '.') {
            getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
        }
    }

    if (solutions.length > 0) {
        return Math.min(...solutions)
    }
    return 999999999
}

const portals = new Set()

const getAllPortals = () => {
    arrayInput.forEach(arrayRow => {
        arrayRow.forEach(arrayTile => {
            if (arrayTile.match(/[a-z]/i)) {
                portals.add(arrayTile)
            }
        })
    })
}

// console.log(getShortestDistanceTo(getPosition(arrayInput, "AA"),[-1,-1],1, {}, "ZZ"))

getAllPortals()

const distances = new Map()

portals.forEach(portalA => {
    portals.forEach(portalB => {
        if (portalA === portalB) {
            return
        }
            distances.set(`${portalA}-${portalB}`,getShortestDistanceTo( getPosition(arrayInput, portalA), [-1, -1], 1, {}, portalB))
           
})})

distances.forEach((value, key) => {
    if (value === 999999999) {
        distances.delete(key)
    }
})

const startingRoutes = []

distances.forEach((value, key) => {
    if(key.split('-')[0] === "AA2"){
        startingRoutes.push(key)
    }

})


let bestResult = 10000

const results = []

let iteration = 0

const computeRoute = (route, alreadyUsed = {}, steps = 0, level = 0, traversedPortals = 0) => {
    

    iteration+=1
    if(iteration % 500000 === 0){
        console.log(iteration / 500000, "* 500 000")
    }

    let newAlreadyUsed = {...alreadyUsed}

    newAlreadyUsed[route] ? newAlreadyUsed[route] += 1 :  newAlreadyUsed[route] = 1

 

    const distanceToNextPortal = distances.get(route)
    const newSteps = steps + distanceToNextPortal


    if(newSteps>bestResult){
        return 
    }

    if(traversedPortals > 10000){
        return
    }

    // if(newAlreadyUsed.length > distances.size){
    //     return
    // }

    const possibleNextRoute = []

    let routeEnd = route.split('-')[1]
    
    let routeType = routeEnd.charAt(2)

    if(level < 0){return}

    if(routeEnd === "ZZ2" && level === 0){
        bestResult = Math.min(bestResult, newSteps)
        console.log("BEST RESULT = ",bestResult)
        results.push(newSteps)
        return 
    }

    level += routeType == 1 ? +1 : -1

    routeEnd = routeEnd.substr(0,2) + (routeType == 2 ? 1 : 2)

    distances.forEach((value, key) => {
        if((!newAlreadyUsed[key] || newAlreadyUsed[key] < 6) && key.split('-')[0] === routeEnd){
            possibleNextRoute.push(key)
        }
    })

    possibleNextRoute.forEach(newRoute => {
        computeRoute(newRoute, newAlreadyUsed, newSteps, level, traversedPortals+1)
    })

}

startingRoutes.forEach(startingRoute => {
    computeRoute(startingRoute,[],0)
})

console.log("FINAL ",Math.min(...results)-1)


// 1 * 500 000
// 2 * 500 000
// 3 * 500 000
// 4 * 500 000
// 5 * 500 000
// 6 * 500 000
// 7 * 500 000
// 8 * 500 000
// 9 * 500 000
// BEST RESULT =  6209
// BEST RESULT =  6209
// BEST RESULT =  6209
// FINAL  6208