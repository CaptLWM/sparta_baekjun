import sys
from collections import *
from itertools import *
from heapq import *

#sys.stdin = open('input2.txt')

test_case = int(sys.stdin.readline().strip())

# 찾아본 풀이 : https://velog.io/@leetaekyu2077/Python-%EB%B0%B1%EC%A4%80-1863%EB%B2%88-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B8-%EC%89%AC%EC%9A%B4%EA%B1%B0
# 1. 스카이라인이 낮아진는 지점, 즉 이전 점보다 y값이 작아지는 지점에서 건물 count
# 2. 단, 스카이라인이 낮아지며 한번에 두개 이사으이 건물이 끝나는 경우->예외
skylines = []
for i in range(test_case):
    # y값만 저장
    skylines.append(int(sys.stdin.readline().strip().split()[1]))
skylines.append(0) # 마지막 건물까지 카운트하기 위한 용도

# building_line = [[] for i in range(test_case)]
# for i in range(test_case):
#     building = list(map(int, sys.stdin.readline().strip().split()))
#     building_line[i] = building
# visited=[False] * len(building_line)
# print(building_line)
# print(visited)

# 찾아본 풀이
answer=0
stack=[0]
for p in skylines:
    height=p # 마지막으로 카운트한 건물의 높이 기록, 앞에서 이미 카운트한 건물 카운트 방지
    # stack의 top이 p보다 낮으면 바로 stack에 push
    # stack의 top이 p보다 높으면 1개 이상의 건물이 끝났다는 의미이므로,
    # p와 비교하면서 끝난 건물을 하나씩 세어나가면서 pop
    while stack[-1]>p: 
        if stack[-1] != height:
            answer+=1
            height = stack[-1]
        stack.pop()
    stack.append(p)

print(answer)