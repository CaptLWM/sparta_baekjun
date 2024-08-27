function solution(num_list) {
    var answer = 0;
    let even = num_list.map((v)=>{
        if(v%2===0) return v
    }).join('')
    let odd = num_list.map((v)=>{
        if(v%2===1) return v
    }).join('')
    answer = Number(even)+Number(odd)
    return answer;
}