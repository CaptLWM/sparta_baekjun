function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((v)=>{
        let temp = Number(v.split('').slice(s,s+l).join(''))
        if(temp>k) {
            answer.push(temp)
        }
    })
    return answer;
}