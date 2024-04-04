function solution(myString) {
    var answer = '';
    
    var result = myString.split('').map(char =>{
        return char < 'l' ? 'l' : char;
    });
    
    answer = result.join('');
    return answer;
}