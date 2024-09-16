function solution(s) {
    var answer = '';
    let temp=s.split('').sort()
    
    temp.forEach((v)=>{
        if(temp.indexOf(v)===temp.lastIndexOf(v)) {
            answer += v
        }
    })
      
    return answer;
}