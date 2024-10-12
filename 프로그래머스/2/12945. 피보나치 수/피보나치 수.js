function solution(n) {
    var answer = 0;
    // 시간초과
    // function fibo(n){
    //     if(n===0) return 0;
    //     if(n===1) return 1;
    //     return fibo(n-2)+fibo(n-1)
    // }
    // answer = fibo(n)%1234567
    
    // DP
    function fibo(n) {
        if(n===0) return 0;
        if(n===1) return 1;       
        const dp = [0,1];
        for(let i=2; i<=n; i++){
            dp[i] = (dp[i-1]+dp[i-2])%1234567
        }
        return dp[n]
    }
    answer = fibo(n)
    return answer;
}