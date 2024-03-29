let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// N과 M 15650
/**  
  재귀함수를 호출할 때마다 선택되는 값이 커지도록 하는 것이 핵심
  하나의 조합을 트리에서 리프 노드까지의 경로로 생각
  순열과 다른 점은 start 변수 사용(더 큰 값 선택하기 위해)
*/

let [n, m] = input[0].split(' ').map(Number); // 1부터 N가지 자연수 중에서 중복없이 M개를 고른 조합
let arr = []; // 조합을 계산하고자 하는 원소(element)가 담긴 배열
for (let i=1; i<=n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부
let selected = [];

let answer ='';
function dfs(arr, depth, start) {
  if(depth === m) { // 모든 조합을 확인하는 부분
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' '; // 계산된 조합을 실질적으로 처리하는 부분
    answer += '\n';
    return;
  }
  for(let i=start; i<arr.length;i++) { // start 지점부터 하나씩 원소 인덱스를 확인
    if(visited[i]) continue; // 중복을 허용하지 않으므로 이미 처리된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth+1, i+1); // 조합이므로 재귀함수 호출 시 다음 인덱스
    selected.pop();// 현재원소 선택 취소
    visited[i]=false;
  }
}

dfs(arr, 0,0)
console.log(answer)