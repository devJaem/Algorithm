function solution(x, n) {
    var answer = [];
    var result = 0;
    for(let i=0; i<n; i++){
        result += x
        answer.push(result);
    }
    return answer;
}