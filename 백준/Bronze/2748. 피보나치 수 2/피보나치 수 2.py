import sys

# sys.stdin=open('input2.txt')

def fibonacci_dp(n):
    fib = [0, 1]
    for i in range(2, n + 1):
        fib.append(fib[i - 1] + fib[i - 2])
    return fib[n]

n = int(sys.stdin.readline().strip())

print(fibonacci_dp(n))