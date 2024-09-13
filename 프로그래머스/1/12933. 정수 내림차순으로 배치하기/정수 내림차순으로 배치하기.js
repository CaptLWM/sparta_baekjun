function solution(n) {
    var answer = 0;
    answer=Number(String(n).split('').sort((a,b)=>Number(b)-Number(a)).join(''))
    return answer;
}