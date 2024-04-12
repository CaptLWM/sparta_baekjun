function solution(arr) {
    let cnt = 0;
    let prev=arr;
    // function fifty_check(prev, cnt) {
    //     next=prev.map((v)=> {
    //         if (v%2 === 0 && v>=50) {
    //             v=v/2
    //         } else if (v%2 === 1 && v<50 ) {
    //             v=(v*2)+1
    //         } else {
    //             v=v
    //         }
    //         return v
    //     })
    //     return prev
    // }
    
    while(true) {
        const next=prev.map((v)=> {
            if (v%2 === 0 && v>=50) {
                v=v/2
            } else if (v%2 === 1 && v<50 ) {
                v=(v*2)+1
            } else {
                v=v
            }
            return v
        })
        const isSame = prev.every((value, index)=> value === next[index])
        if(isSame) break;
        cnt+=1
        prev=next
    }
    var answer = 0;
    answer = cnt
    return answer;
}