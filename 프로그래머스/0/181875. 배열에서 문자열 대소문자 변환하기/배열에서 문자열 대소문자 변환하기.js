function solution(strArr) {
    var answer = [];
    strArr.forEach((v,i)=>{
        if(i%2===1) {
            answer.push(v.toUpperCase())
        } else {
            answer.push(v.toLowerCase())
        }
    })
    return answer;
}