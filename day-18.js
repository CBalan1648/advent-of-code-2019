const puzzleInput = [
    '#################################################################################',
    '#...#.......#.....#.......#...#.........#.......#.......#..q............#...#...#',
    '#.#.#.#.###.###.#.#.#####.#.#.#.#######.#####.#.###.###Y###.#######.#####I#.#.#.#',
    '#.#.#.#...#.....#.#.....#.#.#...#...#...#.....#.....#.#.....#.......#...#.#...#.#',
    '#.#.#####.#######.#####.#.#.#####.#.#.#.#.#####.#####.###.#######.###N#.#.#####.#',
    '#.#....f#.....#.#.#.#...#.#...#...#...#.#...#...#...#...#.#.....#.#...#.#...#...#',
    '#.#####.###.#.#.#.#.#.###.#####.###########.#####.#.#.###.#.###.###.###.###.#.###',
    '#.....#...#.#.#.#...#...#.....#.#.......#...#...#.#.#.....#.#.#.......#.....#.F.#',
    '#####.###.###.#.###.###.#####.#.#.#####.#.###.#.#.#.#######.#.#############.###.#',
    '#...#.#.#.#...#.....#.....#...#.#...#...#...#.#.#.#.......#.#.....#.......#.#a..#',
    '#.#.#.#.#.#.###.#####.#####.###.#.###.#.#.#.#.#.#.#######.#.#.#.###.#####.###.###',
    '#.#...#.#...#.#...#...#.....#...#.#...#.#.#...#.#.....#...#.#.#...#.....#.....#.#',
    '#.#####.#####.#.###.###.#######.#.#.###.#######.#.#####.#.#.#####.#####.#######.#',
    '#...#.........#.#...#.#.......#...#.#.#.#.....#...#...#.#.#...........#.#.......#',
    '###.#########.#.#.###.#######.#.###.#.#.#.###.#####.#.#.###########.###.#.#####.#',
    '#...#.....#...#.#.......#...#.#.#...#.#.#.#.....#...#...#...#.......#...#...#...#',
    '#.#.#.###.#.###.#######.#.###.#.#.###.#.#.#####.#.#####.#.#.#.#######.#####.#####',
    '#.#.#...#.#.....#.#.......#...#.#.#.#...#...#.....#.....#.#.......#...#...#.....#',
    '#.#####.#.###.###.#.#######.#####.#.#.###.#.#########.###.#########.###.#.#####.#',
    '#.......#...#.....#.#.......#.....#...#.#.#.....#...#.#.#...#.....#.#...#.......#',
    '#.#######.#.#######.#.#########.###.###.#.#####.#.#.#.#.###.#.###.#.#.#.#######.#',
    '#...#...#.#.......#.#.#...L...#.#.#...#.#...#.#...#.#.....#.#.#.#.#.#.#...#...#.#',
    '#.###.#.#####.###.#.#######.#.#.#.###.#.###.#.#####.#####.#.###.#.#.#####.#.#.###',
    '#.#...#.....#...#.#.......#.#...#.......#.#.......#...#...#.#...#...#.....#.#...#',
    '#.#.#######.###.#.#######.#.###########.#.#######.###.#.###.#.#.#####.#.###.###.#',
    '#.#.#.#.....#...#...#.....#.........#...#.#...#.....#.#...#.#.#.....#.#.#...#.#.#',
    '###.#.#.#########.###.###########.#.###.#.#.#.#.#####.###.#.#####.#.#.###.###.#.#',
    '#...#...J.#.......#...#.........#.#...#.#...#...#.....#.#.#.#.....#...#...#s..#.#',
    '#.#######.#.#####S#.#######.###.#.###.###.#######.#####.#.#.#.#####.###.#####.#.#',
    '#.#.....#...#...#.#.#.....#.#.#.#...#...#...#.#...#.......#.#...#...#...#.....#.#',
    '#.#T###.#####.#.###.###.#.#.#.#.#.#####.###.#.#.#########.#.###.#####.###.#####.#',
    '#.#.#...#.....#.#...#...#...#...#.#...#.#.#.#.#.#.......#.#...#.......#.....#..w#',
    '#.#.#.###.#####.#.###.#######.#####.#.#.#.#.#.#.#.#####.#####.#.###########.#.#.#',
    '#...#.#.B.#...#.#.#.#...#.#...#.....#.#.#.#.#.#.#.#r..#.....#.#.#...#.......#.#.#',
    '#.###.#.###.#.#.#.#.#.#.#.#.###.#####.#.#.#.#.#.#.#.#######.#.#.#.#.#.###.###.#.#',
    '#...#.#...#.#.#...#...#.#.#.#.......#...#.#...#...#.......#.#.#.#.#.#.#...#...#.#',
    '###.#.###.###.#########.#.#.#.#####.#####.###.#####.#####.#.#.#.#.#.#.#####.###.#',
    '#...#...#...#.....W...#.#.#.#c#...#.....#...#.....#.#.....#...#...#...#...#...#.#',
    '#.###.#####.###.#####.#.#.#.###.#.#####.#.#.#####.###.###.#############.#.###.#.#',
    '#o..#...........#.......#.......#.........#...........#.................#.....#.#',
    '#######################################.@.#######################################',
    '#...#.....#...#.........#.............#...........#.....#............j....#...#.#',
    '#.#.#P###.###.#.###.###.#.###.#######.#.#.#####.###.#.#.###.#.###.#######.#.#.#.#',
    '#.#...#.#...#.#.#.#...#.#...#.#.....#.#.#.#...#.....#.#...#.#.#...#..t..#...#...#',
    '#G#####.###.#.#.#.###.#.#.###.#.#.#.#.#.#.###.#######.###C###.#.###.###.###.#####',
    '#.#...#...#.#.#.....#.#.#.#...#.#.#.#.#.#...#.....#...#.#...#.#.#...#...#...#...#',
    '#.#.###.#.#.#.#####.#.#.###.#####.###.#.###.#.#####.###.###.#.###.###.#######.#.#',
    '#.#.....#.#.#...#...#.#...#.....#...#.#.#.....#...#.#.....#.#.......#.#.......#.#',
    '#.#######.#.#.###.###.###.#####.###.#.#.#.#####.#.#.#.#####.#.#####.#.#.#######.#',
    '#.......#...#...#.#.#.#.#.....#...#...#.#...#...#.#.#.....#.#.#...#.#...#.......#',
    '#.#####.#.#####.#.#.#.#.#####.###.#.###.#.###.###.#.#####.#.###.#.#######.#####.#',
    '#.#...#.#.....#...#.#.#.....#.....#.#...#.#...#.#.#.....#...#...#.........#.....#',
    '#.#.#.#.#####.#.###.#.#####.#######.#.#.#.#.###.#.#.###.#.###.#############.#####',
    '#...#.#.#.....#.....#.....#...#.....#.#.#.#.#.....#.#.#.#.#...#...#.O.#...#b..#.#',
    '#####.#.###.###.#########.###.#.#####.#.#.#.#.#####.#.#.#.#.###.#.###.#.#.###.#.#',
    '#...#.#...#...#.#.........#...#...#...#.#.#.#...#.....#.#...#...#..d#.#.#...#.#.#',
    '#.###.###.###.#.#.#########.#.###.#.###.###.###.#######.###.#.#####.#.#.#.###.#.#',
    '#.#.X.#.#.#...#.#...#.#.....#...#.#...#.#...#.....#.....#...#.#...#.#...#...#...#',
    '#.#.###.#.#.###.###.#.#.###.###.#.#.#.#.#.#.#####.#.#####.###.###.#.#######.###.#',
    '#.......#.#.#.#...#.#...#.#.#...#.#.#.#.#.#.#...#.#.#...#...#...#k#.......#...#.#',
    '#.#####.#.#.#.#.###.###.#.#.#####.#.#.###.###.#.#.#.#.#.#######.#.#######.#.#.#.#',
    '#.#...#.#.#.#...#...#.#...#.#...#.#.#...#.#...#.#...#.#.....U.#.#.....#...#.#...#',
    '#.#.#.###.#.#.###.#.#.###.#.#.#.#.#####.#.#.###.###.#.#########.#.#####.#########',
    '#.#.#.....#.#.#...#.#.#...#...#...#...#.#.....#...#.#...#......h#.......#.......#',
    '#.#.#######.###.###.#.#######.#####.#.#.#########.#.###.###.#####.#######.#####.#',
    '#.#.#...#.....#.#...#u......#...#...#.R.#.......#.#.#...#...#...#........x#...#.#',
    '#.#.#.#.#####.#.#.#########.###.#.#.###.#.#####.#.###.###.###.#Z###########.#.#.#',
    '#.#...#...#.#...#...#...#.E.#.#.#.#.#...#...#...#...#.#.......#.#.....#....g#.#.#',
    '#K#######.#.#####.###.#.#.###.#.#.#.#.#####.#.#####.#.#####.###.#.###.###.#####.#',
    '#.#z....#.#.......#..v#.#...#.#.#.#.#...#...#.....#.#.#..e#...#.#...#...#.......#',
    '#.#.###.#.#########.###.###.#.#.#.#.###.#.#######.#.#.#.#.###.#.#.#####.#.#######',
    '#.#.#...#.......#...#.#.....#.#.#.#.#...#...#.......#...#...#.#...#...M.#.......#',
    '#.###H#.#######.#.###.#######.#.###.#.###.#.###############V#######.###########.#',
    '#...#.#.#.....#.#.....#.........#...#l#.#.#...#.........Q.#.........#.......#...#',
    '###.#.###.#.###.#####.#.#####.###.###.#.#####.#.#######.#############.#####.#.###',
    '#.#.#.....#.#.....#.#.#.#...#...#.#.....#.....#.#...#...#.......#.........#.#..p#',
    '#.#.#######.#.###.#.#.###.#.###.#.#####.#.###.#.###.#.###.###.#.#.#######.#.###.#',
    '#.#...D.....#.#.....#m....#.#...#...#.#.#y#...#.#...#n..#...#i#.#.#.......#.#...#',
    '#.#########.#.#############.#.#####.#.#.#.#####.#.#.###.###.#.###.#.#########.###',
    '#...........#...............#.......#...#.........#...#.....#.....#.......A.....#',
    '#################################################################################',
]


