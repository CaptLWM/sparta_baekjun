import sys

# sys.stdin = open('input.txt')

N, M = map(int, sys.stdin.readline().strip().split()) # 행렬
# 더할 두개 행렬 구분
matrix_1 = [list(map(int,sys.stdin.readline().strip().split())) for _ in range(int(N))]
matrix_2 = [list(map(int,sys.stdin.readline().strip().split())) for _ in range(int(N))]

# 저장할 행렬 생성
New_matrix = [[0] * M for _ in range(N)]

def sum_matrix(arr1, arr2):
    for i in range(N):
        for j in range(M):
            print(arr1[i][j] + arr2[i][j], end=' ')
        print()

sum_matrix(matrix_1, matrix_2)

