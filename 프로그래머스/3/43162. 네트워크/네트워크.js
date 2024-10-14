function solution(n, computers) {
    // dfs
    let visited = Array(n).fill(false);
    let networkCount = 0;
    
    const dfs = (index)=> {
        visited[index]=true; // 현재 컴퓨터 방문 처리
        for(let i=0; i<n; i++) {
            if(computers[index][i]===1 && !visited[i]) { // 연결된 컴퓨터 찾기
                dfs(i) // wornl
            }
        }
    }
    
//      const bfs = (start) => {
//         const queue = [start]; // BFS 큐 초기화
//         visited[start] = true; // 시작 컴퓨터 방문 처리

//         while (queue.length > 0) {
//             const current = queue.shift(); // 큐에서 컴퓨터를 꺼냄
//             for (let i = 0; i < n; i++) {
//                 // 연결된 컴퓨터 중 방문하지 않은 경우
//                 if (computers[current][i] === 1 && !visited[i]) {
//                     visited[i] = true; // 방문 처리
//                     queue.push(i); // 큐에 추가
//                 }
//             }
//         }
//     };
    
    for (let i=0; i<n; i++) {
        if(!visited[i]) {
            dfs(i);
            // bfs(i);
            networkCount++;
        }
    }
    return networkCount;
}