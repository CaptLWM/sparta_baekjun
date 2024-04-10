import sys
from itertools import *
from collections import *

# sys.stdin = open('input2.txt')

# N : 도시의수
n = int(sys.stdin.readline().strip())
route_price = [list(map(int, input().split())) for _ in range(n)]
visited = [False] * n
m = 1e9

def dfs(depth, start, cost):
    global m
    if depth == n-1 and route_price[start][0] != 0:
        m = min(m, cost+route_price[start][0])
        return
    for i in range(n):
        if not visited[i] and route_price[start][i] != 0:
            visited[i] = True
            dfs(depth+1, i, cost+route_price[start][i])
            visited[i] = False
visited[0] = True
dfs(0, 0, 0)
print(m)

# 범위 1000000 이므로 시간초과 발생
# for i in cityboard:
#     # print('check', cityboard[i])
#     temp=list(i) +[i[0]] # 0에서 시작해서 0으로 돌아온다 가정
#     temp_result=0
#     for j in range(len(temp)-1):
#         if route_Price[temp[j]][temp[j+1]] == 0:
#             continue
#         temp_result += route_Price[temp[j]][temp[j+1]]
#     m = min(m, temp_result)
#     # for j in range(len(cityboard[i])):
#         # print('check',cityboard[i][j])
#         # print('check2', i, j)
