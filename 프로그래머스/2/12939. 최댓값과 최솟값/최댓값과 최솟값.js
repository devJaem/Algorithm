function solution(s) {
    var answer = '';
    let arr= []; 
    let maxValue = '';
    let minValue = '';
    
    arr = s.split(" ").map(Number); 
    
    maxValue = Math.max(...arr);
    minValue = Math.min(...arr);
    
    answer = `${minValue} ${maxValue}`
    
    return answer;
}