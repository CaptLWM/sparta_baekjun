import sys
from collections import deque
# sys.stdin = open('input2.txt')

# 미세먼지 확산시켜주는 함수
def spread():
    dx = [1,-1,0,0]
    dy = [0,0,1,-1]
    # 이동한 것 저장할 판
    new_room = [[0]*c for _ in range(r)]
    new_room[up][0] = -1
    new_room[down][0] = -1

    # 먼지는 한칸씩 이동, 네방향으로 확산, 벽에서는 확선 x
    for i in range(r):
        for j in range(c):
            if room[i][j] > 0: # 공기청정기가 아니면
                new_room[i][j] += room[i][j] # 새 판에 저장
                # 이동 시작
                for d in range(4): # 4방향으로만 이동
                    nx = i + dx[d]
                    ny = j + dy[d]
                    # 칸안에 있고 공기청정기 아니면
                    if 0 <= nx < r  and 0<= ny < c and room[nx][ny] != -1:
                        new_room[nx][ny] += room[i][j]//5
                        new_room[i][j] -= room[i][j] // 5
    return new_room
# 회전하는 함수
def rotate():
    # 반시계 방향, 위쪽, 역순으로 돌리기
    # 윗줄, 앞으로 당기기
    for x in range(up-1, 0, -1):
        room[x][0] = room[x-1][0]
    # 아래방향
    for y in range(c-1):
        room[0][y] = room[0][y+1]
    # 오른쪽 방향
    for x in range(up):
        room[x][-1] = room[x +1][-1]
    # 위쪽방향
    for y in range(c-1, 0, -1):
        room[up][y] = room[up][y-1]

    # 시계방향, 아래쪽, 역순으로
    for x in range(down + 1, r-1):
        room[x][0] = room[x+1][0]
    for y in range(c - 1):
        room[-1][y] = room[-1][y+1]
    for x in range(r-1, down, -1):
        room[x][-1] = room[x-1][-1]
    for y in range(c-1, 0,-1):
        room[down][y]= room[down][y-1]

    # 공기청정기에서 나온 바람은 미세먼지 없음
    room[up][1] = 0
    room[down][1] = 0
# # 받아들이는 함수
# def receive():
#     return
# 다 끝난거에서 카운팅해주는 함수
def dust_count():
    result = 0
    for i in room:
        test = sum(i)
        result+=test
    # 공기청정기가 -1로 들어가있기 때문에 보충
    return result + 2

r, c, t = map(int, sys.stdin.readline().strip().split())
room = [list(map(int, input().split())) for _ in range(r)]
# 공기청정기 설치된 위치 => -1이 들어가있는곳
for i in range(r) :
    # -1 이면 위쪽(반시계)은 i, 아래쪽(시계)은 i+1
    if room[i][0] == -1:
        up, down = i, i+1
        # 위치는 [up][0], [down][0]
        # 찾았으니까 탈출
        break
for _ in range(t):
    room = spread()
    rotate()

print(dust_count())
