function solution(n, lost, reserve) {
    var answer = 0;
    let uniform = new Array(n).fill(1);
    
    for(let i=0; i<reserve.length; i++){
        uniform[reserve[i]-1]++;
    }
    
    for(let i=0; i<lost.length; i++){
        uniform[lost[i]-1]--;
    }
    
    for(let i=0; i<n; i++){
        if(uniform[i] === 0 && i>0 && uniform[i-1] >1){
            uniform[i]++;
            uniform[i-1]--;
        }else if(uniform[i] ===0 && i<n - 1 && uniform[i+1]>1){
            uniform[i]++;
            uniform[i+1]--;
        }
    }
    
    for(let i=0; i<n; i++){
        if(uniform[i]>0){
            answer++
        }
    }
    return answer;
}