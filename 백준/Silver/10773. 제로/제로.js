let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let K = Number(input[0]);
let stack = [];
let answer = 0
for (let i = 1; i < K + 1; i++) {
  let a = Number(input[i])
  if(a === 0) {
    stack.pop() 
  } else {
    stack.push(a)
  }    
}

stack.forEach((v)=>{
  if(v !== 0) answer+=v
})


console.log(answer)
