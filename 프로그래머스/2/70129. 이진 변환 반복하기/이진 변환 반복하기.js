function solution(s) {
    let answer = 0; // 변환 횟수
    let counterZeros = 0; // 제거된 '0'의 개수
    
    // 최종 결과가 1이 될때까지 반복
    while (s !== '1') {
        // 횟수 카운트 시작 
        answer++;
        counterZeros += (s.match(/0/g) || []).length; // '0' 개수 세기
        s = s.replace(/0/g, ''); // 0제거
        s = s.length.toString(2) // 길이를 이진수로 변환
    }
    
    return [answer, counterZeros]
//   let countTransformations = 0; // 변환 횟수
//     let countZeros = 0; // 제거된 '0'의 개수

//     while (s !== '1') {
//         countTransformations++;
//         countZeros += (s.match(/0/g) || []).length; // '0' 개수 세기
//         s = s.replace(/0/g, ''); // '0' 제거
//         s = s.length.toString(2); // 길이를 이진수로 변환
//     }

//     return [countTransformations, countZeros];
}