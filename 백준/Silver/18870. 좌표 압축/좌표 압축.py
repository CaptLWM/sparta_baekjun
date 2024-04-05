# 오름차순 정렬 후 전체 합

import sys
# from collections import *

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline().strip())
number_list = list(map(int, sys.stdin.readline().strip().split()))
# 정렬해서 중복 제거
# 인덱스 = 작은 숫자 몇개 있는지
check_number = sorted(set(number_list))
# dictionary 사용 / .index()의 시간 복잡도는 O(n) 임 for문 안에 쓸때 조심할것
# dictionary comprehension
dict = {check_number[i]:i for i in range(len(check_number))}

result=[]
for i in number_list:
    result.append(dict[i])
    
print(*result)
