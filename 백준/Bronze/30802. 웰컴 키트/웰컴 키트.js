const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [entrant, size_str, shirt_pen] = input.replace(/\r/g, '').split('\n');
    const n = Number(entrant);
    const size = size_str.split(' ').map(Number);
    const [t, p] = shirt_pen.split(' ').map(Number);

    const result = size.reduce((acc ,cur) => acc += Math.ceil(cur / t), 0);

    const bundle_p = Math.floor(n / p);
    const ea = n % p;

    const answer = `${result}\n${bundle_p} ${ea}`;

    return answer;
}

console.log(solution(input));
