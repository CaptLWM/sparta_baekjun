import sys

# sys.stdin = open('input.txt')

nameList=sys.stdin.readline().strip().split('-')
result=''
    
for index,value in enumerate(nameList):
    result += value[:1:]

print(result)