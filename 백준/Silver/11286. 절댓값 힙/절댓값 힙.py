import sys
from heapq import *

#sys.stdin = open('input2.txt')

test_case = int(sys.stdin.readline().strip())

check = []
heapify(check)

for i in range(test_case):
    number = int(sys.stdin.readline().strip())
    if number != 0:
        heappush(check, (abs(number), number))
    else:
        if check: # check에 요소 있으면
            print(heappop(check)[1])
        else:
            print(0)

