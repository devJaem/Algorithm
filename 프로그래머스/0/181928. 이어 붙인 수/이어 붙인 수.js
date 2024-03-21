function solution(num_list) {
    var answer = 0;
    var oddSum = '';
    var evenSum = '';
    
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2 === 0){
            evenSum +=num_list[i];
        }else{
            oddSum +=num_list[i];
        }
    }
    
    answer = parseInt(evenSum)+parseInt(oddSum);
    
    
    return answer;
}