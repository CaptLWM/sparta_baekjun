function solution(s1, s2) {
    var answer = 0;
    s1.forEach((v)=>{
        if(s2.includes(v)) {
            answer +=1
        }
    })
    return answer;
}