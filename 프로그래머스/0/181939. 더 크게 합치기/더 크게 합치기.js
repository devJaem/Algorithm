function solution(a, b) {
    var answer = 0;
    var result1 = 0;
    var result2 = 0;
    
    result1 = parseInt(a.toString()+ b.toString());
    result2 = parseInt(b.toString()+ a.toString());
    
    if(result1>=result2){
        answer = result1;
    }else{
        answer = result2;
    }

    
    return answer;
}