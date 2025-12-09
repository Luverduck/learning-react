console.log("03.05. 원시 타입 VS 객체 타입");

// 원시 타입
let p1 = 1;
let p2 = p1;

p2 = 2;

// 객체 타입
let obj1 = { name : "Luverduck" };
let obj2 = obj1;

obj2.name = "Hello";

// 객체 타입의 복사
// - 얕은 복사
let obj3 = obj1;
// - 깊은 복사
let obj4 = { ...obj1 };

// 객체 타입의 주의사항
// 1. 객체 타입을 변수에 할당할 때 원본 객체를 수정할 필요가 없다면 깊은 복사한다.
let obj = { ...obj1 };
// 2. 객체 간의 비교는 메모리 주소를 기준으로 이루어진다.
console.log(obj1 === obj3);
console.log(obj1 === obj4);
// - 객체의 속성을 기준으로 비교해야 할 경우 자바스크립트의 내장 함수인 JSON.stringify()를 사용하여 JSON 문자열로 변환하여 비교한다.
console.log(
  JSON.stringify(obj1) === JSON.stringify(obj4)
);
// 3. 배열과 함수도 객체 타입이다.
// - 배열과 함수도 일반 객체와 같이 내부에 속성이나 메소드를 가질 수 있다.