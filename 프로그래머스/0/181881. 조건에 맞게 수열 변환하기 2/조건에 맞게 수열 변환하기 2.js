function solution(arr) {
    var answer = 0;
    var prevArr = arr;
    
    while(true){
        const changeCurArr = prevArr.map(a => {
            if(a >= 50 && a%2 ===0) return a/2
            if(a <50 && a%2 ===1) return a*2+1
            return a;
        })
        
        const isAllSame = prevArr.every((a,i) =>a === changeCurArr[i])
        if(isAllSame) break
        answer +=1
        
        prevArr = changeCurArr
    }
    
    return answer;
}