const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const arr = input.replace(/\r/g, '').split('\n');
    // 마지막 요소는 의미없으니 제거
    arr.pop();
    const answer = arr.map(line => line === line.split('').reverse().join('') ? 'yes' : 'no').join('\n');
     
    return answer;
}

console.log(solution(input));
