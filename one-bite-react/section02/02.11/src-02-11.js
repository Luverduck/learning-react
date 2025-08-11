console.log("02.11. 함수");

// 함수 선언
function greeting() {
  console.log("안녕하세요!");
}

// 함수 호출
console.log("함수 호출 전");
greeting();
console.log("함수 호출 후");

// 함수 호출과 인수의 전달
function getArea(width, height) {
  let area = width * height;
  console.log(area);
  return area;
}

// 함수의 종료와 반환값
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(120, 200);
console.log(area2);

// 중첩 함수
function outer() {
  function inner() {
    console.log("inner");
  };
  console.log("outer");
  inner();
}

outer();

// 호이스팅
let res = hoisting();

function hoisting() {
  console.log("hoisting");
}