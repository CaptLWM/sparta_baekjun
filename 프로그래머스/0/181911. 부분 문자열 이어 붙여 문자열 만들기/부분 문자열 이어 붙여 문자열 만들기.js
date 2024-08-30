function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((v,idx)=>{
        let temp = v.split('').slice(parts[idx][0],parts[idx][1]+1).join('')
        answer+=temp
    })
    
    return answer;
}