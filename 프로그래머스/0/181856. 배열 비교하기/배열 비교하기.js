function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length !== arr2.length) {
        answer = arr1.length > arr2.length ? 1:-1
    }
    if(arr1.length === arr2.length) {
        let sum_arr1 = arr1.reduce((acc, cur)=>acc+cur, 0)
        let sum_arr2 = arr2.reduce((acc,cur)=>acc+cur, 0)
        if(sum_arr1 === sum_arr2) {
            answer = 0
        } else {
            answer = sum_arr1 > sum_arr2 ? 1:-1
        }
    }
    return answer;
}