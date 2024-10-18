function solution(answers) {
    const pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    const scores = new Array(pattern.length).fill(0) // 학생들 점수 초기화
    
    for (let i = 0; i<answers.length; i++) {
        for (let j=0; j<pattern.length; j++) {
            if(answers[i]===pattern[j][i%pattern[j].length]) { // 패턴보다 길 수 있으니
                scores[j]++
            }
        }
    }
    const maxScore=Math.max(...scores)
     
    return scores.map((score, index)=>score === maxScore ? index+1:null).filter(num=>num)
}