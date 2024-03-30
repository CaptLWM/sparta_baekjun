import sys

# sys.stdin = open('input.txt')

# 끝말잇기 기록길이
N = int(sys.stdin.readline().strip())
# 끝말잇기 기록
log = [sys.stdin.readline().strip() for x in range(N)]
# 후보단어 개수
M = int(sys.stdin.readline().strip())
# 후보단어
candidate_word = set(sys.stdin.readline().strip() for y in range(M))

# 케이스
#   1. ?만 있을때
#   2. ?가 맨 앞
#   3. ?가 맨 뒤
#   4. ?가 단어 사이에 있을때
head_bottom=['',''] # 0 : ? 앞 단어의 마지막글자 / 1 : ? 뒤 단어의 첫번째 글자
location=''

question_mark_index = log.index('?') # ? 위치
if question_mark_index == 0:
    if len(log) ==1: # '?'만 있을때
        location='only'
    else:
        head_bottom[0] = log[question_mark_index+1][0]
        location='first' # 맨앞
elif question_mark_index == N-1: # 맨뒤
    head_bottom[1] = log[question_mark_index-1][-1]
    location='last'
else:
    head_bottom[0] = log[question_mark_index + 1][0]
    head_bottom[1] = log[question_mark_index - 1][-1]
    location='mid'

result = ''

# 케이스
#   1. ['','']
#   2. ['O','']
#   3. ['','0']
#   4. ['0','0']
# print(head_bottom)
# print(list(candidate_word-set(log)))
for y in list(candidate_word-set(log)):
    # print(y)
    # print(location, y)
    if location == 'first':
        if y[-1] == head_bottom[0]:
            print(y)
            break
    elif location == 'last':
        # print('!!!', y[0], head_bottom[1])
        if y[0] == head_bottom[1]:
            print(y)
            break
    elif location == 'mid':
        if y[0] == head_bottom[1] and y[-1] == head_bottom[0]:
            print(y)
            break
    else:
        print(y)
        break