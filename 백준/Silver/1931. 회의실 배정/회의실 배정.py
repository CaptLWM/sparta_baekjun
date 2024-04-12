import sys
from pprint import pprint
# sys.stdin = open('input2.txt')
# 회의실 수
n = int(sys.stdin.readline().strip())
meeting_list = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]

# 끝나는 시간 오름차순 / 시작시간 오름차순 순으로 정렬
meeting_list.sort(key=lambda x:(x[1], x[0]))

# pprint(meeting_list)
# 회의 순서대로 넣을 stack

cnt = 1
# 회의 끝나는 시간
end = meeting_list[0][1]
for i in range(1,n):
    # 끝나는 시간은 시작시간보다 같거나 작아야함
    if meeting_list[i][0] >= end:
        cnt+=1
        end = meeting_list[i][1]

pprint(cnt)