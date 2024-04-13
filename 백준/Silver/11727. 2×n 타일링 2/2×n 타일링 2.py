import sys

# sys.stdin=open('input2.txt')

# 점화식 찾을때 노가다 한 뒤에 규칙 찾는게 쉽지 않음;;
# a1 = 1, a3=3 초기값
# a3 = 2 * a1 + a2
# a4 = 2 * a2 + a3
# a5 = 2 * a3 + a4

def tile(n):
    fib = [1, 3]
    if n == 1:
        return 1
    elif n==2:
        return 3
    else:
        for i in range(3, n + 1):
            fib.append(2 * fib[i - 3] + fib[i - 2])
    return fib[-1] % 10007


n = int(sys.stdin.readline().strip())
# step_list= [int(sys.stdin.readline().strip()) for _ in range(n)]

print(tile(n))


# print(fibonacci_dp(n))
