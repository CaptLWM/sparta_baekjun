import sys
from heapq import heappop, heappush, heapify
#sys.stdin = open('input2.txt')

# n : 카드 개수, m: 합체 횟수
n, m = map(int, sys.stdin.readline().strip().split())

# 카드 목록
card_list=list(map(int, sys.stdin.readline().strip().split()))
heapify(card_list)

for i in range(m):
    # 가장 작은 값 2개 뽑기
    card=heappop(card_list)
    card2=heappop(card_list)
    # print(card, card2, card_list)
    # 카드게임 규칙에 따라 최소값구하려면 가장 작은것 2개를 더해서 바꿔주면됨
    heappush(card_list, card+card2)
    heappush(card_list, card + card2)

print(sum(card_list))
