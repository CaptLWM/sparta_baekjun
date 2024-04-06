import sys
from collections import *

# sys.stdin = open('input.txt')

# X : 형택이가 게임한 횟수, Y: 승리한 횟수
X, Y = map(int, sys.stdin.readline().strip().split())
s=1
Z = int((Y*100/X))
# 문제에서 게임 횟수를 찾는 문제이므로 여기서 평균 구할게 아님
start = X
end = 0

cnt = 0
if Z >= 99:
    print(-1)
else:
    while end <= start:
        mid = (start+end) // 2
        if (100*(mid+Y)) // (X+mid) > Z:
            cnt = mid
            start=mid-1
        else:
            end=mid+1
    print(cnt)

    # X += 1
    # Y += 1
    # check = int((Y/X)*100)
    # cnt += 1

