function solution(array) {
    var answer = 0;
    let temp = array.map((v)=>String(v).split('')).flat()
    temp.forEach((v)=>{
        if(v==='7') {
            answer += 1
        }
    })
    return answer;
}