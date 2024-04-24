function solution(today, terms, privacies) {
    var answer = [];
    const arr_today = new Date(today)
    const temp_terms={}
    terms.forEach((v)=>{
        const [type, term] = v.split(' ');
        temp_terms[type] = Number(term)
    })
    

    
    privacies.forEach((item, index) => {
        const [date, type] = item.split(' ');
        
        const now = new Date(date)
        now.setMonth(now.getMonth() + temp_terms[type])
        console.log(now, arr_today)
        if(now <= arr_today) answer.push(index+1)
    })
    
    
    return answer;
}