const toggleCase = str =>
  [...str].reduce((acc, val) => (acc += val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()), '');

console.log(toggleCase('StuDY')); //'sTUdy'
