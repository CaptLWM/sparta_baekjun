import sys

# sys.stdin=open('input2.txt')

# n : 도시의 개수
n = int(sys.stdin.readline().strip())

# 도로의 길이
road_list=list(map(int,sys.stdin.readline().strip().split()))

# 기름값
price_list=list(map(int,sys.stdin.readline().strip().split()))

# 주유소 가격이 가장 싼곳부터는 뒤에 도시까지 갈 수 있는 양만큼 넣으면 됨
# 마지막 도시는 가격 제외
def row_cost(road_list, price_list):
    cost = 0
    temp_list = price_list
    minPrice = temp_list[0] # 초기값 설정

    for i in range(1, len(temp_list)):
        # print('@@@', minPrice, temp_list[i])
        minPrice = min(minPrice, temp_list[i])
        temp_list[i] = minPrice
    # print(temp_list)
    result = 0
    for i in range(len(road_list)):
        result += road_list[i]*price_list[i]
    return result

print(row_cost(road_list, price_list))
