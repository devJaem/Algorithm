function solution(X, Y) {
    var answer = '';
    let lenX = X.split("");
    let lenY = Y.split("");
    
    let countX = new Array(10).fill(0);
    let countY = new Array(10).fill(0);
    
    for(let count of lenX){
        countX[Number(count)]++;
    }
    for(let count of lenY){
        countY[Number(count)]++;
    }
    for (let i = 9; i >= 0; i--) {
        let commonCount = Math.min(countX[i], countY[i]);
        answer += i.toString().repeat(commonCount);
    }
  
    
    if (answer === '') {
        return "-1";
    }

    if (answer.match(/^0+$/)) {
        return "0";
    }
    
    return answer;
}