function solution(arr, k) {
    var answer = [];
    
    if(k % 2 ===1){
        for(var i=0; i<arr.length; i++){
            answer.push(arr[i]*k);
        }
    }else{
        for(var j=0; j<arr.length; j++){
            answer.push(arr[j]+k);
        }
    }
    return answer;
}