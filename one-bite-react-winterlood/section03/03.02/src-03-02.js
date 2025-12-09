console.log("03.02. 단락 평가");

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// && (AND 연산자)의 단락 평가
console.log(returnFalse() && returnTrue());

// || (OR 연산자)의 단락 평가
console.log(returnTrue() || returnFalse());

// 단락 평가 활용
function printName(person) {
  let name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({name : "Luverduck"});