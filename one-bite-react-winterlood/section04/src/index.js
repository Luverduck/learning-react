// console.log("안녕 Node.js");

/*
// CommonJS 모듈 시스템 방식
const moduleData = require("./math");
console.log(moduleData);
console.log(moduleData.add(1, 2));
console.log(moduleData.subtract(1, 3));

const {add, subtract} = require("./math");
console.log(add(1, 2));
console.log(subtract(1, 3));
*/

/*
// ES 모듈 시스템 방식
import { add, subtract } from "./math.js";
console.log(add(1, 2));
console.log(subtract(1, 3));
*/

/*
// ES 모듈 시스템의 export default
import multiply, { add, subtract } from "./math.js";
console.log(add(1, 2));
console.log(subtract(1, 3));
console.log(multiply(2, 3));
*/

// npm을 통해 다운로드한 라이브러리 사용
import randomColor from "randomcolor";
const color = randomColor();
console.log(color);