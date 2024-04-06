import sys
from heapq import *

# sys.stdin = open('input2.txt')

N, H_centi, T = map(int, sys.stdin.readline().strip().split())
# 가장 큰 거인만 때릴 예정
H_titan=[]
heapify(H_titan)
# 최대 힙
for i in range(N):
    boss = int(sys.stdin.readline().strip())
    heappush(H_titan, -boss)

# H_titan.sort(reverse=True)
cnt=0

for i in range(T):
    if -H_titan[0] == 1 or -H_titan[0] < H_centi:
        break
    else:
        # print('start',H_titan[0])
        # print('a',H_titan[0]//2)
        # print('b',-(-H_titan[0]//2))
        heapreplace(H_titan, -(-H_titan[0]//2)) # 나눗셈 내림을 함, 양수로 바꿔서 진행을 해줘야함
        cnt+=1
        
if -H_titan[0] >= H_centi:
    print('NO')
    print(-H_titan[0])
else:
    print('YES')
    print(cnt)
