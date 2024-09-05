function solution(order) {
    var answer = 0;
    order.forEach((v)=>{
        if(v.includes('americano')) {
            answer +=4500
        } else if (v.includes('cafelatte')) {
            answer += 5000
        } else {
            answer += 4500
        }
    })
    return answer;
}