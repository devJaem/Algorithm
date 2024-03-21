function solution(code) {
    var answer = '';
    var mode = 0;
    
    for(let i in code){
        if(code[i] === '1'){
            mode = mode === 0 ? 1 : 0
        } 
        if(code[i] !== '1'){
            if(mode === 0 && i % 2 === 0){
                answer += code[i]
            } 

            if(mode === 1 && i % 2 !== 0){
                answer += code[i]
            }
        }  
    }
    return answer.length === 0 ? 'EMPTY' : answer;
}