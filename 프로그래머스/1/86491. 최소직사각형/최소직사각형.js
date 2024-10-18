function solution(sizes) {
    let maxWidth=0;
    let maxHeight=0;
    
    for (let [width, height] of sizes) {
        const [a,b] = width>height ? [width, height] : [height, width];
        maxWidth = Math.max(maxWidth, a);
        maxHeight = Math.max(maxHeight, b)
    }

    return maxWidth*maxHeight
}