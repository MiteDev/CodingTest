const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path)
                .toString()
                .trim()
                .split('\n')
                .map(el => el.replace(/\r/g, '').split(' '));
                

// a ** b의 마지막 자리 수가 필요함
// 거듭제곱의 첫 번쨰 자리는 4번의 거듭제곱마다 반복
// 또한 13, 28, ...등 1자리 이상의 밑 또한 1의 자리에 따라서 거듭제곱 결과의 1의 자리값이 정해짐
// 그러므로 각 배열의 요소[밑, 지수]의 끝 자리만 구하기

const solution = (input) => {
    const [f, ...arrs] = input;

    const result = arrs
        .map(([a, b]) => [Number(a) % 10, Number(b) % 4 ? Number(b) % 4 : 4]) // 밑의 1의 자리, 몇 번째 지수
        .map(([a, b]) => {
            const rst = a ** b % 10;
            return rst !== 0 ? rst : 10;
        }); // 결과
    
    result.map(el => console.log(el));
}

solution(input)