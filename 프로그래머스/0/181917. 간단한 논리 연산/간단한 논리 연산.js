function solution(x1, x2, x3, x4) {
    var answer = true;
    // v =>or ㅅ=>and
    answer = (x1||x2) && (x3||x4)
    return answer;
}