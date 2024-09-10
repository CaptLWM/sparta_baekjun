function solution(cipher, code) {
    var answer = '';
    cipher.split('').forEach((v,i)=>{
        if((i+1)%code===0) {
            answer += v
        }
    })
    return answer;
}