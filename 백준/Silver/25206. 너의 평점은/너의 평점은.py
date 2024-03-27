import sys

# sys.stdin = open('input.txt')

test = sys.stdin.readlines() # 과목 분류
sub_result=[]

for a in test:
    sub_result.append(a.strip().split(' '))

total_grade = 0 # 총 전공 학점
test_result = 0 # 시험 결과
p_count = 0 # p 과목 수

# 성적
dic = {'A+':4.5, 'A0':4.0, 'B+':3.5, 'B0':3.0, 'C+':2.5,'C0':2.0, 'D+':1.5, 'D0':1.0, 'F':0}

# 총 전공학점
for sub in sub_result:
    if sub[2] == 'P':
        p_count +=1
        continue
#    print(sub[1])
    total_grade += float(sub[1])
#    print(sub[2])
    test_result += float(dic[sub[2]])*float(sub[1])
    
# 최종 성적
# print(test_result, total_grade, len(sub_result), p_count)
print(test_result/total_grade)
# print(sub_result)