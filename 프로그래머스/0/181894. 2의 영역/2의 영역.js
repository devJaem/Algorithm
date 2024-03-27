function solution(arr) {
    var answer = [];
    var startIdx = arr.indexOf(2);
    var endIdx = arr.lastIndexOf(2);

    answer = startIdx + endIdx< 1? [-1] : arr.slice(startIdx, endIdx +1);
    return answer;
}