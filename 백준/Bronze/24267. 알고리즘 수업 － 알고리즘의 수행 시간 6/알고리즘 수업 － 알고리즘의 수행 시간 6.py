import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline().strip())

# 주어진 알고리즘
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n - 2
#         for j <- i + 1 to n - 1
#             for k <- j + 1 to n
#                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
#     return sum;
# }

# 삼중포문 O(n^3) 시간복잡도(A는 list이기 때문, 또한 수행시간 n^3에 비례한다고 조건에 명시)
# i=1 / j=2 / k=3,4,5,6,7 =>n-2
#     / j=3 / k=4,5,6,7 =>n-3
# ...
# i=2 / j=3 / k=4,5,6,7 => n-3
# (n-2)*1 + (n-3)*2 ... 1*(n-2)
result = 0
for i in range(1, n-1): # 1~n-2까지
    result += (n-2)*i
    n -=1

print(result)
print(3) # 최고차항 차수 고정