function solution(n) {
    var answer = [];
    let divisor = 2;
    while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor)
      n = n / divisor;
    }   
     else divisor ++;
    }
    const temp = [...new Set(answer)]
    answer = temp
    return answer;
}