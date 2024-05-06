function solution(s) {
    let result = {};
    var answer = [];
    
    for(let i=0; i<s.length; i++){
        const char = s[i];
        if(result.hasOwnProperty(char)){
            answer.push(i-result[char]);
        }else {
            answer.push(-1);
        }
        result[char] = i;
    }
    
    return answer;
}