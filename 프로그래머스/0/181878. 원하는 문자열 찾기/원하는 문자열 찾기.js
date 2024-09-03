function solution(myString, pat) {
    var answer = 0;
    const lowpat = pat.toLowerCase()
    answer = myString.toLowerCase().includes(lowpat) ? 1:0
    return answer;
}