import sys

# sys.stdin = open('input.txt')

after = sys.stdin.readline().strip().split(':')


# 온전히 다 채워져 있을때
if len(after) == 8:
    for i in range(len(after)):
        after[i] = '0'*(4-len(after[i])) + after[i]
else:
    if after[-1]=='':
        after = after[:-1]
        for i in range(8 - len(after)):
            after.append('')
        for i in range(len(after)):
            after[i] = '0' * (4 - len(after[i])) + after[i]

    elif after[0] == '':
        after = after[1:]
        for i in range(8 - len(after)):
            after.insert(0, '')
        for i in range(len(after)):
            after[i] = '0' * (4 - len(after[i])) + after[i]

    else:
        for i in range(8-len(after)):
            after.insert(after.index('')+i,'')
        for i in range(len(after)):
            after[i] = '0' * (4 - len(after[i])) + after[i]
# print(after)
print(':'.join(after))


