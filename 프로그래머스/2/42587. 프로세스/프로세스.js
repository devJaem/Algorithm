function solution(priorities, location) {
    let answer = 0;
    
    const arr = priorities.map((process,index) => {
    return {process, index};
  });
    
    while(arr.length > 0){
        let current = arr.shift();
        
        if(arr.some(process => process.process > current.process)){
            arr.push(current);
        }else {
            answer++;
            
            if(current.index === location){
                break;
            }
        }
    }
    return answer;
}