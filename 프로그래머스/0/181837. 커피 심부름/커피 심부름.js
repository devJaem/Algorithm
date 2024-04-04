function solution(order) {
    var answer = 0;
    
    for(var ord of order){
        if(ord.includes("americano")){
            if(ord.startsWith("ice")){
                answer += 4500;
            } else{
                answer += 4500;
            }
        } else if(ord.includes("cafelatte")){
            if(ord.startsWith("ice")){
                answer += 5000;
            }else {
                answer += 5000;
            }
        } else if(ord === "anything"){
            answer += 4500;
        }
    }
    return answer;
}