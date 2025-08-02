console.log("02.09. 조건문");

// if 조건문
let num = 9;

if(num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다!");
} else if(num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("조건이 거짓 입니다!");
}

// switch 조건문
let animal = "cat";

switch(animal) {
  case "dog": {
    console.log("강아지");
    break;
  }
  case "cat": {
    console.log("고양이");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("동물");
    break;
  }
}