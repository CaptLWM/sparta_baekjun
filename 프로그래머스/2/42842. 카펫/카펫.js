function solution(brown, yellow) {
    var answer = [];
    let totalCarpet = brown+yellow
     for (let width = 3; width <= Math.sqrt(totalCarpet); width++) {
        if (totalCarpet % width === 0) { // width가 약수일 때
            let height = totalCarpet / width;
            // 갈색 타일 수 계산: 2 * (width + height) - 4
            if (2 * (width + height) - 4 === brown) {
                return [height, width]; // 세로, 가로 순서로 반환
            }
        }
    }

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