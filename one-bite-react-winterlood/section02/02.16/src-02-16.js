console.log("02.16. 객체 2");

// 상수 객체
const animal = {
  type : "고양이",
  name : "나비",
  color : "black",
};

// 참조하는 객체 변경 불가능
// animal = { type : "토끼" };
animal.type = "강아지";
// 참조하는 객체의 속성 변경 가능
animal["name"] = "마루";
console.log(animal);

// 메소드
const person = {
  // 속성
  name : "Luverduck",
  // 메소드
  funcA : function() {
    console.log("funcA");
  },
  funcB : () => {
    console.log("funcB");
  },
  funcC() {
    console.log("funcC");
  }
}

person.funcA();
person["funcB"]();