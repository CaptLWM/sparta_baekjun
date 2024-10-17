function solution(cacheSize, cities) {
    const cache = []; // 캐시를 저장할 배열 초기화
    let totalTime = 0; // 총 소요 시간을 저장할 변수 초기화
    
    // 요청된 도시들을 순회
    for(const city of cities) {
        // 대소문자 구분 없이 처리하기 위해 통일
        const upperCity = city.toUpperCase();
        // 캐시에서 저장한 현재 도시의 인덱스 찾기
        const index = cache.indexOf(upperCity);
        
        if(index !== -1) {
            // 캐시 히트 : 도시가 이미 캐시에 존재하는 경우
            totalTime += 1; // 히트 시 소요시간 1증가
            cache.splice(index, 1); // 해당 도시를 캐시에서 제거
        } else {
            // 캐시 미스 : 도시가 캐시에 존재하지 않는 경우
            totalTime += 5; // 미스 시 소요시간 5 증가
            // 캐시가 가득 찼다면, 가장 오래된 도시를 제거
            if (cache.length >= cacheSize && cacheSize>0) {
                cache.shift(); // 캐시의 첫 번째 요소(가장 오래된 도시)를 제거
            }
        }
        
        // 현재 도시를 캐시에 추가 (캐시가 비어있지 않을 때)
        if(cacheSize > 0) {
            cache.push(upperCity)
        }
    }
    return totalTime;
//     const cache= [];
//     let totalTime =0;
    
//     for(const city of cities) {
//         const upperCity = city.toUpperCase();
        
//         const index = cache.indexOf(upperCity);
//         if(index !== -1) { // 캐시 히트
//             totalTime += 1; // 히트시 시간 증가
//             cache.splice(index,1); // 캐시에서 제거
//         } else { // 캐시 미스
//             totalTime += 5;
//             if(cacheSize > 0) {
//                 if(cache.length === cacheSize) {
//                     cache.shift(); // 가장 오래된 캐시 제거
//                 }
//             }
//         }
//         if(cacheSize > 0) {
//             cache.push(upperCity) // 캐시에 도시 추가
//         }
    
//     }
    
//     return totalTime;
}