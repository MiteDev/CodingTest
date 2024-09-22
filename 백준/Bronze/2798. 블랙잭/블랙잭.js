const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [_, target, ...arr] = input
    .replace(/\r/g, "")
    .split("\n")
    .flatMap((el) => el.split(" "))
    .map((el) => Number(el));

  const nums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum > target) continue;
        if (sum <= target) nums.push(sum);
      }
    }
  }

  const answer = Math.max(...nums);

  return answer;
};

console.log(solution(input));
