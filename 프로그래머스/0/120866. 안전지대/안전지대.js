const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function solution(board) {
    const n = board.length;
    const danger = JSON.parse(JSON.stringify(board)); //깊은 복사
    console.log(danger)
    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(!board[x][y]) continue;
            
            for(let i = 0; i < 8; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= n)
                    continue;
                
                danger[nx][ny] = 1;
            }
        }
    }
    
    const mineCnt = danger.flat().filter(d => d).length;
    return n * n - mineCnt;
}