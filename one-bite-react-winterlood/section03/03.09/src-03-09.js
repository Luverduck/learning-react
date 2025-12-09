console.log("03.09. 배열 메소드 - 변형");

// filter()
// 배열의 모든 요소를 순회하며 각 요소에 대해 콜백 함수를 한 번씩 실행할 때 true를 반환하는 모든 요소를 새로운 배열로 반환
let arr1 = [
  {name : "이정환", hobby : "테니스"},
  {name : "김효빈", hobby : "테니스"}, 
  {name : "Luverduck", hobby : "독서"},  
];
const filterResult = arr1.filter((item) => item.hobby === "테니스");
console.log(filterResult); // [{name: '이정환', hobby: '테니스'}, {name: '김효빈', hobby: '테니스'}]

// map()
// 배열의 모든 요소를 순회하며 각 요소에 대해 콜백 함수를 한 번씩 실행한 후 그 결과를 새로운 배열로 반환
let arr2 = [1, 2, 3, 4, 5];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult); // [2, 4, 6, 8, 10]
// 객체의 배열에서 특정 속성의 값만 추출하여 배열로 반환할 수 있다.
let names = arr1.map((item) => item.name);
console.log(names); // ['이정환', '김효빈', 'Luverduck']

// sort()
// 배열의 요소를 정렬
// - String > 사전 순(오름차순)
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ['a', 'b', 'c']
// - Number > 전달한 콜백 함수에 의해 결정
// 1) 오름차순
let arr4 = [4, 10, 2];
arr4.sort((a, b) => {
  return a - b;
});
console.log(arr4); // [2, 4, 10]
// 2) 내림차순
let arr5 = [4, 10, 2];
arr5.sort((a, b) => {
  return b - a;
});
console.log(arr5); // [10, 4, 2]

// toSorted()
// 배열의 요소를 정렬하여 새로운 배열로 반환
let arr6 = ["b", "a", "c"];
const sortedArr = arr6.toSorted();
console.log(sortedArr); // ['a', 'b', 'c']

// join()
// 배열의 모든 요소를 구분자로 구분하여 합친 문자열 반환
let arr7 = ["Hi", "I'm", "Luverduck"];
const joinedArr1 = arr7.join();
const joinedArr2 = arr7.join('');
const joinedArr3 = arr7.join("-");
console.log(joinedArr1); // Hi,I'm,Luverduck
console.log(joinedArr2); // HiI'mLuverduck
console.log(joinedArr3); // Hi-I'm-Luverduck