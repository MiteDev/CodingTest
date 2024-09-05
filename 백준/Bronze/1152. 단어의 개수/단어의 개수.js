const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string[]} input 
 * @returns 
 */
const solution = (input) => input.split(' ').filter(el => el.length).length


console.log(solution(input));
