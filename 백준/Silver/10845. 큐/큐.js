const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [_, ...arr] = input.replace(/\r/g, "").split("\n");
  const queue = [];
  const answer = [];

  arr.forEach((line) => {
    if (line.includes("push")) queue.push(parseInt(line.split(" ")[1]));
    if (line === "pop") answer.push(queue.length ? queue.shift() : -1);
    if (line === "size") answer.push(queue.length);
    if (line === "empty") answer.push(queue.length ? 0 : 1);
    if (line === "front") answer.push(queue.length ? queue[0] : -1);
    if (line === "back") answer.push(queue.length ? queue.at(-1) : -1);
  });

  return answer.join("\n");
};

console.log(solution(input));
