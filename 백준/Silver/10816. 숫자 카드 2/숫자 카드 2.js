const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [_, card_str, __, target_str] = input.replace(/\r/g, "").split("\n");
  const card = card_str.split(" ").map(Number);
  const target = target_str.split(" ").map(Number);

  const map = new Map();

  card.forEach((el) => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  });

  const answer = [];

  target.forEach((el) => {
    answer.push(map.get(el) || 0);
  });

  return answer.join(" ");
};

console.log(solution(input));
