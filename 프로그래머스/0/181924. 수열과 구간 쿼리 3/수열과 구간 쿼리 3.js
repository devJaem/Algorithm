function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i<queries.length; i++){
        var arr2 = arr[(queries[i][0])];
        arr[(queries[i][0])] = arr[(queries[i][1])];
        arr[(queries[i][1])] = arr2;
        
        answer = arr;
    }
    return answer;
}