console.log("02.04. 변수와 상수");

// 1. 변수 (Variable)
let age = 32;
console.log("age = " + age);
age = 33;
console.log("age = " + age);

// 2. 상수 (Constant)
const birth = "1992-03-20";
console.log("birth = " + birth);
birth = "1992-03-21";
console.log("birth = " + birth);

// 3. 변수 명명 규칙
// - 변수명에 $, _를 제외한 특수 문자를 사용할 수 없다.
let $_name;
// - 변수명은 숫자로 시작할 수 없다.
let name1;
let $2name;
// - 예약어를 변수명으로 사용할 수 없다.
// let let;