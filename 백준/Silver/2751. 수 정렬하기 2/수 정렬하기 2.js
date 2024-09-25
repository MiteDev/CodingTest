const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [num, ...arr] = input.replace(/\r/g, "").split("\n").map(Number);
  const sort = arr.sort((a, b) => a - b).join("\n");
  return sort;
};

console.log(solution(input));
