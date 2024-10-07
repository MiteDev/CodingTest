const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [condi, ...money_arr] = input.replace(/\r/g, "").split("\n");
  const [_, target] = condi.split(" ").map(Number);
  const money = money_arr.filter((m) => Number(m) <= target).map(Number);
  let count = 0;
  let temp = target;

  for (let i = money.length - 1; i >= 0; i--) {
    if (money[i] > temp) continue;
    if (!temp) break;
    const cnt = Math.floor(temp / money[i]);
    count += cnt;
    temp -= cnt * money[i];
  }

  return count;
};

console.log(solution(input));
