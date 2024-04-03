import sys

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline().strip())

def check(arr):
       cnt=[]
       for i in arr:
              if i=='(':
                     cnt.append('(')
              elif i == ')':
                     if not cnt:
                            return False
                     cnt.pop()
       return not cnt

for i in range(N):
       A = sys.stdin.readline().strip()
       print("YES" if check(A) else "NO")
