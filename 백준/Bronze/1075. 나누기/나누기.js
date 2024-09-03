const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim().split('\n')
    .map(el => el.replace(/\r/g, ''))
    .map(el => Number(el));

/**
 * @param {string} input 
 * @returns {string}
 */
const solution = (input) => {
    const [n, f] = input;

    const n_str = n.toString();
    const n_str_last_two = n_str.substring(0, n_str.length - 2)

    let temp = 0;

    const arr = [];

    for (let i = 1; temp <= n; i++) {
        temp = f * i;
        const temp_str = temp.toString();

        // n과 temp 10의 자리까지를 제외한 나머지 수는 값이 같아야 함
        const cond = temp_str.substring(0, temp_str.length - 2) === n_str_last_two;

        // 조건에 맞는 수의 마지막 2자리만 잘라서 넣기
        if(cond) arr.push(temp_str.slice(temp_str.length - 2));
    }

    return arr[0];
}

console.log(solution(input));
