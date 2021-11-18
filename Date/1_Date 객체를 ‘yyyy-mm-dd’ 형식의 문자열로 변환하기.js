const formatDate = dateObj => {
  let month = dateObj.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  let date = dateObj.getDate();
  date = date < 10 ? '0' + date : date;

  return `${dateObj.getFullYear()}-${month}-${date}`;
};

console.log(formatDate(new Date('2021/07/24'))); //2021-07-24
console.log(formatDate(new Date('1900/1/4'))); //1900-01-04
