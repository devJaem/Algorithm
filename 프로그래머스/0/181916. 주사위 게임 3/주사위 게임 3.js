function solution(a, b, c, d) {
    var answer = 0;
    
    if (a===b && a===c && a===d){
        answer= 1111*a;
        }else if(a===b && a===c){
            answer = (10*a+d)**2;
        }else if(a===b && a===d){
            answer = (10*a+c)**2;
        }else if(a===c && a===d){
            answer = (10*a+b)**2;
        }else if(b===c && b===d){
            answer = (10*b+a)**2;
        }else if(a===b && c===d){
            answer = (a+c) * Math.abs(a-c);
        }else if(a===c && b===d){
            answer = (a+b) * Math.abs(a-b);
        }else if(a===d && b===c){
            answer = (a+b) * Math.abs(a-b);
        }else if(a === b){
            answer = c * d;
        }else if(a===c){
            answer = b * d;
        }else if(a===d){
            answer = b * c;
        }else if(b===c){
            answer = a * d;
        }else if(b===d){
            answer = a * c;
        }else if(c===d){
            answer = a * b;
        }else{
            answer = Math.min(a,b,c,d);
        }
    
    
    return answer;
}