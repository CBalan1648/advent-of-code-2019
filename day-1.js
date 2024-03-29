///////////////////////////////////////////////////////////// Day 1 Part 1

const modules = [94794,58062,112067,139512,147400,99825,142617,107263,86294,97000,140204,72573,134981,111385,88303,79387,129111,122976,130685,75100,146566,73191,107641,109940,65518,102028,57370,144556,64017,64384,145114,115853,87939,90791,133443,139050,140657,85738,133749,92466,142918,96679,125035,127629,87906,104478,105147,121741,70312,73732,60838,82292,102931,103000,135903,78678,86314,50772,115673,106179,60615,105152,76550,140591,120916,62094,111273,63542,102974,78837,94840,89126,63150,52503,108530,101458,59660,116913,66440,83306,50693,58377,62005,130663,124304,79726,63001,73380,64395,124277,69742,63465,93172,142068,120081,119872,52801,100693,79229,90365];

const fuel = modules.reduce((acc, val) => {
    return acc += Math.floor(val/3)-2
},0)

console.log(fuel)

///////////////////////////////////////////////////////////// Day 1 Part 2

const fuel = modules.reduce((acc, val) => {
  let totalFuel = 0;
  let massToCalculate = val;

  while (massToCalculate > 0) {
    massToCalculate = Math.floor(massToCalculate / 3) - 2;
    if (massToCalculate < 0) {
      massToCalculate = 0;
    }
    totalFuel += massToCalculate;
  }

  return (acc += totalFuel);
}, 0);

console.log(fuel);
