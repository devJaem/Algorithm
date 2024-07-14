function solution(progresses, speeds) {
    let answer = [];
    let days = [];
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    let maxDay = days[0];
    let count = 1;
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = days[i];
        }
    }
    answer.push(count);
    return answer;
}
