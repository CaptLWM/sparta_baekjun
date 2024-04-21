


function solution(n) {
    var answer = 0;
    let test = new Set()
    
    function check (n) {
        for (let i=2; i*i<=n; i++) { 
            if(n%i == 0) {
                    // console.log(i,n)
                test.add(n)
            }
        }    
    }
    for(let i=1; i<=n ; i++){
        // console.log(i)
        check(i)
    }
    answer = test.size
    // console.log(answer)
    return answer;
}

// static boolean checkIsPrimeNumber(int num) {
// 	for(int i=2 ; i*i<=num; i++) {
// 		if(num%i ==0) {
// 			return false; //num이 i의 배수면 소수가 아니므로 false
// 		}
// 	}
// 	return true;
// }