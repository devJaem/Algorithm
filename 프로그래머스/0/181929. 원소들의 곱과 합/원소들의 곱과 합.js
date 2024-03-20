function solution(num_list) {
    var answer = 0;
    var sum = 0;
    var product = 1;
    
    for(var i=0; i<num_list.length; i++){
        sum += num_list[i];
        product *=num_list[i];
    }
    
    var sum_result = sum**2;
    
    if(product < sum_result){
        answer = 1;
    }else {
        answer = 0;
    }
    
    return answer;
}