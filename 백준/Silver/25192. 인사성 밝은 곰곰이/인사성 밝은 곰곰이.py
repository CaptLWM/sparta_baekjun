import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline().strip()) # 채팅방 기록 수

chat = [sys.stdin.readline().strip() for x in range(n)]

enter_people=set()
count = 0
# enumerate : 순서가 있는 자료형(list, set, tuple, dictionary, string)을 입력으로 받았을 때, 인덱스와 값을 포함하여 리턴
for _,y in enumerate(chat):
    if y != 'ENTER' and y not in enter_people:
        enter_people.add(y) 
        count +=1
    elif y !='ENTER' and y in enter_people:
        continue
    else:
        enter_people.clear() # ENTER면 clear, 카운트는유지
        
print(count)