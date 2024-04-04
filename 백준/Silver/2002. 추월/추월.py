import sys
# from collections import *
# sys.stdin = open('input2.txt')

# n : 차량 대수
n = int(sys.stdin.readline().strip())

# 차량 목록
# [0]: 차번호 [1]: 들어온 순서 나간순서

# 전체를 한번에 묶으려니 내가 더 헷갈림 둘로 나누자
# car_list = defaultdict(list)
# car_list['in'] = [(sys.stdin.readline().strip(), i) for i in range(n)]
# car_list['out'] = [(sys.stdin.readline().strip(), i) for i in range(n)]

car_in={}
car_out={}

for i in range(n):
    temp = sys.stdin.readline().strip()
    car_in[temp] = i
for i in range(n):
    temp = sys.stdin.readline().strip()
    car_out[temp] = i
result = 0

temp_list = list(car_out.keys())

for i in range(len(temp_list)):
    # 내가 나올때 들어오는 순간의 인덱스가 1이고 뒷차가 나올때 인덱스가 작으면
    # 추월
    now = car_in[temp_list[i]]

    for j in range(i+1, len(temp_list)):# 나간거 제외
        next = car_in[temp_list[j]]
        if next < now:
            result+=1
            break
print(result)


