function solution(nums) {
    // var answer = -1;
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 
        // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1); 
          // 해당하는 fixed를 제외한 나머지 뒤
          const combinations = getCombinations(rest, selectNumber - 1); 
          // 나머지에 대해서 조합을 구한다.
          const attached = combinations.map((el) => [fixed, ...el]); 
          //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
          results.push(...attached); 
          // 배열 spread syntax 로 모두다 push
        });

        return results; // 결과 담긴 results return
    }
    // 에라토스테네스의 채 => 소수 구하는 공식
    const sum_list=getCombinations(nums, 3).map((v)=>v.reduce((acc, cur)=> acc+cur, 0))
    console.log(sum_list)
    
    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    const answer = sum_list.filter(isPrime).length
    console.log(answer)
    console.log(getCombinations(nums, 3))
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}