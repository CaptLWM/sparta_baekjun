let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// testCase T
let T = Number(input[0]);
let result = [];

for(let i=0; i<T; i++) {
  // 자바스크립트는 한줄씩 읽는게 없기때문에 규칙찾아서 배열 해야함
  let n = Number(input[2*i+1])
  let arr = input[2*i+2].split(" ").map(Number);

  let max=0;
  let temp = 0;

  // 뒤에서부터 순환을 항상 생각하고 있어야함
  // 뒤에서 부터 순환, 이미 가격이 어떻게 돌아갈지는 다 알고 있으니까
  for (let j=n-1; j>=0; j--) {
    if(arr[j] > max) {
      max = arr[j]
    } else {
      temp += max - arr[j]
    }
  }
  result.push(temp)
  // console.log(result)
}

console.log(result.join("\n"))