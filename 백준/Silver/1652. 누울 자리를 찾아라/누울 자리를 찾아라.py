import sys

# sys.stdin = open('input.txt')

# 방 크기 N
N = int(sys.stdin.readline().strip())

# 방 구조 . : 빈자리 x 가득찬 자리
room = [list(sys.stdin.readline().strip()) for _ in range(N)]
# 방 회전
rotated_room = list(zip(*room[::-1]))

# 결과 : [가로, 세로]
result=[0,0]
#

for i in range(N):
    temp =[0,0]
    for j in range(N):
        # 가로
        if room[i][j] == '.':
                temp[0] += 1
        else:
            temp[0] = 0
        if temp[0] == 2: # 2칸이면 무조건 누울 수 있기 때문
            result[0] += 1

        # 세로
        if rotated_room[i][j] == '.':
            temp[1] += 1
        else:
            temp[1] = 0
        if temp[1] == 2:  # 2칸이면 무조건 누울 수 있기 때문
            result[1] += 1

print(' '.join(map(str, result)))

