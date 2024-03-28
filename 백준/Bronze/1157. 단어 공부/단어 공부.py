import sys

# sys.stdin = open('input.txt')

word = list(sys.stdin.readline().strip().upper()) # 모든 문자 대문자

word_count={}

for x in range(len(word)): # 알파벳 카운팅
    if word[x] in word_count:
        word_count[word[x]] += 1
    else:
        word_count[word[x]]= 1

# 시간초과 원인? / 리스트 컴프리헨션 공부 필요
max_alphabet = [k for k,v in word_count.items() if max(word_count.values()) == v]

# maxCnt = max(word_count.values())
# max_alphabet = [] # 결과 저장

# for key, value in word_count.items():
#     if(value == maxCnt):
#         max_alphabet.append(key)

if len(max_alphabet) != 1: 
    print('?')
else:
    print(max_alphabet[0]) # 최대 개수 알파벳