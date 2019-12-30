///////////////////////////////////////////////////////////// Day 14 Part 2

const input = [
  "2 MPHSH, 3 NQNX => 3 FWHL",
  "144 ORE => 1 CXRVG",
  "1 PGNF => 8 KHFD",
  "3 JDVXN => 5 FSTFV",
  "1 ZMZL, 30 PVDSG => 6 SMBH",
  "1 CFDNS, 2 PTZNC, 10 XCKN => 9 SKVP",
  "1 JWNR => 1 QCVHS",
  "10 MHRML => 1 KXNWH",
  "4 PVDSG => 3 VBZJZ",
  "10 TLBV => 1 ZVNH",
  "1 PVQB, 5 JDVXN => 4 WDPCN",
  "4 NQNX, 7 KHFD, 9 SDWSL => 6 HWVM",
  "1 SMBH => 2 PCWR",
  "1 CXNZD, 5 SKVP, 7 LVWTF => 9 QFQJV",
  "2 HWVM => 7 GPXP",
  "3 CXRVG, 3 GXNL => 8 PVDSG",
  "1 PTZNC, 2 CFDNS => 7 LCKSX",
  "14 NQNX, 8 FWHL => 5 XCKN",
  "12 PVDSG, 3 PVQB => 8 TLBV",
  "8 PVQB => 8 ZKCK",
  "1 GPXP => 5 LCGN",
  "5 VGNR, 1 ZMZL => 9 SMGNP",
  "2 SMGNP => 7 CXNZD",
  "6 SMGNP, 2 HWVM, 9 PTZNC => 7 GLMVK",
  "18 QNZVM => 7 NLCVJ",
  "1 JDVXN, 10 GMFW, 6 VBZJZ => 9 ZMZL",
  "1 HCFRV, 1 ZKCK, 1 SMGNP, 1 LCKSX => 7 JXZFV",
  "13 NLCVJ, 6 ZMZL => 7 SDWSL",
  "3 SMBH => 4 PVQB",
  "20 QNZVM, 1 PTZNC, 7 PVQB => 7 HFLGH",
  "2 CXNZD => 8 VLNVF",
  "4 GMFW => 4 JDVXN",
  "23 VGNR => 3 HSBH",
  "1 FWHL, 32 MPHSH => 7 ZNSV",
  "5 WDPCN, 6 ZKCK, 3 QNZVM => 4 MWHMH",
  "1 FSTFV, 3 ZKCK, 1 LVWTF => 9 LGHD",
  "2 SKVP, 2 MWHMH, 12 QCVHS, 6 HFLGH, 3 NRGBW, 1 ZVNH, 2 LGHD => 4 SBQKM",
  "13 PVQB, 2 HSBH, 5 TLBV => 9 LVWTF",
  "6 FSTFV => 2 JWNR",
  "7 ZKCK => 9 NRGBW",
  "8 HFLGH, 3 KXNWH, 15 VLNVF, 2 VGNR, 2 SDMS, 10 MWHMH, 7 KHFD, 1 FSTFV => 4 WTRPM",
  "5 SKVP => 4 SDMS",
  "100 ORE => 7 GMFW",
  "9 GXNL => 7 MPHSH",
  "2 GXNL, 5 GMFW => 9 NQNX",
  "3 SDWSL, 8 LVWTF, 2 GPXP => 5 HCFRV",
  "140 ORE => 4 GXNL",
  "1 WDPCN, 4 NLCVJ => 1 MHRML",
  "1 VBZJZ => 7 PGNF",
  "1 ZNSV => 1 CFDNS",
  "1 GLMVK, 7 SDMS => 5 GBZRN",
  "14 WTRPM, 93 SBQKM, 37 JXZFV, 4 NRGBW, 12 QFQJV, 24 SMBH, 3 LCGN, 15 GBZRN, 16 PCWR, 11 XCKN => 1 FUEL",
  "1 WDPCN, 5 FWHL => 8 PTZNC",
  "1 ZNSV => 9 VGNR",
  "5 PGNF => 5 QNZVM"
];

const parseData = input => {
  return input.map(val => {
    const formulaParts = val.split("=>").map(val => val.trim());

    const formulaResult = formulaParts.splice(-1, 1);

    const res = parseElement(formulaResult[0]);

    const formulaData = formulaParts.map(val => val.split(","));

    const req = formulaData[0].map(parseElement);

    return { req, res };
  });
};

const parseElement = elementString => {
  elementString = elementString.trim();
  const [elementQuantity, elementName] = elementString.split(" ");
  return [Number(elementQuantity), elementName];
};

const formulas = parseData(input);

const elementStockPile = new Map();

const getFormula = elementName =>
  formulas.find(formula => formula.res[1] == elementName);

