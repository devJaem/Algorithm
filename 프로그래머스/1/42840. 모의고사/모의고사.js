function solution(answers) {
    var answer = [];
    let result = [0, 0, 0];
    
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i=0; i<answers.length; i++){
        if(person1[i % person1.length] === answers[i]){
            result[0]++;
        }
        if(person2[i%person2.length] === answers[i]){
            result[1]++;
        }
        if(person3[i%person3.length] === answers[i]){
            result[2]++;
        }
    }
    
    const max = Math.max(...result);
    for(let i=0; i<result.length; i++){
        if(result[i] === max){
            answer.push(i+1);
        }
    }
    return answer
}