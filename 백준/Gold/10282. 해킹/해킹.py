import heapq
import sys
from heapq import *
from collections import *
#sys.stdin=open('input2.txt')

# t : testcase 수
def dijikstra(graph, start):
    INF = float('inf')

    dist = [INF] * len(graph)
    dist[start] = 0

    q = [(0, start)]

    while q:
        cost, idx = heappop(q)
        if dist[idx] < cost:
            continue

        # 현재 정점에서 갈 수 있는 모든 정점을 확인해봅니다.
        for adj, d in graph[idx]:
            if dist[adj] > cost + d:
                dist[adj] = cost + d
                heappush(q, (dist[adj], adj))

    return dist

t = int(sys.stdin.readline().strip())

for _ in range(t):
    n, d, c = map(int, sys.stdin.readline().strip().split())
    graph = [[] for _ in range(n+1)]

    for _ in range(d): # 의존성 수만큼 길이 있기 때문
        a, b, s = map(int, sys.stdin.readline().strip().split())
        graph[b].append([a, s])
    # print(graph)
    distance = dijikstra(graph, c)
    count=0
    temp = [i for i in distance if i != float('inf')]
    for dist in distance:
        if dist!=float('inf'):
            count+=1
    print(count, max(temp))
