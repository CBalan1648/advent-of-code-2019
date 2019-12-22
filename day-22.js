

const testInput = [
  "deal into new stack",
  "cut -2",
  "deal with increment 7",
  "cut 8",
  "cut -4",
  "deal with increment 7",
  "cut 3",
  "deal with increment 9",
  "deal with increment 3",
  "cut -1"
];

const puzzeInput = [
  "deal into new stack",
  "deal with increment 68",
  "cut 4888",
  "deal with increment 44",
  "cut -7998",
  "deal into new stack",
  "cut -5078",
  "deal with increment 26",
  "cut 7651",
  "deal with increment 60",
  "cut 8998",
  "deal into new stack",
  "deal with increment 64",
  "cut -8235",
  "deal into new stack",
  "deal with increment 9",
  "cut -8586",
  "deal with increment 49",
  "cut -7466",
  "deal with increment 66",
  "cut -565",
  "deal with increment 19",
  "cut -6306",
  "deal with increment 67",
  "deal into new stack",
  "cut 886",
  "deal with increment 63",
  "cut 3550",
  "deal with increment 36",
  "cut 5593",
  "deal with increment 18",
  "deal into new stack",
  "deal with increment 70",
  "deal into new stack",
  "cut 5168",
  "deal with increment 39",
  "cut 7701",
  "deal with increment 2",
  "deal into new stack",
  "deal with increment 45",
  "cut 6021",
  "deal with increment 46",
  "cut -6927",
  "deal with increment 49",
  "cut 4054",
  "deal into new stack",
  "deal with increment 33",
  "deal into new stack",
  "deal with increment 11",
  "cut -3928",
  "deal with increment 19",
  "deal into new stack",
  "deal with increment 32",
  "cut -7786",
  "deal with increment 27",
  "deal into new stack",
  "deal with increment 37",
  "cut -744",
  "deal with increment 25",
  "cut -98",
  "deal with increment 61",
  "cut 2042",
  "deal with increment 71",
  "cut 5761",
  "deal with increment 6",
  "cut -2628",
  "deal with increment 33",
  "cut -9509",
  "deal with increment 16",
  "cut 2599",
  "deal with increment 28",
  "cut 2767",
  "deal into new stack",
  "cut 3076",
  "deal with increment 61",
  "deal into new stack",
  "cut 1182",
  "deal with increment 4",
  "cut 2274",
  "deal into new stack",
  "deal with increment 31",
  "cut -5897",
  "deal into new stack",
  "cut -3323",
  "deal with increment 29",
  "cut 879",
  "deal with increment 12",
  "deal into new stack",
  "deal with increment 34",
  "cut -5755",
  "deal with increment 59",
  "cut 7437",
  "deal into new stack",
  "cut 5095",
  "deal into new stack",
  "cut 453",
  "deal with increment 24",
  "cut -3537",
  "deal with increment 41",
  "deal into new stack"
];

const size = 10007;

const input = puzzeInput;

let cards = new Array(size).fill(0).map((val, index) => index);

const dealIntoNewStack = () => {
  cards.reverse();
};

const cutNCards = n => {
  if (n > 0) {
    const cut = cards.splice(0, n);
    cards.push(...cut);
  }
  if (n < 0) {
    const cut = cards.splice(n);
    cut.push(...cards);
    cards = cut;
  }
};

const dealWithIncrementN = n => {
  const newArray = new Array(size).fill(0);

  let currentIndex = 0;

  for (let card of cards) {
    newArray[currentIndex] = card;
    currentIndex += n;
    if (currentIndex >= size) {
      currentIndex -= size;
    }
  }
  cards = newArray;
};

const processInput = () => {

  for (let instruction of input) {

    if (instruction.split(" ")[1] === "into") {
      dealIntoNewStack();
  
    }

    if (instruction.split(" ")[0] === "cut") {
      cutNCards(Number(instruction.split(" ")[1]));
    }

    if (instruction.split(" ")[1] === "with") {
      dealWithIncrementN(Number(instruction.split(" ")[3]));
    }
  }
};



// processInput();

// console.log(cards.indexOf(2019)) /// 5169

// const startCards = [...cards]

// const areCardsSame = () => {
//     return cards.every((value, index) => value === startCards[index])
// }

// processInput();

// let counter = 1

// while(!areCardsSame()){
//     processInput()
//     counter+=1

//     if(counter % 10 === 0){
//         console.log(counter)
//     }

// }

// console.log(counter, cards, startCards)



// const getCardAt = (num) => {
//         const a = (size - num - 1)
//         const b = a-2
//         const c = findModulo(b, size, 7)
//         const d = c+8
//         const e = d-4
//         const f = findModulo(e, size, 7)
//         const g = f+3
//         const h = findModulo(g, size, 9)
//         const i = findModulo(h, size,3)
    
//     const l = i-1

//  return l

// }

// const findModulo = (modulo, lenght, increment) => {
//     let start = 0
//     while(true){
//         if((start * increment) % lenght === modulo){
//             return start
//         }
//         start+=1
//     }
// }

// const result = new Array(20).fill(0).map((val, index) => getCardAt(index))
// k

// console.log(cards)

console.log(result)

