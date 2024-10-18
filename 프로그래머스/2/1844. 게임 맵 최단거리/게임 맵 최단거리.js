function solution(maps) {
    // 맵 구조
    const n = maps.length;
    const m = maps[0].length;
    
    // 방향
    const direction = [
        [1,0], // 아래
        [-1,0], // 위
        [0,1], // 우
        [0,-1] // 좌
    ];
    
    const queue = [[0,0,1]]  // [x,y,거리]
    
    // 방문여부 체크
    // 배열을 따로 두지 않고 배열 값을 0으로 변경하여 방문여부 체크
    // const visited = Array.from({length:n},()=>Array(m).fill(false));
    // 시작점
    maps[0][0] = -1
    
    // 경로 탐색 시작
    while (queue.length) {
        // 이동 저장
        const [x,y,distance] = queue.shift();
        
        // 목표위치 도달 시 거리 반환 
        if(x===n-1 && y === m-1) {
            return distance;
        }
        
        // 상하좌우 탐색
        for(const [dx, dy] of direction) {
            const nx = x+dx;
            const ny = y+dy;
            
            if(nx>=0 && nx<n && ny>=0 && ny<m && maps[nx][ny] === 1 ) {
                maps[nx][ny] = -1;
                queue.push([nx, ny, distance +1])
            }
        }
        
    }
    return -1
}