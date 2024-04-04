import sys
# from collections import *
# sys.stdin = open('input2.txt')

# n : 수열의 크기
n = int(sys.stdin.readline().strip())
number_list = list(map(int, sys.stdin.readline().strip().split()))
# number_que = deque(number_list)
result = [-1]*n
check=[]
for i in range(n):
    # 반복 조건 : check 비어있지 않고 스택 가장위에 있는 수보다 현재수가 작을경우
    while check and number_list[check[-1]] < number_list[i]:
        index = check.pop()
        result[index] = number_list[i]
    check.append(i)
    # a = number_que.popleft()
    # # print(a)
    # temp=[]
    # cnt=0
    # while cnt < len(number_que):
    #
    #     if a < number_que[cnt]:
    #         temp.append(number_que[cnt])
    #     cnt +=1
    # # print(temp)

print(' '.join(map(str, result)))

