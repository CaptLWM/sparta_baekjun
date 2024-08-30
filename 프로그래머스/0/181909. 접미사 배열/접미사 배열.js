function solution(my_string) {
    var answer = [];
    let temp = [];
    for(let i=0; i<my_string.length; i++) {
        temp.push(my_string.slice(-i))
    }
    answer = temp.sort((a,b)=>a<b?-1:1)
    return answer;
}