function solution(k, m, score) {
    
    // 비싼순으로 사과 정렬
    let apple_list = score.sort((a,b)=>b-a)
    
    let num = parseInt(score.length/m)

    var box=0
    // for(let i=0;  ;i++)
    let temp=[]
    let temp2=[]
    apple_list.forEach((v)=>{
        temp.push(v)
        if (temp.length == m) {    
            box+=1
            temp2.push(temp)
            temp=[]
        }
    })
    const answer = temp2.map((v)=>Math.min(...v)*m).reduce((arr, cur)=>arr+cur,0)

    return answer;
}