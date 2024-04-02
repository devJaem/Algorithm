function solution(arr) {
    var answer = arr;
    var length = arr.length;
    var result = 1;

    while(result < length){
        result *=2;
    }
    
    for(var i=0; i<result-length; i++){
        answer.push(0);
    }
    
    return answer;
}