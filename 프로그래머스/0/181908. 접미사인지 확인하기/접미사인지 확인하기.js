function solution(my_string, is_suffix) {
    var answer = 0;
    let temp = [];
    for(let i=0;i<my_string.length;i++) {
        temp.push(my_string.slice(-i))
    }
    answer = temp.some((v)=>v === is_suffix) ? 1: 0
    return answer;
}