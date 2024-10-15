function solution(word) {
    const temp = ['A','E','I','O','U']
    const dictionary = [];
    
    function generate(current) {
        if(current.length>5) return; // 최대 길이 5 초과 시 종료
        if(current.length>0) dictionary.push(current); // 빈 문자열 제외
        
        for (let i=0; i<temp.length; i++) {
            generate(current + temp[i])
        }
    }
    generate(''); // 빈 문자열에서 시작
    console.log(dictionary)
    dictionary.sort()
    
    return dictionary.indexOf(word)+1;
}