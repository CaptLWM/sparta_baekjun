import sys
from itertools import *
from collections import *

# sys.stdin = open('input2.txt')

# 목표채널
N = int(sys.stdin.readline().strip())
# 고장난 버튼 수
M = int(sys.stdin.readline().strip())

broken_button = list(map(int, sys.stdin.readline().strip().split()))
min_count = abs(100-N) # 현재 채널에서 +-만 사용할 경우

for nums in range(1000001):
    nums = str(nums)

    for j in range(len(nums)):
        if int(nums[j]) in broken_button:
            break
        elif j == len(nums) - 1:
            # abs(int(nums) - N) + len(nums)
            # 절대값은 가까운 숫자와 타겟간 차이, len은 버튼 자릿수
            min_count = min(min_count, abs(int(nums)-N) + len(nums))
print(min_count)



