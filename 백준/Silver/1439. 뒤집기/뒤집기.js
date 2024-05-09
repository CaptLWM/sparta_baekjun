let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// N : 물 새는 곳 개수, L : 테이프의 길이
let arr = input[0].split("");

let temp = 1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) { // undefined 방지
    // console.log(arr[i], arr[i+1])
    temp += 1;
  }
}

console.log(Math.floor(temp/2))