function solution(arr, flag) {
    var answer = [];
    flag.forEach((v,i)=>{
        let temp = arr[i]
        let tempdouble = arr[i]*2
        if(v) {
          while(tempdouble>0) {
                answer.push(arr[i])
                tempdouble--
            }
        } else {
            while(temp>0) {
                answer.pop()
                temp--
            }
        }
    })
    return answer;
}