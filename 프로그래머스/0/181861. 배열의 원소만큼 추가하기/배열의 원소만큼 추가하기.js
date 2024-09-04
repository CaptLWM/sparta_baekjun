function solution(arr) {
    var answer = [];
    arr.forEach((v,i)=>{
        let temp = v
        while(v>0) {
            
            answer.push(temp)
            v--
        }
    })
    return answer;
}