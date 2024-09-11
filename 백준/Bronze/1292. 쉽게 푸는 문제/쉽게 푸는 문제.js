const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [first, second] = input.replace(/\r/g, '').split(' ').map(num => Number(num));

    const arr = [];

    for(let i = 1; arr.length <= second; i++) {
        for(let j = 1; j <= i; j++) {
            arr.push(i);
        }
    }

    const arr_answer = arr.slice(first - 1, second);
    const answer = arr_answer.reduce((acc, cur) => cur + acc, 0);
    return answer;
}

console.log(solution(input));
