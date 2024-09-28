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
  const answer = coordi
    .sort((a, b) => {
      const [a_x, a_y] = a.split(" ").map(Number);
      const [b_x, b_y] = b.split(" ").map(Number);

      if (a_x > b_x) return 1;
      if (a_x < b_x) return -1;
      if (a_x === b_x) {
        if (a_y > b_y) return 1;
        if (a_y < b_y) return -1;
      }
    })
    .join("\n");

  return answer;
};

console.log(solution(input));
