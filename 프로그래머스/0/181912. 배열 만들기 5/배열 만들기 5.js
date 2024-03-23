function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(var i=0; i<intStrs.length; i++){
       var num = parseInt(intStrs[i].substring(s,s+l));
        if(!isNaN(num) && num>k){
            answer.push(num);
        }
    }
    
    
    return answer;
}