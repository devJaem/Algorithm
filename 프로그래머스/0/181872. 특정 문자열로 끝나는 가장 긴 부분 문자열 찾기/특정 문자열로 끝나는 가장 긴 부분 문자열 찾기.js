function solution(myString, pat) {
    var answer = '';
    var result = myString.lastIndexOf(pat);
    answer = myString.slice(0,result + pat.length);
    
    return answer;
}