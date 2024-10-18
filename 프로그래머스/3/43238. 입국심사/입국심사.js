function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right; // 시간 초기값
    
    while(left<=right) {
        const mid = Math.floor((left+right)/2); // 이분탐색 시작
        let count =0;
        
        // mid 시간 내에 처리가능한 인원 수 계산
        for (let time of times) {
            count += Math.floor(mid/time)
        }
        
        if(count >= n ) {
            answer = mid; // 가능한 최소 시간 업데이트
            right = mid-1; // 최대 시간을 줄여보기
        } else {
            left = mid+1; // 최소시간 증가
        }
    }
    return answer
}
//     // 최소 시간은 1초, 최대 시간은 가장 긴 처리시간 * 인원수
//     let left = 1;
//     let right = Math.max(...times) * n;
//     let answer = right;
    
//     while(left<=right) {
//         const mid = Math.floor((left+right)/2);
//         let count = 0;
        
//         // 각 심사대에세 mid 시간 내에 처리할 수 있는 인원 수 계산
//         for (let time of times) {
//             count += Math.floor(mid/time)
//         }
        
//         // 처리할 수 있는 인원이 n명 이상이면 시간 조정
//         if (count >= n) {
//             answer= mid; // 가능한 최소 시간 업데이트
//             right = mid-1; // 최소 시간을 줄여봄
//         } else {
//             left = mid+1; // 시간을 늘려야함
//         }
//     }
    
//     return answer
// }