function solution(n) {
    var answer = [];
    let temp = n
    answer.push(n)
    while (temp>1) {
        if(temp%2===0) {
            temp=temp/2
            answer.push(temp)
        } else {
            temp=3*temp+1
            answer.push(temp)
        }
    }
    return answer;
}