function solution(number, limit, power) {
    var answer = 0;
    let count = new Array(number + 1).fill(0);
    
    for(let i=1; i<= number; i++){
        for(let j=i; j<=number; j+=i){
            count[j]++;
        }
    }
    
    for(let i = 1; i<=number; i++){
        if(count[i] > limit){
            answer += power;
        }else{
            answer += count[i];
        }
    }
    return answer;
}