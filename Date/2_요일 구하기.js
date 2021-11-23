// const getDay = date => ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][new Date(date).getDay()];

// const getDay = dateString =>
//   ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][new Date(dateString).getDay()];

// const getDay = dateString => ['일', '월', '화', '수', '목', '금', '토'][new Date(dateString).getDay()] + '요일';

const getDay = (() => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return dateString => days[new Date(dateString).getDay()] + '요일';
})();

console.log(getDay('2021-07-24')); //토요일
console.log(getDay('2021-07-25')); //일요일
console.log(getDay('2021-07-26')); //월요일
