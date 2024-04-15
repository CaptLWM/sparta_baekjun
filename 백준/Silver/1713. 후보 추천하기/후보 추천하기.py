import heapq
import sys
from heapq import *
from collections import *
# sys.stdin=open('input2.txt')

# n : 사진들의 개수
n = int(sys.stdin.readline().strip())
# t : 전체 학생의 총 추천 수
t = int(sys.stdin.readline().strip())
# 추천받은 학생들
students = list(map(int, sys.stdin.readline().strip().split()))
# 투표받은 학생들 들어갈 곳
choice = []

# 파이썬의 힙을 쓸대 동일한 값을 가진 노드가 있다면 인덱스 순서대로 우선순위가 결정됨
# https://chat.openai.com/c/8433c262-0f36-455f-80c5-497d2891d108

for idx, num in enumerate(students):
    temp_list=[]
    temp = 0

    while choice:
        # print('==',choice)
        cnt, old_idx, std_num = heapq.heappop(choice)
        # print('cnt, old_idx, std_num',cnt, old_idx, std_num)
        cnt += 1 if std_num == num else 0
        heapq.heappush(temp_list,(cnt,old_idx,std_num))
        temp += std_num == num
    if not temp and len(temp_list)>=n:
        heapq.heappop(temp_list)
    if not temp:
        heapq.heappush(temp_list, (0,idx,num))
    choice = temp_list

answer_list = [x[-1] for x in choice]
answer_list.sort()

print(*answer_list)
# 출처: https://magentino.tistory.com/108 [마젠티노 IT개발스토리:티스토리]