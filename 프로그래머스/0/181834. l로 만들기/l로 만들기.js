function solution(myString) {
    var answer = '';
    let temp = myString.split('').map((v)=>{
        if(v.charCodeAt(0)<"l".charCodeAt(0)) {
           return 'l'
        } else {
            return v
        }
    })
    answer = temp.join('')
    return answer;
}