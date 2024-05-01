function solution(numbers) {
    let answer = -1;
    let result = 0;
    const total = 45;
    
    for(let i=0; i<numbers.length; i++){
        result += numbers[i];
    }
    answer = total-result;
    
    return answer;
}