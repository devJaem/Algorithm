function solution(sizes) {
    var answer = 0;
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach( ([a, b]) =>{
        maxWidth = Math.max(maxWidth, Math.max(a,b));
        maxHeight = Math.max(maxHeight, Math.min(a,b));
    });
    answer = maxWidth * maxHeight
    return answer;
}