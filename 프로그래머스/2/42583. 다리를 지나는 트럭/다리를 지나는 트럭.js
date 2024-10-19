function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    let currentWeight = 0;
    
    while(truck_weights.length>0 || bridge.length>0) {
        answer ++;
        
        if(bridge.length>0) {
            if(bridge[0].position === bridge_length) {
                currentWeight -= bridge.shift().weight; // 하중 업데이트
            }
            bridge.forEach(truck=>truck.position++)
        }
        
        if(truck_weights.length>0&&currentWeight+truck_weights[0]<=weight) {
            const truck = {
                weight : truck_weights.shift(), // 새로운 트럭 무게
                position : 1, // 다리위에서 위치 초기화
            }
            bridge.push(truck); // 다리 위에 트럭 추가
            currentWeight += truck.weight // 하중 업데이트
        }
    }
    return answer
//     var answer = 0;
//     let bridge = []; // 다리 위 트럭
//     let currentWeight = 0; // 다리 위 총 하중
    
//     while (truck_weights.length>0 || bridge.length>0) {
//         answer ++; 
        
//        if(bridge.length > 0) {
//            // 첫번째 트럭이 다리를 다 건너면
//            if (bridge[0].position === bridge_length) {
//                currentWeight -= bridge.shift().weight; // 하중 업데이트
//            }
//            // 다리 위의 트럭 위치 증가
//            bridge.forEach(truck => truck.position++)
//        }
        
//         // 새로운 트럭 추가 가능 여부 확인
//         if(truck_weights.length>0 && currentWeight+truck_weights[0] <=weight) {
//             const truck = {
//                 weight : truck_weights.shift(), // 새로운 트럭 무게
//                 position : 1, // 다리위에서 위치 초기화
//             }
//             bridge.push(truck); // 다리 위에 트럭 추가
//             currentWeight += truck.weight // 하중 업데이트
//         }
//     }
//     return answer;
}