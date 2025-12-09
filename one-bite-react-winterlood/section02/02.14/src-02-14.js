console.log("02.14. 스코프");

// 전역 스코프(Global Scope) : 전체 영역에서 접근 가능
// 전역 스코프를 가지는 변수
let varA = 1;
// 전역 스코프를 가지는 함수
function funcA() {
	// 전체 영역에서 접근 가능
	console.log(varA);
}
// 전체 영역에서 접근 가능
funcA();

// 지역 스코프(Local Scope) : 특정 영역에서만 접근 가능
function funcB() {
	// 지역 스코프를 가지는 변수
	let varB = 1;
	console.log(varB);
	// 지역 스코프를 가지는 함수
	function funcC() {
		console.log(varB);
	}
}
// 지역 스코프 밖에서 접근 불가능
// console.log(varB);
// funcC();