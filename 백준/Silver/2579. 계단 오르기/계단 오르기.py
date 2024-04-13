import sys

# sys.stdin=open('input2.txt')

# n : 게단 수
n = int(sys.stdin.readline().strip())
# step_list : 계단 목록
step_list=[0]+[int(sys.stdin.readline().strip()) for _ in range(n)] + [0] # 인덱스 맞춰주기
# 점수칸
score = [0] * (n+2)
score[1] = step_list[1]
score[2] = score[1] + step_list[2] # 연속계단중 1번째 계단 미포함이므로 한번 밟고 점프


for i in range(3, n+1): # 2번째까지 했기 때문에
    # 두칸 한번에 올라 왔을때 score[i-2],
    # 한칸 두칸 이렇게 올라왔을때 score[i-3]+step_list[i-1]
    score[i] = max(score[i-2], score[i-3]+step_list[i-1]) + step_list[i]

print(score[n])


