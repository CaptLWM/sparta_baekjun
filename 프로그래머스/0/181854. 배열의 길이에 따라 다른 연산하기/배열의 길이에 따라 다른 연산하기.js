function solution(arr, n) {
    var answer = [];
    if(arr.length%2===1) {
        arr.forEach((v,i)=>{
            if(i%2===0) {
                console.log('a',v+n)
                answer.push(v+n)
            } else {
                console.log('b',v)
                answer.push(v)
            }
        })
    } 
    if(arr.length%2===0) {
        arr.forEach((v,i)=>{
           if(i%2===1) {
                console.log('c',v+n)
               answer.push(v+n)
            } else {
                console.log('d',v)
                answer.push(v)
            }
        })
    }
    
    return answer;
}