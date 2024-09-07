const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [num, ...nums] = input.replace(/\r|\n/g, ' ')
        .split(' ')
        .filter(el => el)
        .map(el => Number(el));

    const max = Math.max(...nums);
    const min = Math.min(...nums);

    return max * min;
}

console.log(solution(input));
