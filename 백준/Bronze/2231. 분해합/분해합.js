const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const num = Number(input);
  let answer = 0;

  if (num < 10) {
    for (let i = 1; i <= num - 1; i++) {
      if (i + i === num) {
        answer = i;
        break;
      }
    }

    return answer;
  }

  for (let i = 0; i < num; i++) {
    const add = i
      .toString()
      .split("")
      .reduce((acc, cur) => {
        acc += Number(cur);
        return acc;
      }, i);

    if (add === num) {
      answer = i;
      break;
    }
  }
  return answer;
};

console.log(solution(input));
