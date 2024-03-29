import sys

# sys.stdin = open('input.txt')

card_data=[]
N = int(sys.stdin.readline().strip())
card_number = list(map(int, sys.stdin.readline().strip().split(' ')))
M = int(sys.stdin.readline().strip())
check=list(map(int, sys.stdin.readline().strip().split(' ')))

count_result = {}

for x in card_number: # 각 줄별 용도는 조건으로 확인 되었기 때문에 
    # count_result[x] = card_number.count(x) # count 시간 복잡도 O(n) 
    if x in count_result:
        count_result[x] +=1
    else:
        count_result[x] = 1

# print(count_result)

for i in range(M):
    if check[i] in count_result:
        print(count_result[check[i]], end=' ')
    else:
        print(0, end=' ')