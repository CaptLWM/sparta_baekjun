function solution(s) {
    var answer = 0;
    s.split('').forEach((v)=>{
        if(!Number(v) && v !=='0') {
            answer +=1;
        } 
    })
    
    console.log(answer)
    return (s.length ===4 || s.length===6) && answer === 0 ? true : false;
}