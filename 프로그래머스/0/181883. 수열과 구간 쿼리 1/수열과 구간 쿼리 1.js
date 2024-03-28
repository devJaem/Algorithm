function solution(arr, queries) {
    var answer = [];
 
    for(var i=0; i<queries.length; i++){
        var [start,end] = queries[i];
        for(var j= start; j<=end; j++){
            arr[j]++;
        }
    }
    
    answer = arr;
    return answer;
}