const isEqualDate = (dateObj1, dateObj2) => (dateObj1.getTime() === dateObj2.getTime() ? true : false);

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
