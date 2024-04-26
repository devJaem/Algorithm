function solution(n)
{
    var answer = 0;
    let numbers = String(n).split('');
    
    for(let number of numbers){
        answer += parseInt(number);
    }

    

    return answer;
}