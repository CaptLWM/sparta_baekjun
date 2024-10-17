function solution(brown, yellow) {
    var answer = [];
    
    let totalCarpet = brown + yellow; // 총 타일 개수
    
    // 약수 탐색 시작, 갈색 격자수는 8이상, 노란색은 1이상이므로 무조건 최소 폭은 3 이상임
    for(let width=3; width <= Math.sqrt(totalCarpet); width++) {
        if(totalCarpet % width === 0 ) { // 약수
            let height = totalCarpet / width; // 높이
            // 가로 세로 더하기의 2배/ 그리고 겹치는 모서리 // 테두리 한줄만 갈색이므로
            if(2*(width + height)-4 === brown) {
                return [height, width]; 
            }
        }
         
    }
    // var answer = [];
    // let totalCarpet = brown+yellow
    //  for (let width = 3; width <= Math.sqrt(totalCarpet); width++) {
    //     if (totalCarpet % width === 0) { // width가 약수일 때
    //         let height = totalCarpet / width;
    //         // 갈색 타일 수 계산: 2 * (width + height) - 4
    //         if (2 * (width + height) - 4 === brown) {
    //             return [height, width]; // 세로, 가로 순서로 반환
    //         }
    //     }
    // }

//     for (let i=1; i<=totalCarpet; i++) {
//         if(totalCarpet%i === 0) {
//             answer.push(i)
//             answer.push(totalCarpet/i)
//         } 
//     }
    
//     const set=new Set(answer.sort((a,b)=>a-b))
//     const test = Array.from(set)
//     console.log(test)
//     if(test.length%2 === 1) {
//         answer = [test[Math.floor(test.length/2)],test[Math.floor(test.length/2)]]  
//     } else {
//         answer = [test[test.length/2-1], test[test.length/2]].sort((a,b)=>b-a)
//     }
//     return answer;
}