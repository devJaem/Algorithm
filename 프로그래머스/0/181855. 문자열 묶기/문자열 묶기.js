function solution(strArr) {
    var answer = 0;
    var result =[];
    strArr.forEach((x,i) => {
        result[x.length] = result[x.length]+1 || 1
    })
    
    answer = Math.max(...Object.values(result))
    return answer;
}