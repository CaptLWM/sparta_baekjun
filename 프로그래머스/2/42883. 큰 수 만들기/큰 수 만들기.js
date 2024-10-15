function solution(number, k) {
    const stack=[]; // 결과 저장할 스택
    
    for (let i=0; i<number.length; i++) {
        const currentNum = number[i];
        
        // 현재 숫자가 스택의 마지막 숫자보다 크고, k가 남아있으면
        while (k>0 && stack.length>0 && stack[stack.length-1]<currentNum){
            stack.pop(); // 스택에서 작은 숫자 제거
            k--; // 제거한 횟수 감소
        }
        stack.push(currentNum); // 현재 숫자 추가
    }
    
    // k가 남아 있으면 뒤에서 부터 k를 제거
    if (k>0) {
        stack.splice(stack.length-k,k)
    }
    return  stack.join('')
    
//     let temp = number.split('').map((v,index)=>({v:Number(v),index})).sort((a,b)=>b.v-a.v)
    
//     for(let i=0; i<k; i++) {
//         temp.pop()
//     }
    
//     return temp.sort((a,b)=>a.index-b.index).map((k)=>k.v).join('')
}