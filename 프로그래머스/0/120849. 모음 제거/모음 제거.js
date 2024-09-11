function solution(my_string) {
    var answer = '';
    let temp = my_string.split('').filter((v)=>!(v ==='a' || v==='e' ||v==='i' ||v==='o' ||v==='u')).join("")
    answer = temp
    return answer;
}