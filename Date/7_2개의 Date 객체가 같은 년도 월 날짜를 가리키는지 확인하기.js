// const isEqualDate = (dateObj1, dateObj2) => (dateObj1.getTime() === dateObj2.getTime() ? true : false);
const isEqualDate = (date1, date2) => (date1 - date2 ? true : false);

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
console.log(isEqualDate(new Date('2021/07/23/23:19:10'), new Date('2022/07/24/20:59:59'))); // => false
