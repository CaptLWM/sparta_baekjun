# 해쉬테이블 구성, value 값으로 조합 구성

import sys
from heapq import heapify, heappush, heappop

# sys.stdin=open('input2.txt')

N = int(sys.stdin.readline().strip())
#첫줄만 저장
heap=list(map(int,sys.stdin.readline().strip().split()))
heapify(heap)

# 남은 행을 처리하면서 N개의 최댓값을 유지
for _ in range(1, N):
    row = list(map(int, sys.stdin.readline().split()))
    for num in row:
        if num > heap[0]:
            heappop(heap)
            heappush(heap, num)
#  python은 최소 heap 많을 지원
#  최소 힙은 부모 노드가 자식 노드보다 항상 작은 값을 갖는 특성
#  힙의 가장 작은 값은 항상 인덱스 0에 위치
print(heap[0]) # 끝까지 다 돌고 그중 가장 작은값

# 결과 출력
# print(heap)
# print(heap[0])
# for i in range(1, N): # 첫줄은 저장
### 메모리 초과 코드
# temp=[] # 1차원 배열로 변경
# heap=[]
# for _ in range(N):
#     n = list(map(int, sys.stdin.readline().strip().split()))
#     temp += n
#
# for i in range(len(temp)):
#     if temp[i]:
#         heappush(heap, -temp[i]) # - 곱해서 작은거 부터 줄세우기

# print(-(heap[N-1]))


