# deque.rotate 활용
# list를 회전 시킬 수 있음

import sys
from collections import deque

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline().strip())
balloon = deque(enumerate(map(int, sys.stdin.readline().strip().split())))

result=[]
while balloon: # popleft로 queue애 요소들을 제거하고 있기 때문에 while문 사용
    index, number = balloon.popleft()
    result.append(index+1) # index이므로 + 1
    if number > 0: # 양수
        balloon.rotate(-(number-1))
        # list로 펼쳤다 생각 했을때 이동한 값이 맨 앞으로 오기 위해서는 왼쪽으로 배열이 움직여야함
        # 터진건 제외한다 했으므로 -1
    elif number < 0:
        balloon.rotate(-number)
        # number==0 인 경우는 없음(조건)
print(' '.join(map(str,result)))
