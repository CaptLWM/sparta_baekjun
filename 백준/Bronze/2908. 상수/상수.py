import sys

# sys.stdin = open('input.txt')

A, B = list(map(str, sys.stdin.readline().strip().split())) # 숫자 문자열로 받기
change_A = []
change_B = []
result=[]

for x in range(3): # 문제에서 3자리 수로 주어 졌으므로
    change_A += A[2-x]
    change_B += B[2-x]
    if x == 2: # for문 다돌았으면 합치기
        change_A=int(''.join(change_A) )
        change_B=int(''.join(change_B))
        
print(change_A if change_A > change_B else change_B)