import sys
from collections import deque

# sys.stdin = open('input2.txt')

# N개의 정점, M개의 간선, 정점R
N, M, R = map(int, sys.stdin.readline().strip().split())
graph = [[] for _ in range(N+1)]
visited=[False]*(N+1)
result=[0]*(N+1)
cur=1 # 방문 횟수 체크
# 그래프 만들기
for _ in range(M):
    a, b = map(int, sys.stdin.readline().strip().split())
    graph[a].append(b)
    graph[b].append(a)
# print(M, len(graph))
# 각 요소들 오름차순으로 정렬
for check in range(len(graph)):
    graph[check].sort()
# graph.sort()

def bfs(idx):
    global cur
    queue = deque()
    queue.append(idx)

    visited[idx] = True # 방문처리
    result[idx] = cur

    while queue:
        left = queue.popleft()
        # print(f"{idx} 방문!")
        for i in graph[left]:
            if not visited[i]: # 방문하지 않은 것인데 방문 할 수 있는 것들 처리
                cur +=1
                result[i]= cur

                queue.append(i)
                visited[i] = True # 중복방문 막기위해
    # result[idx]=cur
    # for next_idx in graph[idx]:
    #     if result[next_idx]:
    #         continue
    #     cur+=1
    #     dfs(next_idx)

bfs(R)

for i in result[1:]:
    print(i)
