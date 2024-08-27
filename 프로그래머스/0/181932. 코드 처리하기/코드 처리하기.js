function solution(code) {
    var answer = '';
    let temp = code.split('')
    let mode = 0
    console.log(temp)
    temp.forEach((v,idx)=>{
        if(mode === 0) {
            if(v !== '1') {
                if(idx%2===0) {
                    answer += v;
                }
            } else {
                mode = 1;
            }
        } else {
            if(v !== '1') {
                if(idx%2===1) {
                    answer += v;
                }
            } else {
                mode = 0;
            }
        }
    })
    if(answer.length === 0) {
        return 'EMPTY'
    }
    return answer;
}