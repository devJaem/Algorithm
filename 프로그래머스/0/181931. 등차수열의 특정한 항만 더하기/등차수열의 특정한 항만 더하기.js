function solution(a, d, included) {
    var answer = 0;
    var result = a;
    
    for(var i=0; i<included.length; i++){
        if(included[i]){
            answer += result
        }
        result +=d;
    }
    return answer;
}