//   for (let formula of getFormula("FUEL").req) {
//     elementStockPile.set(formula[1], formula[0]);
//   }

const extraMap = new Map();

const processElements = (processOre = false, multiplier = 1) => {
  for (let formula of elementStockPile) {
    element = extraMap.get(formula[0]);
    if (!!element) {
      const usingquantity = formula[1];
      if (usingquantity < element) {
        elementStockPile.delete(formula[0]);
        extraMap.set(formula[0], element - usingquantity);
        continue;
      }
      if (usingquantity > element[1]) {
        elementStockPile.set(formula[0], usingquantity - element);
        extraMap.delete(formula[0]);
      }
      if (usingquantity === element) {
        elementStockPile.delete(formula[0]);
        extraMap.delete(formula[0]);
        continue;
      }
    }
    const elementFormula = getFormula(formula[0]);
    if (!elementFormula) {
      continue;
    }
    if (!processOre && elementFormula.req[0][1] === "ORE") {
      continue;
    }

    const requiredElementsN = elementStockPile.get(formula[0]);

    let bestNumberOfConversions = Math.floor(
      requiredElementsN / elementFormula.res[0]
    );
    if (bestNumberOfConversions === 0) {
      bestNumberOfConversions = 1;
    }

    if (elementFormula.res[0] * bestNumberOfConversions < requiredElementsN) {
      elementStockPile.set(
        formula[0],
        requiredElementsN - elementFormula.res[0] * bestNumberOfConversions
      );
      elementFormula.req.forEach(val => {
        elementStockPile.set(
          val[1],
          !!elementStockPile.get(val[1])
            ? elementStockPile.get(val[1]) + val[0] * bestNumberOfConversions
            : val[0] * bestNumberOfConversions
        );
      });
    }

    if (elementFormula.res[0] * bestNumberOfConversions === requiredElementsN) {
      elementStockPile.delete(formula[0]);
      elementFormula.req.forEach(val => {
        elementStockPile.set(
          val[1],
          !!elementStockPile.get(val[1])
            ? elementStockPile.get(val[1]) + val[0] * bestNumberOfConversions
            : val[0] * bestNumberOfConversions
        );
      });
    }

    if (elementFormula.res[0] * bestNumberOfConversions > requiredElementsN) {
      const remainder = Math.abs(requiredElementsN - elementFormula.res[0]);
      const elem = extraMap.get(elementFormula.res[1]);
      extraMap.set(
        elementFormula.res[1],
        !!elem ? elem + remainder : remainder
      );

      elementStockPile.delete(formula[0]);

      elementFormula.req.forEach(val => {
        const existingPile = elementStockPile.get(val[1]);
        elementStockPile.set(
          val[1],
          !!existingPile ? existingPile + val[0] : val[0]
        );
      });
    }
  }
};

const optimize = () => {
  for (let element of extraMap) {
    if (elementStockPile.has(element[0])) {
      const usingquantity = elementStockPile.get(element[0]);
      if (usingquantity < element[1]) {
        elementStockPile.delete(element[0]);
        extraMap.set(element[0], element[1] - usingquantity);
      }
      if (usingquantity > element[1]) {
        elementStockPile.set(element[0], usingquantity - element[1]);
        extraMap.delete(element[0]);
      }
      if (usingquantity === element[1]) {
        elementStockPile.delete(element[0]);
        extraMap.delete(element[0]);
      }
    }
  }
};

// for (let x = 0; x < 100; x++) {
//   processElements();
// }

// for (let x = 0; x < 100000; x++){
//     processElements(true);
// }

// console.log(elementStockPile)

///////////////////////////////////////////////////////////// Day 14 Part 2

for (let formula of getFormula("FUEL").req) {
  elementStockPile.set(formula[1], formula[0] * constFuel);
}

const orePerFuel = elementStockPile.get("ORE");

let ore = 1000000000000;

let fuel = 0;
const getPossibileFuel = () => {
  let condition = true;
  while (condition) {
    while (elementStockPile.size > 1) {
      processElements(true);
    }

    const usedOre = elementStockPile.get("ORE");

    if (ore - usedOre >= 0) {
      fuel += 1;
      ore -= usedOre;

      if (extraMap.size === 0) {
        console.log("HELLO", fuel, ore);
      }
      if (fuel % 1000 === 0) {
        console.log(fuel);
      }
      for (let formula of getFormula("FUEL").req) {
        elementStockPile.set(formula[1], formula[0]);
        elementStockPile.delete("ORE");
      }
    } else {
      condition = false;
    }
  }
};

getPossibileFuel();
console.log("EXTRA ELEMENTS", extraMap);
console.log("FUEL", fuel);
console.log("ORE", ore);
console.log("USED ORE", 1000000000000 - ore);
