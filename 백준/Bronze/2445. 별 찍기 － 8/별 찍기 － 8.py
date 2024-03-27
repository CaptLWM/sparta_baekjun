import sys

# sys.stdin = open('input.txt')

n = sys.stdin.readline().strip() # 테스트 케이스 수

for x in range(int(n)*2-1): 
    # 처음 ~ 가운데
    if x<int(n):
        print('*'*(x+1)+' '*(2*(int(n)-(x+1)))+'*'*(x+1))
    # 가운데+1 ~ 끝
    else:
        print('*'*(2*int(n)-(x+1))+' '*(2*((x+1)-int(n)))+'*'*(2*int(n)-(x+1)))