const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [num, ...arr] = input.replace(/\r/g, '').split('\n');
    const students = [];
    const student_arr = arr.map(el => el.split(' '));
    const grade = 5;
    const t = Array.from({ length: num }, (_) => 0);


    for(let i = 0; i < grade; i++) {
        for(let j = 0; j < num; j++) {
            if(!students[i]) students[i] = [];
            students[i].push(student_arr[j][i]);
        }
    }

    for(let i = 0; i < grade; i++) {
        for(let j = 0; j < num; j++) {
            const len = students[i].map((el, idx) => el === students[i][j] && idx).filter(el => el !== false);
            if(!t[j]) t[j] = [];
            if(len.length > 1)
                t[j].push(...len);
            
        }
    }

    const a = t.map(el => [...new Set(el)].length);
    const answer = a.indexOf(Math.max(...a)) + 1;
    return answer;
}

console.log(solution(input));