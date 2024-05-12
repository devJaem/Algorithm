function solution(survey, choices) {
    let answer = '';
    const MBTI = {};
    const type = ["RT", "CF", "JM", "AN"];
    
    type.forEach( (type) => 
        type.split('').forEach((char) => MBTI[char] = 0)
    )
    
    choices.forEach( (choice, index) => {
        const [disagree, agree] = survey[index];
        
        MBTI[choice > 4 ? agree: disagree] += Math.abs(choice - 4);
    });
    
    return type.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}