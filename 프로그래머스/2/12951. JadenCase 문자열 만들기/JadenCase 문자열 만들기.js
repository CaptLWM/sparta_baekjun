function solution(s) {
    var answer = '';
    const s_list = s.split(' ').map((v)=>{
         return v.split('').map((k,i)=>{
             if(!Number(k)) {
                 if(i===0) {
                    return v[i] = v[i].toUpperCase()    
                 }
                    return v[i] = v[i].toLowerCase()    
             }
             return v[i]
         }).join('')
    }).join(' ')
    answer = s_list
    return answer;
}