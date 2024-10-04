const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [condi, ...poke_arr] = input.replace(/\r/g, "").split("\n");
  const [len, t_len] = condi.split(" ").map(Number);
  const poke_target = poke_arr.splice(poke_arr.length - t_len, poke_arr.length);
  const poke_map = new Map();

  poke_arr.forEach((poke, idx) => poke_map.set(poke, idx + 1));

  const answer = [];

  poke_target.forEach((poke_t) => {
    isNaN(Number(poke_t))
      ? answer.push(poke_map.get(poke_t))
      : answer.push(poke_arr[Number(poke_t) - 1]);
  });

  return answer.join("\n");
};

console.log(solution(input));
