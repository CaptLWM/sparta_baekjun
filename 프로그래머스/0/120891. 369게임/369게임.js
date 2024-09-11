function solution(order) {
    var answer = 0;
    String(order).split('').forEach((v)=>{
        if(v==='3' || v==='6' || v==='9') answer++;
        
        
    })
    return answer;
}