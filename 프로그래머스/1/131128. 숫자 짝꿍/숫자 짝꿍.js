function solution(X, Y) {
    let result = "";
    
    const count_string = (str)=>{
        const dict = {}; // 객체 형태로 저장
        
        [...str].forEach((v)=>
            // 이미 키가 있으면 ++ 없으면 1
            dict[v] !== undefined ? dict[v]++ : (dict[v]=1)                 
        )
        
        return dict
    }
    let x_list=count_string(X)
    let y_list=count_string(Y)
    
    console.log(x_list, y_list)
    
    // 0~9 순회
    for (let i=9; i>=0 ;i--) {
        if(x_list[i] && y_list[i]) {
            // 반복해서 붙여줌
            result += String(i).repeat(Math.min(x_list[i], y_list[i]));
        }
    }
    // 같은 숫자가 0일때
    if (result[0] === "0") return "0";
    // 같은 숫자가 없을때
    return result.length > 0 ? result : "-1";

}