function solution(k, tangerine) {
    let answer = 0;
    const count = {};
    
    tangerine.forEach((t) => (count[t] = (count[t] || 0) + 1));
                      
    const arr = Object.values(count).sort((a, b) => b - a);
    
    for(const t of arr){
        answer++;
        if(k > t) k -= t;
        else break;
    }

    return answer;
}