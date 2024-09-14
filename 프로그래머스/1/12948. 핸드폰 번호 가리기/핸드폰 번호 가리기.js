function solution(phone_number) {
    var answer = '';
    for (let i=0; i<phone_number.length-4; i++) {
        answer += '*'
    }
    console.log(phone_number.slice(-4))
    answer += phone_number.slice(-4)
    console.log(answer)
    return answer;
}