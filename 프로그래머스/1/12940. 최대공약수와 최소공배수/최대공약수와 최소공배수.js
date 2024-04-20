function solution(n, m) {
    var answer = [];
    // 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다
    function test(n,m) {
        let r=0
        while(m !=0) {
            r=n%m
            n=m
            m=r
        }
        return n
    }
    
    // 두 수 a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다. 
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