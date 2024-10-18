function solution(n, wires) {
  // 그래프 초기화
    const graph = Array.from({length:n+1},()=>[]);
    
    // 주어진 전력망 정보로 그래프 구성
    for (const[u,v] of wires) {
        graph[u].push(v);
        graph[v].push(u)
    }
    
    let minDiff = Infinity; // 최소 차이 초기화
    
    // 각 전선 제거 후 DFS 수행
    for (const [u,v] of wires) {
        // 현재 전선 제거
        graph[u] = graph[u].filter(node => node !== v);
        graph[v] = graph[v].filter(node=>node !== u);
        
        // DFS를 통해 첫 번째 부분망의 크기 계산
        const visited = Array(n+1).fill(false);
        const size = dfs(graph, u, visited);
        
        // 두번째 부분망의 크기
        const diff = Math.abs(size-(n-size));
        minDiff = Math.min(minDiff, diff); // 최소 차이 갱신
        
        // 현재 전선 복구
        graph[u].push(v)
        graph[v].push(u)
    }
    
    return minDiff; // 최종 최소 차이 반환
}

function dfs(graph, node, visited){
    visited[node]=true;
    let count=1;
    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            count += dfs(graph, neighbor, visited); // 재귀적으로 연결된 노드 수 세기
        }
    }
    
    return count; // 부분망의 크기 반환
}