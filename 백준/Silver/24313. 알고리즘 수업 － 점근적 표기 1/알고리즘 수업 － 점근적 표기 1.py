import sys

# sys.stdin = open('input.txt')

# f(n) 나타내는 정수 a1, ao
fa1, fa0 = map(int,sys.stdin.readline().strip().split(' '))

# 양의정수 c
c = int(sys.stdin.readline())

# 양의 정수 n0
n0 = int(sys.stdin.readline())

# f(n)
def f(n:int):
    return int((fa1*n)+fa0)
# g(n)=n

if (f(n0) <= c*n0) and fa1<=c:
    print(1)
else:
    print(0)