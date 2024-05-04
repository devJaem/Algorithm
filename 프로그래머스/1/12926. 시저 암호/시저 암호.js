function solution(s, n) {
    var answer = '';
    let arr = s.split("");
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === " "){
            answer += arr[i]
        } else {
            let char = arr[i].charCodeAt(0);
            
            if(char >= 'a'.charCodeAt(0) && char <='z'.charCodeAt(0)){
                char = ((char - 97 + n) % 26) + 97;
            }else if(char >= 'A'.charCodeAt(0) && char <='Z'.charCodeAt(0)){
                char = ((char -65 + n) %26 ) + 65;
            }
            answer += String.fromCharCode(char);
        }
        
    }
    return answer;
}