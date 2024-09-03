function solution(myString, pat) {
     let result = 0;
    for(let i = 0; i < myString.length; i++){
        let str = myString.slice(i, pat.length + i)
        if(str === pat){
            result += 1
        }
    }
    return result;
}