const testInput = [
    '########################',
    '#f.D.E.e.C.b.A.@.a.B.c.#',
    '######################.#',
    '#d.....................#',
    '########################',
]


const anotherTestInput = [
    '#################',
    '#i.G..c...e..H.p#',
    '########.########',
    '#j.A..b...f..D.o#',
    '########@########',
    '#k.E..a...g..B.n#',
    '########.########',
    '#l.F..d...h..C.m#',
    '#################',
]

const tiles = anotherTestInput.map(inputString => inputString.split(''))

const getStartingPosition = (targetArray, findSymbol) => {
    const yPos = targetArray.findIndex(val => val.includes(findSymbol))
    const xPos = targetArray[yPos].findIndex(val => val === findSymbol)

    return [yPos, xPos]
}

let currentLowest = 100000


const getReachableObjects = (startPosition, prevPosition = [-1, -1], keys = [], reachableObjects = [], deep = 1, visited = {}) => {

    if (deep > currentLowest) {
        return
    }

    if (visited[`${startPosition[0]},${startPosition[1]}`]) {
        return
    }

    visited[`${startPosition[0]},${startPosition[1]}`] = 1

    const [yPos, xPos] = startPosition;
    const [yPrevPos, xPrevPos] = prevPosition

    const occupied = {
        UP: () => tiles[yPos - 1] && tiles[yPos - 1][xPos],
        DOWN: () => tiles[yPos + 1] && tiles[yPos + 1][xPos],
        LEFT: () => tiles[yPos] && tiles[yPos][xPos - 1],
        RIGHT: () => tiles[yPos] && tiles[yPos][xPos + 1],
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
        if (found === '#') { continue }
        if (found.match(/[a-z]/i)) {
            if (found === found.toUpperCase()) {

                // console.log("DOOR ", found, " KEYS ", keys, " CAN OPEN ", keys.includes(found.toLowerCase()))

                if (keys.includes(found.toLowerCase())) {
                    getReachableObjects(coordinates[direction](), startPosition, keys, reachableObjects, deep + 1, visited)
                }
            }
            if (found === found.toLowerCase()) {
                if (!keys.includes(found)) {
                    reachableObjects.push(found)
                }
                else {

                    getReachableObjects(coordinates[direction](), startPosition, keys, reachableObjects, deep + 1, visited)
                }
            }
        }
        if (found === '.' || found === '@') {
            getReachableObjects(coordinates[direction](), startPosition, keys, reachableObjects, deep + 1, visited)
        }
    }

    return reachableObjects

}

