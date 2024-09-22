const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [num, str] = input.split("\n");
  const char_code = str.split("").map((el) => el.charCodeAt() - 96);
  const r = 31;

  const answer = char_code.reduce(
    (acc, cur, idx) => (acc += cur * r ** idx),
    0
  );

  return answer;
};

console.log(solution(input));
