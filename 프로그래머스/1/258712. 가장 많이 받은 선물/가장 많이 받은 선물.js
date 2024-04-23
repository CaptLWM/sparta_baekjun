function solution(friends, gifts) {
    var answer = 0;
    const result = []
    const nextMonth = new Array(friends.length).fill(0);
    // const arr = new Array(n).fill(0);
    friends.forEach((v,i)=>{
        let arr = new Array(friends.length).fill(0)
        result[i]=arr
        }
   )
    // 선물 주고받은 기록
    // 선물 준 수, 받은 수, 선물지수 입력할 객체 빈 객체 생성    
    const friends_list = new Array(friends.length)
    friends.forEach((v,i)=>friends_list[i]=[0,0,0])
    gifts.forEach((v, i)=>{
        a = v.split(' ')[0]
        b = v.split(' ')[1]
        result[friends.indexOf(a)][friends.indexOf(b)] +=1
        
        friends_list[friends.indexOf(a)][0] += 1
        friends_list[friends.indexOf(b)][1] += 1
    })
    
    // 선물 지수 계산
    for (let i = 0; i<friends_list.length;i++) {
        friends_list[i][2] = friends_list[i][0] - friends_list[i][1]
    }
    
    const score = friends_list.map((v)=>v[2])
    console.log(result)
    console.log(score)
    
    for (let i=0; i<friends.length;i++){
        for (let j=i+1; j<friends.length; j++) {
            if (i===j) continue;
            if (result[i][j] > result[j][i]) nextMonth[i]++;
            if (result[i][j] < result[j][i]) nextMonth[j]++;
            if (result[i][j] === result[j][i]) {
                if (score[i] > score[j]) nextMonth[i]++
                if (score[i] < score[j]) nextMonth[j]++
                
            }
        }
    }
    
    answer = Math.max(...nextMonth)
    
//     // 다음 달 받을 선물 계산
//     for (let i=0; i<len; i++) {
//         for (let j=i+1; j<len; j++) {
//             if (i===j) continue;
//             if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
//             if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
//             if (giftTable[i][j] === giftTable[j][i]) {
//                 if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
//                 if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
//             }
//         }
//     }
    
    return answer;
}