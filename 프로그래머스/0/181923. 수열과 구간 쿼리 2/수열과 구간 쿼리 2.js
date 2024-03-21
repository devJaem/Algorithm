function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i<queries.length; i++){
        var [s, e, k] = queries[i];
        var arr2 = arr.slice(s, e+1);
        var arr3 = arr2.filter(num => num>k);
        
        if(arr3.length ===0){
            answer.push(-1);
        }else {
            const minVal = Math.min(...arr3);
            answer.push(minVal);
        }
    }
    return answer;
}