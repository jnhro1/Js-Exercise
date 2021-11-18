const replaceAtoSharp = str => {
  if (str !== str.toUpperCase()) return undefined;
  return str.replace(/A/g, '#');
};

console.log(replaceAtoSharp('BANANA')); //B#N#N#
