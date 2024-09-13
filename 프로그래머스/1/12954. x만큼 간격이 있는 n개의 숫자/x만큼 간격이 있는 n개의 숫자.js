function solution(x, n) {
    var answer = [];
    let temp=x
    while(answer.length<n) {
        answer.push(temp)
        temp += x
    }
    return answer;
}