let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// N : 물 새는 곳 개수, L : 테이프의 길이
let [N, L] = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number).sort((a, b) => a - b)

let answer = 0;
let i = 0; // 사용할 index

while(i<N) {
  answer += 1; // 새로운 테이프 사용

  const start = arr[i]; // 현재위치를 테이프 시작점

  // 테이프 범위 계산
  const end = start + L - 1

  // 테이프 범위 내에 있는 모든 물이 새는 위치 건너뜀
  // 테이프의 끝을 초과하는 위치가 나올 때까지 인덱스 증가
  while (i < N && arr[i] <= end) {
    i+=1
  }
}

console.log(answer)