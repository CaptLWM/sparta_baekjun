function solution(num) {
    var answer = num;
    let temp = 1;
    while(true) {
        if(num===1) {
            answer = 0
            break;
        } else if(answer%2===0) {
            answer = answer/2
            
        } else {
            answer = 3*answer +1
            
        }
        
        if(answer === 1) {
            answer = temp
            break
        }
        if(temp>=500) {
            answer = -1
            break;
        }
        temp++;
        
    }
    return answer;
}