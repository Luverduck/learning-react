console.log("03.06. 배열 메소드 - 요소 조작");

// push()
// 배열의 맨 뒤에 새로운 요소 추가
let arr1 = [1, 2, 3];
const newLength1 = arr1.push(4);
console.log(arr1);
console.log(newLength1);

// pop()
// 배열의 맨 뒤에 있는 요소 제거
let arr2 = [1, 2, 3];
const popped = arr2.pop();
console.log(arr2);
console.log(popped);

// shift()
// 배열의 맨 앞에 있는 요소 제거
let arr3 = [1, 2, 3];
const shifted = arr3.shift();
console.log(arr3);
console.log(shifted);

// unshift()
// 배열의 맨 앞에 새로운 요소 추가
let arr4 = [1, 2, 3];
const newLength4 = arr4.unshift(0);
console.log(arr4);
console.log(newLength4);

// slice()
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let slicedArr1 = arr5.slice(2, 5);
let slicedArr2 = arr5.slice(2);
let slicedArr3 = arr5.slice(-3);
console.log(slicedArr1);
console.log(slicedArr2);
console.log(slicedArr3);

// concat()
// 두 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);