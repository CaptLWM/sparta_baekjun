function solution(str_list) {
    var answer = [];
    for (let i=0; i<str_list.length; i++) {
        if(str_list[i]==='l') {
            answer = str_list.slice(0,i)
            break;
        } 
        else if(str_list[i]==='r') {
            answer = str_list.slice(i+1,str_list.length)
            break;
        }
        else {
            answer = []
        }
    }
    return answer;
}