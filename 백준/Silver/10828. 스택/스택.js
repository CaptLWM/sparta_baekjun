let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let stack = [];
let answer = []
for (let i = 1; i < N + 1; i++) {
  let a = input[i].split(" ");
  if (a[0] === "push") {
    stack.push(a[1]);
  }
  if (a[0] === "pop") {
    answer.push(stack.length > 0 ? stack.pop() : -1)
    
  }
  if (a[0] === "size") {
    answer.push(stack.length)
  }
  if (a[0] === "empty") {
    answer.push(stack.length > 0 ? 0 : 1)
    
  }
  if (a[0] === "top") {
    answer.push(stack.length > 0 ? stack[stack.length - 1] : -1)

  }
}

console.log(answer.join('\n'))
