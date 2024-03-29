import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline().strip())

# 주어진 알고리즘
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n - 1
#         for j <- i + 1 to n
#             sum <- sum + A[i] × A[j]; # 코드1
#     return sum;
# }

# 이중포문 O(n^2) 시간복잡도(A는 list이기 때문, 또한 수행시간 n^2에 비례한다고 조건에 명시)
# n=7 이면 1~6까지 총합이 수행횟수 => 등차수열 n(n+1)/2 활용


print(n*(n-1)//2) # 1~n-1까지의 합
print(2) # 최고차항 차수 고정