function solution(n, k) {
    let answer = 0;
    const kBaseNumber = n.toString(k);
    const candidates = kBaseNumber.split('0');

    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    for (const candidate of candidates) {
        if (candidate && isPrime(parseInt(candidate, 10))) {
            answer++;
        }
    }
    return answer;
}