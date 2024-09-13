function solution(s){
    var answer = true;
    let p_count = 0
    let y_count = 0
    s.toLowerCase().split('').forEach((v)=>{
        if(v === 'p') {
            p_count ++
        }
        if(v==='y') {
            y_count ++
        }
    })
    if(p_count === y_count) {
        answer = true
    } 
    if (p_count !== y_count) {
        answer = false
    }
    if (p_count === 0 && y_count ===0) {
        answer = true
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}