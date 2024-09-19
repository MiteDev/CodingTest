const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const array = input.replace(/\r/g, '').split('\n');
    array.pop();

    const result = array.map(triangle => {
        const lengths = triangle.split(' ').map(len => Number(len)).sort((a, b) => b - a);
        return lengths[0] ** 2 === lengths[1] ** 2 + lengths[2] ** 2 ? 'right' : 'wrong';
    }).join('\n');
    return result;
}

console.log(solution(input));
