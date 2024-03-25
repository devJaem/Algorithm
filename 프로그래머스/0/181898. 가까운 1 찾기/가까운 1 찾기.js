function solution(arr, idx) {
    
    for (var i = idx; i<arr.length; i++){
        if(arr[i]){
            return i;
        }
    }
    return -1;
}