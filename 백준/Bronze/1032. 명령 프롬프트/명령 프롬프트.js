const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [num, base, ...sentences] = input.replace(/\r/g, '').split('\n');

    // Early return
    if(num === '1') return base;
    
    // base를 기준으로 sentence와 값이 다른 index를 return
    // return된 index의 중복 제거
    const idxs = [...new Set(
            sentences.flatMap(
                (sentence) => [...base].map(
                    (el, idx) => sentence[idx] !== el && idx + 1
                ).filter(el => el)
            )
        )];

    const result = [...base].map((alph, idx) => idxs.includes(idx + 1) ? '?' : alph).join('');
    return result;
}

console.log(solution(input));
