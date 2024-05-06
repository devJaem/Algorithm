function solution(food) {
    var answer = '';
    let used = [];
    
    for(let i=1; i<food.length; i++){
        used[i] = Math.floor(food[i]/2);
    }
    
    for(let i=1; i<food.length; i++){
        answer += i.toString().repeat(used[i]);
    }
    
    answer +='0';
    
    for(let i=food.length -1 ; i>0; i--){
        answer += i.toString().repeat(used[i]);
    } 
    
    return answer;
}