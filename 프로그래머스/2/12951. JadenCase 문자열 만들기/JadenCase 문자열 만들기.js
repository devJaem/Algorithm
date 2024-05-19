function solution(s) {
    var answer = '';
    let arr1 = s.split(' ');
    let arr2 = [];
    
    arr2= arr1.map((word) => {
        if(word.length === 0){
            return '';
        }    
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return arr2.join(' ');
}