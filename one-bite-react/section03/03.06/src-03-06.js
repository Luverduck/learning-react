console.log("03.06. 반복문으로 객체와 배열 순회하기");

// 배열 순회
let arr = [1, 2, 3];
// - 인덱스 사용
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}
// - for...of 반복문 사용
for (let item of arr) {
  console.log(item);
}

// 객체 순회
let person = {
  name : "Luverduck",
  age : 27,
  hobby : "테니스",
}
// - Object.keys() 사용
let keys = Object.keys(person);
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}
// - Object.values() 사용
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}
// - for...in 반복문 사용
for (let key in person) {
  let value = person[key];
  console.log(key, value);
}