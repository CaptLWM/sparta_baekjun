let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = Number(input[0]);
let re = [];
for (let i = 1; i <= total; i++) {
  re.push(input[i].split(" ").map(Number));
}
re.sort((a, b) => { // 종류시점 비교, 시작시점 비교
  if(a[1] !== b[1]) return a[1]-b[1];
  else return a[0]-b[0]
});


let cnt = 1;
let cur = 0; // 첫번재 회의부터
for (let i = 1; i < re.length; i++) {
  if(re[cur][1] <= re[i][0]) {

    cur = i; // 현재회의 끝나고 다음회의
    cnt +=1;
  }
}

console.log(cnt);