const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [_, ...coordi] = input.replace(/\r/g, "").split("\n");
  const arr = coordi.map((el) => el.split(" ").map(Number));
  const answer = arr
    .sort((a, b) => {
      if (a[0] - b[0] == 0) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    })
    .map(([x, y]) => `${x.toString()} ${y.toString()}`)
    .join("\n");
  return answer;
};

console.log(solution(input));
