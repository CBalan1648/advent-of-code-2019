///////////////////////////////////////////////////////////// Day 4 Part 1

const checkNumbers = (number) => {
    const array = number.toString().split('')
  
    return [...new Set(array)].length < 6 &&
      array[0] <= array[1] &&
      array[1] <= array[2] &&
      array[2] <= array[3] &&
      array[3] <= array[4] &&
      array[4] <= array[5]
  }
  
  const solutionsArray = []
  
  for (let x = 171309; x<=643603; x++){
    if (checkNumbers(x)) {
      solutionsArray.push(x)
    }
  }
  
  console.log(solutionsArray.length)

///////////////////////////////////////////////////////////// Day 4 Part 2

  
const checkNumbers = (number) => {
    const array = number.toString().split('')
  
    const map = new Map()
  
  array.forEach(value => {
    map.set(value, map.get(value) ? map.get(value) + 1 : 1 )
  })
  
  let hasOnly2 = false
  
  map.forEach(value => {
    if (value === 2){hasOnly2 = true}
  })
    return [...new Set(array)].length < 6 &&
      array[0] <= array[1] &&
      array[1] <= array[2] &&
      array[2] <= array[3] &&
      array[3] <= array[4] &&
      array[4] <= array[5] &&
      hasOnly2
  }
  
  const solutionsArray = []
  
  for (let x = 171309; x<=643603; x++){
    if (checkNumbers(x)) {
      solutionsArray.push(x)
    }
  }
  
  console.log(solutionsArray.length)
  