let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let arrN = input[1].split(" ").map(Number).sort((a,b)=>a-b);
let M = Number(input[2]);
let arrM = input[3].split(" ").map(Number);

function binarySearch(arr, target, start, end) {
  // if (start > end) return -1;
  // let mid = parseInt((start + end) / 2);
  // // 찾으면 중간점 인덱스 반환
  // if (arr[mid] === target) {
  //   return mid;
  // } else if (arr[mid] > target) {
  //   // 중간점 보다 작을경우 왼쪽 확인
  //   return binarySearch(arr, target, start, mid - 1);
  // } else {
  //   // 중간점 보다 클 경우 오른쪽 확인
  //   return binarySearch(arr, target, mid + 1, end);
  // }
  while(start<=end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1
}

let answer = []
for (let i = 0; i < M; i++) {
  let result = binarySearch(arrN, arrM[i], 0, N - 1);
  // console.log(result)
  if (result === -1) answer.push(0);
  else answer.push(1);
}
console.log(answer.join("\n"))
