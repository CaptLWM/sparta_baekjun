import sys

# sys.stdin = open('input2.txt')
# 센서수
n = int(sys.stdin.readline().strip())
# 집중국 수
k = int(sys.stdin.readline().strip())
sensor_list = sorted(list(map(int, sys.stdin.readline().strip().split())))
k_list = [0 for i in range(n-1)]

# k 가 더 큰 경우 제외 / 겹쳐서 세우면 되기 때문
if k>=n:
    print(0)
else:
    for i in range(len(k_list)):
        k_list[i] = sensor_list[i+1]-sensor_list[i]

    k_list.sort()

    # 설치구역 나누는 가상의 칸 : k-1개
    for i in range(k-1):
        k_list.pop()
    print(sum(k_list))



