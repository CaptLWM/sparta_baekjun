function solution(n) {
    var answer=[];
    function hanoi(num, from, to, aux) {
        // 원판 하나 남았을때
        if(num === 1) {
            answer.push([from, to])
            return;
        }
        hanoi(num-1, from, aux, to) // 보조기둥으로 이동
        answer.push([from, to]) // 목표기둥으로 옮기기 전 과정 저장
        hanoi(num-1, aux, to, from)
    }
    
    hanoi(n, 1,3,2)
    return answer
    // var answer = [];
    // // num:현재 원판 수, from:시작기둥, to:목표기둥, aux:보조기둥
    // function hanoi(num, from, to, aux) {
    //     if(num===1) {
    //         answer.push([from, to])
    //         return
    //     }
    //     hanoi(num-1, from, aux, to) // n-1개의 원판을 보조 기둥으로 이동
    //     answer.push([from, to]); // N번째 원판을 목표 기둥으로 이동
    //     hanoi(num-1, aux, to, from) // 보조기동에서 목표 기둥으로 N-1개의 원판 이동
    // }
    // hanoi(n, 1,3,2)
    // return answer;
}

