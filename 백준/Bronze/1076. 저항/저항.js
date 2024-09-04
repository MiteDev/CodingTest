const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim().replace(/\r/g, '').split('\n');


/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [f_key, s_key, pow_key] = input;
    const resistance = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

    const f = resistance.indexOf(f_key);
    const s = resistance.indexOf(s_key);
    const pow = resistance.indexOf(pow_key);

    const multiplicand = Number(`${f}${s}`);
    const multiplier = Math.pow(10, pow);

    const result = multiplicand * multiplier;

    return result;
}

console.log(solution(input));