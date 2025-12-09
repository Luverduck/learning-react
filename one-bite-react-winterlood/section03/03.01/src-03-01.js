console.log("03.01. Truthy와 Falsy");

// Falsy 값
let falsy = [
  0,
  -0,
  0n,
  "",
  null,
  undefined,
  NaN,
];

for(let i = 0; i < falsy.length; ++i) {
  if(falsy[i]) console.log(true);
  else console.log(false);
}

// Truthy 값
let truthy = [
  123,
  "hello",
  [],
  {},
  () => {},
]

for(let i = 0; i < truthy.length; ++i) {
  if(truthy[i]) console.log(true);
  else console.log(false);
}

// Truthy와 Falsy 활용 사례
function printName(person) {
  if(!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);