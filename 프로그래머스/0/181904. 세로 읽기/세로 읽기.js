function solution(my_string, m, c) {
    var answer = '';
    let temp = [];
    my_string.split('').forEach((v)=>{
        temp.push(v)
        if(temp.length===m)  {
            answer+=temp[c-1]
            temp = []
        } 
    })
    return answer;
}