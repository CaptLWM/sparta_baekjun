function solution(my_string) {
    var answer = 0;
    let temp = my_string.split(' ')
    console.log(temp)
    for (let i=0; i<temp.length; i +=2) {
        if(i===0) {
            answer += Number(temp[i])
        }
        if(temp[i-1]==='+') {
            answer += Number(temp[i])
        } 
        if(temp[i-1]==='-'){
            answer -= Number(temp[i])
        }
    }
    return answer;
}