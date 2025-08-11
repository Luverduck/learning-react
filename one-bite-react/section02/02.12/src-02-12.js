console.log("02.12. 함수 표현식과 화살표 함수");

// 함수의 선언과 할당
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

// 함수 표현식
let varB = function funcB() {
  console.log("funcB");
}

varB();

// 함수 표현식 (익명 함수)
let varC = function() {
  console.log("funcC");
}

// 화살표 함수
// 1) 
let varD = () => {
  return 1;
}
// 2)
let varE = () => 1;
// 3)
let varF = (value) => {
  return value + 1;
}

console.log(varF(10));