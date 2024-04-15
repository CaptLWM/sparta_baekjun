let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let city = Number(input[0]);
let distance = input[1].split(' ').map(Number);
let price = input[2].split(' ').map(Number);

let minPrice = price[0];
for (let i=0; i<city; i++) { // 비오름차순, 각 단계이후보다 싼걸로 대체(마지막 도시 제외)
  minPrice = Math.min(minPrice, price[i]);
  price[i] = minPrice;
}

let answer = BigInt(0);
for(let i=0; i<city-1; i++) { // 마지막도시는 상관 없음
  answer += BigInt(distance[i])*BigInt(price[i]);  
}
console.log(String(answer))

