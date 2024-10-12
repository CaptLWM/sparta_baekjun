function solution(s) {
  let countTransformations = 0; // 변환 횟수
    let countZeros = 0; // 제거된 '0'의 개수

    while (s !== '1') {
        countTransformations++;
        countZeros += (s.match(/0/g) || []).length; // '0' 개수 세기
        s = s.replace(/0/g, ''); // '0' 제거
        s = s.length.toString(2); // 길이를 이진수로 변환
    }

    return [countTransformations, countZeros];
}