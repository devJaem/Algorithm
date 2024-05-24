function solution(arr) {
    let answer = 1;
    let arrLen = arr.length;
    
    const gcd =(a, b) =>{
        while(b>0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    const lcm = (a, b) => {
        return (a*b)/gcd(a, b);
    };
    
    for(let i=0; i<arrLen; i++){
        answer = lcm(answer, arr[i]);
    }

    return answer;
}