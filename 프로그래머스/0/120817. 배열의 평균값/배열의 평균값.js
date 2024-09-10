function solution(numbers) {
    var answer = 0;
    numbers.forEach((v)=>{
        answer+=v
    })
    answer = answer/numbers.length
    return answer;
}