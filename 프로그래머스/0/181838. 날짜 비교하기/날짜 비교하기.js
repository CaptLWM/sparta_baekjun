function solution(date1, date2) {
    var answer = 0;
    let date1_Number = Number(date1.join(''))
    let date2_Number = Number(date2.join(''))
    answer = date1_Number < date2_Number ? 1 :0
    return answer;
}