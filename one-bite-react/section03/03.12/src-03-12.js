console.log("03.12. 비동기 작업 처리 - 콜백 함수");

function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 3000);
};

// task();

function add(a, b, callback) {
  setTimeout(() => {
    const sum =  a + b;
    callback(sum);
  }, 3000);
};
/*
add(1, 2, (value) => {
  console.log(value)
});
*/

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
};
/*
orderFood((food) => {
  console.log(food);
});
*/

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}
/*
orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
  });
});
*/

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownedFood, (freezedFood)=>{
      console.log(freezedFood);
    });
  });
});