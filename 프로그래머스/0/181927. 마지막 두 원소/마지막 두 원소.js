function solution(num_list) {
    var answer = [];
    num_list.forEach((v,idx)=>{
        answer.push(v)
        if(idx===num_list.length-1) {
            if(num_list[idx]>num_list[idx-1]) {
                answer.push(num_list[idx]-num_list[idx-1])
            } else {
                answer.push(num_list[idx]*2)
            }
        }
    })
    return answer;
}