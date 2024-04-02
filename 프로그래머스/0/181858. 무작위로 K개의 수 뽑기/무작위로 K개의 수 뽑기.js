function solution(arr, k) {
    var answer = [];
  
    for(var i=0; i<arr.length; i++){
        if(answer.indexOf(arr[i]) === -1){
            answer.push(arr[i]);
        }
        if(answer.length ===k){
            break;
        }
    }
    while(answer.length <k){
        answer.push(-1);
    }
    return answer;
}