function solution(picture, k) {
    var answer = [];
    
    for(var i=0; i<picture.length; i++){
        var row = picture[i];
        var newRow = '';
        for(var j=0; j<row.length; j++){
            var pixel = row[j];
            newRow += pixel.repeat(k);
        }
        for(var m=0; m<k; m++){
            answer.push(newRow);
        }
    }
    return answer;
}