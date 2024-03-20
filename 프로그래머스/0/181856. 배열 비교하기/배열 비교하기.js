function solution(arr1, arr2) {
    var answer = 0;
    var result1 = 0;
    var result2 = 0;
    if(arr1.length>arr2.length){
        answer = 1;
    }else if(arr1.length<arr2.length){
        answer = -1;
    }else if(arr1.length=arr2.length){
        for(var i=0; i<arr1.length; i++){
           result1 += arr1[i]; 
        }
        for(var j=0; j<arr2.length; j++){
            result2 += arr2[j];
        }
        if(result1 > result2){
            answer = 1;
        }else if(result2>result1){
            answer = -1;
        }else {
            answer = 0;
        }
       
    }else{
        answer=0;
    }
    return answer;
}