function solution(myString, pat) {
    var answer = 0;
    let temp = myString.split('').map((v)=>{
        if(v==='A') {
           return v='B'
        }
        if(v==='B') {
          return v='A'
        }
    }).join('')
    if(temp.includes(pat)) {
        answer = 1
    } else {
        answer = 0
    }
    console.log(temp)
    return answer;
}