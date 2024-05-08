// 피보나치
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = Number(input[0]); // 풍선의 개수
let pibo = [0,1];

// 피보나치 수열 생성
while(pibo[pibo.length-1]<1e9) pibo.push(pibo[pibo.length-1]+pibo[pibo.length-2])

for (let i=1; i<=total; i++) {
  let n = Number(input[i])
  let result = [] ;
  let index = pibo.length -1; // 피보 맨 끝
  while (n>0) {
    if(n>=pibo[index]) {
      n-=pibo[index];
      result.push(pibo[index]);
    }
    index--;
  }
  let answer ='';
  for (let k=result.length-1; k>=0; k-- ) {
    answer+=result[k]+' ';
  }
  console.log(answer)
}

