const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [name, _, ...candidates] = input.replace(/\r/g, '').split('\n');
    const love = ['L', 'O', 'V', 'E'];
    const yeondu_name = love.reduce((acc, cur) => {
        if(name.includes(cur)) {
            const sort = name.split('').sort();
            const score = sort.lastIndexOf(cur) - sort.indexOf(cur) + 1;
            acc[cur] = score;
        }
        return acc; 
    }, {
        L: 0,
        O: 0,
        V: 0,
        E: 0
    });

    const team_score = candidates.map(team => {
        return team.split('').reduce((acc, cur) => {
            if(acc[cur] !== undefined)
                acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {
            L: 0,
            O: 0,
            V: 0,
            E: 0
        })
    });

    const add = team_score.reduce((acc, team) => {
        const add = {
            L: team.L + yeondu_name.L,
            O: team.O + yeondu_name.O,
            V: team.V + yeondu_name.V,
            E: team.E + yeondu_name.E
        }

        acc.push(add);
        return acc;
    }, []);


    const scores = add.map(love => calc(love.L, love.O, love.V, love.E));
    
    const max = Math.max(...scores);

    if(scores.indexOf(max) === scores.lastIndexOf(max)) return candidates[scores.indexOf(max)];

    const max_idxs = scores.map((score, idx) => score === max ? idx : undefined).filter(el => el !== undefined);
    const result = max_idxs.map(el => candidates[el]).sort()[0];
    return result;
}

const calc = (l, o, v, e) => ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100;


console.log(solution(input));
