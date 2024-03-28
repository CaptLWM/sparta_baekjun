import sys

# sys.stdin = open('input.txt')

n = int(sys.stdin.readline().strip()) # 출입 기록의 수

people = {}

for x in range(n):
    name, state = sys.stdin.readline().strip().split()
    if state=='enter':
        people[name]=True
    else:
        del people[name]

sorted_people = '\n'.join(sorted(people, reverse=True))

print(sorted_people)