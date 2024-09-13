const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    // 노래 반복 n, 노래 길이 l, 전화벨 d초 마다 울림
    // 0초에 노래, 전화벨 둘 다 시작
    // 전화벨이랑 노래 같이 시작 x
    // 전화벨이랑 노래 같이 끝남 x
    // 모든 엘범 다 들으면 전화벨 가능
    const [n, l, d] = input.replace(/\r/g, '').split(' ').map(el => Number(el));
    const gap = 5;
    let time = 0;
    let ring = d;

    for(let i = 1; i <= n; i++) {
        time += l;


        for (let j = 1; ring < time; j++) {
            ring = d * j;
        }


        if (time <= ring && ring < time + gap) {
            break;
        }

        time += gap;
    }

    // return ring === time ? ring + d : ring;
    return ring
}

console.log(solution(input));