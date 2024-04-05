# 오름차순 정렬 후 전체 합

import sys
from collections import deque

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline().strip())
time_list = list(map(int, sys.stdin.readline().strip().split()))
time_list.sort() # 오름차순 정렬

result=0 # 결과
while len(time_list)>0:
    result+=sum(time_list)
    a=time_list.pop()

print(result)