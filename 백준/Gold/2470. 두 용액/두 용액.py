import sys
from collections import *

# sys.stdin = open('input.txt')

# N : 용액 수
N = int(sys.stdin.readline().strip())

liquid_list=list((map(int, sys.stdin.readline().strip().split())))

# 절대값기준 오름차순 정렬
test = sorted(liquid_list, key=abs)
check =[]
ans = 1e9

# 붙어있는거끼리 더해서 제일 작은거 찾기
for i in range(1, N):
    temp=test[i] + test[i-1]
    check.append((temp, i))

check.sort(key=lambda x: abs(x[0]))

index = check[0][1]
# print(index)
# print(test[index], test[index-1])
ans = [test[index], test[index-1]]
# 결과값 오름차순 정렬
ans.sort()
print(*ans)
