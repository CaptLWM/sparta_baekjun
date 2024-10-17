function solution(people, limit) {
    // 무게순으로 사람 정렬
    people.sort((a,b)=>a-b);
    let left=0; // 가장 가까운 사람 위치(인덱스)
    let right = people.length-1; // 가장 무거운 사람의 포인터(인덱스)
    let boats=0; // 보트의 수
    
    while(left<=right) {
        // 가장 가벼운 사람과 가장 무거운 사람의 합이 limit 이하인 경우
        if(people[left]+people[right]<=limit) {
            left++
        }
        right--
        boats++;// qhxmdml tn wmdrk
    }
    
    return boats
}

// function solution(people, limit) {
//     people.sort((a,b)=>a-b);
//     let left=0; // 가장 가까운 사람의 포인터
//     let right= people.length-1; // 가장 무거운 사람의 포인터
//     let boats=0; // 보트의수

//     while (left <= right) {
//         // 가장 가벼운 사람과 가장 무거운 사람의 합이 limit 이하인 경우
//         if(people[left]+people[right]<=limit) {
//             left++
//         }
//         right--;
//         boats++; // 보트의 수 증가
//     }
    
//     return boats
// }