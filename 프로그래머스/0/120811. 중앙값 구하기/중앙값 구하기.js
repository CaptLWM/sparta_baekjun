function solution(array) {
    var answer = 0;
    array.sort((a,b)=>b-a)
    answer = array[Math.floor(array.length/2)]
    return answer;
}