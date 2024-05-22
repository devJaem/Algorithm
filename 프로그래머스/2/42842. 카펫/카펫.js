function solution(brown, yellow) {
    let answer = [];
    let total = brown+yellow;
    
    for(let hight=3; hight<= brown; hight++ ){
        if(total % hight ===0){
            let width = total/hight
        
            if((hight-2) * (width-2) === yellow){
                return [width, hight]
            }
        }
    }
    return answer;
}