console.log("02.05. 자료형");

// 1. 숫자 (Number)
// - 정수/실수형 구분이 없다.
let num1 = 27;
let num2 = 1.5;
let num3 = -20.5;
// - 사칙 연산을 지원한다.
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
// - Infinity는 무한히 큰 숫자를 의미한다.
let inf = Infinity;
console.log("inf = " + inf);
let mInf = -Infinity;
console.log("mInf = " + mInf);
// - Nan는 숫자가 아님(Not a Number)을 의미한다.
let nan = NaN;
console.log("nan = " + nan);
// console.log(1 * "Hello");

// 2. 문자열 (String)
let myName = "Luverduck";
let myLocation = "Seoul";
// - 덧셈 연산 시 문자열 이어붙이기로 동작한다.
let introduce = myName + myLocation;
console.log("introduce = " + introduce);
// - 템플릿 리터럴 문법을 지원한다.
let introduceTemplate = `${myName} live in ${myLocation}.`;
console.log("introduceTemplate = " + introduceTemplate);

// 3. 논리 (Boolean)
let isSwitchOn = true;
let isEmpty = false;

// 4. 널 (Null)
let empty = null;
console.log("empty = " + empty);

// 5. 정의되지 않음 (Undefined)
let none;
console.log("none = " + none);