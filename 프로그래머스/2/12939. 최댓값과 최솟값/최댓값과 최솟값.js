function solution(s) {
    var list = s.split(' ').map((v)=>Number(v)).sort((a,b)=>a-b)
    var answer = String(list[0])+' '+String(list[list.length-1])

    return answer;
}