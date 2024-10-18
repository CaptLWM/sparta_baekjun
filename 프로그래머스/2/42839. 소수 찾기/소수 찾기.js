function isPrime(num) {
    if (num <= 1) return false; // 1 이하의 수는 소수가 아님
    if (num <= 3) return true; // 2와 3은 소수
    if (num % 2 === 0 || num % 3 === 0) return false; // 2 또는 3으로 나누어 떨어지면 소수가 아님

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false; // 6의 배수 형태로 소수 판별
    }
    
    return true; // 소수인 경우
}

function getCombinations(arr) {
    const result = new Set(); // 중복을 방지하기 위해 Set 사용

    const combine = (current, remaining) => {
        if (current) result.add(Number(current)); // 현재 조합이 비어있지 않으면 추가
        for (let i = 0; i < remaining.length; i++) {
            combine(current + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    };

    combine('', arr.split('')); // 문자열을 배열로 변환하여 조합 생성
    return Array.from(result); // Set을 배열로 변환
}

function solution(numbers) {
    const numberSet = getCombinations(numbers); // 모든 조합 생성
    let primeCount = 0;

    for (const number of numberSet) {
        if (isPrime(number)) {
            primeCount++; // 소수인 경우 카운트 증가
        }
    }

    return primeCount; // 소수의 개수 반환
}
