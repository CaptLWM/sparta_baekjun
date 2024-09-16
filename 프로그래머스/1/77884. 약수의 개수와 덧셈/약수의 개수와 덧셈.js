function solution(left, right) {
    var answer = 0;
    let leftRight = [];
    for(let i=0; i<=right-left; i++) {
        leftRight.push(left+i)
    }
    console.log(Math.sqrt(14)**2)
    leftRight.forEach((v)=>{
        if(v===Math.floor(Math.sqrt(v))**2) {
            answer -= v     
            console.log(answer)
        } else {
            answer += v
            console.log(answer)
        }
    })
    return answer;
}