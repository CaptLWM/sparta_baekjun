import sys

# sys.stdin = open('input.txt')
    
x = int(sys.stdin.readline()) # x

a = 1 # 시작점 

# 시작점 기준
# [['1/1'], ['1/2','2/1'],['3/1','2/2','1/3'],['1/4','2/3','3/2', '4/1' ], ....]
# 짝수번쨰는 분모 감소 분자증가 , 홀수는 분자 증가 분모 감소
# x=5 이고 1depth를 줄이라 했을때 5번째 분수의 위치는 3번째줄 2번째칸임
while int(x) > a:
    x-=a
    a+=1
    
# print(x, a) # x=5 일때 2, 3 => 3번째줄 2번째칸

if a%2 ==1:
    b = a - x + 1 # 분모
    c = x # 분자
else:
    b = x # 분자
    c = a - x + 1 # 분모
    
    
print(str(b)+'/'+str(c))
