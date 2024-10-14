function solution(n, s, a, b, fares) {
    const graph = Array.from(Array(n + 1), () => []);
    
    // 그래프 생성
    for (const [u, v, cost] of fares) {
        graph[u].push([v, cost]);
        graph[v].push([u, cost]);
    }
    
    // Dijkstra 알고리즘
    const dijkstra = (start) => {
        const distance = Array(n + 1).fill(Infinity);
        distance[start] = 0;
        
        const pq = [[0, start]]; // [cost, node]
        
        while (pq.length > 0) {
            const [dist, node] = pq.shift();
            
            if (dist > distance[node]) continue;
            
            for (const [neighbor, cost] of graph[node]) {
                const newDist = dist + cost;
                
                if (newDist < distance[neighbor]) {
                    distance[neighbor] = newDist;
                    pq.push([newDist, neighbor]);
                }
            }
        }
        return distance;
    };
    
    const startDistances = dijkstra(s);
    const aDistances = dijkstra(a);
    const bDistances = dijkstra(b);
    
    let minCost = startDistances[a] + startDistances[b]; // 개인적으로 이동할 경우
    
    for (let i = 1; i <= n; i++) {
        const combinedCost = startDistances[i] + aDistances[i] + bDistances[i];
        minCost = Math.min(minCost, combinedCost);
    }
    
    return minCost;
}
