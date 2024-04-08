function solution(arr) {
    var answer = 1;
    
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if(arr[i][j] !== arr[j][i]){
                answer = 0;
                break;
            }
        }
    }
    return answer;
}