function solution(arr) {
let count = 0;
    while (2**count < arr.length) {
        count++;
    }
    arr.push(...Array(2**count - arr.length).fill(0));
    return arr;
}