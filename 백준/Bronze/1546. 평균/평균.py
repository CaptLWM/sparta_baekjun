import sys
import statistics # statistics 라이브러리 호출

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline().strip()) # 과목 수
score=list(map(int, sys.stdin.readline().strip().split(' '))) # 점수

M = max(score) # 최고점수 
new_score=[]
for x in score: # 점수 수정
    new_score.append(x/M*100)

print(statistics.mean(new_score))