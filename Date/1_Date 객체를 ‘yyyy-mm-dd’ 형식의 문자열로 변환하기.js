// const formatDate = dateObj => {
//   let month = dateObj.getMonth() + 1;
//   month = month < 10 ? '0' + month : month;

//   let date = dateObj.getDate();
//   date = date < 10 ? '0' + date : date;

//   return `${dateObj.getFullYear()}-${month}-${date}`;
// };

// const formatDate = dateObj => {
//   const format = n => (n < 10 ? '0' + n : n + '');
//   // format은 formatDate 함수만 사용하니까 내부로 가져오자
//   // formatDate 가 호출될때마다 format이 생성된다 > 중복
//   return `${dateObj.getFullYear()}-${format(dateObj.getMonth() + 1)}-${format(dateObj.getDate())}`;
// };

const formatDate = (() => {
  const format = n => (n < 10 ? '0' + n : n + '');
  // 클로져로 한번만 사용한다.
  return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

console.log(formatDate(new Date('2021/07/24'))); //2021-07-24
console.log(formatDate(new Date('1900/1/4'))); //1900-01-04
