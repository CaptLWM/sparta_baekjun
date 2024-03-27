import sys

# sys.stdin = open('input.txt')
    
month, day = map(int, sys.stdin.readline().split(' ')) # 테스트 케이스 수

Total_Date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day_of_week = ['SUN','MON','TUE','WED','THU','FRI','SAT'] # 요일 배열

for x in range(int(month)-1):
    day += Total_Date[x]
print(day_of_week[day%7])