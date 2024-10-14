function solution(clothes) {
    var answer = 0;
    
    const categories = {};
    clothes.forEach(([_,category])=> {
        if(!categories[category]) {
            categories[category] = 0
        }
        categories[category]++
    })
    
    console.log(categories)
    let combinations = 1;
    for(let count of Object.values(categories)) {
        console.log(count)
        combinations *=(count+1)
    }
    return combinations-1;
}