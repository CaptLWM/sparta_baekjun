# deque 활용
# 마지막 요소를 뽑아서 뒤부터 비교

import sys
from collections import deque

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline().strip())
tower = list(enumerate(map(int, sys.stdin.readline().strip().split())))
check_signal=[]
result=[]
for i in range(N):
    while check_signal:
        if check_signal[-1][1] > tower[i][1]:
            result.append(check_signal[-1][0]+1)
            break
        else:
            check_signal.pop()
    if not check_signal:
        result.append(0)
    check_signal.append(tower[i])
    # a = tower.pop()
    # check_signal.append(a)
    # # 마지막 요소 비교
    # if len(tower)>0:
    #     if check_signal[-1][1] < tower[-1][1]:
    #         print('!!!!!!',tower[-1], check_signal[-1])
    #         result.append(tower[-1][0] + 1) # 시작이 0이 아닌 1이므로
    #         print('result', result)
    #     else:
    #         result.append(0)
    # print('tower',tower)
    # print('che', check_signal)
print(*result)