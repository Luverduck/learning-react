// 하나의 데이터 출력력
console.log('Hello, World!');
console.log(1);
console.log(true);
console.log([1, 2, 3]);
console.log({name : '홍길동', age : 20, married : false});

// 여러 데이터 출력
console.log('Hello, World!', 1, true, [1, 2, 3], {name : '홍길동', age : 20, married : false});

// 콘솔 출력시 로그 레벨 지정 (브라우저의 콘솔에서 확인)
console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');