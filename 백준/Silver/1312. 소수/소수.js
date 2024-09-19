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
    const ac = [];
    for(let i = 0; i < n; i++) {
        if(remain) {
            remain *= 10;
        }
        const quotient = Math.floor(remain / b);
        remain %= b;
        ac.push(quotient);
    }
  
    const result = ac.at(-1);
    return result;
}

console.log(solution(input));
