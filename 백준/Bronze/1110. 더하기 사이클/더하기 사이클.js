const fs = require('fs');
const { networkInterfaces } = require('os');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const init = input.length === 1 ? '0' + input : input;
    let count = 0;

    function recur(num_str) {
        count++;

        const calc = num_str.length === 1 ? '0' + num_str : num_str;
        const [f, s] = calc.split('').map(num => Number(num));

        const add = f + s;
        const add_str = add.toString();

        const temp = add_str.length === 1 ? '0' + add_str : add_str;
        
        const [a_f, a_s] = temp.toString().split('');

        const result = s + a_s;
    
        if (Number(result) === Number(init)) return;

        recur(result);
    }

    recur(init);

    return count;
}


console.log(solution(input));
