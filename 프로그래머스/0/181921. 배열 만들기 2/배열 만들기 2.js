function solution(l, r) {
    var answer = [];
    for (let i=l;i<=r;i++) {
        const temp = String(i).split('');
        if(temp.every((m)=>m==='0'||m==='5')) {
            answer.push(Number(temp.join('')))
        }
    }
    if(answer.length === 0) {
        answer=[-1]
    }
    
    return answer;
}