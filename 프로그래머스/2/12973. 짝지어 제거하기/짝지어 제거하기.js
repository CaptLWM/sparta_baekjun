function solution(s) {
    const stack=[];
    
    for(let i=0; i<s.length; i++) {
        const currentChar  = s[i]; // 현재문자
        // 스택에 비어있지 않고, 최상단 문자와 현재 문자가 같으면 제거
        if(stack.length>0 && stack[stack.length -1] === currentChar) {
            stack.pop() // 짝이 맞으면 제거
        } else {
            stack.push(currentChar)
        }
    }
    return stack.length === 0? 1 :0 // 남은 문자 수 반환
}