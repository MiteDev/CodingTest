const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const fb_input = input.replace(/\r/g, "").split("\n");

  const fb_input_num = fb_input.filter(Number).at(-1);
  const fb_input_num_idx = fb_input.indexOf(fb_input_num);

  const target =
    fb_input
      .map((el, idx) => {
        const num = Number(fb_input_num) - fb_input_num_idx + idx;
        if (idx === fb_input_num_idx) return Number(el);
        return num;
      })
      .at(-1) + 1;

  if (!(target % 15)) return "FizzBuzz";
  if (!(target % 5)) return "Buzz";
  if (!(target % 3)) return "Fizz";
  return target;
};

console.log(solution(input));
