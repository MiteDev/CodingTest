const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [personnel, ...players] = input.split('\n');

    const surrender = 'PREDAJA'
    
    if(personnel < 5) return surrender;
    
    const list = players.map(p => p[0]).sort();
    const target = [...new Set(list)];
    const result = target.filter(t => list.lastIndexOf(t) - list.indexOf(t) >= 4).join('');

    return result || surrender;
}

console.log(solution(input));
