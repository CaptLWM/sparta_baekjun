import sys
from heapq import *

# sys.stdin = open('input2.txt')


def dijikstra(graph, start):
    INF = float('inf')  # Python에서 무한대를 의미해요.

    # 시작점을 제외한 모든 정점까지의 거리를 무한대로 설정해줍니다.
    dist = [INF] * len(graph)
    dist[start] = 0

    # 우선순위 큐에 (거리, 정점)을 넣어줍니다.
    # 시작 정점은 거리가 0이므로 (0, start)를 넣어줄게요.
    q = [(0, start)]

    # 우선순위 큐가 빌 때까지 계속해서 다익스트라 알고리즘을 수행합니다.
    while q:
        # 우선순위 큐에서 가장 거리가 짧은 정점을 꺼냅니다.
        cost, idx = heappop(q)
        # 이미 처리된 정점(이미 최단 거리를 구한 정점)이라면 무시합니다.
        if dist[idx] < cost:
            continue

        # 현재 정점에서 갈 수 있는 모든 정점을 확인해봅니다.
        for adj, d in graph[idx]:
            if dist[adj] > cost + d:
                dist[adj] = cost + d
                heappush(q, (dist[adj], adj))

    return dist
# n : 도시 수
n = int(sys.stdin.readline().strip())
# m : 버스의 수
m = int(sys.stdin.readline().strip())

# 노선정보
# 도시 수가 n개니까 nxn 빈배열 생성
graph=[[] for i in range(n+1)] # 인덱스 맞춰주기 위해 n+1
for i in range(m):
    # a : 출발지점, b : 도착지점, c : 비용
    a, b, c = map(int, sys.stdin.readline().strip().split())
    graph[a].append((b,c))

start, end = map(int, sys.stdin.readline().strip().split())
# print(start,end)
price = dijikstra(graph, start)
print(price[end])
# print(graph)