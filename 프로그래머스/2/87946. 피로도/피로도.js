function solution(k, dungeons) {
    var maxClear = 0;
    
    function dfs(current, count, visited) {
        maxClear=Math.max(maxClear, count);
        
        for (let i=0; i<dungeons.length; i++) {
            if(!visited[i]&& current >= dungeons[i][0]) {
                visited[i]=true;
                dfs(current-dungeons[i][1], count+1, visited);
                visited[i]=false
            }
        }
    }
    dfs(k, 0, Array(dungeons.length).fill(false))
    return maxClear;
}