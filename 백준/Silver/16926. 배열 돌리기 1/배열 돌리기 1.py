import sys

# sys.stdin = open('input.txt')

# NxM , R번 회전
N, M, R = map(int, sys.stdin.readline().strip().split())

origin_matrix = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(N)]

for _ in range(R):
    # 문제 조건 min(N,M) %2==0 이어야 함
    # 그래야 회전하는 모양 및 파고들어 가야할 횟수가 나옴
    for i in range(min(N,M) // 2):
        # 시작
        first_x = i
        first_y = i
        first_value = origin_matrix[first_x][first_y]

        # 좌측
        for j in range(i+1, N-i):
            first_x=j
            # 이전값
            prev = origin_matrix[first_x][first_y]
            origin_matrix[first_x][first_y] = first_value
            first_value=prev
        # 하단
        for j in range(i+1, M-i):
            first_y=j
            # 이전값
            prev = origin_matrix[first_x][first_y]
            origin_matrix[first_x][first_y] = first_value
            first_value = prev
        # 우측
        for j in range(i+1, N-i):
            first_x = N-j-1
            # 이전값
            prev = origin_matrix[first_x][first_y]
            origin_matrix[first_x][first_y] = first_value
            first_value = prev
        # 상단
        for j in range(i+1, M-i):
            first_y = M-j-1
            # 이전값
            prev = origin_matrix[first_x][first_y]
            origin_matrix[first_x][first_y] = first_value
            first_value = prev


for i in range(N):
    for j in range(M):
        print(origin_matrix[i][j], end=' ')
    print()