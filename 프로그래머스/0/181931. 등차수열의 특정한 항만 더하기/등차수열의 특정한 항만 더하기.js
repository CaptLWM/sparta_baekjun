function solution(a, d, included) {
    var answer = 0;
     return included.reduce((acc, cur, idx) => {
        return cur ? acc + a + d * idx : acc
    }, 0)
}