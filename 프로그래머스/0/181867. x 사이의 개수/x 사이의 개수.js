function solution(myString) {
    var answer = [];
    var result = [];
    
    result = myString.split('x');
    
    for(var i=0; i<result.length; i++){
        answer.push(result[i].length);
    }
     
    
    return answer;
}