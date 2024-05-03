function solution(n, m) {
    var answer = [];
 
    function gcd(x, y){
        while (y !==0){
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    const gcdValue = gcd(n, m);
    const lcmValue = Math.abs(n * m) / gcdValue
    
    answer.push(gcdValue);
    answer.push(lcmValue);
    
    
    return answer;
}