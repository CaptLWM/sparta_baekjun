import sys
from itertools import *
from collections import *

# sys.stdin = open('input2.txt')

# N : 정수의 합 , S : 합
N, S = map(int, sys.stdin.readline().strip().split())
number_list = list(map(int, sys.stdin.readline().strip().split()))

sum_list=[]
for i in range(1, N+1):
    test = list((combinations(number_list, i)))
    for j in range(len(test)):
        sum_list.append(sum(list(test[j])))
print(Counter(sum_list)[S])
# print(sum_list)