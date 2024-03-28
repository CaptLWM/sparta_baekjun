import sys

# sys.stdin = open('input.txt')

alphapet = sys.stdin.readline().strip()
cnt = 0 # 횟수 체크
result = set() # 결과 중복 제거

def makestring(cnt_key): # 문자열 slice
   for x in range(cnt_key, len(alphapet)):
       result.add(alphapet[cnt_key:x+1])
    
while cnt < len(alphapet):
   makestring(cnt)
   cnt += 1

print(len(result))