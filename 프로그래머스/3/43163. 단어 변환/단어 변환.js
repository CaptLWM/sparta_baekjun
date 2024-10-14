// 글자 비교하는 ㅏ로직
function isOneLetterDifferent(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        // 글자가 다를때마다 카운트 증가
        if (word1[i] !== word2[i]) {
            count++;
        }
    }
    return count === 1; // 한 글자만 다르면 true
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가능

    const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
    const visited = new Set(); // 방문한 단어 추적
    visited.add(begin); // 시작 단어 방문 처리

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        // 목표 단어에 도달한 경우
        if (currentWord === target) {
            return steps;
        }

        // 변환 가능한 단어 탐색
        for (const word of words) {
            if (!visited.has(word) && isOneLetterDifferent(currentWord, word)) {
                visited.add(word); // 방문 처리
                queue.push([word, steps + 1]); // 변환 횟수 증가
            }
        }
    }

    return 0; // 변환할 수 없는 경우
}
