function solution(my_string) {
    var answer = 0;
    let temp = my_string.split('').map((v)=>{
        if(Number(v)) {
            return Number(v)
        }
    }).filter((k)=>!!k)
    console.log(temp)
    temp.forEach((v)=>{
        answer += v
    })
    return answer;
}