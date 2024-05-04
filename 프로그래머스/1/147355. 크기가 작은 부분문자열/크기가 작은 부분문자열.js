function solution(t, p) {
    let answer = 0;
    const intP = parseInt(p, 10);
    
    for(let i = 0; i<=t.length - p.length; i++){
        const substring = t.slice(i, i+p.length);
        const intSubstring = parseInt(substring, 10);
        
        if(intSubstring <= intP){
            answer++;
        }
    }
    
    return answer;
}