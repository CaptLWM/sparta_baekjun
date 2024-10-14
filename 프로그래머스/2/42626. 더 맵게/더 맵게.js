// function solution(scoville, K) {
//     var answer = 0;
//     scoville.sort((a,b)=>a-b); // 스코빌 순으로 정렬
    
//     while (scoville[0] < K) {
//         if(scoville.length < 2) {
//             return -1; // 두개의 음식이 없으면 -1 반환
//         }
        
//         const leatSpicy = scoville.shift(); // 첫번째 음식
//         const secondSpicy = scoville.shift(); // 두번째 음식
//         const newSpicy = leatSpicy + secondSpicy*2
        
//         scoville.push(newSpicy);
        
//         scoville.sort((a,b)=>a-b);
        
//         answer++;
//     }
//     return answer;
// }

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;
            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    for (let s of scoville) {
        minHeap.insert(s);
    }

    let operations = 0;
    while (minHeap.size() > 1 && minHeap.heap[0] < K) {
        const leastSpicy = minHeap.extractMin();
        const secondLeastSpicy = minHeap.extractMin();
        const newSpicy = leastSpicy + secondLeastSpicy * 2;
        minHeap.insert(newSpicy);
        operations++;
    }

    return minHeap.heap[0] < K ? -1 : operations; // 마지막 최소값이 K 이상인지 확인
}
