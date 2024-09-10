function solution(n, numlist) {
    var answer = [];
    numlist.forEach((v)=>{
        if(v%n===0) {
            answer.push(v)
        }
    })
    return answer;
}