const getShortestDistanceTo = (startPosition, prevPosition = [-1, -1], deep = 0, visited = {}, target, solutions = [], startDistance) => {

   
    
    const targetPosition = getStartingPosition(tiles, target)

    const yDistance = targetPosition[0] - startPosition[0]
    const xDistance = targetPosition[1] - startPosition[1]
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance)

    if(!startDistance){
        startDistance = distance
    }
    else {
        if(distance > startDistance * 1.1)
        return
    }


    if(!!startDistance && deep > startDistance * 10){
        return
    }


    if (deep > currentLowest) {
        return
    }

    visited[`${startPosition[0]},${startPosition[1]}`] = 1

    const [yPos, xPos] = startPosition;
    const [yPrevPos, xPrevPos] = prevPosition

    const occupied = {
        UP: () => tiles[yPos - 1] && tiles[yPos - 1][xPos],
        DOWN: () => tiles[yPos + 1] && tiles[yPos + 1][xPos],
        LEFT: () => tiles[yPos] && tiles[yPos][xPos - 1],
        RIGHT: () => tiles[yPos] && tiles[yPos][xPos + 1],
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
            solutions.push(deep)
        }

        if (found === '#') { continue }

        if (found.match(/[a-z]/i)) {
            getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
        }
        if (found === '.' || found === '@') {
            getShortestDistanceTo(coordinates[direction](), startPosition, deep + 1, visited, target, solutions, startDistance)
        }
    }

    if (solutions.length > 0) {
        return solutions.reduce((acc, val) => acc < val ? acc : val)
    }
}

