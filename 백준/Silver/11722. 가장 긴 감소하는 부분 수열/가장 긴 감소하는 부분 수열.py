import sys

# sys.stdin=open('input2.txt')

n = int(sys.stdin.readline().strip())
num_list = list(map(int, sys.stdin.readline().strip().split()))

dp = [1] * n
for i in range(n):
    for j in range(i): # i 이전의 값들을 비교할 거에요
        if num_list[i] < num_list[j]: # a[i]가 a[j]보다 크다면
            dp[i] = max(dp[i], dp[j] + 1) # dp[i]와 dp[j] + 1 중 큰 값을 dp[i]에 저장!

print(max(dp))
# print(fibonacci_dp(n))
