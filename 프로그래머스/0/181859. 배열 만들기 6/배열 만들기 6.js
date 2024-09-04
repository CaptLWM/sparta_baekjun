function solution(arr) {
    var stk = [];
    let i = 0;
    arr.forEach((v)=>{
        if(stk.length===0) {
            stk.push(v)
            i++
        } else if(stk[stk.length-1]===v) {
            stk.pop()
            i++
        } else {
            stk.push(v)
            i++
        }
    })
    if(stk.length===0) {
        stk=[-1]
    }
    return stk;
}