function solution(k, score) {
    var answer = [];
    let temp=[]
    for (let i=0 ; i<score.length;i++) {
        if (temp.length < k) {
            temp.push(score[i])
            temp.sort((a,b)=>b-a)
        }
        else if (temp.length === k) {
            if(temp[temp.length-1]<score[i]) {
                temp.pop()
                temp.push(score[i])
                temp.sort((a,b)=>b-a)
            }
            else {
                temp.sort((a,b)=>b-a)
            }
        }
        answer.push(temp[temp.length-1])
        // temp.push(score[i])
        // temp.sort((a,b)=> b-a)
        // console.log('temp',temp)
        // if(temp.length===k) {
        
        // }
        // answer.push(Math.min(...temp))
    }
  
    return answer;
}