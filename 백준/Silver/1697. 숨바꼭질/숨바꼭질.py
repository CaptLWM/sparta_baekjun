from collections import deque

def bfs(N, K):
    visited = [False] * 100001  # 방문 여부를 나타내는 배열
    queue = deque([(N, 0)])  # (위치, 시간)의 튜플을 큐에 넣어주고 시작
    
    while queue:
        subin, time = queue.popleft()
        
        if subin == K:  # 현재 위치가 동생의 위치와 일치하면 시간을 반환하고 종료
            return time
        
        for next_subin in (subin - 1, subin + 1, subin * 2):  # 가능한 이동 방법을 순회
            if 0 <= next_subin <= 100000 and not visited[next_subin]:  # 범위 내에 있고 방문하지 않은 곳일 경우에만 큐에 추가
                visited[next_subin] = True  # 방문 처리
                queue.append((next_subin, time + 1))  # 큐에 추가하면서 시간을 증가시킴

N, K = map(int, input().split())
print(bfs(N, K))  # BFS 탐색을 호출하고 결과를 출력
