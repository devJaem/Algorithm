function solution(arr, queries) {
    var answer = [];
    
    for(var i = 0; i<queries.length; i++){
        var [s, e, k] = queries[i];
        
        for(var j=s; j <= e; j++){
            if(j % k ===0){
                arr[j] += 1;
            }
        }
    }
    
    answer = arr;
    
    return answer;
}