def solution(board, moves):
    # 사라진 인형의 개수를 구해야함
    answer = 0
    
    # 배열 뒤집어서 새로운 배열 생성
    board.reverse()
    new_board = [[] for _ in range(len(board))]
    for x in range(len(board)):
        for y in range(len(board[x])):
            # 마지막 인형만 뽑기위해 0 제거
            if board[x][y] != 0:
                new_board[y].append(board[x][y])
                
    result_stk=[]
    
    # 마지막 항목만 스택에 집어넣기
    for i in moves:
        if len(new_board[i-1])>0:
            toy = new_board[i-1].pop()
            result_stk.append(toy)
            if len(result_stk) > 1 and result_stk[-1] == result_stk[-2]:
                # 사라진 인형은 2개
                answer += 2
                # 2개가 같으면 지워지므로
                result_stk.pop()
                result_stk.pop()
                # result_stk.remove(result_stk[-1])
        else:
            break
    # 문자열 폭발 응용
    print(answer)
    return answer