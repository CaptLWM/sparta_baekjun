function solution(n, control) {
    var answer = n;
    control.split('').forEach((v)=>{
        if(v==='w') {
            answer+=1;
        }
        if(v==='s') {
            answer-=1;
        }
        if(v==='d') {
            answer+=10;
        }
        if(v==='a') {
            answer-=10;
        }
    })
    return answer;
}