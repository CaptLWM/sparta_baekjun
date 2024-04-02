import sys

# sys.stdin = open('input.txt')

# 스위치 개수
N = int(sys.stdin.readline().strip())
# 스위치 상태
switch_state = list(map(int, sys.stdin.readline().strip().split()))
# 학생수
M = int(sys.stdin.readline().strip())
# temp
temp = []

def change_state(state):
    if switch_state[state] == 0:
        switch_state[state] = 1
    else:
        switch_state[state] = 0

for i in range(M):
    temp.append(list(map(int, sys.stdin.readline().strip().split())))

for i in range(M):
    # 남학생 스위치 조작
    if temp[i][0] == 1:
        male = temp[i][1]
        for j in range(1, N+1):
            if j % male == 0:
                change_state(j-1)

    # 여학생 스위치 조작
    else:
        female = temp[i][1]
        change_state(female-1) # 선택 받은거 바꿈
        x=1
        while female-x>=1 and female+x <=N:
        # for k in range(N):
        #     if female-i>=1 and female+i <=N: # 스위치 범위 안벗어나게
        #         print(female - 1 + k,female - 1 - k)
            if switch_state[female-1+x] == switch_state[female-1-x]:
                change_state(female-1+x)
                change_state(female-1-x)
            else:
                break
            x += 1


string = [switch_state[i:i+20] for i in range(0, len(switch_state), 20)]

for i in range(len(string)):
    print(' '.join(map(str, string[i])))




