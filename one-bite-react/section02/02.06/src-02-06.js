console.log("02.06. 형 변환");

// 형 변환 (Type Casting)
// 특정 타입의 값을 다른 타입으로 변경하는 것

// 암묵적 형 변환 (Implicit Type Casting)
// 개발자가 직접 명시하지 않아도 자바스크립트 엔진이 자동으로 수행하는 형 변환
let num = 10;
let str = "20";
// 숫자를 문자열로 암시적 형 변환 후 + 연산
const im_res = num + str;
console.log("num + str = " + im_res);

// 명시적 형 변환 (Explicit Type Casting)
// 개발자가 직접 명시하여 수동으로 수행하는 형 변환
// i) 문자열 -> 숫자
let ex_res1 = Number(str);
console.log(ex_res1 + 100);
// ii) 숫자 -> 문자열
let ex_res2 = String(num);
console.log(ex_res2 + 100);