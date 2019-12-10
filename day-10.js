///////////////////////////////////////////////////////////// Day 9 Part 1

const inputMap = [
    '.#......##.#..#.......#####...#..',
    '...#.....##......###....#.##.....',
    '..#...#....#....#............###.',
    '.....#......#.##......#.#..###.#.',
    '#.#..........##.#.#...#.##.#.#.#.',
    '..#.##.#...#.......#..##.......##',
    '..#....#.....#..##.#..####.#.....',
    '#.............#..#.........#.#...',
    '........#.##..#..#..#.#.....#.#..',
    '.........#...#..##......###.....#',
    '##.#.###..#..#.#.....#.........#.',
    '.#.###.##..##......#####..#..##..',
    '.........#.......#.#......#......',
    '..#...#...#...#.#....###.#.......',
    '#..#.#....#...#.......#..#.#.##..',
    '#.....##...#.###..#..#......#..##',
    '...........#...#......#..#....#..',
    '#.#.#......#....#..#.....##....##',
    '..###...#.#.##..#...#.....#...#.#',
    '.......#..##.#..#.............##.',
    '..###........##.#................',
    '###.#..#...#......###.#........#.',
    '.......#....#.#.#..#..#....#..#..',
    '.#...#..#...#......#....#.#..#...',
    '#.#.........#.....#....#.#.#.....',
    '.#....#......##.##....#........#.',
    '....#..#..#...#..##.#.#......#.#.',
    '..###.##.#.....#....#.#......#...',
    '#.##...#............#..#.....#..#',
    '.#....##....##...#......#........',
    '...#...##...#.......#....##.#....',
    '.#....#.#...#.#...##....#..##.#.#',
    '.#.#....##.......#.....##.##.#.##',
]

const inputMapArray = []
inputMap.forEach(inputMapRow => {
    inputMapArray.push(inputMapRow.split(''))
})

const absoluteCoordinatesArray = []

inputMapArray.forEach((inputRow, y) => {
    inputRow.forEach((position, x) => {
        if (position === "#") {
            absoluteCoordinatesArray.push([x, y])
        }
    })
})

absoluteCoordinatesArray.forEach((Ocoordinates, index) => {
    let relativeCoordinates = []
    absoluteCoordinatesArray.forEach(Rcoordinates => {
        relativeCoordinates.push([Rcoordinates[0] - Ocoordinates[0], Rcoordinates[1] - Ocoordinates[1]])
    })
    relativeCoordinates = relativeCoordinates.filter(coordinate => !(coordinate[0] === 0 && coordinate[1] === 0))

    const sightSet = new Set(relativeCoordinates.map(coordinates => Math.atan2(coordinates[1], coordinates[0])))
    absoluteCoordinatesArray[index].push(sightSet.size)
})

const bestAsteroid = absoluteCoordinatesArray.reduce((acc, val) => {
    return val[2] > acc[2] ? val : acc
})

///////////////////////////////////////////////////////////// Day 9 Part 2


let relativeCoordinatesFromBestAsteroid = []

absoluteCoordinatesArray.forEach(Rcoordinates => {
    relativeCoordinatesFromBestAsteroid.push([Rcoordinates[0] - bestAsteroid[0], Rcoordinates[1] - bestAsteroid[1]])
})

relativeCoordinatesFromBestAsteroid = relativeCoordinatesFromBestAsteroid.filter(coordinate => !(coordinate[0] === 0 && coordinate[1] === 0))

const targets = relativeCoordinatesFromBestAsteroid.map(relativeCoordinates => {

    return {
        posX: relativeCoordinates[0],
        posY: relativeCoordinates[1],
        angle: Math.atan2(relativeCoordinates[1], relativeCoordinates[0]),
        distance: Math.sqrt((relativeCoordinates[0] * relativeCoordinates[0]) + (relativeCoordinates[1] * relativeCoordinates[1]))
    }
})

const targetMap = new Map()

const targetComparison = (a, b) => {
    if (a.distance > b.distance) {
        return 1
    }
    if (a.distance < b.distance) {
        return -1
    }
    return 0
}

targets.sort(targetComparison)

targets.forEach(target => {

    if (targetMap.has(target.angle)) {
        const mapTargets = targetMap.get(target.angle)
        mapTargets.push(target)
        targetMap.set(target.angle, mapTargets)
    }
    else {
        targetMap.set(target.angle, [target])
    }

})


const mapAngle = (atan2Angle) => {
    let angle = atan2Angle * 180 / Math.PI
    angle = angle >= 0 ? 180 - angle : 180 + (-angle)

    angle = angle + 90
    angle = angle >= 360 ? angle - 360 : angle
    return 360 - angle
}

const compareAngles = (a, b) => {
    if (mapAngle(a) > mapAngle(b)) {
        return 1
    }
    if (mapAngle(a) < mapAngle(b)) {
        return -1
    }
    return 0
}

const targetKeys = [...targetMap.keys()]
targetKeys.sort(compareAngles)

const destroyedAsteroids = []

let isEmpty = false

while (!isEmpty) {
    isEmpty = true
    targetKeys.forEach(key => {
        const targetArray = targetMap.get(key)
        if (targetArray.length > 0) {
            destroyedAsteroids.push(targetArray.shift())
            isEmpty = false
        }
    }
    )
}

const asteroidTwoHundred = destroyedAsteroids[198]

console.log(asteroidTwoHundred.posX + bestAsteroid[0], asteroidTwoHundred.posY + bestAsteroid[1])



