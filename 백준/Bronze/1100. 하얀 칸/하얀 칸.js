const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim().replace(/\r/g, '').split('\n');

/**
 * @param {string[]} input 
 * @returns 
 */
const solution = (input) => {
    const line_odd = [0, 2, 4, 6];
    const line_even = [1, 3, 5, 7];
    
    const result = input.flatMap((line, i) =>
        line_odd.includes(i) ? 
            line_odd.filter(el => line[el] === 'F') : line_even.filter(el => line[el] === 'F')
        ).length;

    return result;
}

console.log(solution(input));
