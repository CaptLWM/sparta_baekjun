function solution(n)
{
    var answer = 0;
    answer = String(n).split('').reduce((acc, cur)=>Number(acc)+Number(cur),0)
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}