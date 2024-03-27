function solution(arr, query) {
    var answer = [...arr]
    
    for(var i=0; i<query.length; i++){
        if(i%2===0){
            answer.splice(query[i]+1);
        }else{
            answer.splice(0,query[i]);
        }
    }
    
    return answer;
}