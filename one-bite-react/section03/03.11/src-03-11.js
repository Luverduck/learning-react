console.log("03.11. 동기와 비동기");

console.log(1);

// 지정한 시간 후에 콜백 함수를 실행
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
