console.log("03.03. 구조 분해 할당");

// 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four, five = 5] = arr;
console.log(one, two, three, four, five);

// 객체의 구조 분해 할당
let person = {
  name : "Luverduck",
  age : 27,
  hobby : "테니스",
};

let {name, age, hobby, extra1, extra2 = "FE"} = person;
console.log(name, age, hobby, extra1, extra2);

// 구조 분해 할당 활용
const func = ({name, age, hobby}) => {
  console.log(name, age, hobby);
};

func(person);