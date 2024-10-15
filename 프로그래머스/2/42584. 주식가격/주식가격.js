function solution(prices) {
    const answer = new Array(prices.length).fill(0); // 결과 배열 초기화
    const stack = []; // 스택 초기화
    
    for (let i=0; i<prices.length; i++) {
        while(stack.length && prices[stack[stack.length-1]]> prices[i]){
            const idx=stack.pop(); // 가격이 떨어진 인덱스
            answer[idx] = i-idx; // 가격이 떨어진 시점까지의 시간 계산
        }
        stack.push(i); // 현재 인덱스 추가
    }
    
    // 스택에 남아있는 인덱스 처리 (주식 가격이 떨어지지 않은 경우)
    while(stack.length) {
        const idx = stack.pop();
        answer[idx] = prices.length -1 -idx; // 마지막 가격까지의 시간
    }
    
    return answer
}