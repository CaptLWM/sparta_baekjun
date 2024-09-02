function solution(num_list, n) {
    var answer = [];
    let front = num_list.slice(0,n)
    console.log(front)
    let back = num_list.slice(n, num_list.length)
    console.log(back)
    answer = back.concat(front)
    return answer;
}