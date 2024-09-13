function solution(absolutes, signs) {
    var answer = 123456789;
    let new_array = absolutes.map((v,i)=>{
        if(signs[i]){
            return v
        } else {
            return -v
        }
    })
    answer = new_array.reduce((arr,cur)=> arr+cur,0)
    return answer;
}