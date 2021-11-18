const count = (str, target) => str.match(new RegExp(target, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R')); //3
