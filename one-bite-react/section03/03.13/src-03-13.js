console.log("03.13. 비동기 작업 처리 - Promise");

// Promise
let promise1 = new Promise(() => {
  // executor 함수
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

setTimeout(() => {
  console.log(promise1); // 
}, 3000);

// Promise의 상태 변경
// - 대기(Pending) > 성공(Fulfilled)
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const myVar = 10;
    if(typeof myVar === 'number') {
      resolve(myVar + 10);
    } else {
      reject("왜 실패했는지 이유...");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise2);
}, 3000); // 안녕

// - 대기(Pending) > 실패(Rejected)
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const myVar = null;
    if(typeof myVar === 'number') {
      resolve(myVar + 10);
    } else {
      reject("왜 실패했는지 이유...");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise3);
}, 3000); // 왜 실패했는지 이유...

// then()과 catch()
promise2.then((value) => {
  console.log(value);
});

promise3.catch((error) => {
  console.log(error);
});

// Promise의 메소드 체이닝
promise3
.then((value) => {
  console.log(value);
})
.catch((error) => {
  console.log(error);
});

// Promise의 메소드 체이닝 활용
function add10(num) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // const myVar = 1000;
      const myVar = null;
      if(typeof myVar === 'number') {
        resolve(myVar + 10);
      } else {
        reject("왜 실패했는지 이유...");
      }
    }, 2000);
  });
  return promise;
};

const promise = add10(0);
promise
.then((result) => {
  console.log(result);
  return add10(result);
})
.then((result) => {
  console.log(result);
  return add10(result);
})
.catch((error) => {
  console.log(error);
});