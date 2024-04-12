import sys
import math
from heapq import *

# sys.stdin = open('input2.txt')

# n : 원생 수, k : 나누려는 조의 개수
n, k = map(int, sys.stdin.readline().strip().split())
child = list(map(int, sys.stdin.readline().strip().split()))

cost = []
# 순서대로 서있는 학생들의 키차이
for i in range(1,len(child)):
    cost.append(child[i]- child[i-1])
cost.sort()
sum = 0
for i in range(n-k):
    c = cost[i]
    sum += c
print(sum)

#아래는 틀린풀이 / 5명일때 2 2 1 말고 3 1 1 도 고려 했어야 함
# # 한 조에 최대로 들어갈 수 있는 아이 수
# max_child = math.ceil(n/k)
# # 어린이 집어 넣기
# for i in range(0, len(child), max_child):
#     team.append(child[i:i+max_child])
# # print(team)
# sum = 0
# for i in team:
#     # 혼자 있을때
#     if len(i)==1:
#         temp=0
#     else:
#         temp = i[-1]-i[0]
#     sum+=temp
# print(sum)
