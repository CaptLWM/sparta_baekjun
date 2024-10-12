function solution(cacheSize, cities) {
    const cache= [];
    let totalTime =0;
    
    for(const city of cities) {
        const upperCity = city.toUpperCase();
        
        const index = cache.indexOf(upperCity);
        if(index !== -1) { // 캐시 히트
            totalTime += 1; // 히트시 시간 증가
            cache.splice(index,1); // 캐시에서 제거
        } else { // 캐시 미스
            totalTime += 5;
            if(cacheSize > 0) {
                if(cache.length === cacheSize) {
                    cache.shift(); // 가장 오래된 캐시 제거
                }
            }
        }
        if(cacheSize > 0) {
            cache.push(upperCity) // 캐시에 도시 추가
        }
    
    }
    
return totalTime;
}