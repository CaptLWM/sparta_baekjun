function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a,b)=>{
        return a - b;
    }).slice(0,5)
    console.log(answer)
    
    return answer;
}