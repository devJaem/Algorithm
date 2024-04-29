function solution(x) {
    var answer = true;
    var arr = [];
    var sum = 0;
    
    arr = x.toString().split("").map(Number);
    
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    
    if(x % sum !== 0){
        answer = false;
    }
    
    return answer;
}