function solution(arr) {
    var answer = [];
    let minArr = Math.min(...arr);
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==minArr){
            answer.push(arr[i]);
        }
    }
    
    if(arr.length<=1){
        answer.push(-1);
    }
    
    return answer;
}