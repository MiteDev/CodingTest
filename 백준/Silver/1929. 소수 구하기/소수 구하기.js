const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [start, end] = input.replace(/\r/g, "").split(" ").map(Number);

  const arr = [];

  for (let i = start; i <= end; i++) {
    arr[i] = i;
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === 0) continue;

    for (let j = 2 * i; j < arr.length; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((el) => el && el !== 1).join("\n");
};

console.log(solution(input));
