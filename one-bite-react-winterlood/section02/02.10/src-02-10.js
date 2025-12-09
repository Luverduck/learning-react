console.log("02.10. 반복문");

// for 문
for(let i = 0; i < 10; ++i) {
  if(i == 8) {
    console.log("끝");
    break;
  }
  if(i % 2 == 0) {
    console.log("생략");
    continue;
  }
  console.log(i);
}