function solution(want, number, discount) {
    let result = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let currentPeriod = discount.slice(i, i + 10);
        let match = true;
        
        for (let j = 0; j < want.length; j++) {
            let item = want[j];
            let count = currentPeriod.filter(product => product === item).length;
            if (count !== number[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            result++;
        }
    }
    return result;
}