// console.log(getShortestDistanceTo(getStartingPosition(tiles, "@"), [-1,-1], 1, {}, 'p'))

const steps = []

const distances = new Map()

const objectFromStartingPosition = getReachableObjects(getStartingPosition(tiles, "@"), [-1, -1])



let iterations = 0

const reachableCache = new Map()

const doSomething = (position, target, keys, deep = 1) => {


    if (deep > currentLowest) {
        return
    }

    const newkeys = [...keys]
    newkeys.push(tiles[position[0]][position[1]])

    let reachableObjects;

    const chached = reachableCache.get(tiles[position[0]][position[1]]+newkeys.sort().join(''))

    if(!!chached){
        reachableObjects = chached
    }else {
        reachableObjects = getReachableObjects(position, [-1, -1], newkeys, [], 0, {})

        reachableCache.set(tiles[position[0]][position[1]]+newkeys.sort().join(''), reachableObjects)
    }

 

    if (reachableObjects.length === 0) {
        if (deep < currentLowest) {
            currentLowest = deep
            steps.push(deep)
            console.log(steps[steps.length - 1])
        }
        return
    }

    reachableObjects.forEach(key => {
        const cachedDistance = distances.get(`${tiles[position[0]][position[1]]}-${key}`)
        let currentDeep

        if (cachedDistance) {
            currentDeep = deep + cachedDistance
        } else {
            currentDeep = getShortestDistanceTo(position, [-1, -1], deep, {}, key, [])
            distances.set(`${tiles[position[0]][position[1]]}-${key}`, currentDeep - deep)
        }

        if (!currentDeep) { return }
        doSomething(getStartingPosition(tiles, key), key, newkeys, currentDeep + 1)
    }
    )
}

// objectFromStartingPosition.forEach(key => {

//     const currentDeep = getShortestDistanceTo(getStartingPosition(tiles, "@"), [-1, -1], 1, {}, key, [])
//     doSomething(getStartingPosition(tiles, key), key, [], currentDeep)
// }
// )



const doAnotherSomething = (startPosition, keys, cache) => {

    const cacheKey = tiles[startPosition[0]][startPosition[1]]+keys.sort().join('')

    if(cache[cacheKey]){
        return cache[cacheKey]
    }

    let result = 100000000



    const newkeys = [...keys]
    newkeys.push(tiles[startPosition[0]][startPosition[1]])

    let reachableObjects;

   

    const chached = reachableCache.get(tiles[startPosition[0]][startPosition[1]]+newkeys.sort().join(''))

    if(!!chached){
        reachableObjects = chached
    }else {
        reachableObjects = getReachableObjects(startPosition, [-1, -1], newkeys, [], 0, {})

        reachableCache.set(tiles[startPosition[0]][startPosition[1]]+newkeys.sort().join(''), reachableObjects)
    }

    if(reachableObjects.length === 0){
        return 0
    }

    reachableObjects.forEach(target => {
        
        const distance = getShortestDistanceTo(startPosition,[-1,-1], 1,{},target) + doAnotherSomething(getStartingPosition(tiles, target), newkeys, cache)
        result = Math.min(distance, result)
    
    })
    
    cache[tiles[startPosition[0]][startPosition[1]]+keys.sort().join('')] = result
    return result
}

// getReachableObjects(getStartingPosition(tiles, "@")).forEach(key => {
//     console.log(doAnotherSomething(getStartingPosition(tiles, "@"),[key],{}))
// })


console.log(doAnotherSomething(getStartingPosition(tiles, "@"),[],{}))

// console.log("BEST ",steps.reduce((acc, val) => acc < val ? acc : val))
