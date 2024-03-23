function solution(my_strings, parts) {
    var answer = '';
    
    for(var i = 0; i< my_strings.length; i++){
        var str = my_strings[i];
        var part = parts[i];
        
        var start = part[0];
        var end = part[1];
        
        var sub = str.substring(start, end+1);
        answer+= sub;
    }
    return answer;
}