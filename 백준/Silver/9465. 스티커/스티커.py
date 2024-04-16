import sys

# sys.stdin = open('input2.txt')

t = int(sys.stdin.readline().strip())
# print(t)
for _ in range(t):
    n = int(sys.stdin.readline().strip())

    graph=[]
    for _ in range(2):
        graph.append(list(map(int, sys.stdin.readline().strip().split())))

    # 초기값
    if 1<n:
        graph[0][1] += graph[1][0]
        graph[1][1] += graph[0][0]
    # 다음칸 부터 한칸 대각선 할지 두칸이동 대각선 값을 할지 체크
        for i in range(2, n):
            graph[0][i] += max(graph[1][i - 1], graph[1][i - 2])
            graph[1][i] += max(graph[0][i - 1], graph[0][i - 2])

    # print(print)
    print(max(graph[1][-1], graph[0][-1]))
