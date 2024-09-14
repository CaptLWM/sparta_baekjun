function solution(i, j, k) {
    var answer = 0;
    let temp =[];
    for(let m=i; m<=j; m++) {
        temp.push(String(m).split(''))
    }
    temp.flat().forEach((v)=>{
        if(v===String(k)) {
            answer++
        }
    })
    return answer;
}