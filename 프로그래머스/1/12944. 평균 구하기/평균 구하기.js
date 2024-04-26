function solution(arr) {
    var answer = 0;
    let result = 0
    for(let i=0; i<arr.length; i++){
        answer +=arr[i]
    }
    result = answer/arr.length;
    
    return result
}