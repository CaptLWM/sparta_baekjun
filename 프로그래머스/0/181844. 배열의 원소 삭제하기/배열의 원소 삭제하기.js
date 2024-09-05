function solution(arr, delete_list) {
    var answer = arr
    delete_list.forEach((v)=>{
      answer=answer.filter((m)=>m!==v)
    })
    return answer;
}