function solution(babbling) {
    let answer = 0;
    const jo = ["aya", "ye", "woo", "ma"];
    
    for(let i=0; i<babbling.length; i++){
        let babble = babbling[i];
        
        for(let j=0; j<jo.length; j++){
            if(babble.includes(jo[j].repeat(2))){
            break;
        }
        babble = babble.split(jo[j]).join(" ");
        }
        if(babble.split(" ").join("").length === 0){
            answer++;
        }
    }
    return answer;
}