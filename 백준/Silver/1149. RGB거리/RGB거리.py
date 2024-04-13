import sys

# sys.stdin=open('input2.txt')

# n : 집의 수
n = int(sys.stdin.readline().strip())
# (색 순서(RGB), 집 순서)
color_cost=[list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]


# 초기값
# 색상 순서는 고정
for i in range(1,n):
    color_cost[i][0] = min(color_cost[i-1][1], color_cost[i-1][2]) + color_cost[i][0]
    color_cost[i][1] = min(color_cost[i-1][0], color_cost[i-1][2]) + color_cost[i][1]
    color_cost[i][2] = min(color_cost[i-1][0], color_cost[i-1][1]) + color_cost[i][2]
print(min(color_cost[n-1]))