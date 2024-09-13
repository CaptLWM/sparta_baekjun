function solution(x) {
    var answer = true;
    let total = String(x).split('').reduce((acc,cur)=>Number(acc)+Number(cur),0)
    answer = x%total === 0 ? true : false
    return answer;
}