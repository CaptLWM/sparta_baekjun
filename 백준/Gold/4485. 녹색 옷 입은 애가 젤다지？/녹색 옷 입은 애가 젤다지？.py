import sys
from math import *
from heapq import *

# sys.stdin = open('input2.txt')

def dijikstra(graph, dist, N):
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    q = []
    dist[0][0] = graph[0][0]  # 시작노드의 비용 설정
    heappush(q, (dist[0][0], [0, 0]))  # 시작 노드부터의 x 노드까지의 비용, x의 좌표

    while q:
        d, node = heappop(q)
        x, y = node
        if dist[x][y] < d:  # 큐에서 뽑아낸 거리가 이미 갱신된 거리보다 큰 경우 이미 방문한 셈이므로 무시
            continue
        for i, j in zip(dx, dy):
            n_x, n_y = x + i, y + j
            if 0 <= n_x < N and 0 <= n_y < N:  # in range check
                cost = d + graph[n_x][n_y]  # 시작->현재 노드까지의 비용 + 현재노드->다음노드까지의 비용
                if cost < dist[n_x][n_y]:  # 시작->다음노드까지의 비용보다 적을 경우
                    dist[n_x][n_y] = cost
                    heappush(q, (cost, [n_x, n_y]))
    return dist[N - 1][N - 1]

T = 1
cnt =0

while T !=0:
    T = int(sys.stdin.readline().strip())
    if T == 0:
        break
    cave = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(T)]
    # 튜플 리스트 형식으로 변경 ()
    temp = [[inf for _ in range(T)] for _ in range(T)]

    result = dijikstra(cave, temp, T)
    cnt +=1
    print(f'Problem {cnt}: {result}')