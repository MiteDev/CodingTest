function solution(scores) {
    let answer = 1;
    const wanho = scores[0];
    const wanho_score = wanho[0] + wanho[1];
    let maxScore = 0;
    
    scores
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    console.log(scores);
    for(const score of scores) {
        const [a, b] = score;
        if(b < maxScore) {
            if(score === wanho) return -1;
        } else {
            maxScore = Math.max(maxScore, b);
            if(a + b > wanho_score) answer++;
        }
    }
    

    return answer;
}