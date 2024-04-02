function solution(myStr) {
    var answer = myStr.split(/a|b|c/).filter(str => str !== "");
    
    return answer.length > 0 ? answer : ["EMPTY"];
}
