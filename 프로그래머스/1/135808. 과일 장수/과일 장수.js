function solution(k, m, score) {
    var answer = 0;
    var sortScore = score.sort((a, b) => b - a);
    
    for(let i=0; i<score.length; i+=m){
        if(i + m <= score.length){
            answer += sortScore[i + m -1] * m
        }
    }
    return answer;
}