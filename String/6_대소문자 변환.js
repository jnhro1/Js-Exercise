const toggleCase = str => str.replace(/[A-Za-z]/g, s => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()));

console.log(toggleCase('StuDY')); //'sTUdy'
