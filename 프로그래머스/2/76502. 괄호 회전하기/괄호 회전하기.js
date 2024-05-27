function solution(s) {
    let answer = 0;
    let sLen = s.length;    
    let flag = true;
    
    if(sLen % 2 === 1){
        return answer;
    }
    
    for(let i=0; i<sLen; i++){
        let str = s.slice(i) + s.slice(0,i);
        let stack =[];
        flag = true;
        
        for(let n of str){
            if (n === "(" || n === "{" || n === "[") {
                stack.push(n);
            }else{
                const item = stack.pop();
                if(n === ")" && item === "(") continue;
                if(n === "}" && item === "{") continue;
                if(n === "]" && item === "[") continue;
                flag = false;
                break;
            }
        }
        if(flag) answer++;
    }   
    return answer;
}