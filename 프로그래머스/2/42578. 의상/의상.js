function solution(clothes) {
    let answer = 0;
    const categories = {};
    
    clothes.forEach(([_, category])=>{
        if(!categories[category]) {
            categories[category]=0;
        }
        categories[category]++;
    })
    
    let combinations = 1;
    for(let count of Object.values(categories)) {
        combinations *= (count+1)
    }
    
    return combinations -1
//     var answer = 0;
    
//     const categories = {};
    
//     // 의상정보 카테고리 별로 구분
//     clothes.forEach(([_,category])=>{
//          if (!categories[category]) {
//              categories[category] = 0;
//          }
//         categories[category]++;
//     })
//     // ex){ headgear: 2, eyewear: 1 }
//     console.log(categories)
    
//     // 각 카테고리에서 선택할 수 있는 의상 수 + 1
//     let combinations = 1;
//     for (let count of Object.values(categories)) {
//         combinations *= (count + 1)
//     }
    
//     // 아무 의상도 선택하지 않는 경우를 제외
//     return combinations - 1 
}