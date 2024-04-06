import sys
from collections import *

# sys.stdin = open('input.txt')

# N: 숫자개수(홀수)
N = int(sys.stdin.readline().strip())
number_list = []
for i in range(N):
    number_list.append(int(sys.stdin.readline().strip()))
number_list.sort()

# 산술평균
print(int(round(sum(number_list)/len(number_list),0)))
# 중앙값
print(number_list[(len(number_list)-1)//2])

# 최빈값
# 중복제거
temp = list(set(number_list))
cnt = {temp[i]:0 for i in range(len(temp))}
for i in number_list:
    cnt[i] +=1
# 값 기준 정렬
test = sorted(cnt.items(), key=lambda item: item[1], reverse=True)
max_count = test[0][1]
check = [num for num, count in test if count==max_count]
check.sort()

if len(check)>1:
    print(check[1])
else:
    print(min(check))

# # 범위
print(abs(number_list[-1] - number_list[0]))
