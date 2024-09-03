function solution(myString) {
    var answer = [];
    answer = myString.split('x').map((v)=>v.length)
    return answer;
}