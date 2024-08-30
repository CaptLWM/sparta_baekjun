function solution(my_string, is_prefix) {
    var answer = 0;
    let temp =[]
    for(let i=1; i<my_string.length;i++) {
        temp.push(my_string.slice(0,i))
    }
    console.log(temp)
    answer = temp.some((v)=>v===is_prefix) ? 1:0
    return answer;
}