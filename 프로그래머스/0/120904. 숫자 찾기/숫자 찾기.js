function solution(num, k) {
    var answer = 0;
    String(num).split('').some((v,i)=>{
        if(Number(v)===k) {
            answer = i+1
            return true
        }
    })
    if(answer===0) {
        answer = -1
    }
    return answer;
}