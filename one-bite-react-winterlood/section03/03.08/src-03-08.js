console.log("03.08. 배열 메소드 - 순회와 탐색");

// forEach()
// 배열의 모든 요소를 순회하며 각 요소에 대해 콜백 함수를 한 번씩 실행
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function(item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr); // [2, 4, 6, 8, 10]

// includes()
// 배열에서 지정한 요소가 포함되어있는지 여부
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.includes(2)); // true
console.log(arr2.includes(20)); // false

// indexOf()
// 배열에서 지정한 요소의 인덱스 반환
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.indexOf(3)); // 2
console.log(arr3.indexOf(30)); // -1

// findIndex()
// 배열의 모든 요소를 순회하며 각 요소에 대해 콜백 함수를 한 번씩 실행할 때 true를 반환하는 요소의 인덱스 반환
let arr4 = [1, 2, 3, 4, 5];
const findIndex1 = arr4.findIndex((item) => {
  return item % 5 === 0;
});
const findIndex2= arr4.findIndex((item) => {
  return item % 5 === 999;
});
console.log(findIndex1); // 4
console.log(findIndex2); // -1

// indexOf() 와 findIndex()
let arr5 = [
  {name : "홍길동"},
  {name : "리액트"},
  {name : "Luverduck"}
];
const idx1 = arr5.indexOf({name : "Luverduck"});
const idx2 = arr5.findIndex((item) => {
  return item.name === "Luverduck"
});
console.log(idx1); // -1
console.log(idx2); // 0

// find()
// 배열의 모든 요소를 순회하며 각 요소에 대해 콜백 함수를 한 번씩 실행할 때 true를 반환하는 요소 반환
let arr6 = [
  {name : "홍길동"},
  {name : "리액트"},
  {name : "Luverduck"}
];
const find1 = arr6.find((item) => {
  return item.name === "Luverduck";
});
console.log(find1);