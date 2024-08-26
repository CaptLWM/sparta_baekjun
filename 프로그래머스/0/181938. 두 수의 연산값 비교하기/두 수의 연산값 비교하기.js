function solution(a, b) {
    var answer = 0;
    var n = Number(String(a)+String(b))
    var m = 2*a*b
    if(n>m) {
        answer = n
    } else {
        answer = m
    }
    return answer;
}