function solution(my_string, s, e) {
    var answer = '';
    var substr = my_string.substring(s, e+1).split('');
    
    substr.reverse();
    
    answer = my_string.substring(0,s) + substr.join('') + my_string.substring(e + 1);
    
    return answer;
}