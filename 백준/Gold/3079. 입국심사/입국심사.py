# 오름차순 정렬 후 전체 합

import sys
from collections import *

# sys.stdin = open('input.txt')

# N : 입국심사대, M : 친구들 수
N, M = map(int, sys.stdin.readline().strip().split())

time_list=[]
for i in range(N):
    time = int(sys.stdin.readline().strip())
    time_list.append(time)

# 최고로 오래걸릴 수 있는 시간
max_time= max(time_list)*M
min_time= min(time_list) # 모두 같은 시간일 경우
result=float('inf') # 결과 저장할 float형 생성(inf : 양의 무한대)
# 이분탐색용
while min_time <= max_time:
    mid = (max_time + min_time) // 2
    total = 0 # 총 소요시간

    for i in time_list:
        total += mid//i # 해당 소요시간이 필요한 창구에서 몇명이 가능한지

    if total >= M:
        max_time = mid-1
        result = min(result, mid)
    else:
        min_time=mid+1

print(result)