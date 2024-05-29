function solution(citations) {
    let answer = 0;
    let n = citations.length;
    citations.sort( (a, b) => b - a);
    
    for(let i=0; i<n; i++){
        if(i < citations[i]){
            answer++;
        }
    }
    return answer;
}