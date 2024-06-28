function solution(k, d) {
    var answer = 0;

    for (var x = 0; x <= d; x += k) {
        var maxY = Math.floor(Math.sqrt(d * d - x * x));
        answer += Math.floor(maxY / k) + 1;
    }

    return answer;
}
