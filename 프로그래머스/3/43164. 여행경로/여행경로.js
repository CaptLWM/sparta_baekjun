function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];
  
  tickets.sort();
  
  const len = tickets.length;
    
    // str = 현재 출발역 / count = 방문역의 개수
  const dfs = (str, count) => {
    result.push(str);
    
      // 탈출조건 => count === len => 모든 역을 방문
    if(count === len) {
      answer = result;
      return true;
    }
    
      
    for(let i = 0; i < len; i++) {
      if(!visited[i] && tickets[i][0] === str) {
        visited[i] = true;
         // 다음 dfs 진행은 현재 노드의 도착역이 기준이 될 것이다(= tickets[i][1])
      // deps가 들어갈 수록 깊어지므로 현재 count+1을 전달해준다. 
      // 이때 deps는 결국 tickest에 있는 역들의 총 수와 같다.
      // 계속 dfs로 내려갈 수 있다면 결과값 역시 계속 true를 반환할 것이다.
      // 만약 false를 반환하면 이 단계를 건너띄고 방문취소 단계로 넘어간다.
        if(dfs(tickets[i][1], count+1)) return true;
        
        visited[i] = false;
      }
    }
 // 전체를 탐색하지 못한 경우가 발생했으므로
  // 지금 들어간 역은 유효 경로가 아니다.
  // 따라서 pop()을 통해 제거해주고 다시 이전을 돌아가야한다.
    result.pop();
    
    return false;
  }
  
  dfs("ICN", 0);
  
  return answer;
}