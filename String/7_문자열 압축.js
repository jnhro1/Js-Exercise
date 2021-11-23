let a = "ABBCCCE"
const compress = str => str.replace(/(\D)\1*/g, s => (s.length === 1 ? s[0] : s[0] + s.length));

console.log(compress(a)); //AB2C3E
console.log(a) // string은 원시값이라서 부수효과가 없다.
