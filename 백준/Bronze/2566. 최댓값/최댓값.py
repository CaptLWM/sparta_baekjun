import sys

# sys.stdin = open('input.txt')

# 9x9 행렬
matrix_1 = [list(map(int,sys.stdin.readline().strip().split())) for _ in range(int(9))]

def find_max(arr):
    # 최대값
    max_number = -1 # 값이 0일 수 있으므로
    # 위치
    location_number = ['','']
    for i in range(9):
        for j in range(9):
            if arr[i][j] > max_number:
                max_number = arr[i][j]
                location_number[0] = str(i+1)
                location_number[1] = str(j+1)
    print(max_number)
    print(' '.join(location_number))

find_max(matrix_1)