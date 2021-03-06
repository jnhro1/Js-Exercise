// const diffDays = (day1, day2) => Math.abs(day1.getTime() - day2.getTime()) / (24 * 3600 * 1000);

const diffDays = (date1, date2) => Math.abs(date1 - date2) / (24 * 60 * 60 * 1000);

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
