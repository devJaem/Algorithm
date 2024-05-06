function solution(a, b) {
    var answer = '';
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const days= [31,29,31,30,31,30,31,31,30,31,30,31];
    let sum = 5;
    
    //입력한 날짜 이전의 일수
    for(let i=0; i<a-1; i++){
        sum += days[i]
    }
    //입력된 달의 일수
    sum += b-1;
    //7로 나눈 나머지를 이용해 요일 
    answer += day[sum % 7];
    
    return answer;
}