import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline())

extension = {} # 개수 저장 위해 딕셔너리 사용
files=[]

for i in range(n):
    name = sys.stdin.readline().strip().split('.')
    extension[name[1]]=0 # 확장자 개수 초기화
    files.append(name[1])
    
for i in files:
    extension[i] += 1
    
sorted_name = sorted(extension.items()) # 튜플리스트

result=[]
for i,j in sorted_name:
    result.append(str(i) +' '+str(j))

print('\n'.join(result))