import sys
from collections import *

# sys.stdin = open('input.txt')

# N : 집의 개수, C : 공유기 개수
N, C = map(int, sys.stdin.readline().strip().split())

location = []
for i in range(N):
    location.append(int(sys.stdin.readline().strip()))
location.sort()
# print(N,C,location)

max_distance=location[-1] - location[0]
min_distance=1
result=0

while min_distance<=max_distance:
    cnt = 1 # 공유기 몇개
    # mid를 공유기수로 나눈 나머지가 0이 되어야함( 몫을 고려할 필요가 있나? 몫은 1이 되어야함)
    mid = (max_distance+min_distance)//2
    check = location[0] # 맨 앞집 고정
    for i in range(1, N):
        if location[i]-check>=mid: # 중간값 보다 크면 그 사이에 설치
            check=location[i]
            cnt+=1
    if cnt < C: # 설치가 다 안되면
        max_distance=mid-1
    elif cnt>=C: # 설치된게 해야되는것 보다 많거나 클때
        min_distance=mid+1
        result=mid

print(result)