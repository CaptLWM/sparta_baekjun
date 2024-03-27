import sys

# sys.stdin = open('input.txt')

n = list(map(int, sys.stdin.readline().strip().split(' '))) # int list로 변환

if n[0] == n[1] == n[2]: # 전부 같을때
    print(10000+n[0]*1000)
elif n[0]==n[1] or n[0]==n[2]: # 두개만 
    print(1000+n[0]*100)
elif n[1]==n[2]: # 두개만 
    print(1000+n[1]*100)
else : # 전부 다를때
    print(max(n)*100)