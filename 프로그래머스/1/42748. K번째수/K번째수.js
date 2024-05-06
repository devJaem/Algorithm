function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        let start = commands[i][0] -1;
        let end = commands[i][1];
        let arr = array.slice(start, end);
        
        arr.sort((a,b) => a-b);
        
        let k = commands[i][2] -1;
        answer.push(arr[k]);
    }
    

    return answer;
}