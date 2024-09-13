function solution(n) {
    var answer = [];
    String(n).split('').reverse().forEach((v)=>{
        answer.push(Number(v))
    })
    return answer;
}