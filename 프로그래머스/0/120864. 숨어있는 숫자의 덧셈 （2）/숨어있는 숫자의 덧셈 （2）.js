function solution(my_string) {
    var answer = 0;
    my_string.split(/[a-zA-Z]/g).forEach((v)=>{
        if(Number(v)) {
            answer+=Number(v)
        }
    })
    return answer;
}