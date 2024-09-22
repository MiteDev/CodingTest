const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim().split("\n");

/**
 * @param {string} input
 * @returns
 */
function solution(input) {
  let hash = 0;
  let power = 1;

  for (let i = 0; i < input[1].length; i++) {
    hash += ((input[1].charCodeAt(i) - 96) * power) % 1234567891;
    power = (power * 31) % 1234567891;
  }

  console.log(hash % 1234567891);
}

solution(input);
