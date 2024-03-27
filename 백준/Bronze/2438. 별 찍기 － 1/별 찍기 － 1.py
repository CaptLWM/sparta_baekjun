import sys

# sys.stdin = open('input.txt')

n = sys.stdin.readline().strip() # 입력

for x in range (int(n)): # 출력
    print('*'*(x+1))