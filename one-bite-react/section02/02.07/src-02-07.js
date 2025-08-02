console.log("02.07. 연산자 1");

// 대입 연산자
let var1 = 1;

// 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 3;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);

let num7 = (1 + 2) * 10;
console.log(num7);

// 복합 대입 연산자
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;

// 증감 연산자
let num9 = 10;
++num9;
console.log(num9);
num9++;
console.log(num9);

// 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);