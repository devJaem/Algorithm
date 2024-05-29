function solution(citations) {
    let answer = 0;
    let n = citations.length;
    citations.sort( (a, b) => b - a);
    
    for(let i=0; i<n; i++){
        if(citations[i] >= i + 1){
            answer = i + 1;
        }else {
            break;
        }
    }
    return answer;
}