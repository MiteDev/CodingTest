const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [a, a_num, m, m_num] = input.replace(/\r/g, "").split("\n");
  const a_arr = new Set(a_num.split(" "));
  const m_arr = m_num.split(" ");

  const answer = m_arr
    .map((num_str) => (a_arr.has(num_str) ? 1 : 0))
    .join("\n");

  return answer;
};

console.log(solution(input));
