function solution(num_list, n) {
    var answer = [];
    var first = num_list.slice(n);
    var second = num_list.slice(0,n);
    
    answer = first.concat(second);
    
    return answer;
}