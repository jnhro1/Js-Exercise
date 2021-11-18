const compress = str => str.replace(/(\D)\1*/g, s => (s.length === 1 ? s[0] : s[0] + s.length));

console.log(compress('ABBCCCE')); //AB2C3E
