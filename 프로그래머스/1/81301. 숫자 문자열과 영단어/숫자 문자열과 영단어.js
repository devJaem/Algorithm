function solution(s) {
    var answer = 0;
    var numMap = { zero: "0", one: "1", two: "2", three: "3",
        four: "4", five: "5", six: "6", seven: "7",
        eight: "8", nine: "9"}
    Object.keys(numMap).forEach(word => {
       const number = numMap[word];
        s= s.replace(new RegExp(word, "g"), number);
    });
    
    answer = parseInt(s);
    
    return answer
    
}