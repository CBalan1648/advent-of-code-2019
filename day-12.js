///////////////////////////////////////////////////////////// Day 12 Part 1

const moonA = {
    pX: 4,
    pY: 1,
    pZ: 1,
    vX: 0,
    vY: 0,
    vZ: 0,
}
const moonB = {
    pX: 11,
    pY: -18,
    pZ: -1,
    vX: 0,
    vY: 0,
    vZ: 0,
}

const moonC = {
    pX: -2,
    pY: -10,
    pZ: -4,
    vX: 0,
    vY: 0,
    vZ: 0,
}

const moonD = {
    pX: -7,
    pY: -2,
    pZ: 14,
    vX: 0,
    vY: 0,
    vZ: 0,
}

let time = 0



const moons = [moonA, moonB, moonC, moonD]

const applyGravity = (moonOne, moonTwo) => {
    if (moonOne.pX > moonTwo.pX) { moonTwo.vX += 1; moonOne.vX -= 1 }
    if (moonOne.pX < moonTwo.pX) { moonOne.vX += 1; moonTwo.vX -= 1 }

    if (moonOne.pY > moonTwo.pY) { moonTwo.vY += 1; moonOne.vY -= 1 }
    if (moonOne.pY < moonTwo.pY) { moonOne.vY += 1; moonTwo.vY -= 1 }

    if (moonOne.pZ > moonTwo.pZ) { moonTwo.vZ += 1; moonOne.vZ -= 1 }
    if (moonOne.pZ < moonTwo.pZ) { moonOne.vZ += 1; moonTwo.vZ -= 1 }
}

const applyVelocity = (moon) => {
    moon.pX += moon.vX
    moon.pY += moon.vY
    moon.pZ += moon.vZ
}

const calculateEnergy = (moon) => {
    moon.potentialEnergy = (Math.abs(moon.pX) + Math.abs(moon.pY) + Math.abs(moon.pZ))
    moon.kineticEnergy = (Math.abs(moon.vX) + Math.abs(moon.vY) + Math.abs(moon.vZ))
}


const uniquePairs = [
    [moons[0], moons[1]],
    [moons[0], moons[2]],
    [moons[0], moons[3]],
    [moons[1], moons[2]],
    [moons[1], moons[3]],
    [moons[2], moons[3]]
]

const advanceTime = () => {
    uniquePairs.forEach(pair => {
        applyGravity(...pair)
    })
    moons.forEach(moon => {
        applyVelocity(moon)
    })
    time += 1

}

const runSimulation = () => {
    for (let x = 0; x < 1000; x++) {
        advanceTime()
        // console.log("STEP", time)
        // console.log(moons)
    }



    moons.forEach(calculateEnergy)

    // console.log(moons)

    console.log(moons.reduce((acc, moon) => {
        return acc += moon.potentialEnergy * moon.kineticEnergy
    }, 0))
}


// runSimulation()

///////////////////////////////////////////////////////////// Day 12 Part 2

const startingMoons = [{ ...moonA }, { ...moonB }, { ...moonC }, { ...moonD }]

const compareMoons = (moonA, moonB) => {
    return Object.keys(moonA).every(key => {
        return moonA[key] === moonB[key]
    })
}

const runSimulationTwo = () => {

    let startingPosition = false

    const found = new Array(3).fill(false)

    const valuesAccessor = [['pX', 'vX','X'],['pY', 'vY','Y'],['pZ', 'vZ','Z']]

    for (let x = 0; !startingPosition; x++) {
        advanceTime()

        valuesAccessor.forEach((value, index)=>{
            if(!found[index]){
                const val = value[0]
                const valT = value[1]
                if(moons[0][val] === startingMoons[0][val] &&
                    moons[1][val] === startingMoons[1][val] &&
                    moons[2][val] === startingMoons[2][val] &&
                    moons[3][val] === startingMoons[3][val] &&
                    moons[0][valT] === startingMoons[0][valT] &&
                    moons[1][valT] === startingMoons[1][valT] &&
                    moons[2][valT] === startingMoons[2][valT] &&
                    moons[3][valT] === startingMoons[3][valT]){
                        console.log("ALL SAME ",value[2], " ", time)
                        found[index] = true
                    }
            }
        })
        startingPosition = found.reduce(val => val)
    }
}


runSimulationTwo()

const allSameX = 268296
const allSameY = 84032
const allSameZ = 231614

/// lcm(allSameX, allSameY, allSameZ) = 326,365,108,375,488
