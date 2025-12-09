console.log("02.08. 연산자 2");

// null 병합 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);

let var6 = var2 ?? var3;
console.log(var6);

let userName = "이름";
let userNickname = "닉네임";
let displayName = userName && userNickname;
console.log(displayName);

// typeof 연산자
let var7 = 1;
var7 = "Hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 삼항 연산자
let var8 = 10;
let res = var8 % 2 == 0 ? "짝수" : "홀수";
console.log(res);