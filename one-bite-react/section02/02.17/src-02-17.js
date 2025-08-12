console.log("02.17. 배열");

// 배열의 생성
// - 배열 생성자
let arrA = new Array();
// - 배열 리터럴
let arrB = [];

let arrC = [ 
  1, 
  2, 
  3,
  true,
  "Hello",
  null,
  undefined,
  () => {},
  {},
  []
];
console.log(arrC);

// 배열의 요소 접근
let item0 = arrC[0];
let item1 = arrC[1];
console.log(item0, item1);

// 배열의 요소 변경
arrC[0] = "change";
console.log(arrC[0]);