function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq==='=' && ineq === '>') {
        if(n>=m) {
            answer=1
        } else {
            answer=0
        }
    } else if(eq==='=' && ineq === '<') {
        if(n<=m) {
            answer=1
        } else {
            answer=0
        }
    } else if(eq==='!' && ineq === '<') {
        if(n<m) {
            answer=1
        } else {
            answer=0
        }
    } else {
        if(n>m) {
            answer=1
        } else {
            answer=0
        }
    }
    return answer;
}