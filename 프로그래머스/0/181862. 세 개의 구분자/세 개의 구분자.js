function solution(myStr) {
    var answer = [];
    let change = myStr.replaceAll('a','/').replaceAll('b','/').replaceAll('c','/').split('/').filter((v)=>v!=='')
    if(change.length===0) {
        answer=["EMPTY"]
    } else {
        answer = change
    }
    
    return answer;
}