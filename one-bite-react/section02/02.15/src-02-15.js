console.log("02.15. 객체 1");

// 객체의 생성
// - 객체 생성자 방식
let obj1 = new Object();
// - 객체 리터럴 방식
let obj2 = {};

// 객체의 속성(프로퍼티)
let person = {
  name : "Luverduck",
  age : 32,
  hobby : "테니스",
  bool : true,
  // 함수
  func : function() {},
  // 객체
  obj : {},
  // 키 값으로 원시 타입 사용 가능
  10 : 20,
  "string" : "stringValue"
};

// 객체의 속성 접근
// - 점 표기법
let name = person.name;
console.log(name);
// - 대괄호 표기법
let hobby = person["hobby"]
console.log(hobby);
console.log(person["10"]);

// 객체의 속성 추가
person.job = "FE Developer";
person["favorite"] = "떡볶이";

// 객체의 속성 수정
person.job = "BE Developer";
person["favorite"] = "초콜릿";

// 객체의 속성 삭제
delete person.job;
delete person["favorite"];

// 객체의 속성 보유 여부
let result = "name" in person;
console.log(person);