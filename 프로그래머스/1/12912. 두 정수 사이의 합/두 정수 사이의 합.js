function solution(a, b) {
    var answer = 0;
    var start = Math.min(a, b);
    var end = Math.max(a, b);
    // b가 작을수도 있어서 급하게 추가함..
    
    for (let i=start; i<=end; i++){
        answer +=i;
    }
    return answer;
}