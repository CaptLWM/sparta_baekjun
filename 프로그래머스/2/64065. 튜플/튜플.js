function solution(s) {
    const list_s = s.replace(/[{}]/g,'') // 중괄호 제거
    const tuple_s = list_s.split(',')
    
    const counts={};
    for(const tuple of tuple_s) {
        const num = parseInt(tuple)
        counts[num]= (counts[num]||0) + 1 // 원소가 몇개 있는지 카운트
    }
    
    const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]) // 배열로 바꾸고 내림차순 정렬
    const answer = sorted.map((v)=>parseInt(v[0]))
    return answer
//     const list_s = s.replace(/[{}]/g,'');// 중괄호 제거
//     const tuple_s = list_s.split(',')
    
//     const counts = {};
//     for (const tuple of tuple_s) {
//         const num= parseInt(tuple);
//         counts[num] = (counts[num]||0)+1
//     }
//     console.log(counts)
    
//     const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1])
//     const answer = sorted.map((v)=>parseInt(v[0]))
//     return answer
    
    
    
}