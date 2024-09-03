function solution(myString) {
    var answer = [];
    answer = myString.split("x").sort().filter((v)=>v!=='')
    return answer;
}