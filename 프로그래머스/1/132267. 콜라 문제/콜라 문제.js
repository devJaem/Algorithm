function solution(a, b, n) {
    var answer = 0;
    let result = 0;
    
    while(n>=a){
        result = Math.floor(n/a);
        answer += result * b;
        n = (n%a) + (result * b);
    }
    return answer;
}