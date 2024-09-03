function solution(myString) {
    var answer = '';
    myString.split('').forEach((v)=>{
        if(v==='a') {
            answer += v.toUpperCase()
        } else if(v ==='A' ) {
            answer += 'A'
        } else {
            answer+=v.toLowerCase()
        }
    })
    return answer;
}