const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [nums, ...castle] = input.replace(/\r/g, '').split('\n');
    const [row, col] = nums.split(' ').map(el => Number(el));
    const position = castle.map((line) => line.split('').map((piece, idx) => piece === 'X' ? idx : undefined).filter(el => el !== undefined));
    const empty_line = position.map((el, idx) => !el.length ? idx : undefined).filter(el => el !== undefined);
    const pos_flat = position.flat().filter((el, idx, arr) => arr.indexOf(el) === idx);

    const answer = empty_line.length > col - pos_flat.length ? empty_line.length : col - pos_flat.length

    return answer;
}

console.log(solution(input));
