import sys
from itertools import permutations

# sys.stdin = open('input.txt')

n, m = map(int, sys.stdin.readline().strip().split(' '))
# 1~n 숫자 배열
number_list = [x for x in range(1,n+1)]

#가능한 모든 순열
result = permutations(number_list, m) # 숫자배열에서 m개 뽑아서 순열 생성

for x in result:
    # print(type(x))
    test = ' '.join(map(str, x))
    print(test)