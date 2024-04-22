function solution(absolutes, signs) {
    var answer = 0;
    let result = [];
    for(let i=0; i<absolutes.length; i++){
        if (signs[i]){
            result.push(absolutes[i]);
        } else {
            result.push(-absolutes[i]);
        }
        answer += result[i];
    }
    
    return answer;
}