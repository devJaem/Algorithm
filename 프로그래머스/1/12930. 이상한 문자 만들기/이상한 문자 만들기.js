function solution(s) {
    var answer = '';
    let arr1 = s.split(" ");
    
    let result = arr1.map(word => {
        let result ="";
        for(let i=0; i<word.length; i++){
            if(i % 2 ===0){
                result += word[i].toUpperCase();
            } else {
                result += word[i].toLowerCase();
            }
        }
        return result;
    });
    
    return result.join(" ");
}