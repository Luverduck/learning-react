console.log("03.04. Spread 연산자와 Rest 매개변수");

// Spread 연산자
// 1) 객체 전개
let obj1 = {
  a : 1,
  b : 2,
};
let obj2 = {
  ...obj1,
  c : 3,
  d : 4,
};
console.log(obj2);

// 2) 배열 전개
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 3) 함수 호출 시 전달한 인수 전개
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 4) 문자열 전개
let str = "Hello";
let charArr = [...str];
console.log(charArr);


// Rest 연산자
// 1) 함수 호출 시 전달한 인수 중 나머지 인수 응축
function funcB(one, ...rest) {
  console.log(one, rest);
}
funcB(1, 2, 3, 4, 5);

// 2) 객체의 구조 분해 할당 시 나머지 속성 응축
let {a, ...restObj} = { a : 1, b : 2, c : 3, d : 4 };
console.log(a, restObj);

// 3) 배열의 구조 분해 할당 시 나머지 요소 응축
let [first, ...restArr] = [1, 2, 3, 4];
console.log(first, restArr);