// math 모듈
/*
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
*/

/*
// CommonJS 모듈 시스템 방식
module.exports = {
  add : add,
  subtract : subtract
}
*/

// ES 모듈 시스템 방식
// export { add, subtract };

// 개별 export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// ES 모듈 시스템의 export default
export default function multiply(a, b) {
  return a * b;
}