function solution(k, score) {
    const answer = []
    const result = []
    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) {
            answer.push(score[i])
        }
        if(score[i]>Math.min(...answer)) {
            answer.pop()
            answer.push(score[i])
            answer.sort((a,b) => b-a)
        }
        result.push(answer.at(-1))
    }
    return result
}