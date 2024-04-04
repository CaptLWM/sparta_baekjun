import sys
from heapq import *

# sys.stdin = open('input2.txt')

test_case = int(sys.stdin.readline().strip())

check = []
heapify(check)

for i in range(test_case):
    number = int(sys.stdin.readline().strip())
    heappush(check, number)

result=0

while len(check) >1:
    if len(check)>1:
        a = heappop(check)
        b = heappop(check)
        heappush(check, a+b)
        result+=a+b
print(result)


