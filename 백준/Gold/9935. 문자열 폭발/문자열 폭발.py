import sys
# from collections import *
# sys.stdin = open('input2.txt')

first_string = list(map(str,sys.stdin.readline().strip()))
bomb = list(map(str,sys.stdin.readline().strip()))

check_bomb=[]
cnt = 0
while cnt < len(first_string):
    check_bomb.append(first_string[cnt])
    # print('AAAAA',check_bomb[len(check_bomb)-len(bomb):] )
    if check_bomb[len(check_bomb)-len(bomb):] == bomb:
        # print('A')
        del check_bomb[len(check_bomb)-len(bomb):]
    # print(check_bomb)
    # if first_string[cnt] in bomb:
    #     print(first_string[cnt])
    #     if first_string[cnt] not in check_bomb:
    #         check_bomb.append(first_string[cnt])
    #         first_string[cnt]=''
    #         check_bomb = []
    # print(first_string)
    cnt += 1

if len(check_bomb) > 0:
    print(''.join(check_bomb))
else:
    print('FRULA')
