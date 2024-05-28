function solution(elements) {
    let sumSet = new Set();
    const eLen = elements.length;
    
    
    for(let i=0; i<eLen; i++){
        let sum = 0;
        for (let j=0; j<eLen; j++){
            if(j===0){
                for(let k=0; k<i; k++){
                    sum += elements[k];
                }
            } else {
                sum -= elements[j-1];
                sum += elements[(j+i-1) %eLen];
            }
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}