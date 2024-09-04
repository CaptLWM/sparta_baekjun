function solution(rank, attendance) {
    var answer = 0;
    let temp = [];
    rank.forEach((v,i)=>{
        if(attendance[i]) {
            temp.push([v,i])
        }
    })
   let sort_temp=temp.sort((a,b)=>{
       return a[0]-b[0]
   })
       answer = 10000*sort_temp[0][1] + 100*sort_temp[1][1] + sort_temp[2][1]
    return answer;
}