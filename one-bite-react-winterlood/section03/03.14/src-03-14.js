console.log("03.14. 비동기 작업 처리 - async & await");

// async
// 비동기 방식으로 실행되는 함수를 정의하는 키워드
async function getData() {
  return {
    name : "러버덕",
    id : "Luveruduck"
  }
};

console.log(getData());

// await
// async 함수 내부에서 실행된 또 다른 async 함수가 해결될 때까지 실행을 중단하는 키워드
async function getDataAwait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name : "러버덕",
        id : "Luverduck"
      })
    }, 1500)
  })
};

console.log(getDataAwait());

async function printData() {
  // getDataAwait()가 해결될 때까지 printData()의 실행을 중단
  const data = await getDataAwait();
  console.log(data);
}

printData();