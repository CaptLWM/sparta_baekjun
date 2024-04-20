function solution(n, m) {
    var answer = [];
    
    function test(n,m) {
        let r=0
        while(m !=0) {
            r=n%m
            n=m
            m=r
        }
        return n
    }
    
    function test2(n, m) {
        return (n*m)/test(n,m)
    }
    let a = test(n,m)
    let b = test2(n,m)
    answer.push(a)
    answer.push(b)
    console.log(answer)
    // let r
    // let a
    // let b
    // while(m != 0) {
    //     r = n % m
    //     a = m
    //     b = r
    // }
    // console.log(a,b)
    // // console.log((n*m) / a)
    return answer;
} 