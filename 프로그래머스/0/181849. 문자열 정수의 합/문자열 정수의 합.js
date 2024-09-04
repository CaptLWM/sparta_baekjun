function solution(num_str) {
    var answer = 0;
    answer = num_str.split('').reduce((arr,cur)=>Number(arr)+Number(cur),0)
    return answer;
}