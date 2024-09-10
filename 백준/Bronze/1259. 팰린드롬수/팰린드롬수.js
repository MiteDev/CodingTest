const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const arr = input.replace(/\r/g, '').split('\n');
    
    // 마지막 요소는 의미없으니 제거
    arr.pop();

    const halfs = arr.map(el => Math.floor(el.length / 2));

    const result = arr.map((el, idx) => {
        const lastNum = el.length % 2 ? halfs[idx] + 1 : halfs[idx];
        const first = el.substring(0, halfs[idx]);
        const last = el.substring(lastNum, el.length).split('').reverse().join('');

        return first === last ? 'yes' : 'no';
    });

    const answer = result.join('\n');
     
    return answer;
}

console.log(solution(input));
