const fs = require("fs");
const file_path =
  process.platform === "linux" ? "dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input
 * @returns
 */
const solution = (input) => {
  const [_, ...arr] = input.replace(/\r/g, "").split("\n").map(Number);
  let cnt = 0;
  while (!arr[cnt]) {
    cnt++;
  }
  const a = arr.splice(cnt, arr.length);

  const temp = [];
  for (let i = 0; i < a.length; i++) {
    if (!a[i]) {
      temp.pop();
      continue;
    }
    temp.push(a[i]);
  }

  const answer = temp.reduce((acc, cur) => (acc += cur), 0);
  return answer;
};

console.log(solution(input));
