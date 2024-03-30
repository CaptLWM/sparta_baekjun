import sys

# sys.stdin = open('input.txt')

# N 듣도 못한 사람, M 보도 못한 사람
N, M = sys.stdin.readline().strip().split()

unknown_listen = set(sys.stdin.readline().strip() for i in range(int(N)))
unknown_see = set(sys.stdin.readline().strip() for x in range(int(M))) # N+2 부터 M개

# print(unknown_see)

count=0
people_list=set()

for i in unknown_listen:
    if i in unknown_see:
        count += 1
        people_list.add(i)

people_list = sorted(people_list)
print(count)
for i in people_list:
    print(i)

