function solution(arr, intervals) {
    var answer = [];
    var [start1, end1] = intervals[0];
    var [start2, end2] = intervals[1];
    
    answer = arr.slice(start1,end1 +1).concat(arr.slice(start2, end2 +1));
    
    return answer;
}