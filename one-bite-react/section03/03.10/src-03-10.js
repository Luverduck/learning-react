console.log("03.10. Date 타입과 날짜");

// Date
let date1 = new Date();
console.log(date1);
let date2 = new Date("1992-03-20");
let date3 = new Date("1992. 03. 20");
let date4 = new Date("1992/03/20");
console.log(date2);
console.log(date3);
console.log(date4);
let date5 = new Date("1992/03/20/13:25:20");
let date6 = new Date(1992, 3, 20, 13, 25, 20);
console.log(date5);
console.log(date6);

// 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
console.log(year, month, date, hour, minute, second);

// 시간 요소 설정
date1.setFullYear(2025);
date1.setMonth(7);
date1.setDate(24);
date1.setHours(3);
date1.setMinutes(22);
date1.setSeconds(57);
console.log(year, month, date, hour, minute, second);

// 시간 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());


// TimeStamp
let timeStamp1 = date1.getTime();
console.log(timeStamp1);
let date7 = new Date(timeStamp1);
console.log(date7);