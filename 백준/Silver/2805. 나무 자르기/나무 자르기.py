# 오름차순 정렬 후 전체 합

import sys

# sys.stdin = open('input.txt')

# N : 나무의 수, M : 필요한 나무의 길이
N, M = map(int, sys.stdin.readline().strip().split())
# 나무 크기
tree_list = list(map(int, sys.stdin.readline().strip().split()))

# print(test)
# 잘린 나무 길이 총합
short, tall = 1, max(tree_list)

# 필요한 나무 높이

while short <= tall:
    # 이분탐색
    mid = (short + tall) // 2
    # 잘린나무
    sum=0
    for i in tree_list:
        # 중간크기보다 크면 자르고 summ에 저장
        if i >= mid:
            sum += i-mid

    # 적어도 M미터의 나무를 가져가야 하기때문에 sum < M이어야함
    if sum >= M:
        short = mid + 1
    else:
        tall = mid-1
print(tall)