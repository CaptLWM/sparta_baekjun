function solution(numLog) {
    var answer = '';
    numLog.forEach((v,i)=>{
        if(i<numLog.length-1) {
            
            if(numLog[i+1]-numLog[i] === 1) {
                answer += 'w'
            }
            if(numLog[i+1]-numLog[i] === -1) {
                answer += 's'
            }
            if(numLog[i+1]-numLog[i] === 10) {
                answer += 'd'
            }
            if(numLog[i+1]-numLog[i] === -10) {
                answer += 'a'
            }
        }
    })
    console.log(answer)
    return answer;
}