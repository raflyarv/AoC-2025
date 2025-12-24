// 1

let position = 0;
let counter = 0;

// R --> ADD
// L --> SUBTRACT

const dialedPassword = (instructions) => {
  for (const ins of instructions) {
    const direction = Array.from(ins)[0];
    let steps = parseInt(ins.slice(1), 10);

    const fullLoops = Math.floor(steps / 100);
    const remainder = steps % 100;

    counter += fullLoops;

    if (remainder === 0) continue;

    const prevPosition = position;
    const delta = direction === "R" ? remainder : -remainder;
    position = (position + delta + 100) % 100;

    const nextPosisionRaw = prevPosition + delta;

    if (delta > 0 && nextPosisionRaw >= 100) {
      counter++;
    }

    if (delta < 0 && (prevPosition === 0 || nextPosisionRaw < 0)) {
      counter++;
    }
  }
};

const listedInstructions = [
  //   "L68",
  //   "L30",
  //   "R48",
  //   "L5",
  //   "R60",
  //   "L55",
  //   "L1",
  //   "L99",
  //   "R14",
  //   "L82",
  "R100",
];

const fs = require("fs");
const path = require("path");

// Read input.txt from the same folder
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

// Common AoC parsing pattern
const lines = input.trim().split("\n");

// dialedPassword(lines);
dialedPassword(listedInstructions);

console.log("Times at 0: ", counter);
