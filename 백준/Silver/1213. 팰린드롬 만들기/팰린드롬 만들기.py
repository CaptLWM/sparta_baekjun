import sys

# sys.stdin = open('input.txt')

name = sys.stdin.readline().strip()

answer = ''
each = '' # 한개만 있는 경우
dict = {}
sorted_dict = set()

# 사전형 자료형 생성
for i, value in enumerate(name):
    if value in dict.keys():
        dict[value] += 1
    else:
        dict[value] = 1

# 팰린드롬 가능 여부 판단
cnt = 0
for key, value in dict.items():
    if value % 2 == 1:
        cnt += 1
check=0
if cnt > 1:
    print("I'm Sorry Hansoo")
else:
    sorted_dict = sorted(dict.items()) # 정렬된 set 자료형으로 변경
    for x, y in sorted_dict:
        temp = ''
        check += 1
        if y % 2 == 0:
           temp += x*(y//2)
        elif y % 2 == 1 and y != 1:
            temp += x*((y-1)//2)
            each += x
        else:
            each+=x
        answer+=(temp)
# for x in answer:
#     if
result = ''
if len(each) ==0:
    result = answer+answer[::-1]
else:
    result = answer+each+answer[::-1]
print(result)

