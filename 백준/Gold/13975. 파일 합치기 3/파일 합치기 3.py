import sys
from collections import *
from itertools import *
from heapq import *

# sys.stdin = open('input2.txt')

test_case = int(sys.stdin.readline().strip())

for i in range(test_case):
    K = int(sys.stdin.readline().strip())
    file_list = list(map(int, sys.stdin.readline().strip().split()))
    heapify(file_list)
    result=0
    
    # 저번 카드문제 생각해보자
    while len(file_list)>1:
        temp = 0
        a=heappop(file_list) # 제일 작은값 
        b=heappop(file_list) # 그 다음 작은값
        # print('ab',a,b)
        temp+=a+b # a, b 저장
        result+=temp # 결과값 저장
        heappush(file_list, temp) # 다음 연산 위해 temp 추가
        # print('temp',temp)
        # print('result',result)
    print(result)
    # print(file_list)
    # result_stack=[]
    # first_value = heappop(file_list)
    # for i in range(K):
    #     if file_list:
    #         if i ==0:
    #             a = heappop(file_list)  # 제일 작은 값 뽑기
    #             result_stack.append(a+first_value)
    #         else:
    #             b=heappop(file_list)
    #             result_stack.append(result_stack[-1]+b)
    #                 # heappush(result_stack,a+b)
    # print(file_list)
        # if i == 0: # 맨 첫 케이스만 두번째꺼까지 뽑기
        #     b=heappop(file_list)
        #     temp.append(a+b)
        # else:
        #     temp.append(a+temp[-1])
