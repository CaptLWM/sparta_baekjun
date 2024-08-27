function solution(num_list) {
    var answer = 0;
    let sum = num_list.reduce((acc, cur)=>acc+cur,0)**2
    let multi = num_list.reduce((acc, cur)=>acc*cur,1)
    console.log(sum, multi)
    if(multi<sum) {
        answer=1
    } else {
        answer=0
    }
    return answer
}