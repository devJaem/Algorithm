function solution(my_string, queries) {
    var answer = my_string.split('');
    var arr = '';
    
    for(var i of queries){
        var num= i[1]-i[0];
        arr = answer.slice(i[0],i[1]+1).reverse();
        
        answer.splice(i[0], num+1);
        answer.splice(i[0],0,...arr)
    }
    
    return answer.join('');
}