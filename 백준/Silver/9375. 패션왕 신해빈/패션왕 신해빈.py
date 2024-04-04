# 해쉬테이블 구성, value 값으로 조합 구성

import sys
import itertools
from collections import *

#sys.stdin=open('input2.txt')

N = int(sys.stdin.readline().strip())

for _ in range(N):
    n = int(sys.stdin.readline().strip())
    test = defaultdict(int)

    for i in range(n):
        a, b = map(str, sys.stdin.readline().strip().split())
        test[b] += 1  # 옷이 몇개있는지만 체크

    result = 1 # 곱하기용 혹은 알몸일 경우, 나중에 빼줘야함

    for val in test.values():
        result *= val+1
    result -= 1
    print(result)


