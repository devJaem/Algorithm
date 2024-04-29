function solution(n) {
    var answer = 0;
    
    answer = n.toString().split("").map(Number);
    // 숫자 반대로 나열하기에서 했던부분
    // 정수 > 문자열 > 문자배열 > 숫자배열
    
    answer.sort(function(a, b){
        return b - a;
    });
    // sort 함수 사용 내림차순 정렬하기 
    
    answer= parseInt(answer.join(""));
    // 정렬된 배열을 다시 문자열로 결합후, 정수변환
    
    return answer;
}