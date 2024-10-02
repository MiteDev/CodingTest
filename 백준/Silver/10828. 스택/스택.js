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
  const stack = [];
  const answer = [];

  arr.forEach((line) => {
    if (line.includes("push")) stack.push(parseInt(line.split(" ")[1]));
    else if (line === "pop") answer.push(stack.length ? stack.pop() : -1);
    else if (line === "size") answer.push(stack.length);
    else if (line === "empty") answer.push(stack.length ? 0 : 1);
    else if (line === "top") answer.push(stack.length ? stack.at(-1) : -1);
  });

  return answer.join("\n");
};

console.log(solution(input));
