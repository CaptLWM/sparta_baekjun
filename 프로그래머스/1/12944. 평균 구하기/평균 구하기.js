function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, cur)=>acc+cur,0)/arr.length
    return answer;
}