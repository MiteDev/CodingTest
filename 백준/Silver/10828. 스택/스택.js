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

  arr.forEach((line) => {
    switch (line) {
      case "pop":
        const p = stack.pop();
        p ? console.log(p) : console.log(-1);
        break;
      case "size":
        console.log(stack.length);
        break;
      case "empty":
        stack.length ? console.log(0) : console.log(1);
        break;
      case "top":
        const at = stack.at(-1);
        at ? console.log(at) : console.log(-1);
        break;
      default:
        stack.push(parseInt(line.split(" ")[1]));
        break;
    }
  });
};

solution(input);
