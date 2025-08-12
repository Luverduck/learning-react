console.log("02.13. 콜백 함수");

// 콜백 함수
function main(value) {
  console.log(1);
  console.log(2);
  // 필요한 시점에 콜백 함수 호출
  value();
  console.log("end");
}

function sub() {
  console.log("I am sub.");
}

// 콜백 함수 전달
main(sub);

// 콜백 함수를 전달하는 방법  
// - 익명 함수
main(
  function () {
    console.log("I am sub.");
  }
);
// - 화살표 함수
main(
  () => {
    console.log("I am sub.");
  }
);

// 콜백 함수의 활용
function repeat(count, callback) {
  for(let i = 1; i <= count; ++i) {
    callback(i);
  };
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});