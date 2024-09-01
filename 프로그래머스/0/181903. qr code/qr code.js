function solution(q, r, code) {
    var answer = '';
    code.split('').forEach((v,idx)=>{
        if(idx%q === r) {
            answer += v
        }
    })
    return answer;
}