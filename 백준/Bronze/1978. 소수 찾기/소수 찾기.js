const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [num, str] = input.replace(/\r/g, '').split('\n');
    const arr = str.split(' ').map(Number).filter(el => el !== 1);

    const result = arr.reduce((acc, cur) => {
        let temp = [];
        for (let i = 2; i < cur; i++) {
            if(!(cur % i)) {
                temp.push(false);
            }
        }

        !temp.length && acc.push(cur); 

        return acc;
    }, []);

    return result.length;
}

console.log(solution(input));
