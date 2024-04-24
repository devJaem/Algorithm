function solution(numbers) {
    var answer = 0
    var result = 0
    
    for(let i=0; i<numbers.length; i++){
        result+=numbers[i];
    }
    answer = result/numbers.length;
    
    Math.round(answer *2) / 2;
    
    return answer;
}

// Math.round()
// 주어진 숫자를 가장 가까운 정수로 반올림 한다
// answer 값을 *2하면 소수 둘쨰자리가 첫번쨰로 이동 
// 다시 /2 해주면 원래 값 혹은, .5로 반올림 된 수치가 된다.