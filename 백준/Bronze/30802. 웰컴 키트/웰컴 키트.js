const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [entrant, size_str, shirt_pen] = input.replace(/\r/g, '').split('\n');
    const n = Number(entrant);
    const size = size_str.split(' ').map(el => Number(el));
    const [t, p] = shirt_pen.split(' ').map(el => Number(el));
    let t_count = 0;

    for(let i = 0; i < size.length; i++) {
        let temp = 1;
        let temp_t = t;
        while(true) {
            if(!size[i]) break;

            const _t = temp_t * temp;

            if(_t >= size[i]) {
                t_count += temp;
                break;
            }
            temp++;
        }
    }

    const bundle_p = Math.floor(n / p);
    const ea = n % p;

    const answer = `${t_count}\n${bundle_p} ${ea}`;

    return answer;
}

console.log(solution(input));
