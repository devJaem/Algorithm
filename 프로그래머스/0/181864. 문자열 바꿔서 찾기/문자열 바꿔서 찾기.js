function solution(myString, pat) {
    var answer = 0;
    var result = [];
    var finalResult = '';
    
    result = myString.split('')
    
    for(var i=0; i<result.length; i++){
        if(result[i] ==='A'){
            finalResult += 'B';
        }else if(result[i] === 'B'){
            finalResult += 'A';
        }
    }
    
    if(finalResult.includes(pat)){
        answer +=1;
    }
    
    
    return answer;
}