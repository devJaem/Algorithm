function solution(lottos, win_nums) {
    var answer = [];
    let winCount = 0;
    let lostCount = 0;
    
    function solution1(count){
        switch(count){
            case 6:
                return 1;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            default:
                return 6;
        }
    }
    
    lottos.forEach(lotto => {
       if(lotto === 0){
           lostCount++;
       } else if ( win_nums.includes(lotto)){
           winCount++;
       }
    });
    
    let high =(winCount + lostCount);
    let low = (winCount);
    
    answer.push(solution1(high));
    answer.push(solution1(low));
        
    return answer;
}