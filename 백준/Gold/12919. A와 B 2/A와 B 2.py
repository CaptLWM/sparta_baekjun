import sys
from heapq import *

# sys.stdin=open('input2.txt')

s = sys.stdin.readline().strip()
t = sys.stdin.readline().strip()

# 1. 문자열 뒤에 A를 추가
# 2. 문자열 뒤에 B를 추가하고 문자열 뒤집기
# 둘중 하나 해서 문자열에 포함 되는지 안되는지 체크

def checkword(t):
    if t==s:
        return 1
    if len(t)>1 and t[-1]=='A' and checkword(t[:-1]):
        return 1
    if len(t)>1 and t[0]=='B' and checkword(t[1:][::-1]):
        return 1
    return 0

print(checkword(t))
# s->t는 어디서 틀렸는지 모르겠다. t에서 s로 가는걸로 바꾸자
# # 종료 조건
# if len(s)>len(t):
#     return 0
# if s == t:
#     return 1
# temp1 = s
# temp2 = s
# # 경우 1
# temp1+='A'
# reverse_temp1 = ''.join(reversed(temp1))
# # 경우 2
# temp2+='B'
# reverse_temp2 = ''.join(reversed(temp2))
# # print(temp1, reverse_temp1, temp2, reverse_temp2)
# # print(temp1 in t, reverse_temp1 in t)
# # # 부분집합으로 존재하는지 확인
# if temp1 in t or reverse_temp1 in t:
#     return checkword(temp1,t)
# elif reverse_temp2 in t or temp2 in t:
#     return checkword(reverse_temp2,t)
# else:
#     return 0
# print(checkword(t))