import sys
from collections import deque
from pprint import pprint
# sys.stdin = open('input2.txt')

# 먼저 뱀은 몸길이를 늘려 머리를 다음칸에 위치시킨다.
# 만약 벽이나 자기자신의 몸과 부딪히면 게임이 끝난다.
# 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
# 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다

# 큐 활용해야하는 문제, 큐에 뱀 머리 넣고 사과먹으면 길어지도록

# 보드의 크기
N = int(sys.stdin.readline().strip())

# 사과의 개수
K = int(sys.stdin.readline().strip())
# 사과의 위치 배열
# 만든 판 위에 사과 위치 체크, 뱀의 시작 위치 체크
board = [[0]*N for _ in range(N)]
for _ in range(K):
    a, b = map(int, input().split())
    board[a-1][b-1] = 1

# pprint(board)
# 뱀의 방향전환정보
L = int(sys.stdin.readline().strip()) # l
snake_location =[list( sys.stdin.readline().strip().split()) for _ in range(L)] #turn
for i in snake_location:
    i[0] = int(i[0])

# dx = [1,-1,0,0]
# dy = [0,0,1,-1]
# 방향 90도로 회전하도록 dx, dy 수정
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
head_x, head_y, nd, i, time = 0, 0, 0, 0, 0
queue = deque()
queue.append((head_x,head_y)) # 뱀 시작점 저장

while True:
    head_x = head_x + dx[nd]
    head_y = head_y + dy[nd]
    time += 1
    # 게임 종료 조건 : 보드 밖으로 나갔거나, 큐 안에 이미 머리와 같은 좌표가 있거나
    if head_x < 0 or head_x >= N or head_y < 0 or head_y >=N or (head_x, head_y) in queue:
        # 종료
        break
    queue.append((head_x,head_y))
    if board[head_x][head_y] == 0: # 시작점인지 확인
        queue.popleft()
    else:
        board[head_x][head_y] = 0
    if time == snake_location[i][0]:
        if snake_location[i][1] == 'L':
            nd = (nd - 1) % 4
        else:
            nd = (nd + 1) % 4
        if i+1 < len(snake_location):
            i+=1
print(time)
# 뱀 이동

