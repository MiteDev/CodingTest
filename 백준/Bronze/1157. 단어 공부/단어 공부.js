const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const data = input.toLowerCase().split('').sort().filter(el => el !== ' ');
    const target = [...new Set(data)];
    const arr = target.map(el => data.slice(data.indexOf(el), data.lastIndexOf(el)).length);
    const [maxIndex, maxNum] = [arr.indexOf(Math.max(...arr)), Math.max(...arr)];
    const result = arr.indexOf(maxNum) !== arr.lastIndexOf(maxNum) ? '?' : target[maxIndex].toUpperCase();
    return result;
}

console.log(solution(input));
