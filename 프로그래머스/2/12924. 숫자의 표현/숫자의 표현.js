function solution(n) {
     let count = 0;

    // k는 1부터 n까지 증가
    for (let k = 1; k <= n; k++) {
        // 연속된 자연수의 합으로 표현할 수 있는 경우 체크
        const sum = (k * (k - 1)) / 2; // k개의 자연수 합의 최소값
        if (sum >= n) break; // 최소값이 n보다 크면 더 이상 진행할 필요 없음

        if ((n - sum) % k === 0) {
            count++; // x가 자연수일 때 카운트
        }
    }

    return count; // 결과 반환
//     var answer = 0;
//     var sum =0
//     var start = 1;
//     for (let i=1; i<=n; i++) {
//         sum += i;
//         while(sum>n) {
//             sum-=start;
//             start++
//             console.log(sum, start)
//         }
        
//         if(sum === n) {
//             answer ++;
//         }
//         // console.log(start)
//     }
//     return answer;
}