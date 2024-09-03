function solution(binomial) {
    var answer = 0;
    let temp = binomial.split(' ')
    if(temp[1] === '+') {
        answer = Number(temp[0])+Number(temp[2])
    }
    if(temp[1] === '*') {
        answer = Number(temp[0])*Number(temp[2])
    }
    if(temp[1] === '-') {
        answer = Number(temp[0])-Number(temp[2])
    }
    
    return answer;
}