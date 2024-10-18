function solution(numbers, target) {
    var answer =0
    
    function dfs(index, sum){
        if(index === numbers.length) {
            if(sum === target) { // 합계랑 목표 값이랑 같으면 answer++
                answer ++;
            }
            return;// 아니면 재귀 중단
        }        
        dfs(index+1, sum+numbers[index]) // 인덱스 1추가, 부호가 +인 경우
        dfs(index+1, sum-numbers[index]) // 인덱스 1추가, 부호가 -인 경우
    }
    
    dfs(0,0) // 맨 첫자리부터, sum은 0부터 (그래야 맨 앞에 -일때 해결 가능)
    return answer
//     var answer = 0;

//     const dfs = (index, sum)=>{
//         if(index === numbers.length) {
//             if(sum === target) {
//                 answer++ ;
//             }
//             return;
//         }
//         dfs(index+1, sum+numbers[index]);
//         dfs(index+1, sum-numbers[index]);
//     }
    
//     dfs(0,0);
    
//     return answer;
}