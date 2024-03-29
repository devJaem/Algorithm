function solution(num_list) {
    var answer = 0;

   
    for(var num of num_list){
        while (num>1){
            if(num %2===0){
                num /=2;
            }else{
                num = (num-1) /2;
            }
            answer++;
        }
    }
    return answer;
}