import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline()) # 펼쳐진 카드 개수

info_card = {}
result=[]

for _ in range(n): # 카드 정보 저장
    sentence = sys.stdin.readline().split()
    if sentence[0] in info_card:
        info_card[sentence[0]] += int(sentence[1])
    else:
        info_card[sentence[0]] = int(sentence[1])

for key, value in info_card.items(): # 결과 저장
    if value == 5:
        result.append('YES')
    else:
        result.append('NO')

if 'YES' in result: # 결과 출력
    print('YES')
else:
    print('NO')