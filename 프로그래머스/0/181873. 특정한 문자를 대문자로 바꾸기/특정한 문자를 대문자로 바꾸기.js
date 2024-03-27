function solution(my_string, alp) {
    var answer = '';
    var arr = my_string.split("");
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] === alp){
            arr[i] = arr[i].toUpperCase();
        }
        answer += arr[i]
    }
    
    return answer;
}