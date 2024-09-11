function solution(my_string, n) {
    var answer = '';
    my_string.split("").forEach((v)=>{
        for(let i=0; i<n; i++) {
            answer += v
        }
    })
    return answer;
}