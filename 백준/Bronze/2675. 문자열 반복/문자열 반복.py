import sys

# sys.stdin = open('input.txt')

n = sys.stdin.readline().strip() # 테스트 케이스 수

for _ in range(int(n)): 
    # 각 테스트 케이스 분리
    a, b = sys.stdin.readline().strip().split(' ')    
    word = list(b)
    for x in word:
        # 출력
        text = ('').join(x*int(a))
        print(text, end='')
    print()