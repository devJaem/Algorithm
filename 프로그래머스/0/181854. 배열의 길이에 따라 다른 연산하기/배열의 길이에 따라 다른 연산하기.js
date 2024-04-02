function solution(arr, n) {
    var answer = [];
    
    if (arr.length % 2 === 1) {
        for (var i = 0; i < arr.length; i += 2) {
            answer[i] = arr[i] + n;
            if (i + 1 < arr.length) {
                answer[i + 1] = arr[i + 1];
            }
        }
    } else {
        for (var j = 0; j < arr.length; j++) {
            answer[j] = arr[j];
            if (j % 2 === 1) {
                answer[j] += n;
            }
        }
    }
    
    return answer;
}
