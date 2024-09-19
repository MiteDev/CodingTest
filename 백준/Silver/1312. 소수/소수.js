const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [a, b ,n] = input.replace(/\r/g, '').split(' ').map(el => Number(el));
    let remain = a % b;
    let result = 0;
    for(let i = 0; i < n; i++) {
        remain *= 10;
        const quotient = Math.floor(remain / b);
        remain %= b;
        result = quotient;
    }
  
    return result;
}

console.log(solution(input));
