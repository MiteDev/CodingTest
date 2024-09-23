const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [a, b, v] = input.replace(/\r/g, "").split(" ").map(Number);

  const answer = Math.ceil((v - b) / (a - b));

  return answer;
};

console.log(solution(input));
