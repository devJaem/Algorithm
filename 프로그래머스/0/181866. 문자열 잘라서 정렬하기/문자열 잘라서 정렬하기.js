function solution(myString) {
    var answer = [];
    
    answer = myString.split('x').filter(Boolean);
    answer.sort();
    
    return answer;
}