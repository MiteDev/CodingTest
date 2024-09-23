const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [a, b] = input
    .replace(/\r/g, "")
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => b - a);

  let temp_a = a;
  let temp_b = b;
  let r;

  while (r !== 0) {
    r = temp_a % temp_b;
    temp_a = temp_b;
    temp_b = r;
  }

  const lcm = (a * b) / temp_a;

  return `${temp_a}\n${lcm}`;
};

console.log(solution(input));
