function solution(binomial) {
    var answer = 0;
  
    var [a, op, b] =binomial.split(' ');
    
    if(op === '+'){
        answer = parseInt(a)+parseInt(b);
    }else if(op === '-'){
        answer = a-b;
    }else if(op === '*'){
        answer = a*b;
    }else if(op === '/'){
        answer = a/b;
    }
    return answer;
}