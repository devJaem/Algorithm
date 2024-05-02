function solution(s) {
    var answer = true;
    let arr = s.split('');

    if(s.length !==4 && s.length !==6){
        return false;
    }
    for(let i =0; i<arr.length; i++){
        if(isNaN(arr[i])){
            return false;
        }    
    }
    return answer;
}